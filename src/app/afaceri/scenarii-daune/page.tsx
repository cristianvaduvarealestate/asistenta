import Link from "next/link";
import { Metadata } from "next";
import { CLAIM_SCENARIOS } from "@/data/business/scenarios";
import { ArrowLeft, ArrowRight, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Biblioteca Scenariilor de Daune Comerciale — Simulări Educaționale & Analiză Didactică",
  description:
    "20 de scenarii ilustrative și simulări educaționale de daune pentru companii din România: incendii, avarii de utilaje, atacuri cibernetice, toxiinfecții, erori profesionale, furturi și catastrofe.",
};

export default function ScenariosIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/afaceri"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la hub-ul Protecția Afacerii
      </Link>

      <div className="mt-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">
          Simulări educaționale bazate pe practica pieței (20 scenarii)
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Biblioteca Scenariilor de Daune Comerciale
        </h1>
        <p className="mt-4 text-lg text-muted">
          Scenarii ilustrative și simulări educaționale bazate pe practica instrumentării dosarelor de daune din România: analiza riscurilor declanșatoare, valorile ipotetice ale pagubelor, polițele aplicabile, documentele uzuale și capcanele contractuale de respingere.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CLAIM_SCENARIOS.map((sc, idx) => (
          <div
            key={sc.id}
            className="flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                  Scenariu #{idx + 1}
                </span>
                <span className="text-[11px] font-medium text-muted">{sc.industry}</span>
              </div>

              <h2 className="mt-3 text-lg font-bold text-ink hover:text-brand">
                <Link href={`/afaceri/scenarii-daune/${sc.slug}`}>{sc.title}</Link>
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">{sc.shortSummary}</p>

              <div className="mt-4 border-t border-line/50 pt-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Polițe relevante:
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {sc.relevantPolicies.slice(0, 2).map((pol, i) => (
                    <span
                      key={i}
                      className="rounded bg-wash px-2 py-0.5 text-[10px] font-medium text-slate-700"
                    >
                      {pol}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-4">
              <Link
                href={`/afaceri/scenarii-daune/${sc.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
              >
                Analiza completă a cazului
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
