import { createHmac, timingSafeEqual, scryptSync } from "node:crypto";
import { getCloudflareContext } from "@opennextjs/cloudflare";

function getEnv(key: string): string | undefined {
  if (process.env[key]?.trim()) return process.env[key]!.trim();
  try {
    const ctx = getCloudflareContext();
    const val = (ctx?.env as any)?.[key];
    if (typeof val === "string" && val.trim()) return val.trim();
  } catch {}
  return undefined;
}

export function signPayload(payload: string, secret: string): string {
  const sig = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifySignedPayload(token: string, secret: string): string | null {
  const lastDot = token.lastIndexOf(".");
  if (lastDot <= 0) return null;
  const payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return null;
  if (!timingSafeEqual(a, b)) return null;
  return payload;
}

export function timingSafeEqualUtf8(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  const expectedUser = getEnv("ADMIN_USERNAME");
  if (!expectedUser || !timingSafeEqualUtf8(username, expectedUser)) return false;

  const plain = getEnv("ADMIN_PASSWORD");
  if (plain) {
    return timingSafeEqualUtf8(password, plain);
  }

  const hash = getEnv("ADMIN_PASSWORD_HASH");
  if (!hash) return false;
  const [salt, derived] = hash.split(":");
  if (!salt || !derived) return false;
  const check = scryptSync(password, salt, 64).toString("hex");
  if (check.length !== derived.length) return false;
  return timingSafeEqual(Buffer.from(check), Buffer.from(derived));
}
