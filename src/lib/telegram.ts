import { getCloudflareContext } from "@opennextjs/cloudflare";

function escapeTelegramHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type TelegramPayload = {
  id: string;
  flowLabel: string;
  customerType: string;
  name: string;
  phone: string;
  email: string;
  company?: string;
  category?: string;
  message?: string;
  createdAt: string;
  extra?: string;
};

function getCredentials(): { token?: string; chatId?: string } {
  let token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  let chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) {
    try {
      const ctx = getCloudflareContext();
      if (!token) token = (ctx?.env as any)?.TELEGRAM_BOT_TOKEN?.trim();
      if (!chatId) chatId = (ctx?.env as any)?.TELEGRAM_CHAT_ID?.trim();
    } catch {}
  }
  return { token, chatId };
}

export async function sendConsultantTelegram(
  payload: TelegramPayload
): Promise<{ ok: boolean; reason?: string }> {
  const { token, chatId } = getCredentials();
  if (!token || !chatId) {
    return { ok: false, reason: "credentials_not_configured" };
  }

  const lines = [
    "<b>ASISTENȚĂ | CRISTIAN VĂDUVA</b>",
    "<b>SOLICITARE NOUĂ</b>",
    "",
    `Tip: ${escapeTelegramHtml(payload.flowLabel)}`,
    `Client: ${escapeTelegramHtml(payload.customerType.toUpperCase())}`,
    `Nume: ${escapeTelegramHtml(payload.name)}`,
    `Telefon: ${escapeTelegramHtml(payload.phone)}`,
    `Email: ${escapeTelegramHtml(payload.email)}`,
  ];
  if (payload.company) lines.push(`Firmă: ${escapeTelegramHtml(payload.company)}`);
  if (payload.category) lines.push(`Categorie: ${escapeTelegramHtml(payload.category)}`);
  if (payload.message) lines.push(`Mesaj: ${escapeTelegramHtml(payload.message.slice(0, 1200))}`);
  if (payload.extra) lines.push(escapeTelegramHtml(payload.extra));
  lines.push("", `ID solicitare: ${escapeTelegramHtml(payload.id)}`);
  lines.push(`Data: ${escapeTelegramHtml(payload.createdAt)}`);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      return { ok: false, reason: `http_${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    return { ok: false, reason: aborted ? "timeout" : "network_error" };
  } finally {
    clearTimeout(timer);
  }
}

export async function sendReminderDueTelegram(input: {
  id: string;
  name: string;
  phone: string;
  email: string;
  policyType: string;
  expiryDate: string;
  offset: string;
}): Promise<{ ok: boolean; reason?: string }> {
  const { token, chatId } = getCredentials();
  if (!token || !chatId) {
    return { ok: false, reason: "credentials_not_configured" };
  }
  const text = [
    "<b>INSURANCE HELP DESK</b>",
    "<b>REMINDER DE PROCESAT MANUAL</b>",
    "",
    "Canalul către client (email/SMS) nu este integrat.",
    "Contactează clientul folosind datele de mai jos.",
    "",
    `Nume: ${escapeTelegramHtml(input.name)}`,
    `Telefon: ${escapeTelegramHtml(input.phone)}`,
    `Email: ${escapeTelegramHtml(input.email)}`,
    `Poliță: ${escapeTelegramHtml(input.policyType)}`,
    `Expiră: ${escapeTelegramHtml(input.expiryDate)}`,
    `Fereastră: ${escapeTelegramHtml(input.offset)}`,
    `ID: ${escapeTelegramHtml(input.id)}`,
  ].join("\n");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });
    if (!res.ok) return { ok: false, reason: `http_${res.status}` };
    return { ok: true };
  } catch {
    return { ok: false, reason: "network_error" };
  } finally {
    clearTimeout(timer);
  }
}
