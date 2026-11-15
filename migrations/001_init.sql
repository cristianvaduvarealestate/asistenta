CREATE TABLE IF NOT EXISTS schema_migrations (
  id TEXT PRIMARY KEY,
  applied_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS requests (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  customer_type TEXT NOT NULL CHECK (customer_type IN ('pf', 'pj')),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT,
  activity TEXT,
  employee_count TEXT,
  flow TEXT NOT NULL,
  category TEXT,
  message TEXT,
  payload TEXT NOT NULL DEFAULT '{}',
  guidance_shown TEXT,
  status TEXT NOT NULL DEFAULT 'noua' CHECK (status IN ('noua', 'in_analiza', 'contactat', 'rezolvat', 'inchis')),
  source TEXT NOT NULL DEFAULT 'web',
  privacy_notice_version TEXT NOT NULL,
  privacy_ack INTEGER NOT NULL DEFAULT 0,
  marketing_consent INTEGER NOT NULL DEFAULT 0,
  marketing_consent_at TEXT,
  ip_hash TEXT,
  retention_until TEXT,
  idempotency_key TEXT UNIQUE
);

CREATE INDEX IF NOT EXISTS idx_requests_created ON requests(created_at);
CREATE INDEX IF NOT EXISTS idx_requests_status ON requests(status);
CREATE INDEX IF NOT EXISTS idx_requests_flow ON requests(flow);
CREATE INDEX IF NOT EXISTS idx_requests_customer ON requests(customer_type);

CREATE TABLE IF NOT EXISTS reminders (
  id TEXT PRIMARY KEY,
  request_id TEXT NOT NULL REFERENCES requests(id),
  policy_type TEXT NOT NULL,
  expiry_date TEXT NOT NULL,
  notification_preferences TEXT NOT NULL,
  delivery_channel TEXT NOT NULL DEFAULT 'consultant',
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'disabled', 'updated')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_reminders_expiry ON reminders(expiry_date);
CREATE INDEX IF NOT EXISTS idx_reminders_request ON reminders(request_id);

CREATE TABLE IF NOT EXISTS notification_jobs (
  id TEXT PRIMARY KEY,
  request_id TEXT NOT NULL REFERENCES requests(id),
  reminder_id TEXT,
  channel TEXT NOT NULL,
  purpose TEXT NOT NULL,
  scheduled_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'scheduled', 'sent', 'failed', 'needs_manual', 'cancelled')),
  attempts INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  sent_at TEXT,
  idempotency_key TEXT NOT NULL UNIQUE
);

CREATE INDEX IF NOT EXISTS idx_jobs_due ON notification_jobs(status, scheduled_at);
CREATE INDEX IF NOT EXISTS idx_jobs_request ON notification_jobs(request_id);

CREATE TABLE IF NOT EXISTS status_history (
  id TEXT PRIMARY KEY,
  request_id TEXT NOT NULL REFERENCES requests(id),
  from_status TEXT,
  to_status TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_history_request ON status_history(request_id);

CREATE TABLE IF NOT EXISTS admin_notes (
  id TEXT PRIMARY KEY,
  request_id TEXT NOT NULL REFERENCES requests(id),
  note TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_notes_request ON admin_notes(request_id);
