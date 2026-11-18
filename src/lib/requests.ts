import { legalConfig, PROPOSED_RETENTION_DAYS } from "@/config/legal";
import { newId } from "./crypto";
import { getDb, type D1DatabaseLike, type D1PreparedStatement } from "./db";
import { daysBefore, type FlowId } from "./validation";
import { processDueJobs } from "./jobs";

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

export async function saveRequest(
  input: IncomingRequest,
  dbOverride?: D1DatabaseLike
): Promise<{ id: string; createdAt: string }> {
  const database = getDb(dbOverride);

  if (input.idempotencyKey) {
    const existing = await database
      .prepare("SELECT id, created_at FROM requests WHERE idempotency_key = ?")
      .bind(input.idempotencyKey)
      .first<{ id: string; created_at: string }>();

    if (existing) {
      return { id: existing.id, createdAt: existing.created_at };
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

  batchStatements.push(
    database
      .prepare(
        `INSERT INTO notification_jobs (
          id, request_id, reminder_id, channel, purpose, scheduled_at, status, attempts, last_error, sent_at, idempotency_key
        ) VALUES (?, ?, NULL, 'telegram_consultant', 'new_request', ?, 'pending', 0, NULL, NULL, ?)`
      )
      .bind(newId("job"), id, createdAt, `new_request:${id}`)
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

  await database.batch(batchStatements);
  return { id, createdAt };
}

export async function saveRequestAndNotify(
  input: IncomingRequest,
  dbOverride?: D1DatabaseLike
): Promise<{ id: string; createdAt: string }> {
  const saved = await saveRequest(input, dbOverride);
  try {
    await processDueJobs(10, dbOverride);
  } catch {
    // Persistence already succeeded.
  }
  return saved;
}
