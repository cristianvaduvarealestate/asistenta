import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { signPayload, verifySignedPayload, timingSafeEqualUtf8 } from "./session-helpers";

const COOKIE = "ihd_admin";
const MAX_AGE = 60 * 60 * 12;

function secret(): string {
  let s = process.env.SESSION_SECRET?.trim();
  if (!s || s.length < 16) {
    try {
      const ctx = getCloudflareContext();
      const val = (ctx?.env as any)?.SESSION_SECRET;
      if (typeof val === "string" && val.trim().length >= 16) {
        s = val.trim();
      }
    } catch {}
  }
  if (!s || s.length < 16) {
    throw new Error("SESSION_SECRET missing");
  }
  return s;
}

export function createSessionToken(username: string): string {
  const payload = JSON.stringify({
    u: username,
    exp: Date.now() + MAX_AGE * 1000,
  });
  return signPayload(Buffer.from(payload).toString("base64url"), secret());
}

export function readSessionToken(token: string): { username: string } | null {
  const payloadB64 = verifySignedPayload(token, secret());
  if (!payloadB64) return null;
  try {
    const data = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8")) as {
      u: string;
      exp: number;
    };
    if (!data.exp || data.exp < Date.now()) return null;
    return { username: data.u };
  } catch {
    return null;
  }
}

export function setSessionCookie(token: string) {
  cookies().set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export function clearSessionCookie() {
  cookies().set(COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
}

export function getAdminSession(): { username: string } | null {
  const token = cookies().get(COOKIE)?.value;
  if (!token) return null;
  try {
    return readSessionToken(token);
  } catch {
    return null;
  }
}

export { timingSafeEqualUtf8 };
