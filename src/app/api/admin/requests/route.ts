import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getAdminSession } from "@/lib/session";

export async function GET() {
  if (!getAdminSession()) return NextResponse.json({ ok: false }, { status: 401 });
  const database = getDb();
  const requests = database.prepare("SELECT id, created_at, customer_type, full_name, phone, email, company_name, flow, category, message, payload, activity, employee_count, status FROM requests ORDER BY created_at DESC LIMIT 250").all();
  const jobs = database.prepare("SELECT request_id, status, purpose, id, scheduled_at, attempts, last_error FROM notification_jobs ORDER BY scheduled_at DESC LIMIT 500").all();
  return NextResponse.json({ ok: true, requests, jobs });
}
