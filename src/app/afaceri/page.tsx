import Link from "next/link";
import { Metadata } from "next";
import { SITE } from "@/config/site";
import { BUSINESS_CATEGORIES } from "@/data/business/categories";
import { BUSINESS_INDUSTRIES } from "@/data/business/industries";
import { BUSINESS_CHECKLISTS } from "@/data/business/checklists";
import { WHAT_IF_SCENARIOS } from "@/data/business/what-if";
import {
  ShieldCheck,
  Building2,
  AlertTriangle,
  Scale,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Protecția Afacerii Tale — Consultanță B2B | Cristian Văduva",
  description:
    "Ghid complet de asigurări comerciale și riscuri pentru companii. Soluții de protecție pentru clădiri, utilaje, flote și răspunderi profesionale.",
  alternates: {
    canonical: `${SITE.publicUrl}/afaceri`,
  },
  openGraph: {
    title: "Protecția Afacerii Tale — Consultanță B2B | Cristian Văduva",
    description:
      "Ghid complet de asigurări comerciale și riscuri pentru companii din România.",
    url: `${SITE.publicUrl}/afaceri`,
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Protecția Afacerii Tale — Consultanță B2B | Cristian Văduva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protecția Afacerii Tale — Consultanță B2B | Cristian Văduva",
    description:
      "Ghid complet de asigurări comerciale și riscuri pentru companii din România. Soluții de protecție pentru clădiri, utilaje, flote și răspunderi profesionale.",
    images: [`${SITE.publicUrl}/images/og-asistenta.jpg`],
  },
};

export default function BusinessProtectionHub() {
  return (
    <div className="bg-white text-[#1D1D1F]">
      {/* ========================================================================= */}
      {/* 1. HERO — APPLE B2B EDITORIAL */}
      {/* ========================================================================= */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6E6E73] mb-6">
            <Link href="/" className="hover:text-[#1D1D1F] transition">
              Prezentare
            </Link>
            <span>/</span>
            <span>Companii & B2B</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]">
            Protecția afacerii tale. <br />
            <span className="text-[#6E6E73]">Audit de risc & consultanță.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed">
            O afacere înseamnă investiții, oameni și responsabilități. Descoperă ce riscuri pot afecta compania ta și cum construiești un program de protecție adaptat activității tale comerciale.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/afaceri/evaluare-riscuri" className="apple-btn-primary">
              Evaluează riscurile firmei tale
            </Link>
            <Link href="/afaceri/domenii" className="apple-btn-secondary">
              Biblioteca de industrii
            </Link>
            <Link href="/asigurari?ajutor=oferta&tip=pj" className="apple-btn-secondary">
              Cere ofertă dedicată PJ
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUR CORE MODULES */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-[#F5F5F7]">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/afaceri/evaluare-riscuri"
              className="group rounded-3xl border border-[#E8E8ED] bg-white p-6 transition hover:border-[#6E6E73] hover:shadow-apple"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#1D1D1F]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-[#1D1D1F] group-hover:opacity-80 transition">
                Evaluare Riscuri
              </h2>
              <p className="mt-1 text-xs text-[#6E6E73]">
                17 întrebări structurate pentru identificarea vulnerabilităților majore ale companiei tale.
              </p>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#1D1D1F]">
                Lansează chestionarul →
              </span>
            </Link>

            <Link
              href="/afaceri/domenii"
              className="group rounded-3xl border border-[#E8E8ED] bg-white p-6 transition hover:border-[#6E6E73] hover:shadow-apple"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#1D1D1F]">
                <Building2 className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-[#1D1D1F] group-hover:opacity-80 transition">
                Biblioteca Industriilor (12)
              </h2>
              <p className="mt-1 text-xs text-[#6E6E73]">
                Ghiduri complete pentru construcții, HoReCa, producție, IT, agricultură și sănătate.
              </p>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#1D1D1F]">
                Alege domeniul tău →
              </span>
            </Link>

            <Link
              href="/afaceri/scenarii-daune"
              className="group rounded-3xl border border-[#E8E8ED] bg-white p-6 transition hover:border-[#6E6E73] hover:shadow-apple"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#1D1D1F]">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-[#1D1D1F] group-hover:opacity-80 transition">
                Scenarii Daune Reale (20)
              </h2>
              <p className="mt-1 text-xs text-[#6E6E73]">
                Analiză pas cu pas a incidentelor reale: cauze, verificări critice și capcane contractuale.
              </p>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#1D1D1F]">
                Vezi scenariile →
              </span>
            </Link>

            <Link
              href="/afaceri/cadru-legal"
              className="group rounded-3xl border border-[#E8E8ED] bg-white p-6 transition hover:border-[#6E6E73] hover:shadow-apple"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#1D1D1F]">
                <Scale className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-[#1D1D1F] group-hover:opacity-80 transition">
                Obligatoriu vs. Contractual
              </h2>
              <p className="mt-1 text-xs text-[#6E6E73]">
                Cadrul legal din România: ce impune legea strict și ce solicită partenerii comerciali.
              </p>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#1D1D1F]">
                Consultă clasificarea →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 22 SPECIALIZED CATEGORIES */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-tight uppercase text-[#6E6E73]">
                Catalog B2B
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-1">
                22 de categorii specializate de asigurare
              </h2>
            </div>
            <Link href="/afaceri/categorii" className="text-sm font-semibold text-[#1D1D1F] hover:underline">
              Vezi toate categoriile →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.id}
                href={`/afaceri/categorii/${cat.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-[#E8E8ED] bg-[#F5F5F7] p-6 transition hover:border-[#6E6E73] hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#6E6E73]">#{idx + 1}</span>
                    <span className="text-[11px] font-medium text-[#6E6E73] border border-[#D2D2D7] rounded-full px-2.5 py-0.5 bg-white">
                      Ghid
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-[#1D1D1F] group-hover:opacity-80 transition">
                    {cat.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#6E6E73]">
                    {cat.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E8ED] text-xs font-medium text-[#1D1D1F]">
                  Citește ghidul complet →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 12 INDUSTRY DOMAINS */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-[#F5F5F7]">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#6E6E73]">
              Biblioteca Industriilor
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-1">
              Află ce riscuri specifice are industria ta
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                href={`/afaceri/domenii/${ind.slug}`}
                className="group flex items-start gap-3 rounded-2xl border border-[#E8E8ED] bg-white p-4 transition hover:border-[#6E6E73]"
              >
                <div>
                  <h3 className="text-sm font-semibold text-[#1D1D1F] group-hover:opacity-80 transition">
                    {ind.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-[#6E6E73]">{ind.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CHECKLISTS */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-tight uppercase text-[#6E6E73]">
                Checklist-uri Practice
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-1">
                Ghiduri de verificare pentru evenimente cheie
              </h2>
            </div>
            <Link href="/afaceri/checklist-uri" className="text-sm font-semibold text-[#1D1D1F] hover:underline">
              Toate checklist-urile →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_CHECKLISTS.slice(0, 4).map((chk) => (
              <Link
                key={chk.id}
                href={`/afaceri/checklist-uri/${chk.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-[#E8E8ED] bg-[#F5F5F7] p-6 transition hover:border-[#6E6E73] hover:bg-white"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1D1D1F]">
                    <CheckCircle2 className="h-4 w-4 text-[#6E6E73]" />
                    <span>{chk.targetEvent}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-[#1D1D1F]">
                    {chk.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-[#6E6E73]">{chk.summary}</p>
                </div>
                <span className="mt-4 text-xs font-semibold text-[#1D1D1F]">
                  Deschide ghidul →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. VERIFIED SOURCES BANNER & CONSULTATION CTA */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Sources */}
          <div className="flex flex-col gap-4 rounded-3xl border border-[#D2D2D7] bg-white p-8 sm:flex-row sm:items-center sm:justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#6E6E73]">
                <BookOpen className="h-4 w-4" />
                Transparență și acuratețe
              </div>
              <h2 className="mt-1 text-lg font-semibold text-[#1D1D1F]">
                Surse oficiale verificate & Glosar de termeni tehnici
              </h2>
              <p className="mt-1 text-xs text-[#6E6E73]">
                Toate analizele noastre citează legislația română în vigoare (Legea 132/2017, Legea 236/2018, Codul Civil) și reglementările ASF.
              </p>
            </div>
            <Link
              href="/afaceri/surse-si-glosar"
              className="apple-btn-secondary inline-flex shrink-0 items-center gap-2 !text-xs !py-2.5 !px-5"
            >
              <span>Consultă sursele</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Consultation CTA */}
          <div className="rounded-3xl bg-[#1D1D1F] p-8 sm:p-14 text-white">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-tight text-[#6E6E73]">
                Consultanță Specializată B2B
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-2">
                Vrei o evaluare concretă pentru afacerea ta?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                Fără presiune de vânzare. Analizăm împreună contractele de închiriere ale companiei tale, specificul activității și ofertele existente pentru a identifica eventualele lacune de acoperire.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/asigurari?ajutor=oferta&tip=pj" className="apple-btn-dark">
                  Solicită consultanță firmă
                </Link>
                <Link href="/afaceri/evaluare-riscuri" className="apple-btn-secondary !bg-transparent !text-white !border-[#424245] hover:!bg-white/10">
                  Lansează chestionarul de risc
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
