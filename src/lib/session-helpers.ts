import { createHmac, timingSafeEqual } from "crypto";
import { scryptSync } from "crypto";

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
  const expectedUser = process.env.ADMIN_USERNAME?.trim();
  if (!expectedUser || !timingSafeEqualUtf8(username, expectedUser)) return false;

  const plain = process.env.ADMIN_PASSWORD?.trim();
  if (plain) {
    return timingSafeEqualUtf8(password, plain);
  }

  const hash = process.env.ADMIN_PASSWORD_HASH?.trim();
  if (!hash) return false;
  const [salt, derived] = hash.split(":");
  if (!salt || !derived) return false;
  const check = scryptSync(password, salt, 64).toString("hex");
  if (check.length !== derived.length) return false;
  return timingSafeEqual(Buffer.from(check), Buffer.from(derived));
}
