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

    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ ok: true, id: "ignored" });
    }

    const startedAt = Number(body.formStartedAt);
    if (!startedAt || Date.now() - startedAt < 2500) {
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

    const saved = await saveRequestAndNotify({
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

    return NextResponse.json({
      ok: true,
      id: saved.id,
      message: "Solicitarea ta a fost înregistrată.",
    });
  } catch (err) {
    console.error("[API/requests error]:", err);
    return NextResponse.json(
      { ok: false, error: "Nu am putut înregistra solicitarea. Reîncearcă." },
      { status: 500 }
    );
  }
}
