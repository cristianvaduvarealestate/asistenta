import { sendConsultantTelegram } from "../src/lib/telegram";

async function testTelegram() {
  console.log("Verificare conectivitate Telegram...");

  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    console.log("Status: Variabilele TELEGRAM_BOT_TOKEN și TELEGRAM_CHAT_ID nu sunt încă configurate în fișierul .env.");
    console.log("Configurează-le în .env conform ghidului operațional înainte de a rula acest test.");
    return;
  }

  console.log("Variabilele au fost detectate. Se trimite un mesaj de test...");

  const testPayload = {
    id: `test_${Date.now()}`,
    flowLabel: "Test Conectivitate",
    customerType: "pf",
    name: "Test Administrator",
    phone: "0700000000",
    email: "test@helpdesk.local",
    message: "Acesta este un mesaj de test pentru validarea integrării Telegram.",
    createdAt: new Date().toISOString(),
  };

  const res = await sendConsultantTelegram(testPayload);

  if (res.ok) {
    console.log("✓ Succes: Notificarea de test a fost livrată pe Telegram!");
  } else {
    console.error(`✗ Eroare la trimitere: ${res.reason}`);
    console.error("Verifică dacă botul a fost adăugat în grup/canal sau dacă utilizatorul a inițiat conversația (/start).");
  }
}

testTelegram().catch((err) => {
  console.error("Eroare neașteptată:", err);
  process.exit(1);
});
