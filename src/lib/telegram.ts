import { getCloudflareContext } from "@opennextjs/cloudflare";

export function escapeTelegramHtml(val: unknown): string {
  if (val === null || val === undefined) return "";
  return String(val)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function formatBucharestDate(isoOrDate: string | Date): string {
  try {
    const d = typeof isoOrDate === "string" ? new Date(isoOrDate) : isoOrDate;
    return new Intl.DateTimeFormat("ro-RO", {
      timeZone: "Europe/Bucharest",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(d);
  } catch {
    return String(isoOrDate);
  }
}

export type D1PersistenceStatus = "saved" | "quota_exceeded" | "failed";

export type TelegramNotificationInput = {
  id: string;
  flow?: string;
  flowLabel?: string;
  customerType: string;
  name: string;
  phone: string;
  email: string;
  companyName?: string;
  company?: string;
  activity?: string;
  employeeCount?: string;
  category?: string;
  message?: string;
  extra?: string;
  payload?: Record<string, unknown>;
  createdAt: string;
  d1Status?: D1PersistenceStatus;
  d1Error?: string;
};

const FLOW_TITLES: Record<string, string> = {
  oferta: "📋 SOLICITARE OFERTĂ ASIGURARE",
  aminteste: "⏰ PROGRAMARE REMINDER POLIȚĂ",
  explica: "🔍 EXPLICARE POLIȚĂ / CLAUZE",
  acoperire: "🛡️ VERIFICARE ACOPERIRE (ESTE ASIGURAT?)",
  nevoi: "🧭 IDENTIFICARE NEVOI ASIGURARE",
  dauna: "⚠️ ASISTENȚĂ DAUNĂ ASIGURARE",
  intrebare: "💬 ÎNTREBARE ASIGURARE",
  imobiliare: "🏠 ASISTENȚĂ IMOBILIARĂ",
};

function getCredentials(envOverride?: Record<string, string | undefined>): { token?: string; chatId?: string } {
  let token = envOverride?.TELEGRAM_BOT_TOKEN?.trim() || process.env.TELEGRAM_BOT_TOKEN?.trim();
  let chatId = envOverride?.TELEGRAM_CHAT_ID?.trim() || process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) {
    try {
      const ctx = getCloudflareContext();
      const env = ctx?.env as Record<string, unknown> | undefined;
      if (!token && typeof env?.TELEGRAM_BOT_TOKEN === "string") {
        token = env.TELEGRAM_BOT_TOKEN.trim();
      }
      if (!chatId && typeof env?.TELEGRAM_CHAT_ID === "string") {
        chatId = env.TELEGRAM_CHAT_ID.trim();
      }
    } catch {}
  }
  return { token, chatId };
}

export async function sendConsultantTelegram(
  input: TelegramNotificationInput,
  envOverride?: Record<string, string | undefined>
): Promise<{ ok: boolean; reason?: string }> {
  const { token, chatId } = getCredentials(envOverride);
  if (!token || !chatId) {
    return { ok: false, reason: "credentials_not_configured" };
  }

  const payload = input.payload || {};
  const flowKey = input.flow || "";
  const flowTitle = input.flowLabel || FLOW_TITLES[flowKey] || `📌 SOLICITARE (${(flowKey || "GENERAL").toUpperCase()})`;
  const clientTypeBadge = input.customerType === "pj" ? "🏢 Persoană Juridică (PJ)" : "👤 Persoană Fizică (PF)";

  const lines: string[] = [
    "<b>ASISTENȚĂ | CRISTIAN VĂDUVA</b>",
    `<b>${escapeTelegramHtml(flowTitle)}</b>`,
    "━━━━━━━━━━━━━━━━━━━━",
    `<b>Tip client:</b> ${clientTypeBadge}`,
    `<b>Nume:</b> ${escapeTelegramHtml(input.name)}`,
    `<b>Telefon:</b> <code>${escapeTelegramHtml(input.phone)}</code>`,
    `<b>Email:</b> ${escapeTelegramHtml(input.email)}`,
  ];

  // Persoană Juridică details
  const company = input.companyName || input.company;
  if (input.customerType === "pj" || company) {
    if (company) lines.push(`<b>Companie:</b> ${escapeTelegramHtml(company)}`);
    const cui = payload.cui;
    if (typeof cui === "string" && cui.trim()) lines.push(`<b>CUI / CIF:</b> ${escapeTelegramHtml(cui)}`);
    if (input.activity) lines.push(`<b>Domeniu:</b> ${escapeTelegramHtml(input.activity)}`);
    const countyCity = payload.countyCity;
    if (typeof countyCity === "string" && countyCity.trim()) lines.push(`<b>Sediu:</b> ${escapeTelegramHtml(countyCity)}`);
    if (input.employeeCount) lines.push(`<b>Nr. angajați:</b> ${escapeTelegramHtml(input.employeeCount)}`);
    const turnover = payload.turnoverRange;
    if (typeof turnover === "string" && turnover.trim()) lines.push(`<b>Cifră afaceri:</b> ${escapeTelegramHtml(turnover)}`);
  }

  // Flow specific payload details
  if (input.flow === "imobiliare") {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push("<b>DETALII IMOBILIARE:</b>");
    const action = payload.actionLabel || payload.action;
    if (action) lines.push(`• <b>Acțiune:</b> ${escapeTelegramHtml(action)}`);
    if (payload.propertyType) lines.push(`• <b>Tip proprietate:</b> ${escapeTelegramHtml(payload.propertyType)}`);
    if (payload.location) lines.push(`• <b>Locație / Zonă:</b> ${escapeTelegramHtml(payload.location)}`);
    if (payload.budgetMin || payload.budgetMax) {
      const bMin = payload.budgetMin ? `${payload.budgetMin} EUR` : "Min nespecificat";
      const bMax = payload.budgetMax ? `${payload.budgetMax} EUR` : "Max nespecificat";
      lines.push(`• <b>Buget:</b> ${escapeTelegramHtml(`${bMin} - ${bMax}`)}`);
    }
    if (payload.askingPrice) lines.push(`• <b>Preț dorit:</b> ${escapeTelegramHtml(payload.askingPrice)}`);
    if (payload.rooms || payload.areaApprox) {
      const parts = [];
      if (payload.rooms) parts.push(`${payload.rooms} cam.`);
      if (payload.areaApprox) parts.push(`~${payload.areaApprox} mp`);
      lines.push(`• <b>Dimensiune:</b> ${escapeTelegramHtml(parts.join(", "))}`);
    }
    if (payload.financingMethod) lines.push(`• <b>Finanțare:</b> ${escapeTelegramHtml(payload.financingMethod)}`);
    if (payload.timeframe) lines.push(`• <b>Orizont timp:</b> ${escapeTelegramHtml(payload.timeframe)}`);
    if (payload.propertyStatus) lines.push(`• <b>Stadiu proprietate:</b> ${escapeTelegramHtml(payload.propertyStatus)}`);
    if (payload.rentalPeriod) lines.push(`• <b>Perioadă închiriere:</b> ${escapeTelegramHtml(payload.rentalPeriod)}`);
    if (payload.moveInDate) lines.push(`• <b>Data mutare:</b> ${escapeTelegramHtml(payload.moveInDate)}`);
    if (payload.investmentGoal) lines.push(`• <b>Obiectiv investiție:</b> ${escapeTelegramHtml(payload.investmentGoal)}`);
    if (payload.targetMarket) lines.push(`• <b>Piață țintă:</b> ${escapeTelegramHtml(payload.targetMarket)}`);
    if (payload.additionalDetails) lines.push(`• <b>Detalii specifice:</b> ${escapeTelegramHtml(payload.additionalDetails)}`);
  } else if (input.flow === "oferta") {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push("<b>DETALII ASIGURARE:</b>");
    if (Array.isArray(payload.categories) && payload.categories.length > 0) {
      lines.push(`• <b>Categorii dorite:</b> ${escapeTelegramHtml(payload.categories.join(", "))}`);
    } else if (input.category) {
      lines.push(`• <b>Categorie:</b> ${escapeTelegramHtml(input.category)}`);
    }
    if (payload.homeType) lines.push(`• <b>Pentru locuință:</b> ${escapeTelegramHtml(payload.homeType)}`);
    if (payload.vehicleType) lines.push(`• <b>Pentru auto:</b> ${escapeTelegramHtml(payload.vehicleType)}`);
    if (payload.businessNeeds) lines.push(`• <b>Bunuri / Riscuri firmă:</b> ${escapeTelegramHtml(payload.businessNeeds)}`);
  } else if (input.flow === "aminteste") {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push("<b>PROGRAMARE REMINDER:</b>");
    if (payload.policyType) lines.push(`• <b>Poliță:</b> ${escapeTelegramHtml(payload.policyType)}`);
    if (payload.expiryDate) lines.push(`• <b>Data expirării:</b> ${escapeTelegramHtml(payload.expiryDate)}`);
    if (payload.deliveryChannel) lines.push(`• <b>Canal preferat:</b> ${escapeTelegramHtml(payload.deliveryChannel)}`);
    if (Array.isArray(payload.offsets)) {
      lines.push(`• <b>Notificare:</b> ${escapeTelegramHtml(payload.offsets.map((n) => `${n} zile înainte`).join(", "))}`);
    }
  } else if (input.flow === "explica") {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push("<b>CLARIFICARE CLAUZĂ / POLIȚĂ:</b>");
    const topic = payload.topicLabel || payload.topic;
    if (topic) lines.push(`• <b>Aspect vizat:</b> ${escapeTelegramHtml(topic)}`);
  } else if (input.flow === "acoperire") {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push("<b>VERIFICARE ACOPERIRE RISC:</b>");
    if (payload.situation) lines.push(`• <b>Situație:</b> ${escapeTelegramHtml(payload.situation)}`);
    if (payload.hasPolicy) lines.push(`• <b>Are acces la contract:</b> ${escapeTelegramHtml(payload.hasPolicy)}`);
  } else if (input.flow === "nevoi") {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push("<b>PRIORITĂȚI & NEVOI:</b>");
    if (Array.isArray(payload.needs) && payload.needs.length > 0) {
      lines.push(`• <b>Domenii bifate:</b> ${escapeTelegramHtml(payload.needs.join(", "))}`);
    }
  } else if (input.flow === "dauna") {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push("<b>DOSAR ASISTENȚĂ DAUNĂ:</b>");
    if (payload.claimType) lines.push(`• <b>Tip eveniment:</b> ${escapeTelegramHtml(payload.claimType)}`);
    if (payload.claimDate) lines.push(`• <b>Data eveniment:</b> ${escapeTelegramHtml(payload.claimDate)}`);
    if (payload.injured) {
      const inj = payload.injured === "yes" || payload.injured === "Da" ? "🚨 DA" : "NU";
      lines.push(`• <b>Vătămări corporale:</b> ${escapeTelegramHtml(inj)}`);
    }
    if (payload.hasPolicy) lines.push(`• <b>Are polița:</b> ${escapeTelegramHtml(payload.hasPolicy)}`);
    if (payload.helpNeeded) lines.push(`• <b>Ajutor imediat solicitat:</b> ${escapeTelegramHtml(payload.helpNeeded)}`);
  }

  // Client message / observations
  const clientMsg = input.message?.trim();
  if (clientMsg) {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push(`<b>Mesaj client:</b>\n${escapeTelegramHtml(clientMsg.slice(0, 1500))}`);
  }
  if (input.extra) {
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push(escapeTelegramHtml(input.extra));
  }

  // Footer & Audit
  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push(`<b>ID Solicitare:</b> <code>${escapeTelegramHtml(input.id)}</code>`);
  lines.push(`<b>Data:</b> ${escapeTelegramHtml(formatBucharestDate(input.createdAt))}`);

  const d1Badge =
    input.d1Status === "saved"
      ? "✅ Salvat în D1"
      : input.d1Status === "quota_exceeded"
      ? "⚠️ Cotă D1 depășită (înregistrat exclusiv prin Telegram)"
      : `⚠️ D1 indisponibil (${escapeTelegramHtml(input.d1Error || "eroare")})`;
  lines.push(`<b>Bază de date:</b> ${d1Badge}`);

  const messageText = lines.join("\n");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7000);
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return { ok: false, reason: `http_${res.status}: ${errText.slice(0, 100)}` };
    }
    return { ok: true };
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    return { ok: false, reason: aborted ? "timeout" : "network_error" };
  } finally {
    clearTimeout(timer);
  }
}

export async function sendReminderDueTelegram(
  input: {
    id: string;
    name: string;
    phone: string;
    email: string;
    policyType: string;
    expiryDate: string;
    offset: string;
  },
  envOverride?: Record<string, string | undefined>
): Promise<{ ok: boolean; reason?: string }> {
  const { token, chatId } = getCredentials(envOverride);
  if (!token || !chatId) {
    return { ok: false, reason: "credentials_not_configured" };
  }
  const text = [
    "<b>ASISTENȚĂ | CRISTIAN VĂDUVA</b>",
    "<b>REMINDER DE PROCESAT MANUAL</b>",
    "",
    "Canalul direct către client (email/SMS) nu este integrat.",
    "Contactează clientul folosind datele de mai jos.",
    "",
    `<b>Nume:</b> ${escapeTelegramHtml(input.name)}`,
    `<b>Telefon:</b> <code>${escapeTelegramHtml(input.phone)}</code>`,
    `<b>Email:</b> ${escapeTelegramHtml(input.email)}`,
    `<b>Poliță:</b> ${escapeTelegramHtml(input.policyType)}`,
    `<b>Expiră:</b> ${escapeTelegramHtml(input.expiryDate)}`,
    `<b>Fereastră:</b> ${escapeTelegramHtml(input.offset)}`,
    `<b>ID:</b> <code>${escapeTelegramHtml(input.id)}</code>`,
    `<b>Data:</b> ${escapeTelegramHtml(formatBucharestDate(new Date()))}`,
  ].join("\n");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7000);
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
