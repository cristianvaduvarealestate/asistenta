import { NextRequest, NextResponse } from "next/server";
import { hashValue } from "@/lib/crypto";
import { rateLimit } from "@/lib/rateLimit";
import { createSessionToken, setSessionCookie } from "@/lib/session";
import { verifyAdminCredentials } from "@/lib/session-helpers";
import { sanitizeText } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
  const limit = rateLimit(`admin:${hashValue(ip)}`, 8, 15 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json({ ok: false, error: "Prea multe încercări." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const username = sanitizeText(body?.username, 80);
  const password = typeof body?.password === "string" ? body.password : "";
  try {
    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json({ ok: false, error: "Date de autentificare incorecte." }, { status: 401 });
    }
    setSessionCookie(createSessionToken(username));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Autentificarea nu este configurată." }, { status: 500 });
  }
}
