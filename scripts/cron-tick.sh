#!/usr/bin/env bash
# ==============================================================================
# INSURANCE HELP DESK — SECURE CRON TICK RUNNER
# ==============================================================================
# Acest script apelează endpoint-ul /api/jobs/tick fără a expune JOBS_SECRET
# în argumentele de proces (invizibil în `ps aux` / `ps -ef`).
# ==============================================================================

set -euo pipefail

# Directorul proiectului (implicit directorul curent dacă nu este specificat)
PROJECT_DIR="${1:-$(cd "$(dirname "$0")/.." && pwd)}"
ENV_FILE="${PROJECT_DIR}/.env"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Eroare: Fișierul .env nu a fost găsit la: $ENV_FILE" >&2
  exit 1
fi

# Extragere JOBS_SECRET direct din fișier (fără export în variabile globale)
JOBS_SECRET=$(grep -E '^JOBS_SECRET=' "$ENV_FILE" | head -n 1 | cut -d '=' -f2- | tr -d ' "\r\n')
PORT=$(grep -E '^PORT=' "$ENV_FILE" | head -n 1 | cut -d '=' -f2- | tr -d ' "\r\n' || echo "3010")
PORT="${PORT:-3010}"

if [[ -z "$JOBS_SECRET" ]]; then
  echo "Eroare: JOBS_SECRET nu este definit în fișierul .env" >&2
  exit 1
fi

# Apel curl securizat prin transmiterea antetului via stdin (--config -).
# Astfel, secretul NU apare ca argument de linie de comandă în `ps aux`.
printf 'header = "x-jobs-secret: %s"\n' "$JOBS_SECRET" | \
  curl -s -S -X POST \
  --config - \
  -H "Content-Type: application/json" \
  "http://127.0.0.1:${PORT}/api/jobs/tick" > /dev/null

exit 0
