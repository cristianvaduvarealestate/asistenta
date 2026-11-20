"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building,
  Key,
  TrendingUp,
  HelpCircle,
  Home,
  Check,
  AlertCircle,
  Sparkles,
} from "lucide-react";

type ActionType =
  | "cumpar"
  | "vand"
  | "inchiriez_proprietate"
  | "caut_chirie"
  | "investitie"
  | "consultanta";

type FormState = {
  action: ActionType | "";
  // Specific fields
  propertyType: string;
  location: string;
  budgetMin: string;
  budgetMax: string;
  rooms: string;
  areaApprox: string;
  financingMethod: string;
  timeframe: string;
  propertyStatus: string;
  askingPrice: string;
  rentalPeriod: string;
  moveInDate: string;
  investmentGoal: string;
  targetMarket: string;
  additionalDetails: string;
  // Contact fields
  customerType: "pf" | "pj";
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  message: string;
  privacyAck: boolean;
};

const initialForm: FormState = {
  action: "",
  propertyType: "",
  location: "",
  budgetMin: "",
  budgetMax: "",
  rooms: "",
  areaApprox: "",
  financingMethod: "",
  timeframe: "",
  propertyStatus: "",
  askingPrice: "",
  rentalPeriod: "",
  moveInDate: "",
  investmentGoal: "",
  targetMarket: "",
  additionalDetails: "",
  customerType: "pf",
  fullName: "",
  phone: "",
  email: "",
  companyName: "",
  message: "",
  privacyAck: false,
};

const ACTIONS = [
  {
    id: "cumpar" as ActionType,
    label: "Vreau să cumpăr",
    desc: "Apartament, vilă, teren, spațiu comercial sau investiție",
    icon: Home,
  },
  {
    id: "vand" as ActionType,
    label: "Vreau să vând",
    desc: "Evaluare, strategie de preț, promovare și reprezentare dedicată",
    icon: Key,
  },
  {
    id: "inchiriez_proprietate" as ActionType,
    label: "Închiriez o proprietate (Proprietar)",
    desc: "Găsirea chiriașilor potriviți, contract și asistență",
    icon: Building,
  },
  {
    id: "caut_chirie" as ActionType,
    label: "Caut o proprietate de închiriat (Chiriaș)",
    desc: "Locuință sau spațiu comercial adaptat nevoilor tale",
    icon: Home,
  },
  {
    id: "investitie" as ActionType,
    label: "Caut o investiție imobiliară",
    desc: "Randament, apreciere de capital, oportunități locale sau externe (Dubai, Europa)",
    icon: TrendingUp,
  },
  {
    id: "consultanta" as ActionType,
    label: "Am nevoie de consultanță",
    desc: "Clarificări privind piața, verificări sau orientare generală",
    icon: HelpCircle,
  },
];

export function RealEstateForm() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [savedId, setSavedId] = useState("");

  const startedAt = useRef(Date.now());
  const idempotency = useRef(crypto.randomUUID());

  const update = (key: keyof FormState, val: unknown) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    setError("");
  };

  const handleSelectAction = (action: ActionType) => {
    update("action", action);
    setStep(2);
  };

  const handleNextFromStep2 = () => {
    if (!form.propertyType && form.action !== "consultanta") {
      setError("Selectează tipul proprietății sau specificul solicitării.");
      return;
    }
    setError("");
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.fullName.trim().length < 2) {
      setError("Completează numele și prenumele.");
      return;
    }
    if (!/^(?:\+40|0)(?:7\d{8}|2\d{8}|3\d{8})$/.test(form.phone.replace(/[\s().-]/g, ""))) {
      setError("Completează un număr de telefon valid (ex: 0767 110 439).");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Completează o adresă de email validă.");
      return;
    }
    if (!form.privacyAck) {
      setError("Confirmă luarea la cunoștință a informării privind confidențialitatea.");
      return;
    }

    setSubmitting(true);

    const actionLabel = ACTIONS.find((a) => a.id === form.action)?.label || form.action;
    const payload = {
      action: form.action,
      actionLabel,
      propertyType: form.propertyType,
      location: form.location,
      budgetMin: form.budgetMin,
      budgetMax: form.budgetMax,
      rooms: form.rooms,
      areaApprox: form.areaApprox,
      financingMethod: form.financingMethod,
      timeframe: form.timeframe,
      propertyStatus: form.propertyStatus,
      askingPrice: form.askingPrice,
      rentalPeriod: form.rentalPeriod,
      moveInDate: form.moveInDate,
      investmentGoal: form.investmentGoal,
      targetMarket: form.targetMarket,
      additionalDetails: form.additionalDetails,
      customerType: form.customerType,
      companyName: form.companyName,
    };

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flow: "imobiliare",
          customerType: form.customerType,
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim().toLowerCase(),
          companyName: form.companyName.trim() || undefined,
          category: "IMOBILIARE",
          message: form.message.trim() || form.additionalDetails.trim() || `Solicitare imobiliară: ${actionLabel}`,
          payload,
          privacyAck: form.privacyAck,
          marketingConsent: false,
          formStartedAt: startedAt.current,
          website: "",
          idempotencyKey: idempotency.current,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "A apărut o problemă la înregistrare. Te rugăm să reîncerci.");
        setSubmitting(false);
        return;
      }

      setSavedId(data.id);
      setStep(4);
    } catch {
      setError("Serverul nu a răspuns. Verifică conexiunea și reîncearcă.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setStep(1);
    setSavedId("");
    setError("");
    startedAt.current = Date.now();
    idempotency.current = crypto.randomUUID();
  };

  return (
    <div id="formular-imobiliar" className="scroll-mt-24 rounded-3xl border border-[#D2D2D7] bg-white text-[#1D1D1F] p-6 shadow-card sm:p-10">
      {/* Progress Header */}
      {step < 4 && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-[#6E6E73]">
            <span className="text-[#1D1D1F] font-bold uppercase tracking-wider">
              Asistență Imobiliară
            </span>
            <span>Pasul {step} din 3</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#F5F5F7]">
            <div
              className="h-full bg-[#1D1D1F] transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1D1D1F] sm:text-3xl">
            {step === 1 && "Ce dorești să faci?"}
            {step === 2 && "Hai să stabilim detaliile proprietății"}
            {step === 3 && "Unde îți trimit propunerile și analiza?"}
          </h2>
          <p className="mt-1 text-sm text-[#6E6E73]">
            {step === 1 && "Selectează obiectivul tău pentru a adapta pașii următori."}
            {step === 2 && "Completează criteriile esențiale. Câmpurile sunt orientative și te ajută să primești opțiuni relevante."}
            {step === 3 && "Lasă datele de contact pentru a stabili următorii pași și a primi recomandări concrete."}
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/40 bg-red-950/30 text-red-200 p-4 text-xs font-medium text-red-200">
          <AlertCircle className="h-4 w-4 shrink-0 text-[#D71920]" />
          <span>{error}</span>
        </div>
      )}

      {/* STEP 1: Choose Action */}
      {step === 1 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIONS.map((item) => {
            const Icon = item.icon;
            const isSelected = form.action === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectAction(item.id)}
                className={`group flex flex-col justify-between rounded-2xl border p-5 text-left transition ${
                  isSelected
                    ? "border-[#1D1D1F] bg-[#F5F5F7] shadow-sm"
                    : "border-[#D2D2D7] bg-[#F5F5F7] hover:border-[#1D1D1F] hover:bg-[#E8E8ED]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-[#1D1D1F] shadow-2xs group-hover:bg-[#1D1D1F] group-hover:text-white transition">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#6E6E73] opacity-0 transition group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#1D1D1F]">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#6E6E73] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#1D1D1F]">
                  Selectează opțiunea →
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* STEP 2: Adaptive Property Fields */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Action indicator tag */}
          <div className="flex items-center justify-between rounded-2xl bg-[#F5F5F7] p-3.5 text-xs">
            <span className="text-[#6E6E73]">
              Obiectiv selectat:{" "}
              <strong className="text-[#1D1D1F]">
                {ACTIONS.find((a) => a.id === form.action)?.label}
              </strong>
            </span>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="font-semibold text-[#1D1D1F] hover:underline"
            >
              Schimbă
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="propertyType">
                Tipul proprietății <span aria-hidden="true" className="text-[#D71920]">*</span>
              </label>
              <select
                id="propertyType"
                value={form.propertyType}
                onChange={(e) => update("propertyType", e.target.value)}
                className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
              >
                <option value="">Alege tipul proprietății</option>
                <option value="Apartament">Apartament</option>
                <option value="Casă / Vilă">Casă / Vilă</option>
                <option value="Teren (intravilan / investiție)">Teren (intravilan / construcții)</option>
                <option value="Spațiu comercial / retail">Spațiu comercial / retail</option>
                <option value="Birou / Clădire de birouri">Birou / Clădire de birouri</option>
                <option value="Hală / Industrial / Depozit">Hală industrială / Depozit logistic</option>
                <option value="Proprietate premium / penthouse">Proprietate premium / Penthouse</option>
                <option value="Alt tip de proprietate">Alt tip</option>
              </select>
            </div>

            {/* Location / Zone */}
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="location">
                Oraș, județ sau zonă vizată
              </label>
              <input
                id="location"
                type="text"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="Ex: București (Nord/Herăstrău), Cluj, Dubai, etc."
                className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
              />
            </div>
          </div>

          {/* Conditional based on action */}
          {form.action === "cumpar" && (
            <div className="space-y-5 border-t border-[#D2D2D7] pt-5">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="budgetMin">
                    Buget minim (Opțional)
                  </label>
                  <input
                    id="budgetMin"
                    type="text"
                    value={form.budgetMin}
                    onChange={(e) => update("budgetMin", e.target.value)}
                    placeholder="Ex: 100.000 EUR"
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="budgetMax">
                    Buget maxim estimat (Opțional)
                  </label>
                  <input
                    id="budgetMax"
                    type="text"
                    value={form.budgetMax}
                    onChange={(e) => update("budgetMax", e.target.value)}
                    placeholder="Ex: 350.000 EUR"
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="financingMethod">
                    Finanțare (Opțional)
                  </label>
                  <select
                    id="financingMethod"
                    value={form.financingMethod}
                    onChange={(e) => update("financingMethod", e.target.value)}
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  >
                    <option value="">Alege modalitatea</option>
                    <option value="Fonduri proprii (cash)">Fonduri proprii (cash)</option>
                    <option value="Credit ipotecar / bancar">Credit ipotecar / bancar</option>
                    <option value="Mixt (avans cash + credit)">Mixt (avans + credit)</option>
                    <option value="Doresc și consultanță creditare">Doresc consultanță creditare (Smart Credit România)</option>
                  </select>
                  {form.financingMethod.includes("creditare") && (
                    <p className="mt-2 text-xs leading-relaxed text-[#6E6E73]">
                      Pentru solicitările privind creditele și finanțarea, colaborez cu Smart Credit România. În funcție de situație, solicitarea poate fi preluată și analizată împreună cu partenerul specializat.
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="rooms">
                    Număr camere / Suprafață utilă (Opțional)
                  </label>
                  <input
                    id="rooms"
                    type="text"
                    value={form.rooms}
                    onChange={(e) => update("rooms", e.target.value)}
                    placeholder="Ex: 3 camere sau min. 80 mp"
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="timeframe">
                    Termen estimat pentru achiziție
                  </label>
                  <select
                    id="timeframe"
                    value={form.timeframe}
                    onChange={(e) => update("timeframe", e.target.value)}
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  >
                    <option value="">Alege orizontul de timp</option>
                    <option value="Imediat (1-2 luni)">Imediat (1 – 2 luni)</option>
                    <option value="Următoarele 3-6 luni">Următoarele 3 – 6 luni</option>
                    <option value="Peste 6 luni / În prospectare">Peste 6 luni (prospectare piață)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {form.action === "vand" && (
            <div className="space-y-5 border-t border-[#D2D2D7] pt-5">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="areaApprox">
                    Suprafață utilă aproximativă
                  </label>
                  <input
                    id="areaApprox"
                    type="text"
                    value={form.areaApprox}
                    onChange={(e) => update("areaApprox", e.target.value)}
                    placeholder="Ex: 120 mp sau 500 mp teren"
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="askingPrice">
                    Preț solicitat dorit (Opțional)
                  </label>
                  <input
                    id="askingPrice"
                    type="text"
                    value={form.askingPrice}
                    onChange={(e) => update("askingPrice", e.target.value)}
                    placeholder="Ex: 240.000 EUR (sau doresc evaluare)"
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="propertyStatus">
                    Situație juridică
                  </label>
                  <select
                    id="propertyStatus"
                    value={form.propertyStatus}
                    onChange={(e) => update("propertyStatus", e.target.value)}
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  >
                    <option value="">Alege situația</option>
                    <option value="Intabulat, acte pregătite">Intabulat, acte pregătite</option>
                    <option value="Ipotecă bancară activă">Ipotecă bancară activă</option>
                    <option value="În curs de finalizare cadastru">În curs de finalizare cadastru</option>
                    <option value="Necesită verificare documente">Doresc sprijin la verificare acte</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {(form.action === "inchiriez_proprietate" || form.action === "caut_chirie") && (
            <div className="space-y-5 border-t border-[#D2D2D7] pt-5">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="askingPrice">
                    {form.action === "inchiriez_proprietate" ? "Chirie solicitată (Opțional)" : "Buget chirie lunară"}
                  </label>
                  <input
                    id="askingPrice"
                    type="text"
                    value={form.askingPrice}
                    onChange={(e) => update("askingPrice", e.target.value)}
                    placeholder="Ex: 750 EUR/lună"
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="rentalPeriod">
                    Perioadă contractuală
                  </label>
                  <select
                    id="rentalPeriod"
                    value={form.rentalPeriod}
                    onChange={(e) => update("rentalPeriod", e.target.value)}
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  >
                    <option value="1 an (standard)">Minim 1 an (standard)</option>
                    <option value="Termen lung (2-5 ani)">Termen lung (2 – 5 ani)</option>
                    <option value="Termen scurt / flexibil">Termen flexibil</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="moveInDate">
                    Disponibilitate / Dată mutare
                  </label>
                  <input
                    id="moveInDate"
                    type="text"
                    value={form.moveInDate}
                    onChange={(e) => update("moveInDate", e.target.value)}
                    placeholder="Ex: Imediat sau de la 1 a lunii"
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {form.action === "investitie" && (
            <div className="space-y-5 border-t border-[#D2D2D7] pt-5">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="investmentGoal">
                    Obiectivul investițional
                  </label>
                  <select
                    id="investmentGoal"
                    value={form.investmentGoal}
                    onChange={(e) => update("investmentGoal", e.target.value)}
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  >
                    <option value="">Alege obiectivul</option>
                    <option value="Venit recurent din chirii (Yield)">Venit pasiv din chirii (Randament)</option>
                    <option value="Apreciere de capital pe termen mediu/lung">Apreciere capital (creștere valoare)</option>
                    <option value="Revânzare rapidă (Flip / Renovare)">Revânzare după renovare (Flip)</option>
                    <option value="Diversificare internațională">Diversificare internațională</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="targetMarket">
                    Piața vizată
                  </label>
                  <select
                    id="targetMarket"
                    value={form.targetMarket}
                    onChange={(e) => update("targetMarket", e.target.value)}
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  >
                    <option value="România (București / Local)">România (București / regional)</option>
                    <option value="Dubai / Emirate">Dubai / Emiratele Arabe Unite</option>
                    <option value="Europa (Monaco / Coasta de Azur / Vest)">Europa (Monaco / destinații premium)</option>
                    <option value="Deschis la propuneri calificate">Deschis la oportunități calificate</option>
                  </select>
                  {form.targetMarket === "Dubai / Emirate" && (
                    <p className="mt-2 text-xs leading-relaxed text-[#6E6E73]">
                      Pentru proprietăți în Dubai, discutăm inițial obiectivele tale, iar activitățile de intermediere sunt gestionate prin punerea în legătură cu un broker local licențiat în acea jurisdicție.
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="budgetMax">
                    Buget aproximativ de plasament
                  </label>
                  <input
                    id="budgetMax"
                    type="text"
                    value={form.budgetMax}
                    onChange={(e) => update("budgetMax", e.target.value)}
                    placeholder="Ex: 150.000 – 500.000 EUR"
                    className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Additional notes */}
          <div>
            <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="additionalDetails">
              Alte cerințe specifice sau detalii despre proprietate (Opțional)
            </label>
            <textarea
              id="additionalDetails"
              rows={3}
              value={form.additionalDetails}
              onChange={(e) => update("additionalDetails", e.target.value)}
              placeholder="Ex: etaj preferat, balcon/terasă, loc de parcare, stadiu finisaje, preferințe de compartimentare etc."
              className="mt-2 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] p-3 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between border-t border-[#D2D2D7] pt-5">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] px-5 py-2.5 text-xs font-semibold text-[#1D1D1F] transition hover:bg-[#F5F5F7]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Înapoi</span>
            </button>
            <button
              type="button"
              onClick={handleNextFromStep2}
              className="inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-6 py-3 text-xs font-medium text-white hover:bg-black shadow-sm transition hover:bg-[#BD82EE]"
            >
              <span>Continuă spre datele de contact</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Contact Details & Submit */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Summary Box */}
          <div className="rounded-2xl border border-[#1D1D1F]/40 bg-[#F5F5F7] p-4 text-xs text-[#1D1D1F]">
            <p className="font-bold text-[#1D1D1F]">
              Rezumat solicitare: {ACTIONS.find((a) => a.id === form.action)?.label}
            </p>
            <p className="mt-1 text-[#6E6E73]">
              {form.propertyType && `Tip: ${form.propertyType}`}
              {form.location && ` • Zonă: ${form.location}`}
              {(form.budgetMax || form.askingPrice) && ` • Buget/Preț: ${form.budgetMax || form.askingPrice}`}
            </p>
          </div>

          <p className="text-xs text-[#6E6E73] leading-relaxed">
            În serviciile imobiliare, rolul meu este stabilit în funcție de partea care solicită și angajează serviciile mele (cumpărător sau vânzător), obiectivele colaborării fiind clarificate transparent de la început.
          </p>

          {/* PF vs PJ selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6E73]">
              Solicitarea este pentru:
            </label>
            <div className="mt-2 inline-flex rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] p-1">
              <button
                type="button"
                onClick={() => update("customerType", "pf")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                  form.customerType === "pf"
                    ? "bg-white text-[#1D1D1F] text-white border border-[#1D1D1F]/40 shadow-sm"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                Persoană Fizică (Individual)
              </button>
              <button
                type="button"
                onClick={() => update("customerType", "pj")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                  form.customerType === "pj"
                    ? "bg-white text-[#1D1D1F] text-white border border-[#1D1D1F]/40 shadow-sm"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                Persoană Juridică (Companie)
              </button>
            </div>
          </div>

          {form.customerType === "pj" && (
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="companyName">
                Denumirea companiei
              </label>
              <input
                id="companyName"
                type="text"
                value={form.companyName}
                onChange={(e) => update("companyName", e.target.value)}
                placeholder="Ex: SC Invest Real Estate SRL"
                className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
              />
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="fullName">
                Nume și prenume <span aria-hidden="true" className="text-[#D71920]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                autoComplete="name"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="phone">
                Telefon direct <span aria-hidden="true" className="text-[#D71920]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="0767 110 439"
                className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="email">
                Adresă de email <span aria-hidden="true" className="text-[#D71920]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-2 min-h-11 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1D1D1F]" htmlFor="message">
              Mesaj suplimentar sau întrebări concrete (Opțional)
            </label>
            <textarea
              id="message"
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Scrie-mi pe scurt situația ta sau detalii particulare despre tranzacție..."
              className="mt-2 w-full rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] p-3 text-sm text-[#1D1D1F] transition focus:border-[#1D1D1F] focus:outline-none"
            />
          </div>

          {/* Privacy Consent */}
          <div className="pt-2">
            <label className="flex items-start gap-3 text-xs leading-relaxed text-[#1D1D1F]">
              <input
                className="mt-0.5 h-4 w-4 shrink-0 rounded accent-[#D5F36A]"
                type="checkbox"
                checked={form.privacyAck}
                onChange={(e) => update("privacyAck", e.target.checked)}
                required
              />
              <span>
                Am luat la cunoștință{" "}
                <Link className="underline font-semibold hover:text-[#1D1D1F]" href="/confidentialitate" target="_blank">
                  informarea privind confidențialitatea datelor
                </Link>
                . <span aria-hidden="true" className="text-[#D71920]">*</span>
              </span>
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between border-t border-[#D2D2D7] pt-5">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] px-5 py-2.5 text-xs font-semibold text-[#1D1D1F] transition hover:bg-[#F5F5F7]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Modifică criteriile</span>
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-7 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-black disabled:opacity-50"
            >
              {submitting ? (
                <span>Se trimite solicitarea...</span>
              ) : (
                <>
                  <span>Trimite solicitarea imobiliară</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* STEP 4: Success confirmation */}
      {step === 4 && (
        <div className="py-8 text-center sm:py-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-emerald-800">
            Solicitare înregistrată cu succes
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1D1F] sm:text-3xl">
            Mulțumesc, {form.fullName}!
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#6E6E73] leading-relaxed">
            Am preluat criteriile tale imobiliare. Voi analiza cerințele și te voi contacta direct pe numărul de telefon ({form.phone}) sau prin email ({form.email}) pentru primii pași concreți.
          </p>

          {savedId && (
            <div className="mx-auto mt-6 max-w-xs rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] p-3 text-xs text-[#6E6E73]">
              Număr de referință solicitare: <strong className="text-[#1D1D1F]">{savedId}</strong>
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-[#D2D2D7] px-6 py-2.5 text-xs font-semibold text-[#1D1D1F] transition hover:bg-[#F5F5F7]"
            >
              Trimite o altă solicitare
            </button>
            <Link
              href="/"
              className="rounded-full bg-[#1D1D1F] px-6 py-3 text-xs font-medium text-white hover:bg-black shadow-sm transition hover:bg-black"
            >
              Înapoi la pagina principală
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
