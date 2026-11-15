"use client";

import Link from "next/link";
import { BUSINESS_INDUSTRIES } from "@/data/business/industries";

export type ContactValues = {
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  cui?: string;
  activity: string;
  countyCity?: string;
  turnoverRange?: string;
  employeeCount: string;
  contactRole?: string;
  marketingConsent: boolean;
  privacyAck: boolean;
};

type Props = {
  values: ContactValues;
  customerType: "pf" | "pj";
  onChange: (values: ContactValues) => void;
};

export function ContactForm({ values, customerType, onChange }: Props) {
  const set = (key: keyof ContactValues, value: string | boolean) =>
    onChange({ ...values, [key]: value });

  return (
    <fieldset className="grid gap-6" disabled={false}>
      <legend className="sr-only">Date de contact și identificare</legend>

      {customerType === "pj" ? (
        <div className="space-y-6">
          {/* PJ Header banner */}
          <div className="rounded-2xl border border-[#4779B8]/30 bg-[#4779B8]/10 p-4.5 text-xs text-[#C7CBD1]">
            <p className="font-semibold text-white">
              Solicitare pentru Persoană Juridică (Companie)
            </p>
            <p className="mt-1 leading-relaxed text-[#9299A3]">
              Completează datele firmei pentru a adapta recomandările și analiza de risc. Câmpurile opționale ne ajută la o calibrare mai precisă a ofertelor.
            </p>
          </div>

          {/* Company details */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="companyName"
              label="Denumirea companiei / firmei"
              value={values.companyName}
              onChange={(v) => set("companyName", v)}
              required
              hint="Exemplu: SC Construct Alpha SRL"
            />
            <Field
              id="cui"
              label="CUI / CIF (Opțional)"
              value={values.cui || ""}
              onChange={(v) => set("cui", v)}
              hint="Codul Unic de Înregistrare al firmei (nu CNP)"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]" htmlFor="activity">
                Domeniul principal de activitate <span aria-hidden="true" className="text-[#C92B35]">*</span>
              </label>
              <select
                id="activity"
                value={values.activity}
                onChange={(e) => set("activity", e.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3.5 text-sm text-[#F5F6F7] transition focus:border-[#4779B8] focus:outline-none"
                required
              >
                <option value="" className="bg-[#101216] text-[#9299A3]">Alege industria / domeniul firmei</option>
                {BUSINESS_INDUSTRIES.map((ind) => (
                  <option key={ind.id} value={ind.name} className="bg-[#101216] text-[#F5F6F7]">
                    {ind.letter}. {ind.name}
                  </option>
                ))}
                <option value="Alt domeniu" className="bg-[#101216] text-[#F5F6F7]">Alt domeniu de activitate</option>
              </select>
            </div>

            <Field
              id="countyCity"
              label="Județ și localitate"
              value={values.countyCity || ""}
              onChange={(v) => set("countyCity", v)}
              hint="Exemplu: București, Sector 1 sau Cluj-Napoca"
            />
          </div>

          {/* Operational scope */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]" htmlFor="employeeCount">
                Număr aproximativ de angajați
              </label>
              <select
                id="employeeCount"
                value={values.employeeCount}
                onChange={(e) => set("employeeCount", e.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3.5 text-sm text-[#F5F6F7] transition focus:border-[#4779B8] focus:outline-none"
              >
                <option value="" className="bg-[#101216] text-[#9299A3]">Selectează intervalul</option>
                <option value="1-9" className="bg-[#101216] text-[#F5F6F7]">Microîntreprindere (1-9 angajați)</option>
                <option value="10-49" className="bg-[#101216] text-[#F5F6F7]">Întreprindere mică (10-49 angajați)</option>
                <option value="50-249" className="bg-[#101216] text-[#F5F6F7]">Întreprindere medie (50-249 angajați)</option>
                <option value="250+" className="bg-[#101216] text-[#F5F6F7]">Companie mare (250+ angajați)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]" htmlFor="turnoverRange">
                Cifră de afaceri anuală estimată (Opțional)
              </label>
              <select
                id="turnoverRange"
                value={values.turnoverRange || ""}
                onChange={(e) => set("turnoverRange", e.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3.5 text-sm text-[#F5F6F7] transition focus:border-[#4779B8] focus:outline-none"
              >
                <option value="" className="bg-[#101216] text-[#9299A3]">Selectează intervalul</option>
                <option value="sub 100k EUR" className="bg-[#101216] text-[#F5F6F7]">Sub 100.000 EUR</option>
                <option value="100k - 500k EUR" className="bg-[#101216] text-[#F5F6F7]">100.000 - 500.000 EUR</option>
                <option value="500k - 2M EUR" className="bg-[#101216] text-[#F5F6F7]">500.000 - 2.000.000 EUR</option>
                <option value="2M - 10M EUR" className="bg-[#101216] text-[#F5F6F7]">2.000.000 - 10.000.000 EUR</option>
                <option value="peste 10M EUR" className="bg-[#101216] text-[#F5F6F7]">Peste 10.000.000 EUR</option>
              </select>
            </div>
          </div>

          {/* Contact Person Details */}
          <div className="border-t border-[#22262D] pt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C7CBD1]">
              Persoană de contact din companie
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              <Field
                id="fullName"
                label="Nume și prenume"
                value={values.fullName}
                onChange={(v) => set("fullName", v)}
                autoComplete="name"
                required
              />
              <Field
                id="phone"
                label="Telefon direct"
                type="tel"
                value={values.phone}
                onChange={(v) => set("phone", v)}
                autoComplete="tel"
                required
                hint="Exemplu: 0767 110 439"
              />
              <Field
                id="email"
                label="Email companie"
                type="email"
                value={values.email}
                onChange={(v) => set("email", v)}
                autoComplete="email"
                required
              />
            </div>
          </div>
        </div>
      ) : (
        /* PF Fields */
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#22262D] bg-[#171A20] p-4.5 text-xs text-[#C7CBD1]">
            <p className="font-semibold text-white">
              Solicitare pentru Persoană Fizică
            </p>
            <p className="mt-1 leading-relaxed text-[#9299A3]">
              Completează datele tale de contact pentru a primi oferta comparativă sau clarificările necesare.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field
              id="fullName"
              label="Nume și prenume"
              value={values.fullName}
              onChange={(v) => set("fullName", v)}
              autoComplete="name"
              required
            />
            <Field
              id="phone"
              label="Telefon"
              type="tel"
              value={values.phone}
              onChange={(v) => set("phone", v)}
              autoComplete="tel"
              required
              hint="Exemplu: 0767 110 439"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={(v) => set("email", v)}
              autoComplete="email"
              required
            />
          </div>
        </div>
      )}

      {/* Consents */}
      <div className="space-y-3 pt-2">
        <label className="flex items-start gap-3 text-xs leading-relaxed text-[#C7CBD1]">
          <input
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#22262D] bg-[#171A20] accent-[#4779B8]"
            type="checkbox"
            checked={values.privacyAck}
            onChange={(e) => set("privacyAck", e.target.checked)}
            required
          />
          <span>
            Am luat la cunoștință{" "}
            <Link className="font-semibold text-white underline hover:text-[#4779B8]" href="/confidentialitate" target="_blank">
              informarea privind confidențialitatea
            </Link>
            . <span aria-hidden="true" className="text-[#C92B35]">*</span>
          </span>
        </label>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-[#9299A3]">
          <input
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#22262D] bg-[#171A20] accent-[#4779B8]"
            type="checkbox"
            checked={values.marketingConsent}
            onChange={(e) => set("marketingConsent", e.target.checked)}
          />
          <span>
            Sunt de acord să primesc actualizări sau comunicări utile. Este opțional și nu condiționează răspunsul la solicitare.
          </span>
        </label>
      </div>
    </fieldset>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  hint,
  required,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  hint?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "numeric";
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]" htmlFor={id}>
        {label}
        {required && (
          <span aria-hidden="true" className="text-[#C92B35]">
            {" "}*
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-11 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3.5 text-sm text-[#F5F6F7] transition focus:border-[#4779B8] focus:outline-none"
      />
      {hint && <p className="mt-1 text-[11px] text-[#9299A3]">{hint}</p>}
    </div>
  );
}
