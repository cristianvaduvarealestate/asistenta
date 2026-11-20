"use client";

import React, { useState, useEffect, useRef, Component, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { SITE } from "@/config/site";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Loader2,
  RefreshCw,
  FileText,
} from "lucide-react";

// Client-side Error Boundary to catch render failures in the interactive app
interface ErrorBoundaryProps {
  fallback: (error: Error, reset: () => void) => ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class HelpDeskErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[HelpDeskErrorBoundary caught error]:", error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback(this.state.error, this.reset);
    }
    return this.props.children;
  }
}

// Dynamically import the multi-step HelpDeskApp with ssr: false
const HelpDeskApp = dynamic(
  () => import("./HelpDeskApp").then((mod) => mod.HelpDeskApp),
  {
    ssr: false,
    loading: () => <HelpDeskLoadingSkeleton />,
  }
);

function HelpDeskLoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <Loader2 className="h-8 w-8 animate-spin text-[#1D1D1F] mb-4" />
      <span className="text-base font-semibold text-[#1D1D1F]">
        Se pregătește asistentul de asigurări...
      </span>
      <p className="mt-1.5 text-xs text-[#6E6E73] max-w-sm">
        Încărcăm ghidul pas cu pas pentru o ofertă personalizată Generali România.
      </p>
    </div>
  );
}

export function InsuranceConversionContainer() {
  const [preferFallback, setPreferFallback] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timeoutTriggered, setTimeoutTriggered] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Timeout safeguard: after 4 seconds, offer smooth fallback option
    const timer = setTimeout(() => {
      setTimeoutTriggered(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Fallback Switcher banner if timeout was triggered */}
      {timeoutTriggered && !preferFallback && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] px-4 py-3 text-xs text-[#424245]">
          <span>
            Dorești să trimiți solicitarea rapid, printr-un formular simplificat?
          </span>
          <button
            type="button"
            onClick={() => setPreferFallback(true)}
            className="font-semibold text-[#1D1D1F] hover:underline"
          >
            Comută la formularul direct →
          </button>
        </div>
      )}

      {/* Interactive App Mode */}
      {!preferFallback && (
        <HelpDeskErrorBoundary
          fallback={(error, reset) => (
            <div className="p-6 text-center space-y-4">
              <AlertCircle className="h-10 w-10 text-[#424245] mx-auto" />
              <h3 className="text-lg font-semibold text-[#1D1D1F]">
                Asistentul interactiv întâmpină o problemă temporară
              </h3>
              <p className="text-xs text-[#6E6E73] max-w-md mx-auto">
                Nu-ți face griji, poți trimite detaliile folosind formularul direct de mai jos sau ne poți contacta telefonic.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={reset}
                  className="apple-btn-secondary inline-flex items-center gap-2 !py-2 !px-4 !text-xs"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Reîncearcă</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreferFallback(true)}
                  className="apple-btn-primary !py-2 !px-4 !text-xs"
                >
                  Deschide formularul direct
                </button>
              </div>
            </div>
          )}
        >
          <HelpDeskApp />
        </HelpDeskErrorBoundary>
      )}

      {/* Streamlined Resilient Fallback Form Mode */}
      {preferFallback && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E8E8ED] pb-4">
            <div>
              <h3 className="text-xl font-semibold text-[#1D1D1F]">
                Solicitare directă de asigurare
              </h3>
              <p className="text-xs text-[#6E6E73] mt-0.5">
                Completează datele esențiale și te contactez în cel mai scurt timp.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPreferFallback(false)}
              className="text-xs text-[#6E6E73] hover:text-[#1D1D1F] underline"
            >
              Înapoi la asistentul interactiv
            </button>
          </div>

          <StreamlinedFallbackForm />
        </div>
      )}

      {/* Direct Contact Bar below Form */}
      <div className="mt-8 pt-6 border-t border-[#E8E8ED] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6E73]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#1D1D1F]" />
          <span>Fără CNP sau date bancare. Răspuns direct de la Cristian Văduva.</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-1.5 font-medium text-[#1D1D1F] hover:underline"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <span>•</span>
          <a
            href={SITE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[#1D1D1F] hover:underline"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>WhatsApp direct ({SITE.whatsappDisplay})</span>
          </a>
        </div>
      </div>

      {/* Standard <noscript> fallback for non-JS visitors */}
      <noscript>
        <div className="mt-8 rounded-2xl border border-[#D2D2D7] bg-[#F5F5F7] p-6">
          <h4 className="text-base font-semibold text-[#1D1D1F] mb-2">
            Formular de solicitare (fără JavaScript activ)
          </h4>
          <p className="text-xs text-[#6E6E73] mb-5">
            Poți trimite solicitarea direct prin formularul HTML de mai jos sau ne poți apela la {SITE.phoneDisplay}.
          </p>

          <form action="/api/requests" method="POST" className="space-y-4">
            <input type="hidden" name="flow" value="oferta" />
            <input type="hidden" name="website" value="" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                  Tip solicitant *
                </label>
                <select
                  name="customerType"
                  className="w-full rounded-xl border border-[#D2D2D7] bg-white p-2.5 text-xs text-[#1D1D1F]"
                  required
                >
                  <option value="pf">Persoană Fizică</option>
                  <option value="pj">Persoană Juridică (Firmă)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                  Tip asigurare *
                </label>
                <select
                  name="category"
                  className="w-full rounded-xl border border-[#D2D2D7] bg-white p-2.5 text-xs text-[#1D1D1F]"
                  required
                >
                  <option value="Auto CASCO & RCA">Auto (CASCO & RCA)</option>
                  <option value="Locuință & Bunuri">Locuință & Bunuri</option>
                  <option value="Sănătate & Familie">Sănătate & Familie</option>
                  <option value="Călătorie & Asistență">Călătorie & Asistență</option>
                  <option value="Afaceri & Răspunderi Comerciale">Afaceri & Răspunderi Comerciale</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                  Nume complet sau Denumire firmă *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="ex. Andrei Popescu"
                  className="w-full rounded-xl border border-[#D2D2D7] bg-white p-2.5 text-xs text-[#1D1D1F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                  Telefon mobil *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="07xxxxxxxx"
                  className="w-full rounded-xl border border-[#D2D2D7] bg-white p-2.5 text-xs text-[#1D1D1F]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                Adresă de email *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="nume@exemplu.ro"
                className="w-full rounded-xl border border-[#D2D2D7] bg-white p-2.5 text-xs text-[#1D1D1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                Detalii sau cerințe speciale (opțional)
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Spune-ne ce este cel mai important pentru tine..."
                className="w-full rounded-xl border border-[#D2D2D7] bg-white p-2.5 text-xs text-[#1D1D1F]"
              />
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                name="privacyAck"
                id="noscript-privacy"
                required
                className="mt-0.5 h-4 w-4 rounded border-[#D2D2D7]"
              />
              <label htmlFor="noscript-privacy" className="text-[11px] text-[#6E6E73] leading-relaxed">
                Confirm că am citit și sunt de acord cu politica de confidențialitate pentru prelucrarea datelor de contact.
              </label>
            </div>

            <button
              type="submit"
              className="apple-btn-primary w-full sm:w-auto !py-2.5 !px-6 !text-xs font-semibold"
            >
              Trimite solicitarea
            </button>
          </form>
        </div>
      </noscript>
    </div>
  );
}

// Client Fallback Form Component with React State & API Integration
function StreamlinedFallbackForm() {
  const [customerType, setCustomerType] = useState<"pf" | "pj">("pf");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Auto CASCO & RCA");
  const [message, setMessage] = useState("");
  const [privacyAck, setPrivacyAck] = useState(false);
  const [website, setWebsite] = useState(""); // Honeypot

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const startedAt = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAck) {
      setStatus("error");
      setErrorMessage("Te rugăm să confirmi acordul de confidențialitate.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flow: "oferta",
          customerType,
          fullName: customerType === "pj" && companyName ? `${fullName} (${companyName})` : fullName,
          companyName: customerType === "pj" ? companyName : undefined,
          phone,
          email,
          category,
          message,
          privacyAck: true,
          website,
          formStartedAt: startedAt.current,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data?.error ||
            "A apărut o problemă la transmiterea solicitării. Te rugăm să mă suni direct la 0767 110 439."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Conexiunea a fost întreruptă. Mă poți contacta oricând telefonic la 0767 110 439 sau pe WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-[#D2D2D7] bg-[#F5F5F7] p-8 text-center space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm border border-[#D2D2D7]">
          <CheckCircle2 className="h-8 w-8 text-[#1D1D1F]" />
        </div>
        <h4 className="text-xl font-semibold text-[#1D1D1F]">
          Solicitarea ta a fost transmisă!
        </h4>
        <p className="text-sm text-[#6E6E73] max-w-md mx-auto leading-relaxed">
          Mulțumesc! Am primit detaliile tale și voi analiza opțiunile potrivite prin Generali România. Te voi contacta în cel mai scurt timp la numărul specificat.
        </p>
        <div className="pt-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="apple-btn-secondary inline-flex items-center gap-2 !py-2 !px-4 !text-xs"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Ai nevoie de răspuns urgent? Sună la {SITE.phoneDisplay}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field for bot filtering */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs text-red-800">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
          <div>
            <span className="font-semibold block">Eroare de transmitere</span>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      {/* Customer Type Selector */}
      <div>
        <label className="block text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-2">
          Calitate solicitant
        </label>
        <div className="grid grid-cols-2 gap-3 max-w-sm">
          <button
            type="button"
            onClick={() => setCustomerType("pf")}
            className={`rounded-2xl border py-2.5 px-4 text-xs font-medium transition ${
              customerType === "pf"
                ? "border-[#1D1D1F] bg-[#1D1D1F] text-white"
                : "border-[#D2D2D7] bg-white text-[#424245] hover:bg-[#F5F5F7]"
            }`}
          >
            Persoană Fizică
          </button>
          <button
            type="button"
            onClick={() => setCustomerType("pj")}
            className={`rounded-2xl border py-2.5 px-4 text-xs font-medium transition ${
              customerType === "pj"
                ? "border-[#1D1D1F] bg-[#1D1D1F] text-white"
                : "border-[#D2D2D7] bg-white text-[#424245] hover:bg-[#F5F5F7]"
            }`}
          >
            Companie (PJ)
          </button>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-1.5">
            {customerType === "pf" ? "Nume complet *" : "Persoană de contact *"}
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="ex. Maria Ionescu"
            className="w-full rounded-2xl border border-[#D2D2D7] bg-white px-3.5 py-2.5 text-sm text-[#1D1D1F] placeholder:text-[#6E6E73] focus:border-[#1D1D1F] focus:outline-none"
          />
        </div>

        {customerType === "pj" && (
          <div>
            <label className="block text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-1.5">
              Denumire companie *
            </label>
            <input
              type="text"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="ex. SC Exemplu SRL"
              className="w-full rounded-2xl border border-[#D2D2D7] bg-white px-3.5 py-2.5 text-sm text-[#1D1D1F] placeholder:text-[#6E6E73] focus:border-[#1D1D1F] focus:outline-none"
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-1.5">
            Telefon mobil *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07xxxxxxxx sau +407xxxxxxxx"
            className="w-full rounded-2xl border border-[#D2D2D7] bg-white px-3.5 py-2.5 text-sm text-[#1D1D1F] placeholder:text-[#6E6E73] focus:border-[#1D1D1F] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-1.5">
            Adresă de email *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@exemplu.ro"
            className="w-full rounded-2xl border border-[#D2D2D7] bg-white px-3.5 py-2.5 text-sm text-[#1D1D1F] placeholder:text-[#6E6E73] focus:border-[#1D1D1F] focus:outline-none"
          />
        </div>

        <div className={customerType === "pf" ? "sm:col-span-2" : ""}>
          <label className="block text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-1.5">
            Tipul de asigurare dorit *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-2xl border border-[#D2D2D7] bg-white px-3.5 py-2.5 text-sm text-[#1D1D1F] focus:border-[#1D1D1F] focus:outline-none"
          >
            <option value="Auto CASCO & RCA">Auto (CASCO complet & RCA)</option>
            <option value="Locuință & Bunuri">Locuință (PAD + Facultativă cămin)</option>
            <option value="Sănătate & Familie">Sănătate privată & Spitalizare</option>
            <option value="Călătorie & Asistență">Călătorie internațională & Medical</option>
            <option value="Afaceri & Răspunderi Comerciale">Sedii, flote & Răspundere profesională IMM</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-1.5">
          Mențiuni sau detalii (opțional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Exemplu: an de fabricație mașină, suprafață aproximativă casă sau data scadenței..."
          className="w-full rounded-2xl border border-[#D2D2D7] bg-white px-3.5 py-2.5 text-sm text-[#1D1D1F] placeholder:text-[#6E6E73] focus:border-[#1D1D1F] focus:outline-none"
        />
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="fallback-privacy"
          checked={privacyAck}
          onChange={(e) => setPrivacyAck(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 rounded border-[#D2D2D7] text-[#1D1D1F] focus:ring-[#1D1D1F]"
        />
        <label htmlFor="fallback-privacy" className="text-xs text-[#6E6E73] leading-relaxed cursor-pointer">
          Sunt de acord cu prelucrarea datelor de contact pentru formularea ofertei prin Generali România conform politicii de confidențialitate.
        </label>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="apple-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Se transmite solicitarea...</span>
            </>
          ) : (
            <span>Trimite solicitarea de ofertă</span>
          )}
        </button>
      </div>
    </form>
  );
}
