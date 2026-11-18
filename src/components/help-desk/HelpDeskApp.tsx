"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  AlertCircle,
  Bell,
  BookOpen,
  FileText,
  ScanSearch,
  ShieldQuestion,
} from "lucide-react";
import { HELP_CARDS } from "@/lib/flows";
import type { FlowId } from "@/lib/validation";
import { guidanceFor } from "@/lib/guidance";
import { FlowFields } from "./FlowFields";
import { ContactForm, type ContactValues } from "./ContactForm";
import type { HelpCard } from "@/lib/flows";
import { SITE } from "@/config/site";

const ICONS = {
  file: FileText,
  bell: Bell,
  book: BookOpen,
  search: ShieldQuestion,
  scan: ScanSearch,
  alert: AlertCircle,
};

type Step = "cards" | "type" | "details" | "guidance" | "contact" | "done";

const FLOW_QUERY: Record<string, FlowId> = {
  oferta: "oferta",
  aminteste: "aminteste",
  explica: "explica",
  acoperire: "acoperire",
  nevoi: "nevoi",
  dauna: "dauna",
  intrebare: "intrebare",
};

export type WizardState = {
  flow: FlowId | null;
  customerType: "pf" | "pj" | "";
  details: Record<string, unknown>;
  contact: ContactValues;
  freeQuestion: string;
};

const emptyContact: ContactValues = {
  fullName: "",
  phone: "",
  email: "",
  companyName: "",
  activity: "",
  employeeCount: "",
  marketingConsent: false,
  privacyAck: false,
};

export function HelpDeskApp() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const panelRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef(Date.now());
  const idempotency = useRef(crypto.randomUUID());

  const [step, setStep] = useState<Step>("cards");
  const [state, setState] = useState<WizardState>({
    flow: null,
    customerType: "",
    details: {},
    contact: emptyContact,
    freeQuestion: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [savedId, setSavedId] = useState("");

  const selectedCard = HELP_CARDS.find((c) => c.id === state.flow);

  useEffect(() => {
    const q = searchParams.get("ajutor");
    const tip = searchParams.get("tip");
    const cat = searchParams.get("categorie");
    const dom = searchParams.get("domeniu");
    const msg = searchParams.get("mesaj");

    if (q && FLOW_QUERY[q]) {
      const targetFlow = FLOW_QUERY[q];
      const customerType = tip === "pj" ? "pj" : tip === "pf" ? "pf" : "";
      const initialDetails: Record<string, unknown> = {};
      if (cat) initialDetails.category = cat;
      if (dom) initialDetails.domain = dom;
      if (msg) initialDetails.message = msg;

      setState((s) => ({
        ...s,
        flow: targetFlow,
        customerType: customerType || s.customerType,
        details: { ...s.details, ...initialDetails },
      }));

      if (customerType) {
        setStep("details");
      } else if (step === "cards") {
        setStep("type");
      }
      setError("");
      requestAnimationFrame(() => panelRef.current?.focus());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  function setQuery(flow: FlowId | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (flow) params.set("ajutor", flow);
    else params.delete("ajutor");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function openFlow(flow: FlowId) {
    setState((s) => ({ ...s, flow }));
    setStep("type");
    setError("");
    setQuery(flow);
    requestAnimationFrame(() => panelRef.current?.focus());
  }

  function backToCards() {
    setStep("cards");
    setQuery(null);
  }

  const guidance = useMemo(() => {
    if (!state.flow) return null;
    return guidanceFor(state.flow, {
      ...state.details,
      message: state.freeQuestion || state.details.message,
    });
  }, [state.flow, state.details, state.freeQuestion]);

  async function submit() {
    if (!state.flow) return;
    setError("");
    if (state.contact.fullName.trim().length < 2) {
      setError("Completează numele și prenumele.");
      return;
    }
    if (!/^(?:\+40|0)(?:7\d{8}|2\d{8}|3\d{8})$/.test(state.contact.phone.replace(/[\s().-]/g, ""))) {
      setError("Completează un număr de telefon valid.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.contact.email)) {
      setError("Completează o adresă de email validă.");
      return;
    }
    if (!state.contact.privacyAck) {
      setError("Confirmă luarea la cunoștință a informării de confidențialitate.");
      return;
    }
    setSubmitting(true);
    const payload = {
      ...state.details,
      ...(state.contact.cui ? { cui: state.contact.cui } : {}),
      ...(state.contact.countyCity ? { countyCity: state.contact.countyCity } : {}),
      ...(state.contact.turnoverRange ? { turnoverRange: state.contact.turnoverRange } : {}),
    };
    const category = Array.isArray(state.details.categories)
      ? (state.details.categories as string[]).join(", ")
      : String(state.details.policyType || state.details.topic || state.contact.companyName || "");
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flow: state.flow,
          customerType: state.customerType,
          fullName: state.contact.fullName,
          phone: state.contact.phone,
          email: state.contact.email,
          companyName: state.contact.companyName,
          activity: state.contact.activity,
          employeeCount: state.contact.employeeCount,
          category: category || selectedCard?.title,
          message: String(state.details.message || state.freeQuestion || ""),
          payload,
          guidanceShown: guidance?.paragraphs.join("\n"),
          privacyAck: state.contact.privacyAck,
          marketingConsent: state.contact.marketingConsent,
          policyType: state.details.policyType,
          expiryDate: state.details.expiryDate,
          offsets: state.details.offsets,
          deliveryChannel: state.details.deliveryChannel === "Email" ? "email" : "phone",
          formStartedAt: startedAt.current,
          website: "",
          idempotencyKey: idempotency.current,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Nu am putut înregistra solicitarea.");
        return;
      }
      setSavedId(data.id);
      setStep("done");
    } catch {
      setError("Serverul nu este disponibil. Reîncearcă.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">Asistență gratuită</p>
      <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Cu ce te pot ajuta?
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Spune-mi ce ai nevoie. Te ajut să înțelegi ce trebuie să verifici și care sunt următorii pași.
      </p>

      {/* Business Section Entry Banner */}
      <div className="mt-8 rounded-2xl border border-[#D2D2D7] bg-gradient-to-r from-[#0B2621] to-[#180D20] p-5 sm:p-6 shadow-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#C92B35]/30 bg-[#C92B35]/10 px-2.5 py-0.5 text-xs font-semibold text-[#1D1D1F]">
              Secțiune pentru antreprenori & companii
            </span>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-[#1D1D1F] sm:text-2xl">
              Protecția Afacerii Tale
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-[#86868B] sm:text-sm">
              Ghid complet de risc pe 12 industrii, 26 de polițe comerciale, scenarii de daune și instrument de diagnostic.
            </p>
          </div>
          <Link
            href="/afaceri"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#F5F6F7] px-5 py-2.5 text-xs font-semibold text-[#08090B] transition hover:bg-white hover:shadow-md"
          >
            Explorează ghidul de business →
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3">
        {HELP_CARDS.map((card) => (
          <HelpCardButton
            key={card.id}
            card={card}
            selected={state.flow === card.id && step !== "cards"}
            onSelect={() => openFlow(card.id)}
          />
        ))}
      </div>

      {step !== "cards" && state.flow && (
        <section
          ref={panelRef}
          tabIndex={-1}
          aria-labelledby="flow-title"
          className="mt-8 rounded-3xl border border-[#D2D2D7] bg-white text-[#1D1D1F] p-6 sm:p-10 shadow-card"
        >
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#D2D2D7] pb-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1D1D1F]">
                {selectedCard?.title || "Întrebare"}
              </p>
              <h2 id="flow-title" className="mt-1.5 text-2xl font-bold tracking-tight text-[#1D1D1F]">
                {step === "type" && "Pentru cine cauți asistență?"}
                {step === "details" && "Detalii despre situație"}
                {step === "guidance" && guidance?.title}
                {step === "contact" && "Vrei să discutăm situația ta concretă?"}
                {step === "done" && "Solicitarea ta a fost înregistrată"}
              </h2>
            </div>
            <button type="button" className="text-xs font-medium text-[#86868B] hover:text-white" onClick={backToCards}>
              Înapoi la categorii
            </button>
          </div>

          {step === "type" && (
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Choice
                label="Persoană fizică (PF)"
                hint="Locuință, mașină, familie, călătorii, bunuri."
                selected={state.customerType === "pf"}
                onClick={() => {
                  setState((s) => ({ ...s, customerType: "pf" }));
                  setStep("details");
                }}
              />
              <Choice
                label="Persoană juridică / Firmă (PJ)"
                hint="Sedii, flotă, echipamente, stocuri, angajați, răspunderi."
                selected={state.customerType === "pj"}
                onClick={() => {
                  setState((s) => ({ ...s, customerType: "pj" }));
                  setStep("details");
                }}
              />
            </div>
          )}

          {step === "details" && (
            <div className="mt-6">
              <FlowFields
                flow={state.flow}
                customerType={state.customerType || "pf"}
                details={state.details}
                onChange={(details) => setState((s) => ({ ...s, details }))}
              />
              <NavRow
                onBack={() => setStep("type")}
                onNext={() => setStep("guidance")}
                nextLabel="Vezi explicația"
              />
            </div>
          )}

          {step === "guidance" && guidance && (
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink">
              {state.flow === "dauna" && (
                <p className="rounded-xl bg-brand-soft px-4 py-3 text-sm font-medium text-brand-dark">
                  Dacă există pericol imediat sau persoane rănite, sună 112 înainte de a continua.
                </p>
              )}
              {guidance.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {guidance.checks && (
                <ul className="list-disc space-y-1 pl-5 text-muted">
                  {guidance.checks.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}
              <p className="text-sm text-muted">{guidance.updated}</p>
              <p className="text-sm text-muted">{guidance.disclaimer}</p>
              <p className="pt-2 text-sm text-ink">
                Lasă-mi datele și te contactez personal. Nu este obligatoriu pentru a citi explicația de mai sus.
              </p>
              <NavRow
                onBack={() => setStep("details")}
                onNext={() => setStep("contact")}
                nextLabel="Lasă datele de contact"
              />
            </div>
          )}

          {step === "contact" && (
            <div className="mt-6">
              <p className="mb-6 text-muted">Lasă-mi datele și te contactez personal.</p>
              <ContactForm
                values={state.contact}
                customerType={state.customerType || "pf"}
                onChange={(contact) => setState((s) => ({ ...s, contact }))}
              />
              {error && (
                <p role="alert" className="mt-4 text-sm text-brand">
                  {error}
                </p>
              )}
              <NavRow
                onBack={() => setStep("guidance")}
                onNext={submit}
                nextLabel={submitting ? "Se înregistrează..." : "Trimite solicitarea"}
                disabled={submitting}
              />
            </div>
          )}

          {step === "done" && (
            <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-center sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {state.flow === "aminteste"
                  ? "Solicitarea ta de contact a fost înregistrată"
                  : "Solicitarea ta a fost transmisă"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#86868B] sm:text-sm">
                {state.flow === "aminteste"
                  ? "Am notat scadența poliței tale. Te voi contacta personal pe canalul selectat pentru a analiza opțiunile disponibile de reînnoire."
                  : "Voi analiza datele transmise și te voi contacta în cel mai scurt timp pentru detalii și clarificări."}
              </p>
              <p className="mt-4 inline-block rounded-lg border border-[#D2D2D7] bg-[#F5F5F7] px-3 py-1 font-mono text-xs text-[#86868B]">
                ID referință: {savedId}
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  className="rounded-full bg-[#F5F6F7] px-5 py-2 text-xs font-semibold text-[#08090B] transition hover:bg-white"
                  onClick={backToCards}
                >
                  Revino la categorii
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="mt-16 rounded-3xl border border-[#D2D2D7] bg-white text-[#1D1D1F] p-7 shadow-card sm:p-10" aria-labelledby="alta-intrebare">
        <h2 id="alta-intrebare" className="text-xl font-bold tracking-tight text-[#1D1D1F] sm:text-2xl">
          Ai o altă întrebare specifică?
        </h2>
        <p className="mt-1 text-xs text-[#86868B] sm:text-sm">
          Scrie liber despre situația ta și te ajut să identifici varianta corectă.
        </p>
        <form
          className="mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (!state.freeQuestion.trim()) return;
            setState((s) => ({
              ...s,
              flow: "intrebare",
              details: { ...s.details, message: state.freeQuestion },
            }));
            setStep(state.customerType ? "details" : "type");
            setQuery("intrebare");
          }}
        >
          <label htmlFor="free-q" className="sr-only">
            Scrie aici cu ce ai nevoie de ajutor
          </label>
          <textarea
            id="free-q"
            rows={3}
            value={state.freeQuestion}
            onChange={(e) => setState((s) => ({ ...s, freeQuestion: e.target.value }))}
            placeholder="Scrie aici detaliile situației tale..."
            className="w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] p-4 text-sm text-[#1D1D1F] placeholder:text-[#86868B] transition focus:border-[#1D1D1F] focus:outline-none"
          />
          <button
            type="submit"
            className="mt-4 rounded-full bg-[#F5F6F7] px-6 py-2.5 text-xs font-semibold text-[#08090B] shadow-sm transition hover:bg-white"
          >
            Trimite întrebarea directă
          </button>
        </form>
        <p className="mt-4 text-xs leading-relaxed text-[#86868B]">
          Serviciul de consultanță și orientare este gratuit. Plătești prima de asigurare exclusiv dacă alegi emiterea unei polițe.
        </p>
      </section>

      <section className="mt-16 border-t border-[#D2D2D7] pt-8 max-w-2xl">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">Despre serviciu</h2>
        <p className="mt-2 text-xs leading-relaxed text-[#86868B]">
          {SITE.name} este un punct de contact independent prin care poți solicita asistență de specialitate pentru oferte de asigurări, tranzacții imobiliare, notificări și analize de risc.
        </p>
        <p className="mt-2 text-xs font-medium text-[#86868B]">{SITE.brandLine}</p>
      </section>
    </div>
  );
}

function HelpCardButton({
  card,
  selected,
  onSelect,
}: {
  card: HelpCard;
  selected: boolean;
  onSelect: () => void;
}) {
  const Icon = ICONS[card.icon];
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`min-h-[132px] rounded-2xl border p-5 text-left transition-all ${
        selected
          ? "border-[#1D1D1F] bg-[#F5F5F7] shadow-glow-blue"
          : "border-[#D2D2D7] bg-white text-[#1D1D1F] hover:border-[#1D1D1F]/50 hover:bg-[#F5F5F7]"
      }`}
    >
      <Icon className="h-5 w-5 text-[#1D1D1F]" aria-hidden />
      <span className="mt-3 block text-sm font-semibold text-[#1D1D1F]">{card.title}</span>
      <span className="mt-1 block text-xs leading-relaxed text-[#86868B]">{card.description}</span>
    </button>
  );
}

function Choice({
  label,
  hint,
  selected,
  onClick,
}: {
  label: string;
  hint: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition-all ${
        selected
          ? "border-[#1D1D1F] bg-[#F5F5F7] text-white"
          : "border-[#D2D2D7] bg-[#F5F5F7] text-[#1D1D1F] hover:border-[#1D1D1F]/50"
      }`}
    >
      <span className="block font-semibold text-white">{label}</span>
      <span className="mt-1 block text-xs text-[#86868B]">{hint}</span>
    </button>
  );
}

function NavRow({
  onBack,
  onNext,
  nextLabel,
  disabled,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel: string;
  disabled?: boolean;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onBack}
        className="rounded-full border border-[#D2D2D7] bg-[#F5F5F7] px-4 py-2 text-xs font-medium text-[#86868B] hover:text-white"
      >
        Înapoi
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={disabled}
        className="rounded-full bg-[#F5F6F7] px-6 py-2 text-xs font-semibold text-[#08090B] shadow-md transition hover:bg-white disabled:opacity-50"
      >
        {nextLabel}
      </button>
    </div>
  );
}
