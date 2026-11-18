import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BUSINESS_CATEGORIES } from "@/data/business/categories";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  FileQuestion,
  Scale,
  ListChecks,
  CheckCircle2,
  Building,
} from "lucide-react";

import { SITE } from "@/config/site";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BUSINESS_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = BUSINESS_CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) return { title: "Categorie inexistentă" };

  return {
    title: `${category.title} | Asigurări companii`,
    description: category.shortDesc,
    alternates: {
      canonical: `${SITE.publicUrl}/afaceri/categorii/${category.slug}`,
    },
  };
}

export default function CategoryDetailPage({ params }: Props) {
  const category = BUSINESS_CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const prefillUrl = `/asigurari?ajutor=oferta&tip=pj&categorie=${encodeURIComponent(
    category.helpDeskPrefill.category
  )}&mesaj=${encodeURIComponent(category.helpDeskPrefill.messageIntro)}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Breadcrumb / Back Link */}
      <Link
        href="/afaceri/categorii"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la toate categoriile
      </Link>

      {/* Header */}
      <div className="mt-6">
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          Ghid de categorie comercială
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {category.title}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-muted">{category.shortDesc}</p>
      </div>

      {/* Overview section */}
      <div className="mt-10 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-ink">Prezentare generală și rol operațional</h2>
        <p className="mt-3 text-base leading-relaxed text-ink/80">{category.overview}</p>

        <div className="mt-6 border-t border-line/60 pt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Cui i se adresează în mod deosebit:
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {category.targetAudience.map((target, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{target}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Risks & Common Exclusions (2 Columns) */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Risks Covered */}
        <div className="rounded-2xl border border-line bg-white p-6">
          <div className="flex items-center gap-2 text-base font-bold text-ink">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <h3>Riscuri acoperite tipice</h3>
          </div>
          <p className="mt-2 text-xs text-muted">
            Principalele pericole pentru care această poliță oferă despăgubire financiară:
          </p>
          <ul className="mt-4 space-y-2.5">
            {category.keyRisksCovered.map((risk, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-ink/90">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="rounded-2xl border border-line bg-white p-6">
          <div className="flex items-center gap-2 text-base font-bold text-ink">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h3>Excluderi frecvente & capcane</h3>
          </div>
          <p className="mt-2 text-xs text-muted">
            Situații în care asigurătorul poate refuza plata dacă nu sunt negociate clauze speciale:
          </p>
          <ul className="mt-4 space-y-2.5">
            {category.commonExclusions.map((excl, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-ink/90">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                <span>{excl}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Underwriting Requirements */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-ink">
          <ListChecks className="h-5 w-5 text-brand" />
          <h2>Ce informații și documente cere asigurătorul pentru ofertare</h2>
        </div>
        <p className="mt-2 text-sm text-muted">
          Pentru a primi o cotație exactă (fără marje de siguranță inutile), pregătește din timp următoarele elemente:
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {category.underwritingRequirements.map((req, idx) => (
            <div key={idx} className="flex items-start gap-2 rounded-xl bg-wash p-3.5 text-xs text-ink">
              <span className="font-bold text-brand">•</span>
              <span>{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Questions to Ask the Broker/Insurer */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-ink">
          <FileQuestion className="h-5 w-5 text-blue-600" />
          <h2>Întrebări esențiale pe care să le adresezi înainte de a semna</h2>
        </div>
        <p className="mt-2 text-sm text-muted">
          Adresează aceste întrebări consultantului sau asigurătorului tău pentru a clarifica din timp condițiile contractuale:
        </p>
        <div className="mt-4 space-y-3">
          {category.practicalQuestions.map((q, idx) => (
            <div key={idx} className="rounded-xl border border-line/60 bg-white p-4 text-sm text-ink">
              <span className="font-semibold text-brand">Q{idx + 1}: </span>
              {q}
            </div>
          ))}
        </div>
      </div>

      {/* Legal & Statutory Notes */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900">
          <Scale className="h-5 w-5 text-slate-700" />
          <h3>Cadrul legal și reglementări aplicabile</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{category.legalNotes}</p>
      </div>

      {/* Direct Help Desk Action Box */}
      <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Asistență gratuită și personalizată
          </span>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Vrei o simulare de ofertă pentru această categorie?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Click pe butonul de mai jos pentru a deschide formularul de asistență precompletat pentru persoană juridică și această categorie de asigurare.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={prefillUrl}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
            >
              Continuă în asistent cu această categorie
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Evaluează riscurile complete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
