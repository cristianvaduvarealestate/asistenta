import { legalConfig, PROPOSED_RETENTION_DAYS } from "@/config/legal";
import { newId } from "./crypto";
import { getDb, type D1DatabaseLike, type D1PreparedStatement } from "./db";
import { daysBefore, type FlowId } from "./validation";
import { processDueJobs } from "./jobs";
import {
  sendConsultantTelegram,
  type D1PersistenceStatus,
  type TelegramNotificationInput,
} from "./telegram";

export type IncomingRequest = {
  flow: FlowId;
  customerType: "pf" | "pj";
  fullName: string;
  phone: string;
  email: string;
  companyName?: string;
  activity?: string;
  employeeCount?: string;
  category?: string;
  message?: string;
  payload: Record<string, unknown>;
  guidanceShown?: string;
  privacyAck: boolean;
  marketingConsent: boolean;
  reminder?: {
    policyType: string;
    expiryDate: string;
    offsets: number[];
    deliveryChannel: "phone" | "email";
  };
  idempotencyKey?: string;
  ipHash?: string;
};

const FLOW_CATEGORIES: Record<string, string> = {
  oferta: "Ofertă",
  aminteste: "Notificare expirare",
  explica: "Explicare poliță",
  acoperire: "Verificare situație",
  nevoi: "Identificare nevoi",
  dauna: "Daună",
  intrebare: "Întrebare liberă",
  imobiliare: "Asistență Imobiliară",
};

export type SaveRequestResult = {
  id: string;
  createdAt: string;
  d1Status: D1PersistenceStatus;
  d1Error?: string;
  telegramSent: boolean;
  telegramReason?: string;
  isDuplicate?: boolean;
};

// In-memory idempotency cache (TTL: 5 minutes) to protect against duplicate bursts
// even when D1 writes are temporarily failing or quota-limited.
const idempotencyCache = new Map<string, { id: string; createdAt: string; timestamp: number }>();

function pruneIdempotencyCache() {
  const cutoff = Date.now() - 5 * 60 * 1000;
  idempotencyCache.forEach((val, key) => {
    if (val.timestamp < cutoff) {
      idempotencyCache.delete(key);
    }
  });
}

export async function saveRequest(
  input: IncomingRequest,
  dbOverride?: D1DatabaseLike,
  options?: { telegramAlreadySent?: boolean }
): Promise<{ id: string; createdAt: string; d1Status: D1PersistenceStatus; d1Error?: string; isExisting?: boolean }> {
  const database = getDb(dbOverride);

  // 1. Check D1 for existing idempotency key
  if (input.idempotencyKey) {
    try {
      const existing = await database
        .prepare("SELECT id, created_at FROM requests WHERE idempotency_key = ?")
        .bind(input.idempotencyKey)
        .first<{ id: string; created_at: string }>();

      if (existing) {
        return {
          id: existing.id,
          createdAt: existing.created_at,
          d1Status: "saved",
          isExisting: true,
        };
      }
    } catch (err) {
      console.warn("[saveRequest] Could not check idempotency in D1:", err);
    }
  }

  const id = newId("req");
  const createdAt = new Date().toISOString();
  const retention = new Date();
  retention.setDate(retention.getDate() + PROPOSED_RETENTION_DAYS);

  const batchStatements: D1PreparedStatement[] = [];

  batchStatements.push(
    database
      .prepare(
        `INSERT INTO requests (
          id, created_at, customer_type, full_name, phone, email, company_name, activity, employee_count,
          flow, category, message, payload, guidance_shown, status, source, privacy_notice_version,
          privacy_ack, marketing_consent, marketing_consent_at, ip_hash, retention_until, idempotency_key
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'noua', 'web', ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        id,
        createdAt,
        input.customerType,
        input.fullName,
        input.phone,
        input.email,
        input.companyName || null,
        input.activity || null,
        input.employeeCount || null,
        input.flow,
        input.category || FLOW_CATEGORIES[input.flow] || input.flow,
        input.message || null,
        JSON.stringify(input.payload),
        input.guidanceShown || null,
        legalConfig.privacyNoticeVersion,
        input.privacyAck ? 1 : 0,
        input.marketingConsent ? 1 : 0,
        input.marketingConsent ? createdAt : null,
        input.ipHash || null,
        retention.toISOString(),
        input.idempotencyKey || null
      )
  );

  batchStatements.push(
    database
      .prepare(
        "INSERT INTO status_history (id, request_id, from_status, to_status, created_at) VALUES (?, ?, NULL, 'noua', ?)"
      )
      .bind(newId("st"), id, createdAt)
  );

  // If Telegram is already sent, mark job as 'sent' immediately so cron doesn't re-send
  const jobStatus = options?.telegramAlreadySent ? "sent" : "pending";
  const sentAt = options?.telegramAlreadySent ? createdAt : null;

  batchStatements.push(
    database
      .prepare(
        `INSERT INTO notification_jobs (
          id, request_id, reminder_id, channel, purpose, scheduled_at, status, attempts, last_error, sent_at, idempotency_key
        ) VALUES (?, ?, NULL, 'telegram_consultant', 'new_request', ?, ?, 0, NULL, ?, ?)`
      )
      .bind(newId("job"), id, createdAt, jobStatus, sentAt, `new_request:${id}`)
  );

  if (input.reminder) {
    const reminderId = newId("rem");
    batchStatements.push(
      database
        .prepare(
          `INSERT INTO reminders (
            id, request_id, policy_type, expiry_date, notification_preferences, delivery_channel, status, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, 'active', ?, ?)`
        )
        .bind(
          reminderId,
          id,
          input.reminder.policyType,
          input.reminder.expiryDate,
          JSON.stringify(input.reminder.offsets),
          input.reminder.deliveryChannel,
          createdAt,
          createdAt
        )
    );

    for (const offset of input.reminder.offsets) {
      const scheduled = daysBefore(input.reminder.expiryDate, offset);
      const status = new Date(scheduled) <= new Date() ? "pending" : "scheduled";
      batchStatements.push(
        database
          .prepare(
            `INSERT INTO notification_jobs (
              id, request_id, reminder_id, channel, purpose, scheduled_at, status, attempts, last_error, sent_at, idempotency_key
            ) VALUES (?, ?, ?, ?, 'reminder_due', ?, ?, 0, NULL, NULL, ?)`
          )
          .bind(
            newId("job"),
            id,
            reminderId,
            `${input.reminder.deliveryChannel}:${offset}d`,
            scheduled,
            status,
            `reminder:${reminderId}:${offset}`
          )
      );
    }
  }

  try {
    await database.batch(batchStatements);
    return { id, createdAt, d1Status: "saved" };
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    const isQuota =
      errMsg.includes("free tier daily row write limit") ||
      errMsg.includes("7500") ||
      errMsg.toLowerCase().includes("quota");
    const d1Status: D1PersistenceStatus = isQuota ? "quota_exceeded" : "failed";

    console.warn(`[saveRequest] D1 write failed (${d1Status}): ${errMsg}`);
    return { id, createdAt, d1Status, d1Error: errMsg };
  }
}

export async function saveRequestAndNotify(
  input: IncomingRequest,
  dbOverride?: D1DatabaseLike,
  envOverride?: Record<string, string | undefined>
): Promise<SaveRequestResult> {
  // Check memory idempotency cache
  if (input.idempotencyKey) {
    const cached = idempotencyCache.get(input.idempotencyKey);
    if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) {
      return {
        id: cached.id,
        createdAt: cached.createdAt,
        d1Status: "saved",
        telegramSent: true,
        isDuplicate: true,
      };
    }
  }

  // Attempt D1 write first (safely caught)
  const d1Result = await saveRequest(input, dbOverride);

  // If this was an existing record already in D1, don't duplicate telegram
  if (d1Result.isExisting) {
    return {
      id: d1Result.id,
      createdAt: d1Result.createdAt,
      d1Status: "saved",
      telegramSent: true,
      isDuplicate: true,
    };
  }

  const { id, createdAt, d1Status, d1Error } = d1Result;

  // Prepare Telegram notification payload
  const telegramInput: TelegramNotificationInput = {
    id,
    flow: input.flow,
    customerType: input.customerType,
    name: input.fullName,
    phone: input.phone,
    email: input.email,
    companyName: input.companyName,
    activity: input.activity,
    employeeCount: input.employeeCount,
    category: input.category,
    message: input.message,
    payload: input.payload,
    createdAt,
    d1Status,
    d1Error,
  };

  // Dispatch direct Telegram notification
  const tgResult = await sendConsultantTelegram(telegramInput, envOverride);

  // Record in memory idempotency cache
  if (input.idempotencyKey) {
    idempotencyCache.set(input.idempotencyKey, { id, createdAt, timestamp: Date.now() });
    if (idempotencyCache.size > 200) {
      pruneIdempotencyCache();
    }
  }

  // If D1 succeeded and Telegram failed, we can trigger processDueJobs in the background
  // to let the job queue handle it.
  if (d1Status === "saved" && !tgResult.ok) {
    try {
      await processDueJobs(5, dbOverride);
    } catch {
      // Background retry attempt
    }
  }

  return {
    id,
    createdAt,
    d1Status,
    d1Error,
    telegramSent: tgResult.ok,
    telegramReason: tgResult.reason,
  };
}
