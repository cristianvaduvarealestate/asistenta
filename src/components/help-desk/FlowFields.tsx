"use client";

import { COVERAGE_EXAMPLES, EXPLAIN_TOPICS, NEEDS_PF, NEEDS_PJ, OFFER_CATEGORIES, REMINDER_POLICIES } from "@/lib/flows";
import type { FlowId } from "@/lib/validation";

type Props = { flow: FlowId; customerType: "pf" | "pj"; details: Record<string, unknown>; onChange: (next: Record<string, unknown>) => void };
const text = (data: Record<string, unknown>, key: string) => typeof data[key] === "string" ? data[key] : "";

export function FlowFields({ flow, customerType, details, onChange }: Props) {
  const set = (key: string, value: unknown) => onChange({ ...details, [key]: value });
  const toggle = (key: string, value: string) => { const current = Array.isArray(details[key]) ? details[key] as string[] : []; set(key, current.includes(value) ? current.filter((item) => item !== value) : [...current, value]); };
  const selected = (key: string, value: string) => Array.isArray(details[key]) && (details[key] as string[]).includes(value);

  if (flow === "oferta") return (
    <div className="grid gap-6">
      <CheckGroup label="Ce dorești să asiguri?" values={OFFER_CATEGORIES} selected={(v) => selected("categories", v)} onToggle={(v) => toggle("categories", v)} />
      <div className="grid gap-5 sm:grid-cols-2">
        {(details.categories as string[] || []).includes("Locuință") && (
          <Select label="Pentru locuință" value={text(details, "homeType")} onChange={(v) => set("homeType", v)} options={["Proprietar", "Chiriaș", "Casă", "Apartament"]} />
        )}
        {(details.categories as string[] || []).some((x) => x === "RCA" || x === "CASCO") && (
          <Select label="Pentru auto" value={text(details, "vehicleType")} onChange={(v) => set("vehicleType", v)} options={["Autoturism", "Autoutilitară", "Motocicletă", "Alt vehicul"]} />
        )}
        {customerType === "pj" && (
          <TextArea label="Bunurile sau riscurile relevante ale firmei" value={text(details, "businessNeeds")} onChange={(v) => set("businessNeeds", v)} />
        )}
      </div>
      <TextArea label="Ce detalii suplimentare ar fi utile înainte de discuție?" value={text(details, "message")} onChange={(v) => set("message", v)} />
    </div>
  );

  if (flow === "aminteste") return (
    <div className="grid gap-6">
      <Select label="Tipul poliței" value={text(details, "policyType")} onChange={(v) => set("policyType", v)} options={REMINDER_POLICIES} required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Data expirării poliței" type="date" value={text(details, "expiryDate")} onChange={(v) => set("expiryDate", v)} required />
        <Select label="Canal preferat de contact" value={text(details, "deliveryChannel")} onChange={(v) => set("deliveryChannel", v)} options={["Telefon", "Email"]} />
      </div>
      <CheckGroup label="Când dorești să discutăm despre reînnoire?" values={["30 zile înainte", "15 zile înainte", "7 zile înainte", "1 zi înainte"]} selected={(v) => selected("offsetLabels", v)} onToggle={(v) => { const days = Number(v.split(" ")[0]); const current = Array.isArray(details.offsets) ? details.offsets as number[] : []; set("offsets", current.includes(days) ? current.filter((x) => x !== days) : [...current, days]); toggle("offsetLabels", v); }} />
      <p className="rounded-xl border border-[#22262D] bg-[#171A20] p-3 text-xs leading-relaxed text-[#9299A3]">
        Solicitarea reprezintă o cerere de contact și nu garantează transmiterea automată a unei notificări prin SMS sau e-mail. Te voi contacta personal pe canalul preferat, în funcție de datele furnizate și disponibilitate, pentru a analiza opțiunile de reînnoire.
      </p>
    </div>
  );

  if (flow === "explica") return (
    <div className="grid gap-6">
      <RadioGroup label="Ce aspect dorești să clarificăm din polița ta?" values={EXPLAIN_TOPICS.map((x) => x.label)} value={text(details, "topicLabel")} onChange={(label) => { set("topicLabel", label); set("topic", EXPLAIN_TOPICS.find((x) => x.label === label)?.id || "altceva"); }} />
      <TextArea label="Descrie întrebarea, clauza sau franșiza (fără a trimite documente personale)" value={text(details, "message")} onChange={(v) => set("message", v)} />
    </div>
  );

  if (flow === "acoperire") return (
    <div className="grid gap-6">
      <p className="text-xs text-[#9299A3]">Exemple frecvente: {COVERAGE_EXAMPLES.join(" • ")}</p>
      <TextArea label="Ce incident sau situație concretă dorești să analizăm?" value={text(details, "situation")} onChange={(v) => { set("situation", v); set("message", v); }} required />
      <RadioGroup label="Ai acces la polița de asigurare și condițiile contractuale?" values={["Da", "Nu", "Nu știu"]} value={text(details, "hasPolicy")} onChange={(v) => set("hasPolicy", v)} />
    </div>
  );

  if (flow === "nevoi") {
    const needs = customerType === "pj" ? NEEDS_PJ : NEEDS_PF;
    return (
      <div className="grid gap-6">
        <CheckGroup label={customerType === "pj" ? "Ce domenii sau riscuri dorești să protejezi în firmă?" : "Ce bunuri sau priorități dorești să protejezi?"} values={needs} selected={(v) => selected("needs", v)} onToggle={(v) => toggle("needs", v)} />
        <TextArea label="Detalii opționale despre specificul situației" value={text(details, "message")} onChange={(v) => set("message", v)} />
      </div>
    );
  }

  if (flow === "dauna") return (
    <div className="grid gap-6">
      <div className="rounded-xl border border-red-500/40 bg-red-950/30 p-4 text-xs font-medium text-red-200">
        Dacă există un pericol iminent, incendiu activ sau persoane rănite, apelează imediat Serviciul Național de Urgență 112.
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Tipul evenimentului / daunei" value={text(details, "claimType")} onChange={(v) => set("claimType", v)} />
        <Field label="Data producerii evenimentului" type="date" value={text(details, "claimDate")} onChange={(v) => set("claimDate", v)} />
      </div>
      <TextArea label="Ce s-a întâmplat? Descrie faptele pe scurt" value={text(details, "message")} onChange={(v) => set("message", v)} required />
      <div className="grid gap-5 sm:grid-cols-2">
        <RadioGroup label="Există vătămări corporale?" values={["Da", "Nu"]} value={text(details, "injured")} onChange={(v) => set("injured", v === "Da" ? "yes" : "no")} />
        <RadioGroup label="Ai polița de asigurare la îndemână?" values={["Da", "Nu", "Nu știu"]} value={text(details, "hasPolicy")} onChange={(v) => set("hasPolicy", v)} />
      </div>
      <TextArea label="De ce asistență imediată ai nevoie?" value={text(details, "helpNeeded")} onChange={(v) => set("helpNeeded", v)} />
    </div>
  );

  return <TextArea label="Întrebarea ta" value={text(details, "message")} onChange={(v) => set("message", v)} required />;
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]">
        {label}{required && <span className="text-[#C92B35]"> *</span>}
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 min-h-11 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3.5 text-sm text-[#F5F6F7] transition focus:border-[#4779B8] focus:outline-none"
        />
      </label>
    </div>
  );
}

function TextArea({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]">
      {label}{required && <span className="text-[#C92B35]"> *</span>}
      <textarea
        required={required}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-[#22262D] bg-[#171A20] p-3 text-sm font-normal text-[#F5F6F7] transition focus:border-[#4779B8] focus:outline-none"
      />
    </label>
  );
}

function Select({ label, value, onChange, options, required }: { label: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean }) {
  return (
    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]">
      {label}{required && <span className="text-[#C92B35]"> *</span>}
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-11 w-full rounded-xl border border-[#22262D] bg-[#171A20] px-3 text-sm font-normal text-[#F5F6F7] transition focus:border-[#4779B8] focus:outline-none"
      >
        <option value="" className="bg-[#101216] text-[#9299A3]">Alege o opțiune</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#101216] text-[#F5F6F7]">{o}</option>
        ))}
      </select>
    </label>
  );
}

function CheckGroup({ label, values, selected, onToggle }: { label: string; values: string[]; selected: (v: string) => boolean; onToggle: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {values.map((v) => {
          const isSel = selected(v);
          return (
            <button
              key={v}
              type="button"
              aria-pressed={isSel}
              onClick={() => onToggle(v)}
              className={`min-h-11 rounded-xl border px-3.5 text-xs font-medium transition-all ${
                isSel
                  ? "border-[#4779B8] bg-[#4779B8]/20 text-white shadow-sm"
                  : "border-[#22262D] bg-[#171A20] text-[#C7CBD1] hover:border-[#4779B8]/50 hover:text-white"
              }`}
            >
              {v}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function RadioGroup({ label, values, value, onChange }: { label: string; values: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {values.map((v) => {
          const isSel = value === v;
          return (
            <button
              key={v}
              type="button"
              aria-pressed={isSel}
              onClick={() => onChange(v)}
              className={`min-h-11 rounded-xl border px-4 text-xs font-medium transition-all ${
                isSel
                  ? "border-[#4779B8] bg-[#4779B8]/20 text-white shadow-sm"
                  : "border-[#22262D] bg-[#171A20] text-[#C7CBD1] hover:border-[#4779B8]/50 hover:text-white"
              }`}
            >
              {v}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
