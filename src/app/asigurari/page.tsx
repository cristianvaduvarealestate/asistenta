import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HelpDeskApp } from "@/components/help-desk/HelpDeskApp";
import {
  Building2,
  Phone,
  MessageSquare,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SITE } from "@/config/site";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Asigurări Generali — Cristian Văduva | Partener Oficial",
  description:
    "Asigurări explicate simplu și omenește, prin parteneriatul oficial cu Generali România. Protecție corectă pentru casă, mașină, sănătate și afacere, cu sprijin direct la daună.",
  alternates: {
    canonical: `${SITE.publicUrl}/asigurari`,
  },
  openGraph: {
    title: "Asigurări Generali — Cristian Văduva | Partener Oficial",
    description:
      "Asigurări explicate simplu și omenește, prin parteneriatul oficial cu Generali România.",
    url: `${SITE.publicUrl}/asigurari`,
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Asigurări Generali — Cristian Văduva",
      },
    ],
  },
};

export default function AsigurariPage() {
  const protectionPillars = [
    {
      code: "01",
      category: "Pentru Tine & Familie",
      title: "Auto, Casă & Sănătate",
      desc: "CASCO complet cu decontare directă, asigurarea obligatorie a locuinței (PAD), asigurări facultative de cămin și sănătate.",
      link: "/asigurari?ajutor=oferta",
    },
    {
      code: "02",
      category: "Pentru Compania Ta",
      title: "Sedii, Flote & Răspunderi",
      desc: "Protecție pentru clădiri de birouri, stocuri, utilaje, flote de mașini și asigurarea răspunderii civile profesionale.",
      link: "/afaceri",
    },
    {
      code: "03",
      category: "Grijă & Reînnoire",
      title: "Verificare Scadență & Franșize",
      desc: "Îți reamintesc din timp când expiră polițele și verificăm dacă ai nevoie de ajustări, ca să nu rămâi nicio zi descoperit.",
      link: "/asigurari?ajutor=aminteste",
    },
    {
      code: "04",
      category: "Sprijin la Nevoie",
      title: "Ghidaj Pas cu Pas la Daună",
      desc: "Dacă apare un accident sau o problemă, mă suni și îți explic exact ce pași să urmezi pentru dosarul de despăgubire Generali.",
      link: "/asigurari?ajutor=dauna",
    },
  ];

  return (
    <div className="bg-white text-[#1D1D1F]">
      {/* ========================================================================= */}
      {/* 1. HERO — APPLE SUPPORT CLARITY WITH AUTHENTIC PORTRAIT */}
      {/* ========================================================================= */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#86868B] mb-6">
            <Link href="/" className="hover:text-[#1D1D1F] transition">
              Acasă
            </Link>
            <span>/</span>
            <span>Asigurări Generali</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.08]">
            Asigurări explicate simplu. <br />
            <span className="text-[#86868B]">Fără termeni ascunși și fără surprize.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
            Consultanță directă în cadrul parteneriatului oficial cu Generali România.
            Îți explic omenește ce acoperă fiecare poliță, ce înseamnă franșizele și cum primești sprijin rapid atunci când apare o daună.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#asistent-asigurari" className="apple-btn-primary">
              Deschide asistentul de asigurări
            </a>
            <Link href="/afaceri" className="apple-btn-secondary inline-flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#86868B]" />
              <span>Ghidul riscurilor comerciale B2B</span>
            </Link>
          </div>

          {/* Photographic Composition: Cristian at Executive Desk (3:2 Ratio) */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="relative aspect-[16/10] sm:aspect-[3/2] w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] shadow-sm">
              <Image
                src="/images/cristian/cv-executive-white-tie.webp"
                alt="Cristian Văduva — Asigurări Generali România la birou"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 860px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATUTORY TRANSPARENCY NOTICE */}
      {/* ========================================================================= */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl flex items-start gap-3 text-xs text-[#86868B] leading-relaxed">
          <Lock className="h-4 w-4 shrink-0 text-[#1D1D1F] mt-0.5" />
          <p>
            <strong className="text-[#1D1D1F]">Transparență legală:</strong> Serviciile de consultanță și ofertare sunt asigurate în parteneriat oficial cu Generali România. Nu am calitatea de broker independent și nu compar ofertele tuturor companiilor de pe piață. Te ajut să alegi polița potrivită și să pregătești actele, dar aprobarea poliței și plata despăgubirilor aparțin asigurătorului Generali România conform contractului de asigurare.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 4 DOMENII DE ASISTENȚĂ */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Cum te ajut concret
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
              Liniște pentru tine, familia și afacerea ta.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {protectionPillars.map((p) => (
              <div
                key={p.code}
                className="flex flex-col justify-between rounded-3xl border border-[#E8E8ED] bg-[#F5F5F7] p-6 transition hover:border-[#86868B] hover:bg-white"
              >
                <div>
                  <span className="font-mono text-xs text-[#86868B]">{p.code} • {p.category}</span>
                  <h3 className="mt-3 text-lg font-semibold text-[#1D1D1F]">{p.title}</h3>
                  <p className="mt-2 text-xs text-[#86868B] leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E8ED]">
                  <Link href={p.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] hover:underline">
                    <span>Află mai multe</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EDITORIAL ADVISORY TRUST SECTION (SUMMIT & CONSULTING) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto w-full overflow-hidden rounded-3xl bg-white border border-[#E8E8ED] shadow-sm">
              <Image
                src="/images/cristian/cv-summit-suit.webp"
                alt="Cristian Văduva — Asigurări explicate sincer și deschis"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Fără surprize neplăcute
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
              Îți explic fiecare clauză înainte de semnare.
            </h2>
            <p className="text-base text-[#86868B] leading-relaxed">
              Cele mai multe nemulțumiri legate de asigurări apar atunci când oamenii nu au știut dinainte ce este inclus și ce nu în contract. Rolul meu este să-ți explic totul deschis, pe românește, înainte de a semna orice hârtie.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-[#E8E8ED] bg-white p-5">
                <span className="block text-sm font-semibold text-[#1D1D1F]">Franșize explicate clar</span>
                <span className="block text-xs text-[#86868B] mt-1.5 leading-relaxed">Știi exact cât plătești tu și cât acoperă asigurătorul în caz de incident.</span>
              </div>
              <div className="rounded-2xl border border-[#E8E8ED] bg-white p-5">
                <span className="block text-sm font-semibold text-[#1D1D1F]">Sprijin direct la daună</span>
                <span className="block text-xs text-[#86868B] mt-1.5 leading-relaxed">Nu ești lăsat singur la un call center robotizat; mă poți suna pentru îndrumare rapidă.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE PROTECTION DESK (HELPDESKAPP) WITH ADVISOR BADGE */}
      {/* ========================================================================= */}
      <section id="asistent-asigurari" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            {/* Authentic Advisor Avatar */}
            <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-[#E8E8ED] shadow-sm relative bg-[#F5F5F7]">
              <Image
                src="/images/cristian/cv-avatar-vest.webp"
                alt="Cristian Văduva"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Asistent Rapid • Cristian Văduva
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
              Spune-mi de ce poliță ai nevoie
            </h2>
            <p className="mt-3 text-sm text-[#86868B]">
              Completează câteva detalii și îți pregătesc o ofertă clară, adaptată nevoilor tale reale. Fără CNP sau date bancare pe site.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D2D2D7] bg-white p-6 sm:p-10 shadow-apple">
            <Suspense
              fallback={
                <div className="flex min-h-[30vh] items-center justify-center font-mono text-xs text-[#86868B]">
                  SE ÎNCARCĂ ASISTENTUL DE ASIGURĂRI...
                </div>
              }
            >
              <HelpDeskApp />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ — ÎNTREBĂRI FRECVENTE */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* 7. DIRECT CONTACT & URGENCY GUIDANCE */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
            Răspuns Rapid
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
            Ai o întrebare sau s-a întâmplat ceva neprevăzut?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-[#86868B]">
            Răspund la telefon sau pe WhatsApp pentru a-ți spune ce pași să faci. (Pentru urgențe medicale sau pericole iminente, sună mai întâi la 112).
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="apple-btn-secondary inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4 text-[#86868B]" />
              <span>{SITE.phoneDisplay}</span>
            </a>

            <a
              href={SITE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary inline-flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4 text-[#86868B]" />
              <span>WhatsApp</span>
            </a>

            <Link href="/contact" className="apple-btn-primary">
              Scrie-mi un mesaj
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
