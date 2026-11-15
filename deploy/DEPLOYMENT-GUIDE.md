# GHID DE INSTALARE, DEPLOYMENT ȘI RECUPERARE — INSURANCE HELP DESK
**Arhitectură:** VPS Ubuntu Linux + Nginx + PM2 + SQLite persistent (WAL)

---

## 1. Cerințe Inițiale pe Serverul VPS
- Sistem de operare: **Ubuntu 22.04 LTS** sau **Ubuntu 24.04 LTS**
- Pachete de bază:
  ```bash
  sudo apt update && sudo apt upgrade -y
  sudo apt install -y curl git build-essential nginx certbot python3-certbot-nginx
  ```
- Instalare **Node.js 20 LTS**:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
  sudo npm install -g pm2
  ```

---

## 2. Structura de Directoare și Permisiuni
Se recomandă rularea aplicației sub un utilizator de sistem ne-root (ex: `deploy` sau `helpdesk`):

```bash
# 1. Directorul aplicației
sudo mkdir -p /var/www/helpdesk
sudo chown -R $USER:$USER /var/www/helpdesk

# 2. Directorul persistent pentru baza SQLite
sudo mkdir -p /var/lib/insurance-helpdesk
sudo chown -R $USER:$USER /var/lib/insurance-helpdesk
sudo chmod 700 /var/lib/insurance-helpdesk

# 3. Directorul pentru loguri
sudo mkdir -p /var/log/insurance-helpdesk
sudo chown -R $USER:$USER /var/log/insurance-helpdesk
```

---

## 3. Instalare și Configurare Inițială

1. **Clonare / copiere proiect:**
   ```bash
   cd /var/www/helpdesk
   # Se copiază fișierele proiectului
   ```

2. **Configurare `.env`:**
   ```bash
   cp .env.example .env
   chmod 600 .env
   nano .env
   ```
   *Setări obligatorii:*
   - `SQLITE_DB_PATH=/var/lib/insurance-helpdesk/helpdesk.sqlite`
   - `ADMIN_PASSWORD_HASH` (generat cu `npm run admin:hash -- "parola_aleasa"`)
   - `SESSION_SECRET` (generat cu `openssl rand -hex 32`)
   - `JOBS_SECRET` (generat cu `openssl rand -hex 32`)
   - `TELEGRAM_BOT_TOKEN` și `TELEGRAM_CHAT_ID`

3. **Instalare dependențe și build:**
   ```bash
   npm ci --omit=dev
   npm run build
   ```

---

## 4. Pornire Serviciu cu PM2

1. **Pornire aplicație:**
   ```bash
   pm2 start ecosystem.config.cjs
   ```
2. **Salvare și configurare pornire automată la boot:**
   ```bash
   pm2 save
   pm2 startup systemd
   # Se execută comanda sugerată de PM2 cu sudo
   ```
3. **Verificare stare:**
   ```bash
   pm2 status
   npm run healthcheck
   ```

---

## 5. Configurare Nginx și Certificat SSL

1. **Copiere configurație Nginx:**
   ```bash
   sudo cp deploy/nginx/helpdesk.cristianvaduva.com.conf /etc/nginx/sites-available/helpdesk.cristianvaduva.com.conf
   sudo ln -s /etc/nginx/sites-available/helpdesk.cristianvaduva.com.conf /etc/nginx/sites-enabled/
   ```
2. **Generare certificat Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d helpdesk.cristianvaduva.com
   ```
3. **Testare și reîncărcare Nginx:**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

---

## 6. Configurare Cron (Joburi & Backup Zilnic)

Se deschide `crontab -e`:

```cron
# 1. Procesare automată a reminder-elor și notificărilor la fiecare 15 minute (securizat)
*/15 * * * * /var/www/helpdesk/scripts/cron-tick.sh /var/www/helpdesk > /dev/null 2>&1

# 2. Backup atomic SQLite în fiecare noapte la ora 03:00
0 3 * * * cd /var/www/helpdesk && /usr/bin/npm run backup:db >> /var/log/insurance-helpdesk/backup.log 2>&1

# 3. Verificare integritate bază de date duminica la 04:00
0 4 * * 0 cd /var/www/helpdesk && /usr/bin/npm run integrity:db >> /var/log/insurance-helpdesk/integrity.log 2>&1
```

---

## 7. Procedura de Update / Deployment Nou
Pentru actualizări ulterioare de cod:

```bash
cd /var/www/helpdesk

# 1. Backup de siguranță înainte de update
npm run backup:db

# 2. Actualizare cod și dependențe
git pull origin main
npm ci --omit=dev

# 3. Rebuild Next.js
npm run build

# 4. Reload fără downtime în PM2
pm2 reload insurance-helpdesk

# 5. Verificare sănătate după deployment
npm run healthcheck
```

---

## 8. Procedura de Rollback
Dacă noul deployment conține erori neprevăzute:

1. **Rollback aplicație:**
   ```bash
   git reset --hard <commit-anterior-stabil>
   npm ci --omit=dev
   npm run build
   pm2 reload insurance-helpdesk
   ```
2. **Restaurare bază de date (dacă schema sau datele au fost afectate):**
   ```bash
   pm2 stop insurance-helpdesk
   npm run restore:db -- /var/www/helpdesk/backups/helpdesk-YYYYMMDD.sqlite
   pm2 start insurance-helpdesk
   npm run integrity:db
   ```
