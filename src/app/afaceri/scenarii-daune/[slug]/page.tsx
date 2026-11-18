import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CLAIM_SCENARIOS } from "@/data/business/scenarios";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  FileText,
  Users,
  CheckCircle2,
  Clock,
  HelpCircle,
  FileWarning,
} from "lucide-react";

import { SITE } from "@/config/site";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return CLAIM_SCENARIOS.map((sc) => ({
    slug: sc.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const scenario = CLAIM_SCENARIOS.find((s) => s.slug === params.slug);
  if (!scenario) return { title: "Scenariu inexistent" };

  return {
    title: `${scenario.title} | Scenarii de daune`,
    description: scenario.shortSummary,
    alternates: {
      canonical: `${SITE.publicUrl}/afaceri/scenarii-daune/${scenario.slug}`,
    },
  };
}

export default function ScenarioDetailPage({ params }: Props) {
  const scenario = CLAIM_SCENARIOS.find((s) => s.slug === params.slug);

  if (!scenario) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Back Link */}
      <Link
        href="/afaceri/scenarii-daune"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la toate scenariile de daune
      </Link>

      {/* Header */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
            {scenario.industry}
          </span>
          <span className="text-xs font-semibold text-muted">Simulare educațională / Scenariu ilustrativ</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {scenario.title}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-muted">{scenario.shortSummary}</p>
      </div>

      {/* Trigger Event & Concrete Damages */}
      <div className="mt-10 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-ink">1. Ce s-a întâmplat (Evenimentul declanșator)</h2>
        <p className="mt-3 text-base leading-relaxed text-ink/80">{scenario.triggerEvent}</p>

        <div className="mt-8 border-t border-line/60 pt-6">
          <h3 className="text-base font-bold text-ink">Pagube estimate (valori ipotetice de scenariu pentru analiză didactică):</h3>
          <div className="mt-4 space-y-2.5">
            {scenario.concreteDamages.map((dmg, idx) => (
              <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-wash p-4 text-sm text-ink">
                <span className="font-bold text-brand">•</span>
                <span>{dmg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parties Involved & Relevant Policies */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Parties */}
        <div className="rounded-2xl border border-line bg-white p-6">
          <div className="flex items-center gap-2 text-base font-bold text-ink">
            <Users className="h-5 w-5 text-indigo-600" />
            <h3>Părți implicate</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {scenario.partiesInvolved.map((p, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-ink/80">
                <span className="font-bold text-indigo-600">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Relevant Policies */}
        <div className="rounded-2xl border border-line bg-white p-6">
          <div className="flex items-center gap-2 text-base font-bold text-ink">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <h3>Polițe de asigurare relevante</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {scenario.relevantPolicies.map((pol, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-ink/80">
                <span className="font-bold text-emerald-600">•</span>
                <span>{pol}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Claims Process Steps */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-ink">
          <Clock className="h-5 w-5 text-brand" />
          <h2>Derularea dosarului de daună pas cu pas</h2>
        </div>
        <div className="mt-4 space-y-3">
          {scenario.claimsProcessSteps.map((step, idx) => (
            <div key={idx} className="rounded-xl border border-line/60 bg-wash/30 p-4 text-xs leading-relaxed text-ink">
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Critical Checks */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-ink">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
          <h2>Ce verifică inspectorul de daune și experții tehnici</h2>
        </div>
        <div className="mt-4 space-y-2.5">
          {scenario.criticalChecks.map((chk, idx) => (
            <div key={idx} className="flex items-start gap-2 rounded-xl bg-wash p-3.5 text-xs text-ink">
              <span className="font-bold text-blue-600">✓</span>
              <span>{chk}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Traps & Exclusions */}
      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-amber-950">
          <FileWarning className="h-5 w-5 text-amber-700" />
          <h2>Unde se pot pierde banii: Capcane și motive de respingere</h2>
        </div>
        <ul className="mt-4 space-y-2.5">
          {scenario.trapsAndExclusions.map((trap, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-amber-950">
              <span className="font-bold text-amber-700">⚠️</span>
              <span>{trap}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Required Documents */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-ink">
          <FileText className="h-5 w-5 text-slate-700" />
          <h2>Documente uzual solicitate de asigurători în astfel de dosare</h2>
        </div>
        <ul className="mt-4 space-y-2">
          {scenario.requiredDocuments.map((doc, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-ink/80">
              <span className="font-bold text-slate-700">•</span>
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Educational Disclaimer */}
      <div className="mt-8 rounded-2xl border border-line bg-slate-50 p-6 text-xs leading-relaxed text-muted">
        <strong className="text-ink">Notă legală și metodologică: </strong>
        {scenario.educationalDisclaimer}
      </div>

      {/* Help Desk CTA */}
      <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Prevenție & Asistență la Daună
          </span>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Vrei să verifici dacă polițele tale te protejează într-un astfel de scenariu?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Trimite-ne o solicitare de asistență pentru un audit gratuit al riscurilor din contractele tale actuale.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/asigurari?ajutor=dauna&tip=pj"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
            >
              Asistență la daună sau verificare poliță
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Evaluare riscuri afacere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
