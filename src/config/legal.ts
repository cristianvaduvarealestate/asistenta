/**
 * Central legal identity. Null fields MUST be completed before public launch.
 * Do not invent CUI, ASF status, partnerships, or registered office.
 */

export const LEGAL_NOTICE_VERSION = "2026-11-13";
export const LEGAL_UPDATED_AT = "13 noiembrie 2026";
export const PROPOSED_RETENTION_DAYS = Number(process.env.RETENTION_DAYS || 730);

export const legalConfig = {
  productName: "ASISTENȚĂ IMOBILIARE ȘI ASIGURĂRI",
  publicPersonName: "Cristian Văduva",
  publicRole: "Consultant Imobiliare & Asigurări",
  phone: "0767 110 439",
  email: "cristianvaduva@duck.com",
  privacyNoticeVersion: LEGAL_NOTICE_VERSION,
  lastUpdatedLabel: LEGAL_UPDATED_AT,
  proposedRetentionDays: PROPOSED_RETENTION_DAYS,
  publicationReady: false,
  missingForPublication: [
    "Denumirea entității juridice sau precizarea că operatorul este persoană fizică",
    "CUI / CIF, dacă există",
    "Sediul / adresa de corespondență",
    "Numărul de înregistrare (ONRC sau echivalent), dacă există",
    "Statutul față de ASF și Legea 236/2018 (distribuitor / intermediar / altă calitate) — doar dacă este verificat",
    "Identitatea operatorului de date (GDPR) și, dacă e cazul, DPO",
    "Parteneriate sau mandate cu asigurători, doar dacă sunt verificate",
    "Găzduirea de producție și DPA cu procesatorul",
  ] as const,
  entityLegalName: null as string | null,
  cui: null as string | null,
  registeredOffice: null as string | null,
  registrationNumber: null as string | null,
  asfStatus: null as string | null,
  dataControllerName: null as string | null,
  dpoContact: null as string | null,
  insurerPartnerships: null as string | null,
  hostingProvider: null as string | null,
};

export function isLegalComplete(): boolean {
  return (
    Boolean(legalConfig.entityLegalName) &&
    Boolean(legalConfig.dataControllerName) &&
    legalConfig.asfStatus !== null
  );
}
