import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BUSINESS_PRODUCTS } from "@/data/business/products";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Scale,
  ListChecks,
  HelpCircle,
  Clock,
  Coins,
  FileText,
} from "lucide-react";

import { SITE } from "@/config/site";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BUSINESS_PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = BUSINESS_PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return { title: "Produs inexistent" };

  return {
    title: `${product.name} | Ghid polițe comerciale`,
    description: product.shortDesc,
    alternates: {
      canonical: `${SITE.publicUrl}/afaceri/ghid-asigurari/${product.slug}`,
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = BUSINESS_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const prefillUrl = `/asigurari?ajutor=oferta&tip=pj&categorie=${encodeURIComponent(
    product.helpDeskPrefill.category
  )}&mesaj=${encodeURIComponent(product.helpDeskPrefill.messageIntro)}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Back Link */}
      <Link
        href="/afaceri/ghid-asigurari"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la toate produsele
      </Link>

      {/* Header */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-brand px-2.5 py-1 text-xs font-bold text-white">
            {product.acronym || "GHID POLIȚĂ"}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            {product.category}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {product.name}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-muted">{product.shortDesc}</p>
      </div>

      {/* Overview & Target Audience */}
      <div className="mt-10 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-ink">Ce este această poliță și cum funcționează</h2>
        <p className="mt-3 text-base leading-relaxed text-ink/80">{product.overview}</p>

        <div className="mt-6 border-t border-line/60 pt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
            Cui se adresează în mod deosebit:
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.targetAudience.map((target, idx) => (
              <span
                key={idx}
                className="rounded-full border border-line bg-wash px-3 py-1 text-xs font-medium text-ink"
              >
                {target}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key Coverages & Deductibles (2 Cols) */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Coverages */}
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-base font-bold text-ink">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <h3>Acoperiri cheie incluse</h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {product.keyCoverages.map((cov, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-ink/90">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                <span>{cov}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limits & Sublimits */}
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-base font-bold text-ink">
            <Coins className="h-5 w-5 text-blue-600" />
            <h3>Limite și sub-limite tipice</h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {product.limitsAndSublimits.map((lim, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-ink/90">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                <span>{lim}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-line/60 pt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink">Cum funcționează franșizele (Deductibles):</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              {product.deductiblesExplanation}
            </p>
          </div>
        </div>
      </div>

      {/* Common Exclusions */}
      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/40 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-amber-950">
          <AlertTriangle className="h-5 w-5 text-amber-700" />
          <h2>Excluderi majore și limitări frecvente</h2>
        </div>
        <p className="mt-2 text-xs text-amber-800">
          Ce NU acoperă această poliță conform condițiilor generale de piață:
        </p>
        <ul className="mt-4 space-y-2">
          {product.commonExclusions.map((excl, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-amber-950">
              <span className="font-bold text-amber-700">•</span>
              <span>{excl}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Underwriting Requirements */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-ink">
          <ListChecks className="h-5 w-5 text-brand" />
          <h2>Informații solicitate de asigurător pentru ofertare</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {product.underwritingRequirements.map((req, idx) => (
            <div key={idx} className="flex items-start gap-2 rounded-xl bg-wash p-3.5 text-xs text-ink">
              <span className="font-bold text-brand">•</span>
              <span>{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Claims Procedure */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-ink">
          <Clock className="h-5 w-5 text-indigo-600" />
          <h2>Ce trebuie să faci pas cu pas în caz de daună</h2>
        </div>
        <div className="mt-4 space-y-3">
          {product.claimsProcedure.map((step, idx) => (
            <div key={idx} className="rounded-xl border border-line/60 bg-wash/30 p-4 text-xs leading-relaxed text-ink">
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Questions to Ask Insurer */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-lg font-bold text-ink">
          <HelpCircle className="h-5 w-5 text-brand" />
          <h2>Întrebări critice de pus asigurătorului înainte de semnare</h2>
        </div>
        <div className="mt-4 space-y-2.5">
          {product.questionsToAskInsurer.map((q, idx) => (
            <div key={idx} className="flex items-start gap-2 rounded-xl bg-wash p-3.5 text-xs text-ink">
              <span className="font-bold text-brand">Q:</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Reference */}
      {product.officialLawReference && (
        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-700">
          <Scale className="h-5 w-5 shrink-0 text-slate-500" />
          <div>
            <strong className="text-slate-900">Baza legală de referință: </strong>
            {product.officialLawReference}
          </div>
        </div>
      )}

      {/* Help Desk CTA */}
      <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Asistență gratuită și fără obligații
          </span>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Vrei o ofertă personalizată pentru {product.name}?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Deschide solicitarea de asistență pentru a primi clarificări și opțiuni de la asigurătorii autorizați din România.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={prefillUrl}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
            >
              Cere ofertă pentru această poliță
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Evaluare riscuri firmă
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
