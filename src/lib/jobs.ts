import { getDb, type NotificationJobRow, type RequestRow } from "./db";
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

export async function processDueJobs(limit = 20): Promise<{ processed: number; sent: number; failed: number; manual: number }> {
  const database = getDb();
  const now = new Date().toISOString();
  const jobs = database
    .prepare(
      `SELECT * FROM notification_jobs
       WHERE status IN ('pending', 'scheduled', 'failed')
         AND scheduled_at <= ?
       ORDER BY scheduled_at ASC
       LIMIT ?`
    )
    .all(now, limit) as NotificationJobRow[];

  let sent = 0;
  let failed = 0;
  let manual = 0;

  for (const job of jobs) {
    const request = database.prepare("SELECT * FROM requests WHERE id = ?").get(job.request_id) as
      | RequestRow
      | undefined;
    if (!request) {
      database
        .prepare("UPDATE notification_jobs SET status = 'cancelled', last_error = ? WHERE id = ?")
        .run("request_missing", job.id);
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
        database
          .prepare(
            "UPDATE notification_jobs SET status = 'sent', sent_at = ?, attempts = attempts + 1, last_error = NULL WHERE id = ?"
          )
          .run(new Date().toISOString(), job.id);
        sent += 1;
      } else {
        const attempts = job.attempts + 1;
        if (attempts >= 8) {
          database
            .prepare("UPDATE notification_jobs SET status = 'needs_manual', attempts = ?, last_error = ? WHERE id = ?")
            .run(attempts, result.reason || "telegram_failed", job.id);
          manual += 1;
          continue;
        }
        const next = new Date(Date.now() + backoffMs(attempts)).toISOString();
        database
          .prepare(
            "UPDATE notification_jobs SET status = 'failed', attempts = ?, last_error = ?, scheduled_at = ? WHERE id = ?"
          )
          .run(attempts, result.reason || "unknown", next, job.id);
        failed += 1;
      }
      continue;
    }

    if (job.purpose === "reminder_due") {
      const reminder = job.reminder_id
        ? (database.prepare("SELECT * FROM reminders WHERE id = ?").get(job.reminder_id) as
            | { policy_type: string; expiry_date: string; status: string }
            | undefined)
        : undefined;
      if (!reminder || reminder.status === "disabled") {
        database.prepare("UPDATE notification_jobs SET status = 'cancelled' WHERE id = ?").run(job.id);
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
        database
          .prepare(
            "UPDATE notification_jobs SET status = 'needs_manual', attempts = ?, last_error = ?, sent_at = ? WHERE id = ?"
          )
          .run(
            attempts,
            alert.ok ? "awaiting_manual_client_contact" : "telegram_unconfigured_manual_queue",
            new Date().toISOString(),
            job.id
          );
        manual += 1;
      } else {
        const next = new Date(Date.now() + backoffMs(attempts)).toISOString();
        if (attempts >= 8) {
          database
            .prepare("UPDATE notification_jobs SET status = 'needs_manual', attempts = ?, last_error = ? WHERE id = ?")
            .run(attempts, alert.reason || "telegram_failed", job.id);
          manual += 1;
          continue;
        }
        database
          .prepare(
            "UPDATE notification_jobs SET status = 'failed', attempts = ?, last_error = ?, scheduled_at = ? WHERE id = ?"
          )
          .run(attempts, alert.reason || "unknown", next, job.id);
        failed += 1;
      }
    }
  }

  return { processed: jobs.length, sent, failed, manual };
}

export async function retryJob(jobId: string): Promise<boolean> {
  const database = getDb();
  const job = database.prepare("SELECT * FROM notification_jobs WHERE id = ?").get(jobId) as
    | NotificationJobRow
    | undefined;
  if (!job) return false;
  database
    .prepare("UPDATE notification_jobs SET status = 'pending', scheduled_at = ? WHERE id = ?")
    .run(new Date().toISOString(), jobId);
  await processDueJobs(5);
  return true;
}
