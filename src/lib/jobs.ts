import { getDb, type D1DatabaseLike, type NotificationJobRow, type RequestRow } from "./db";
import { sendConsultantTelegram, sendReminderDueTelegram } from "./telegram";

const FLOW_LABELS: Record<string, string> = {
  oferta: "Vreau o ofertă",
  aminteste: "Amintește-mi",
  explica: "Explică-mi polița",
  acoperire: "Este asigurat?",
  nevoi: "Ce ar trebui să asigur?",
  dauna: "Am o daună",
  intrebare: "Altă întrebare",
};

function backoffMs(attempts: number): number {
  return Math.min(30 * 60 * 1000, 2 ** Math.min(attempts, 8) * 1000);
}

export async function processDueJobs(
  limit = 20,
  dbOverride?: D1DatabaseLike
): Promise<{ processed: number; sent: number; failed: number; manual: number }> {
  const database = getDb(dbOverride);
  const now = new Date().toISOString();

  const jobsRes = await database
    .prepare(
      `SELECT * FROM notification_jobs
       WHERE status IN ('pending', 'scheduled', 'failed')
         AND scheduled_at <= ?
       ORDER BY scheduled_at ASC
       LIMIT ?`
    )
    .bind(now, limit)
    .all<NotificationJobRow>();

  const jobs = (jobsRes.results || []) as NotificationJobRow[];

  let sent = 0;
  let failed = 0;
  let manual = 0;

  for (const job of jobs) {
    const request = await database
      .prepare("SELECT * FROM requests WHERE id = ?")
      .bind(job.request_id)
      .first<RequestRow>();

    if (!request) {
      await database
        .prepare("UPDATE notification_jobs SET status = 'cancelled', last_error = ? WHERE id = ?")
        .bind("request_missing", job.id)
        .run();
      continue;
    }

    if (job.purpose === "new_request" && job.channel === "telegram_consultant") {
      const result = await sendConsultantTelegram({
        id: request.id,
        flowLabel: FLOW_LABELS[request.flow] || request.flow,
        customerType: request.customer_type,
        name: request.full_name,
        phone: request.phone,
        email: request.email,
        company: request.company_name || undefined,
        category: request.category || undefined,
        message: request.message || undefined,
        createdAt: request.created_at,
      });

      if (result.ok) {
        await database
          .prepare(
            "UPDATE notification_jobs SET status = 'sent', sent_at = ?, attempts = attempts + 1, last_error = NULL WHERE id = ?"
          )
          .bind(new Date().toISOString(), job.id)
          .run();
        sent += 1;
      } else {
        const attempts = job.attempts + 1;
        if (attempts >= 8) {
          await database
            .prepare("UPDATE notification_jobs SET status = 'needs_manual', attempts = ?, last_error = ? WHERE id = ?")
            .bind(attempts, result.reason || "telegram_failed", job.id)
            .run();
          manual += 1;
          continue;
        }
        const next = new Date(Date.now() + backoffMs(attempts)).toISOString();
        await database
          .prepare(
            "UPDATE notification_jobs SET status = 'failed', attempts = ?, last_error = ?, scheduled_at = ? WHERE id = ?"
          )
          .bind(attempts, result.reason || "unknown", next, job.id)
          .run();
        failed += 1;
      }
      continue;
    }

    if (job.purpose === "reminder_due") {
      const reminder = job.reminder_id
        ? await database
            .prepare("SELECT * FROM reminders WHERE id = ?")
            .bind(job.reminder_id)
            .first<{ policy_type: string; expiry_date: string; status: string }>()
        : undefined;

      if (!reminder || reminder.status === "disabled") {
        await database
          .prepare("UPDATE notification_jobs SET status = 'cancelled' WHERE id = ?")
          .bind(job.id)
          .run();
        continue;
      }

      const alert = await sendReminderDueTelegram({
        id: request.id,
        name: request.full_name,
        phone: request.phone,
        email: request.email,
        policyType: reminder.policy_type,
        expiryDate: reminder.expiry_date,
        offset: job.channel,
      });

      const attempts = job.attempts + 1;
      if (alert.ok || alert.reason === "credentials_not_configured") {
        await database
          .prepare(
            "UPDATE notification_jobs SET status = 'needs_manual', attempts = ?, last_error = ?, sent_at = ? WHERE id = ?"
          )
          .bind(
            attempts,
            alert.ok ? "awaiting_manual_client_contact" : "telegram_unconfigured_manual_queue",
            new Date().toISOString(),
            job.id
          )
          .run();
        manual += 1;
      } else {
        const next = new Date(Date.now() + backoffMs(attempts)).toISOString();
        if (attempts >= 8) {
          await database
            .prepare("UPDATE notification_jobs SET status = 'needs_manual', attempts = ?, last_error = ? WHERE id = ?")
            .bind(attempts, alert.reason || "telegram_failed", job.id)
            .run();
          manual += 1;
          continue;
        }
        await database
          .prepare(
            "UPDATE notification_jobs SET status = 'failed', attempts = ?, last_error = ?, scheduled_at = ? WHERE id = ?"
          )
          .bind(attempts, alert.reason || "unknown", next, job.id)
          .run();
        failed += 1;
      }
    }
  }

  return { processed: jobs.length, sent, failed, manual };
}

export async function retryJob(jobId: string, dbOverride?: D1DatabaseLike): Promise<boolean> {
  const database = getDb(dbOverride);
  const job = await database
    .prepare("SELECT * FROM notification_jobs WHERE id = ?")
    .bind(jobId)
    .first<NotificationJobRow>();

  if (!job) return false;

  await database
    .prepare("UPDATE notification_jobs SET status = 'pending', scheduled_at = ? WHERE id = ?")
    .bind(new Date().toISOString(), jobId)
    .run();

  await processDueJobs(5, dbOverride);
  return true;
}
