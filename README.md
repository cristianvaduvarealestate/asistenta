# Asistență Imobiliare și Asigurări — Cristian Văduva

Aplicație Next.js App Router migrată complet pe infrastructură Cloudflare-native:
- **Runtime:** Cloudflare Workers (OpenNext adapter `@opennextjs/cloudflare`)
- **Bază de date SQL:** Cloudflare D1 (`asistenta-db`)
- **Cron Triggers:** Cloudflare Workers Scheduled Trigger (`*/15 * * * *`)
- **Stocare statică & Imagini:** Cloudflare Assets (bypassing persistent disk)
- **Design & UX:** Dark Luxury / Glassmorphism, mobile-first responsive

---

## 1. Arhitectură Cloudflare

- **Worker Name:** `asistenta-cristianvaduva-com`
- **D1 Database:** `asistenta-db` (UUID: `197c9ab9-dac8-4864-92a8-fc9555c060a8`)
- **Preview URL:** `https://asistenta-cristianvaduva-com.myremaxclubcristianv.workers.dev`
- **Domeniu de Producție (Custom Domain):** `asistenta.cristianvaduva.com` (gated conform `publicationReady=false`)

---

## 2. Comenzi de Dezvoltare și Deployment

### Rulare locală în emulator Cloudflare Workers
```bash
# Pornire dev server cu runtime Cloudflare și D1 local
npm run preview:worker
```

### Verificare TypeScript și Linting
```bash
npx tsc --noEmit
npm run lint
```

### Build pentru Cloudflare Workers
```bash
npm run build:worker
```

### Deployment pe Cloudflare Workers
```bash
npm run deploy:worker
```

### Aplicare Migrări pe Baza Remote D1
```bash
npm run d1:migrate
```

---

## 3. Configurare Secrete Cloudflare (Wrangler Secrets)

Secretele de producție **nu** se stochează în cod și **nu** se comit în Git. Se configurează securizat prin CLI Wrangler:

```bash
# Hash parola admin
npx wrangler secret put ADMIN_PASSWORD_HASH

# Utilizator admin
npx wrangler secret put ADMIN_USERNAME

# Cheie sesiune cookie admin (min. 32 caractere)
npx wrangler secret put SESSION_SECRET

# Cheie autorizare cron jobs tick
npx wrangler secret put JOBS_SECRET

# Integrare Telegram bot
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
```

---

## 4. Baza de Date D1 — Tabele și Migrări

Schema versiunii `migrations/001_init.sql` creează:
1. `schema_migrations` — istoricul versiunilor
2. `requests` — solicitările clienților (PF, PJ, Imobiliare)
3. `reminders` — reminderele de expirare polițe
4. `notification_jobs` — coada de procesare notificări (Telegram/manual)
5. `status_history` — audit statusuri solicitări
6. `admin_notes` — note interne consultant

Baza locală SQLite (`data/helpdesk.sqlite`) este păstrată intactă și securizată prin backup-uri în `backups/`. În producție pe Cloudflare Workers, aplicația utilizează exclusiv Cloudflare D1.

---

## 5. Cron Triggers (Joburi Programate)

Cloudflare Cron Triggers apelează automat handlerul `scheduled` din `src/worker.ts` la fiecare 15 minute (`*/15 * * * *`).
Handlerul procesează joburile scadente (`processDueJobs`) direct pe baza D1, fără a depinde de procese Node.js continue (PM2) sau cron de sistem pe VPS.

---

## 6. Componente VPS Obsolete (Nu mai sunt necesare)

- **PM2 / systemd process manager:** Înlocuit complet de Cloudflare Workers isolates serverless.
- **Nginx Reverse Proxy:** Înlocuit de Cloudflare Global Edge Network.
- **Litestream / backup de fișier SQLite local:** Înlocuit de replicarea distribuită și Time Travel din Cloudflare D1.
- **Crontab / VPS tick script:** Înlocuit de Cloudflare Cron Triggers.
