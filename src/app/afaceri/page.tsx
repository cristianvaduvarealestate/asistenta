import Link from "next/link";
import { Metadata } from "next";
import { SITE } from "@/config/site";
import { BUSINESS_CATEGORIES } from "@/data/business/categories";
import { BUSINESS_INDUSTRIES } from "@/data/business/industries";
import { BUSINESS_PRODUCTS } from "@/data/business/products";
import { CLAIM_SCENARIOS } from "@/data/business/scenarios";
import { BUSINESS_CHECKLISTS } from "@/data/business/checklists";
import { WHAT_IF_SCENARIOS } from "@/data/business/what-if";
import { LEGAL_FRAMEWORK } from "@/data/business/legal-framework";
import {
  ShieldCheck,
  Building2,
  AlertTriangle,
  FileCheck,
  HelpCircle,
  Scale,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Protecția Afacerii Tale | Cristian Văduva",
  description:
    "Ghid complet de asigurări comerciale și riscuri pentru companii. Soluții de protecție pentru clădiri, utilaje, flote și răspunderi profesionale.",
  alternates: {
    canonical: `${SITE.publicUrl}/afaceri`,
  },
  openGraph: {
    title: "Protecția Afacerii Tale | Cristian Văduva",
    description:
      "Ghid complet de asigurări comerciale și riscuri pentru companii din România.",
    url: `${SITE.publicUrl}/afaceri`,
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Protecția Afacerii Tale — Cristian Văduva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protecția Afacerii Tale | Cristian Văduva",
    description:
      "Ghid complet de asigurări comerciale și riscuri pentru companii din România.",
    images: [`${SITE.publicUrl}/images/og-asistenta.jpg`],
  },
};

export default function BusinessProtectionHub() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 text-[#F5F6F7]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-[#9299A3]">
        <Link href="/" className="hover:text-[#F5F6F7] transition">
          Acasă
        </Link>
        <span className="text-[#22262D]">/</span>
        <span className="text-[#F5F6F7]">Protecția Afacerii Tale</span>
      </div>

      {/* Hero Header */}
      <div className="mt-8 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C92B35]/30 bg-[#C92B35]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C92B35]">
          <Sparkles className="h-3.5 w-3.5" />
          Secțiune dedicată antreprenorilor și companiilor
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#F5F6F7] sm:text-5xl lg:text-6xl">
          PROTECȚIA AFACERII TALE
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#9299A3] sm:text-xl">
          „O afacere înseamnă oameni, investiții, responsabilități și ani de muncă. Descoperă ce riscuri pot afecta compania ta și cum poți construi un program de protecție adaptat activității tale.”
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/afaceri/evaluare-riscuri"
            className="inline-flex items-center gap-2 rounded-full bg-[#C92B35] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b0222b]"
          >
            Evaluează riscurile firmei tale
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/afaceri/domenii"
            className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#101216] px-6 py-3 text-sm font-semibold text-[#F5F6F7] transition hover:bg-[#171A20] hover:border-[#4779B8]/60"
          >
            Explorează biblioteca de industrii
          </Link>
          <Link
            href="/asigurari?ajutor=oferta&tip=pj"
            className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#171A20] px-6 py-3 text-sm font-semibold text-[#C7CBD1] transition hover:bg-[#22262D] hover:text-white"
          >
            Cere ofertă direct în asistent
          </Link>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/afaceri/evaluare-riscuri"
          className="group rounded-2xl border border-[#22262D] bg-[#101216] p-5 shadow-card transition hover:border-[#C92B35]/60 hover:bg-[#171A20]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C92B35]/15 text-[#C92B35]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-base font-semibold text-[#F5F6F7] group-hover:text-[#C92B35] transition">
            Evaluare Interactivă Riscuri
          </h2>
          <p className="mt-1 text-xs text-[#9299A3]">
            17 întrebări structurate pentru a identifica vulnerabilitățile majore ale companiei tale.
          </p>
          <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#C92B35]">
            Lansează chestionarul →
          </span>
        </Link>

        <Link
          href="/afaceri/domenii"
          className="group rounded-2xl border border-[#22262D] bg-[#101216] p-5 shadow-card transition hover:border-[#4779B8]/60 hover:bg-[#171A20]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#171A20] border border-[#22262D] text-[#4779B8]">
            <Building2 className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-base font-semibold text-[#F5F6F7] group-hover:text-[#4779B8] transition">
            Biblioteca Domeniilor (12)
          </h2>
          <p className="mt-1 text-xs text-[#9299A3]">
            Ghiduri complete pentru construcții, HoReCa, producție, IT, agricultură, sănătate și altele.
          </p>
          <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#4779B8]">
            Alege domeniul tău →
          </span>
        </Link>

        <Link
          href="/afaceri/scenarii-daune"
          className="group rounded-2xl border border-[#22262D] bg-[#101216] p-5 shadow-card transition hover:border-amber-500/60 hover:bg-[#171A20]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-base font-semibold text-[#F5F6F7] group-hover:text-amber-400 transition">
            Scenarii de Daune Reale (20)
          </h2>
          <p className="mt-1 text-xs text-[#9299A3]">
            Analiza pas cu pas a incidentelor reale: cauze, verificări critice și capcane de evitat.
          </p>
          <span className="mt-4 inline-flex items-center text-xs font-semibold text-amber-400">
            Vezi scenariile concrete →
          </span>
        </Link>

        <Link
          href="/afaceri/cadru-legal"
          className="group rounded-2xl border border-[#22262D] bg-[#101216] p-5 shadow-card transition hover:border-[#4779B8]/60 hover:bg-[#171A20]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4779B8]/15 text-[#4779B8]">
            <Scale className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-base font-semibold text-[#F5F6F7] group-hover:text-[#4779B8] transition">
            Obligatoriu vs. Contractual
          </h2>
          <p className="mt-1 text-xs text-[#9299A3]">
            Cadrul legal din România: ce cere legea strict, ce cer băncile/partenerii și ce este strategic.
          </p>
          <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#4779B8]">
            Consultă clasificarea legală →
          </span>
        </Link>
      </div>

      {/* 22 Business Categories Section */}
      <div className="mt-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C92B35]">
              22 de categorii specializate
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7]">
              Ghidul Categoriilor de Asigurare pentru Companii
            </h2>
          </div>
          <Link
            href="/afaceri/categorii"
            className="text-sm font-semibold text-[#4779B8] hover:underline"
          >
            Vezi toate cele 22 de categorii →
          </Link>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-[#9299A3]">
          Fiecare categorie explică în profunzime riscurile acoperite, excluderile frecvente, cerințele de subscriere și pașii de lucru.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.id}
              href={`/afaceri/categorii/${cat.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-[#22262D] bg-[#101216] p-5 shadow-card transition hover:border-[#4779B8]/60 hover:bg-[#171A20]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#9299A3]">#{idx + 1}</span>
                  <span className="rounded-full bg-[#171A20] border border-[#22262D] px-2.5 py-0.5 text-[11px] font-medium text-[#C7CBD1]">
                    Ghid detaliat
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-[#F5F6F7] group-hover:text-[#4779B8] transition">
                  {cat.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#9299A3]">
                  {cat.shortDesc}
                </p>
              </div>
              <div className="mt-4 border-t border-[#22262D] pt-3 text-xs font-medium text-[#4779B8]">
                Citește ghidul complet →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 12 Industry Domains Library Spotlight */}
      <div className="mt-24 rounded-3xl border border-[#22262D] bg-[#101216] p-8 sm:p-12 shadow-card">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4779B8]">
            Biblioteca domeniilor de activitate
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#F5F6F7] sm:text-4xl">
            Află ce riscuri are exact industria ta
          </h2>
          <p className="mt-3 text-base text-[#9299A3]">
            Fiecare domeniu de activitate are particularități unice de risc, cerințe contractuale specifice și studii de caz din practica instanțelor din România.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_INDUSTRIES.map((ind) => (
            <Link
              key={ind.id}
              href={`/afaceri/domenii/${ind.slug}`}
              className="group flex items-start gap-3 rounded-2xl border border-[#22262D] bg-[#171A20] p-4 transition hover:border-[#4779B8]/60 hover:bg-[#22262D]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#101216] border border-[#22262D] text-sm font-bold text-[#4779B8] group-hover:text-white">
                {ind.letter}
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-[#F5F6F7] group-hover:text-[#4779B8] transition">
                  {ind.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-[#9299A3]">
                  {ind.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:text-left">
          <Link
            href="/afaceri/domenii"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C7CBD1] hover:text-[#F5F6F7] underline-offset-4 hover:underline"
          >
            Vezi toate cele 12 industrii cu structura completă în 17 secțiuni →
          </Link>
        </div>
      </div>

      {/* Product Guide (26 Products) Preview */}
      <div className="mt-24">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C92B35]">
              26 de produse analizate tehnic
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7]">
              Ghidul Produselor de Asigurare Comercială
            </h2>
          </div>
          <Link
            href="/afaceri/ghid-asigurari"
            className="text-sm font-semibold text-[#4779B8] hover:underline"
          >
            Explorează toate cele 26 de produse →
          </Link>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-[#9299A3]">
          De la Property All Risks și Business Interruption, la D&O, Cyber Risk, CMR, CARGO și Garanții Surety Bonds.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_PRODUCTS.slice(0, 9).map((prod) => (
            <Link
              key={prod.id}
              href={`/afaceri/ghid-asigurari/${prod.slug}`}
              className="group rounded-2xl border border-[#22262D] bg-[#101216] p-5 shadow-card transition hover:border-[#4779B8]/60 hover:bg-[#171A20]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#C92B35]">{prod.acronym || "PRODUS"}</span>
                <span className="text-[11px] text-[#9299A3]">{prod.category}</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-[#F5F6F7] group-hover:text-[#4779B8] transition">
                {prod.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs text-[#9299A3]">{prod.shortDesc}</p>
              <span className="mt-4 inline-block text-xs font-medium text-[#C7CBD1] group-hover:text-[#4779B8] transition">
                Detalii tehnice & întrebări de pus →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Checklist-uri Evenimente Cheie Spotlight */}
      <div className="mt-24 rounded-3xl border border-[#22262D] bg-[#101216] p-8 sm:p-12 shadow-card">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4779B8]">
              14 checklist-uri practice
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7]">
              Checklist-uri pentru Evenimente Majore din Viața Firmei
            </h2>
          </div>
          <Link
            href="/afaceri/checklist-uri"
            className="text-sm font-semibold text-[#4779B8] hover:underline"
          >
            Vezi toate cele 14 checklist-uri →
          </Link>
        </div>
        <p className="mt-2 text-sm text-[#9299A3]">
          Înființare companie, închiriere spațiu în mall, achiziție utilaje, licitații SEAP sau deschidere de restaurant.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_CHECKLISTS.slice(0, 6).map((chk) => (
            <Link
              key={chk.id}
              href={`/afaceri/checklist-uri/${chk.slug}`}
              className="group rounded-2xl border border-[#22262D] bg-[#171A20] p-5 transition hover:border-[#4779B8]/60 hover:bg-[#22262D]"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F5F6F7]">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>{chk.targetEvent}</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-[#F5F6F7] group-hover:text-[#4779B8] transition">
                {chk.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs text-[#9299A3]">{chk.summary}</p>
              <span className="mt-3 inline-block text-xs font-medium text-[#4779B8]">
                Deschide checklist-ul →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* „Ce se întâmplă dacă?” Explorer Spotlight */}
      <div className="mt-24 rounded-3xl border border-[#C92B35]/20 bg-[#101216] p-8 sm:p-12 shadow-card">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C92B35]">
              12 întrebări critice
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7]">
              „Ce se întâmplă dacă?” — Consecințe și Răspunderi
            </h2>
          </div>
          <Link
            href="/afaceri/ce-se-intampla-daca"
            className="text-sm font-semibold text-[#C92B35] hover:underline"
          >
            Explorează toate cele 12 întrebări →
          </Link>
        </div>
        <p className="mt-2 text-sm text-[#9299A3]">
          Răspunsuri juridice și de asigurare clare pentru situații critice: incendiu în spațiul închiriat, client alunecat, ransomware sau accident pe șantier.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_IF_SCENARIOS.slice(0, 6).map((item) => (
            <Link
              key={item.id}
              href={`/afaceri/ce-se-intampla-daca#${item.slug}`}
              className="group rounded-2xl border border-[#22262D] bg-[#171A20] p-5 transition hover:border-[#C92B35]/60 hover:bg-[#22262D]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#C92B35]">
                <HelpCircle className="h-4 w-4" />
                <span>Întrebare critică</span>
              </div>
              <h3 className="mt-2 text-sm font-bold text-[#F5F6F7] group-hover:text-[#C92B35] transition">
                {item.question}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs text-[#9299A3]">{item.shortAnswer}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-[#C7CBD1] group-hover:text-white transition">
                Citește analiza detaliată →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Verified Sources & Glossary Banner */}
      <div className="mt-20 flex flex-col gap-6 rounded-2xl border border-[#22262D] bg-[#101216] p-6 sm:flex-row sm:items-center sm:justify-between shadow-card">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9299A3]">
            <BookOpen className="h-4 w-4 text-[#4779B8]" />
            Transparență și acuratețe legală
          </div>
          <h2 className="mt-1 text-lg font-bold text-[#F5F6F7]">
            Surse Oficiale Verificate & Glosar de Termeni Tehnici
          </h2>
          <p className="mt-1 text-sm text-[#9299A3]">
            Toate analizele noastre citează legi românești (Legea 132/2017, Legea 236/2018, Codul Civil) și surse ASF/DNSC/ENISA.
          </p>
        </div>
        <Link
          href="/afaceri/surse-si-glosar"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#22262D] bg-[#171A20] px-5 py-2.5 text-sm font-semibold text-[#F5F6F7] transition hover:border-[#4779B8]/60 hover:bg-[#22262D]"
        >
          Consultă sursele și glosarul
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {/* Help Desk Prefill CTA */}
      <div className="mt-20 rounded-3xl bg-gradient-to-b from-[#101216] to-[#08090B] border border-[#22262D] p-8 text-white sm:p-12 shadow-card">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C92B35]">
            Consultanță de specialitate B2B
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#F5F6F7] sm:text-4xl">
            Vrei o evaluare concretă pentru afacerea ta?
          </h2>
          <p className="mt-4 text-base text-[#9299A3]">
            Fără presiune de vânzare. Analizăm împreună contractele tale de închiriere, specificul activității și ofertele existente pentru a identifica lacunele de acoperire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/asigurari?ajutor=oferta&tip=pj"
              className="inline-flex items-center gap-2 rounded-full bg-[#C92B35] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b0222b]"
            >
              Solicită consultanță pentru firmă
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#171A20] px-6 py-3 text-sm font-semibold text-[#C7CBD1] transition hover:bg-[#22262D] hover:text-white"
            >
              Lansează chestionarul de risc
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
