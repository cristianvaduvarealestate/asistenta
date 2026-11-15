export const FLOW_IDS = [
  "oferta",
  "aminteste",
  "explica",
  "acoperire",
  "nevoi",
  "dauna",
  "intrebare",
  "imobiliare",
] as const;

export type FlowId = (typeof FLOW_IDS)[number];

const PHONE_RE = /^(?:\+40|0)(?:7\d{8}|2\d{8}|3\d{8})$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type FieldErrors = Record<string, string>;

export function sanitizeText(value: unknown, max = 4000): string {
  if (typeof value !== "string") return "";
  return value.replace(/\u0000/g, "").trim().slice(0, max);
}

export function normalizePhone(raw: string): string {
  return raw.replace(/[\s().-]/g, "");
}

export function isValidPhone(raw: string): boolean {
  return PHONE_RE.test(normalizePhone(raw));
}

export function isValidEmail(raw: string): boolean {
  return EMAIL_RE.test(raw) && raw.length <= 200;
}

export function isFlowId(value: string): value is FlowId {
  return (FLOW_IDS as readonly string[]).includes(value);
}

export function addDaysIso(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T12:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

export function daysBefore(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T09:00:00`);
  d.setDate(d.getDate() - days);
  return d.toISOString();
}
