import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const migrationPath = path.join(process.cwd(), "migrations", "001_init.sql");

let db: Database.Database | null = null;

export function getDbPath(): string {
  if (process.env.SQLITE_DB_PATH?.trim()) {
    return path.resolve(process.env.SQLITE_DB_PATH.trim());
  }
  return path.join(process.cwd(), "data", "helpdesk.sqlite");
}

export function closeDb(): void {
  if (db) {
    db.close();
    db = null;
  }
}

export function getDb(): Database.Database {
  if (db) return db;
  const dbPath = getDbPath();
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  db = new Database(dbPath);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  const sql = fs.readFileSync(migrationPath, "utf8");
  db.exec(sql);
  db.prepare(
    "INSERT OR IGNORE INTO schema_migrations (id, applied_at) VALUES (?, ?)"
  ).run("001_init", new Date().toISOString());
  return db;
}

export type RequestStatus = "noua" | "in_analiza" | "contactat" | "rezolvat" | "inchis";

export type RequestRow = {
  id: string;
  created_at: string;
  customer_type: "pf" | "pj";
  full_name: string;
  phone: string;
  email: string;
  company_name: string | null;
  activity: string | null;
  employee_count: string | null;
  flow: string;
  category: string | null;
  message: string | null;
  payload: string;
  guidance_shown: string | null;
  status: RequestStatus;
  source: string;
  privacy_notice_version: string;
  privacy_ack: number;
  marketing_consent: number;
  marketing_consent_at: string | null;
  ip_hash: string | null;
  retention_until: string | null;
  idempotency_key: string | null;
};

export type NotificationJobRow = {
  id: string;
  request_id: string;
  reminder_id: string | null;
  channel: string;
  purpose: string;
  scheduled_at: string;
  status: string;
  attempts: number;
  last_error: string | null;
  sent_at: string | null;
  idempotency_key: string;
};
