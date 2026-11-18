# GHID DE DEPLOYMENT ȘI OPERARE — CLOUDFLARE WORKERS + D1

**Aplicație:** Asistență Imobiliare și Asigurări  
**Domeniu producție:** `https://asistenta.cristianvaduva.com`  
**Cloudflare Worker:** `asistenta-cristianvaduva-com`  
**Bază de date:** Cloudflare D1 (`asistenta-db`, UUID: `197c9ab9-dac8-4864-92a8-fc9555c060a8`)  
**Preview URL activ:** `https://asistenta-cristianvaduva-com.myremaxclubcristianv.workers.dev`

---

## 1. Arhitectură Cloudflare-Native

Aplicația rulează 100% serverless pe rețeaua Cloudflare Edge, eliminând dependența de VPS, procese Node.js continue (PM2), Nginx sau stocare pe disc local.

- **Frontend & API:** Next.js 14 App Router compilat prin adaptorul oficial OpenNext (`@opennextjs/cloudflare`).
- **Persistență SQL:** Cloudflare D1 (Eastern Europe `EEUR`), cu operațiuni asincrone și tranzacții atomice prin `db.batch()`.
- **Active Statice & Fotografii:** Cloudflare Assets integration.
- **Joburi Programate:** Cloudflare Cron Triggers (`*/15 * * * *`) executate prin handlerul intern `scheduled` din `src/worker.ts`.
- **Securitate:** Cloudflare Encrypted Secrets, cookie-uri `HttpOnly`, `SameSite=lax`, `Secure`.

---

## 2. Componente VPS Obsolete (Eliminate)

| Componentă Veche (VPS) | Înlocuitor Cloudflare | Observații |
| :--- | :--- | :--- |
| **PM2 Process Manager** | Cloudflare Workers Runtime | Autoscaling instantaneu, zero mentenanță de proces |
| **Nginx Reverse Proxy** | Cloudflare Edge Network | SSL/TLS automat, protecție DDoS, routing nativ |
| **SQLite pe disc local** | Cloudflare D1 SQL | Bază de date distribuită fără fișiere pe filesystem |
| **Litestream Replication**| Cloudflare D1 Time Travel | Puncte de restaurare automate gestionate de Cloudflare |
| **VPS Systemd Crontab** | Cloudflare Cron Triggers | Execuție automată pe rețeaua Workers la fiecare 15 min |
| **Găzduire fișiere locale** | Cloudflare Assets | Servire CDN ultra-rapidă pentru fotografii și JS/CSS |

*Notă: Documentația veche pentru VPS este păstrată doar ca referință istorică în folderul `deploy/`.*

---

## 3. Configurare Secrete (Cloudflare Secrets)

Pentru a asigura securitatea fără expunerea cheilor în cod sau loguri, rulează următoarele comenzi în terminal:

```bash
# 1. Parola Administrator (scrypt hash generat cu `npm run admin:hash -- "parola"`)
npx wrangler secret put ADMIN_PASSWORD_HASH

# 2. Utilizator Administrator
npx wrangler secret put ADMIN_USERNAME

# 3. Secret pentru semnarea cookie-urilor de sesiune (min. 32 caractere)
npx wrangler secret put SESSION_SECRET

# 4. Secret pentru declanșarea manuală a joburilor prin API (dacă este cazul)
npx wrangler secret put JOBS_SECRET

# 5. Token Bot Telegram (opțional - dacă lipsesc, alertele intră în coada manuală)
npx wrangler secret put TELEGRAM_BOT_TOKEN

# 6. Chat ID Telegram (opțional)
npx wrangler secret put TELEGRAM_CHAT_ID
```

---

## 4. Baza de Date D1 — Migrări și Recuperare

### Aplicare migrări pe D1 remote:
```bash
npx wrangler d1 execute asistenta-db --remote --file=./migrations/001_init.sql
```

### Export / Backup manual din Cloudflare D1:
```bash
npx wrangler d1 export asistenta-db --remote --output=./backups/d1-backup-$(date +%Y-%m-%d).sql
```

### Time Travel (Recuperare la un moment anterior):
Cloudflare D1 suportă Time Travel nativ timp de 30 de zile:
```bash
# Identifică bookmark-urile recente
npx wrangler d1 time-travel info asistenta-db

# Restaurează baza la un bookmark specific
npx wrangler d1 time-travel restore asistenta-db --bookmark=<BOOKMARK_ID>
```

---

## 5. Ghid de Legalitate și Publicare (`publicationReady = false`)

Aplicația include un sistem de protecție legală configurat în `src/config/legal.ts`.
Pentru a proteja consultantul și clienții, domeniul public custom `asistenta.cristianvaduva.com` **nu** trebuie activat pentru public până când următoarele elemente nu sunt completate în `src/config/legal.ts`:

1. **Denumirea entității juridice** (SRL / PFA sau mențiunea că operatorul este persoană fizică).
2. **CUI / CIF** (dacă există entitate înregistrată).
3. **Sediul social / Adresa oficială de corespondență**.
4. **Numărul de înregistrare la Registrul Comerțului (ONRC)**.
5. **Statutul față de ASF și Legea 236/2018** (distribuitor / asistent în brokeraj / intermediar autorizat).
6. **Identitatea operatorului de date GDPR** și canalul dedicat DPO.
7. **Parteneriate sau mandate cu asigurători** (doar dacă sunt formalizate și verificate).
8. **DPA (Data Processing Agreement)** cu furnizorul de hosting / procesatorul de date.

**În acest stadiu:**
- Deployment-ul tehnic pe Worker (`https://asistenta-cristianvaduva-com.myremaxclubcristianv.workers.dev`) este activ și protejat pentru teste.
- Domeniul public `asistenta.cristianvaduva.com` rămâne neactivat până la completarea cerințelor de mai sus.
