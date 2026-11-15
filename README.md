# Insurance Help Desk

Aplicație locală Next.js pentru solicitări de asistență în asigurări. Nu face deployment automat și nu include secrete.

## Pornire locală

1. Instalează dependențele: `npm install`.
2. Copiază `.env.example` în `.env` și setează cel puțin `SESSION_SECRET`, `ADMIN_USERNAME` și `ADMIN_PASSWORD_HASH`.
3. Rulează `npm run dev` și deschide `http://localhost:3010`.

SQLite este creat automat în `data/helpdesk.sqlite` la prima solicitare. Rulează `npm run backup:db` înainte de actualizări operaționale. Pentru joburile programate, configurează un cron autenticat care face `POST /api/jobs/tick` cu headerul `x-jobs-secret` egal cu `SESSION_SECRET`.

## Configurări obligatorii înainte de publicare

- Hosting cu disc persistent sau o bază de date gestionată. SQLite local nu este potrivit pentru instanțe serverless fără volum persistent.
- `TELEGRAM_BOT_TOKEN` și `TELEGRAM_CHAT_ID` pentru alertele consultantului.
- Datele juridice din `src/config/legal.ts` și validarea documentelor de către un specialist.
- Un furnizor de email/SMS dacă dorești trimitere automată către client. Aplicația nu pretinde că acele mesaje sunt trimise fără integrare.

## Verificare

`npm run test:api` verifică validarea de bază; `npm run build` face verificarea Next.js. Pentru testare manuală parcurge cele șase fluxuri, o cerere PF, una PJ, un reminder și pagina `/admin`.
