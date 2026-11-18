import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

export function newId(prefix = ""): string {
  const id = randomBytes(12).toString("hex");
  return prefix ? `${prefix}_${id}` : id;
}

export function hashValue(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export function hashPassword(password: string, salt?: string): string {
  const usedSalt = salt || randomBytes(16).toString("hex");
  const derived = scryptSync(password, usedSalt, 64).toString("hex");
  return `${usedSalt}:${derived}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, derived] = stored.split(":");
  if (!salt || !derived) return false;
  const check = scryptSync(password, salt, 64).toString("hex");
  if (check.length !== derived.length) return false;
  return timingSafeEqual(Buffer.from(check), Buffer.from(derived));
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
