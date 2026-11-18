import Link from "next/link";
import { Metadata } from "next";
import { WHAT_IF_SCENARIOS } from "@/data/business/what-if";
import {
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  AlertTriangle,
  ShieldCheck,
  Scale,
  Sparkles,
} from "lucide-react";

import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Ce se întâmplă dacă? | Răspunderi și asigurări",
  description:
    "12 situații critice pentru antreprenori și manageri: consecințe juridice, impact financiar și soluții de protecție.",
  alternates: {
    canonical: `${SITE.publicUrl}/afaceri/ce-se-intampla-daca`,
  },
};

export default function WhatIfPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/afaceri"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la hub-ul Protecția Afacerii
      </Link>

      <div className="mt-6 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">
          12 Întrebări Critice & Analize Juridice
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          „Ce se întâmplă dacă?”
        </h1>
        <p className="mt-4 text-lg text-muted">
          Majoritatea firmelor descoperă lacunele din asigurări abia după ce sinistrul s-a produs. Am analizat consecințele juridice, impactul financiar imediat și soluțiile reale de protecție pentru 12 situații extreme din mediul de afaceri românesc.
        </p>
      </div>

      {/* Quick Jump Index */}
      <div className="mt-8 rounded-2xl border border-line bg-wash p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          Navigare rapidă către întrebări:
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {WHAT_IF_SCENARIOS.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.slug}`}
              className="line-clamp-1 text-xs font-medium text-ink hover:text-brand"
            >
              {idx + 1}. {item.question}
            </a>
          ))}
        </div>
      </div>

      {/* 12 Detailed Scenarios */}
      <div className="mt-14 space-y-12">
        {WHAT_IF_SCENARIOS.map((item, idx) => (
          <section
            key={item.id}
            id={item.slug}
            className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-10"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                {idx + 1}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Întrebare critică
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
              {item.question}
            </h2>

            {/* Short Answer Callout */}
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-sm font-semibold text-emerald-950">
              <strong className="text-emerald-800">Răspuns pe scurt: </strong>
              {item.shortAnswer}
            </div>

            {/* Detailed Analysis */}
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted">
                Analiză detaliată și context operațional
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink/80">
                {item.detailedAnalysis}
              </p>
            </div>

            {/* Immediate Impact */}
            <div className="mt-6 border-t border-line/60 pt-6">
              <h4 className="flex items-center gap-2 text-sm font-bold text-red-950">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                Impact imediat și riscuri directe pentru firmă:
              </h4>
              <ul className="mt-3 space-y-2">
                {item.immediateImpact.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-ink/90">
                    <span className="font-bold text-red-600">•</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance Intervention */}
            <div className="mt-6 rounded-2xl border border-line bg-wash/60 p-5">
              <h4 className="flex items-center gap-2 text-sm font-bold text-ink">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Cum intervine asigurarea adecvată:
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-ink/80">
                {item.insuranceIntervention}
              </p>
            </div>

            {/* Uninsurable Aspects & Mitigation (2 Cols) */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line/70 bg-white p-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Ce NU se poate asigura (Atenție!):
                </h5>
                <p className="mt-1.5 text-xs text-muted">{item.uninsurableAspects}</p>
              </div>

              <div className="rounded-xl border border-line/70 bg-white p-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-ink">
                  Pași recomandați de prevenție:
                </h5>
                <ul className="mt-1.5 space-y-1 text-xs text-muted">
                  {item.mitigationSteps.map((step, sIdx) => (
                    <li key={sIdx}>• {step}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal Basis */}
            {item.legalBasis && (
              <div className="mt-6 flex items-center gap-2 text-xs text-muted border-t border-line/60 pt-4">
                <Scale className="h-4 w-4 text-slate-500" />
                <span>
                  <strong className="text-ink">Referință legală: </strong>
                  {item.legalBasis}
                </span>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Help Desk CTA */}
      <div className="mt-16 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Asistență dedicată
          </span>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Ai o situație particulară care nu se regăsește aici?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Adresează-ne întrebarea ta gratuit prin formularul de asistență și analizăm condițiile tale contractuale specifice.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/asigurari?ajutor=intrebare&tip=pj"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
            >
              Adresează o întrebare despre afacerea ta
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Chestionar evaluare riscuri
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
