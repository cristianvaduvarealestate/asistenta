import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createRequire } from "node:module";

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

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  all<T = unknown>(): Promise<{ results: T[]; success: boolean; meta?: unknown }>;
  run<T = unknown>(): Promise<{ success: boolean; meta?: unknown }>;
}

export interface D1DatabaseLike {
  prepare(query: string): D1PreparedStatement;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<unknown[]>;
  exec(query: string): Promise<unknown>;
}

let localFallbackInstance: D1DatabaseLike | null = null;

function getLocalSqliteFallback(): D1DatabaseLike {
  if (localFallbackInstance) return localFallbackInstance;

  // Use dynamic require so bundlers do not bundle better-sqlite3 for Cloudflare Workers
  const req = createRequire(import.meta.url);
  const Database = req("better-sqlite3");
  const path = req("path");
  const fs = req("fs");

  const dbPath = process.env.SQLITE_DB_PATH?.trim()
    ? path.resolve(process.env.SQLITE_DB_PATH.trim())
    : path.join(process.cwd(), "data", "helpdesk.sqlite");

  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const rawDb = new Database(dbPath);
  rawDb.pragma("journal_mode = WAL");
  rawDb.pragma("foreign_keys = ON");

  class BetterSqliteD1PreparedStatement implements D1PreparedStatement {
    constructor(private db: any, private sql: string, private params: any[] = []) {}

    bind(...values: any[]): D1PreparedStatement {
      return new BetterSqliteD1PreparedStatement(this.db, this.sql, values);
    }

    async first<T = unknown>(colName?: string): Promise<T | null> {
      const row = this.db.prepare(this.sql).get(...this.params) as any;
      if (!row) return null;
      if (colName) return row[colName] ?? null;
      return row as T;
    }

    async all<T = unknown>(): Promise<{ results: T[]; success: boolean; meta?: unknown }> {
      const rows = this.db.prepare(this.sql).all(...this.params) as T[];
      return { results: rows, success: true };
    }

    async run<T = unknown>(): Promise<{ success: boolean; meta?: unknown }> {
      const info = this.db.prepare(this.sql).run(...this.params);
      return { success: true, meta: info };
    }
  }

  class BetterSqliteD1Database implements D1DatabaseLike {
    constructor(private db: any) {}

    prepare(query: string): D1PreparedStatement {
      return new BetterSqliteD1PreparedStatement(this.db, query);
    }

    async batch<T = unknown>(statements: D1PreparedStatement[]): Promise<unknown[]> {
      const tx = this.db.transaction(() => {
        const results = [];
        for (const stmt of statements) {
          const s = stmt as any;
          const info = this.db.prepare(s.sql).run(...s.params);
          results.push({ success: true, meta: info });
        }
        return results;
      });
      return tx();
    }

    async exec(query: string): Promise<unknown> {
      return this.db.exec(query);
    }
  }

  localFallbackInstance = new BetterSqliteD1Database(rawDb);
  return localFallbackInstance;
}

export function getDb(overrideDb?: D1DatabaseLike): D1DatabaseLike {
  if (overrideDb) return overrideDb;

  try {
    const ctx = getCloudflareContext();
    if (ctx?.env && (ctx.env as any).DB) {
      return (ctx.env as any).DB as D1DatabaseLike;
    }
  } catch {
    // getCloudflareContext throws when called outside request or dev server
  }

  // Fallback for standalone scripts running in Node.js
  if (typeof process !== "undefined" && !process.env.CF_PAGES && !process.env.WORKER) {
    try {
      return getLocalSqliteFallback();
    } catch (fallbackErr) {
      console.error("[db.ts] Local SQLite fallback failed:", fallbackErr);
    }
  }

  throw new Error("D1 Database binding 'DB' is not available in the current context.");
}

export function getDbPath(): string {
  const req = createRequire(import.meta.url);
  const path = req("path");
  if (process.env.SQLITE_DB_PATH?.trim()) {
    return path.resolve(process.env.SQLITE_DB_PATH.trim());
  }
  return path.join(process.cwd(), "data", "helpdesk.sqlite");
}

export function closeDb(): void {
  localFallbackInstance = null;
}
