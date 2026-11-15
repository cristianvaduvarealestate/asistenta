import { NextRequest, NextResponse } from "next/server";
import { getDb, type RequestStatus } from "@/lib/db";
import { newId } from "@/lib/crypto";
import { getAdminSession } from "@/lib/session";
import { retryJob } from "@/lib/jobs";
import { daysBefore, sanitizeText } from "@/lib/validation";

const STATUSES: RequestStatus[] = ["noua", "in_analiza", "contactat", "rezolvat", "inchis"];

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  if (!getAdminSession()) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const id = params.id;
  const body = await req.json().catch(() => null);
  const database = getDb();
  const current = database.prepare("SELECT status FROM requests WHERE id = ?").get(id) as
    | { status: RequestStatus }
    | undefined;
  if (!current) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

  const action = body?.action;
  if (action === "status") {
    const status = body.status as RequestStatus;
    if (!STATUSES.includes(status)) {
      return NextResponse.json({ ok: false, error: "Status invalid" }, { status: 400 });
    }
    database.prepare("UPDATE requests SET status = ? WHERE id = ?").run(status, id);
    database
      .prepare(
        "INSERT INTO status_history (id, request_id, from_status, to_status, created_at) VALUES (?, ?, ?, ?, ?)"
      )
      .run(newId("st"), id, current.status, status, new Date().toISOString());
    return NextResponse.json({ ok: true });
  }

  if (action === "note") {
    const note = sanitizeText(body.note, 4000);
    if (!note) return NextResponse.json({ ok: false, error: "Nota este goală." }, { status: 400 });
    database
      .prepare("INSERT INTO admin_notes (id, request_id, note, created_at) VALUES (?, ?, ?, ?)")
      .run(newId("note"), id, note, new Date().toISOString());
    return NextResponse.json({ ok: true });
  }

  if (action === "retry") {
    const jobId = sanitizeText(body.jobId, 80);
    await retryJob(jobId);
    return NextResponse.json({ ok: true });
  }

  if (action === "disable-reminder") {
    database
      .prepare("UPDATE reminders SET status = 'disabled', updated_at = ? WHERE request_id = ?")
      .run(new Date().toISOString(), id);
    database
      .prepare(
        "UPDATE notification_jobs SET status = 'cancelled' WHERE request_id = ? AND purpose = 'reminder_due' AND status IN ('scheduled', 'pending', 'failed')"
      )
      .run(id);
    return NextResponse.json({ ok: true });
  }

  if (action === "update-expiry") {
    const expiryDate = sanitizeText(body.expiryDate, 20);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(expiryDate)) {
      return NextResponse.json({ ok: false, error: "Dată invalidă" }, { status: 400 });
    }
    const reminders = database
      .prepare("SELECT id, notification_preferences FROM reminders WHERE request_id = ? AND status != 'disabled'")
      .all(id) as { id: string; notification_preferences: string }[];
    const now = new Date();
    const update = database.transaction(() => {
      database
        .prepare("UPDATE reminders SET expiry_date = ?, updated_at = ?, status = 'active' WHERE request_id = ?")
        .run(expiryDate, new Date().toISOString(), id);
      for (const reminder of reminders) {
        const offsets = JSON.parse(reminder.notification_preferences) as number[];
        for (const offset of offsets) {
          const scheduledAt = daysBefore(expiryDate, offset);
          database
            .prepare("UPDATE notification_jobs SET scheduled_at = ?, status = ?, last_error = NULL WHERE reminder_id = ? AND idempotency_key = ? AND status IN ('scheduled', 'pending', 'failed', 'needs_manual')")
            .run(scheduledAt, new Date(scheduledAt) <= now ? "pending" : "scheduled", reminder.id, `reminder:${reminder.id}:${offset}`);
        }
      }
    });
    update();
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false, error: "Acțiune necunoscută" }, { status: 400 });
}
