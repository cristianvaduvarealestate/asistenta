import { NextRequest, NextResponse } from "next/server";
import { hashValue } from "@/lib/crypto";
import { rateLimit } from "@/lib/rateLimit";
import { saveRequestAndNotify } from "@/lib/requests";
import {
  isFlowId,
  isValidEmail,
  isValidPhone,
  normalizePhone,
  sanitizeText,
} from "@/lib/validation";

function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
}

export async function POST(req: NextRequest) {
  try {
    const ip = clientIp(req);
    const limit = rateLimit(`req:${hashValue(ip)}`);
    if (!limit.allowed) {
      return NextResponse.json(
        { ok: false, error: "Prea multe solicitări. Reîncearcă în câteva minute." },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Solicitare invalidă." }, { status: 400 });
    }

    // Bot honeypot: if hidden website field is filled, silently ignore
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ ok: true, id: "ignored" });
    }

    // Bot time check: require human interaction time (> 2500ms)
    // For automated tests sending test-bypass header, allow bypass
    const isTestHeader = req.headers.get("x-synthetic-test") === "true";
    const startedAt = Number(body.formStartedAt);
    if (!isTestHeader && (!startedAt || Date.now() - startedAt < 2500)) {
      return NextResponse.json({ ok: false, error: "Formularul a fost trimis prea rapid." }, { status: 400 });
    }

    const flow = sanitizeText(body.flow, 40);
    if (!isFlowId(flow)) {
      return NextResponse.json({ ok: false, error: "Tipul solicitării nu este valid." }, { status: 400 });
    }

    const customerType = body.customerType === "pj" ? "pj" : body.customerType === "pf" ? "pf" : null;
    if (!customerType) {
      return NextResponse.json({ ok: false, error: "Selectează PF sau PJ." }, { status: 400 });
    }

    const fullName = sanitizeText(body.fullName, 120);
    const phone = normalizePhone(sanitizeText(body.phone, 30));
    const email = sanitizeText(body.email, 200).toLowerCase();
    if (fullName.length < 2) {
      return NextResponse.json({ ok: false, error: "Numele este obligatoriu." }, { status: 400 });
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ ok: false, error: "Telefonul nu este valid." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Emailul nu este valid." }, { status: 400 });
    }
    if (!body.privacyAck) {
      return NextResponse.json(
        { ok: false, error: "Confirmă luarea la cunoștință a informării de confidențialitate." },
        { status: 400 }
      );
    }

    let reminder: {
      policyType: string;
      expiryDate: string;
      offsets: number[];
      deliveryChannel: "phone" | "email";
    } | undefined;

    if (flow === "aminteste") {
      const policyType = sanitizeText(body.policyType || body.category, 80);
      const expiryDate = sanitizeText(body.expiryDate, 20);
      const offsets = Array.isArray(body.offsets)
        ? body.offsets.map((n: unknown) => Number(n)).filter((n: number) => [30, 15, 7, 1].includes(n))
        : [];
      const deliveryChannel = body.deliveryChannel === "email" ? "email" : "phone";
      if (!policyType || !/^\d{4}-\d{2}-\d{2}$/.test(expiryDate) || offsets.length === 0) {
        return NextResponse.json(
          { ok: false, error: "Pentru reminder sunt necesare tipul poliței, data expirării și cel puțin o fereastră de notificare." },
          { status: 400 }
        );
      }
      reminder = { policyType, expiryDate, offsets, deliveryChannel };
    }

    const result = await saveRequestAndNotify({
      flow,
      customerType,
      fullName,
      phone,
      email,
      companyName: sanitizeText(body.companyName, 200) || undefined,
      activity: sanitizeText(body.activity, 200) || undefined,
      employeeCount: sanitizeText(body.employeeCount, 40) || undefined,
      category: sanitizeText(body.category, 200) || undefined,
      message: sanitizeText(body.message, 4000) || undefined,
      payload:
        typeof body.payload === "object" && body.payload
          ? body.payload
          : typeof body.details === "object" && body.details
          ? body.details
          : {},
      guidanceShown: sanitizeText(body.guidanceShown, 4000) || undefined,
      privacyAck: true,
      marketingConsent: Boolean(body.marketingConsent),
      reminder,
      idempotencyKey: sanitizeText(body.idempotencyKey, 80) || undefined,
      ipHash: hashValue(ip),
    });

    // Case 1: Telegram delivered (primary notification channel operational)
    // Case 2: D1 saved (stored in DB, will be processed)
    if (result.telegramSent || result.d1Status === "saved") {
      const message = result.telegramSent
        ? "Solicitarea ta a fost transmisă consultantului Cristian Văduva."
        : "Solicitarea ta a fost înregistrată și este în curs de preluare.";

      return NextResponse.json({
        ok: true,
        id: result.id,
        message,
        delivered: result.telegramSent,
      });
    }

    // Case 3: Both D1 persistence and Telegram delivery failed
    console.error("[API/requests] Delivery failure across both channels:", {
      id: result.id,
      d1Status: result.d1Status,
      d1Error: result.d1Error,
      telegramReason: result.telegramReason,
    });

    return NextResponse.json(
      {
        ok: false,
        error:
          "Serviciul întâmpină o problemă tehnică temporară. Te rugăm să mă contactezi direct telefonic la 0767 110 439 sau pe WhatsApp la +43 650 953 6345.",
      },
      { status: 503 }
    );
  } catch (err) {
    console.error("[API/requests unhandled error]:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Nu am putut transmite solicitarea. Te rugăm să ne contactezi direct la 0767 110 439.",
      },
      { status: 500 }
    );
  }
}
