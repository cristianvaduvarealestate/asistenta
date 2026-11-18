import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HelpDeskApp } from "@/components/help-desk/HelpDeskApp";
import { ArrowLeft, Building2, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Asistență Asigurări | Cristian Văduva",
  description:
    "Consultanță în asigurări și îndrumare de specialitate prin parteneriatul cu Generali România. Soluții de protecție pentru persoane fizice și companii.",
  alternates: {
    canonical: `${SITE.publicUrl}/asigurari`,
  },
  openGraph: {
    title: "Asistență Asigurări | Cristian Văduva",
    description:
      "Consultanță în asigurări și îndrumare de specialitate prin parteneriatul cu Generali România.",
    url: `${SITE.publicUrl}/asigurari`,
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Asistență Asigurări — Partener Generali | Cristian Văduva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asistență Asigurări | Cristian Văduva",
    description:
      "Consultanță în asigurări și îndrumare de specialitate prin parteneriatul cu Generali România.",
    images: [`${SITE.publicUrl}/images/og-asistenta.jpg`],
  },
};

export default function AsigurariPage() {
  return (
    <div className="relative min-h-screen bg-[#08090B] pb-24 pt-8 text-[#F5F6F7]">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px] overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C92B35]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9299A3] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Înapoi la pagina principală</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/afaceri"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#22262D] bg-[#101216] px-3.5 py-1.5 text-xs font-medium text-[#C7CBD1] shadow-sm transition-all hover:border-[#C92B35]/60 hover:text-white"
            >
              <Building2 className="h-3.5 w-3.5 text-[#C92B35]" />
              <span>Protecția Afacerii Tale (B2B Hub)</span>
            </Link>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-8 rounded-3xl border border-[#22262D] bg-[#101216] p-7 shadow-card sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C92B35]/30 bg-[#C92B35]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F5F6F7]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#C92B35]" />
            <span>Partener Generali • Consultanță & Îndrumare</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F6F7] sm:text-5xl">
            Asistență Asigurări
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#C7CBD1] sm:text-base">
            Alege serviciul de care ai nevoie. Fie că vrei o ofertă din gama Generali, vrei să verifici o poliță existentă,
            ai nevoie de clarificări privind o clauză tehnică sau dorești îndrumare în caz de daună, îți ofer suport clar,
            fără termeni complicați.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[#22262D] pt-6 sm:grid-cols-4">
            <div className="rounded-xl border border-[#22262D] bg-[#171A20] p-3.5 text-left">
              <span className="text-[11px] font-medium text-[#9299A3]">Persoane Fizice</span>
              <p className="mt-0.5 text-xs font-semibold text-[#F5F6F7]">Auto, Locuință, Sănătate, Călătorie</p>
            </div>
            <div className="rounded-xl border border-[#22262D] bg-[#171A20] p-3.5 text-left">
              <span className="text-[11px] font-medium text-[#9299A3]">Persoane Juridice</span>
              <p className="mt-0.5 text-xs font-semibold text-[#F5F6F7]">Răspunderi, Bunuri, Flote, Cyber, D&O</p>
            </div>
            <div className="rounded-xl border border-[#22262D] bg-[#171A20] p-3.5 text-left">
              <span className="text-[11px] font-medium text-[#9299A3]">Parteneriat</span>
              <p className="mt-0.5 text-xs font-semibold text-[#F5F6F7]">Generali România</p>
            </div>
            <div className="rounded-xl border border-[#22262D] bg-[#171A20] p-3.5 text-left">
              <span className="text-[11px] font-medium text-[#9299A3]">Consultanță Directă</span>
              <p className="mt-0.5 text-xs font-semibold text-[#F5F6F7]">Cristian Văduva</p>
            </div>
          </div>
        </div>

        {/* Informative legal disclaimer */}
        <div className="mb-8 rounded-2xl border border-[#22262D] bg-[#101216]/80 p-4.5 text-xs leading-relaxed text-[#C7CBD1]">
          <p>
            <strong className="font-semibold text-white">Notă informativă:</strong> Serviciile de consultanță și soluțiile de asigurare sunt oferite în cadrul parteneriatului cu Generali România. Cristian Văduva nu este broker de asigurare și nu oferă o comparație independentă a tuturor asigurătorilor din piață. Te pot îndruma în analiza nevoilor de protecție și pregătirea documentației, însă evaluarea dosarelor de daună, decizia de despăgubire și emiterea polițelor aparțin asigurătorului Generali, conform condițiilor contractuale.
          </p>
        </div>

        {/* Insurance Assistant Interactive App */}
        <div className="rounded-3xl border border-[#22262D] bg-[#101216] p-5 shadow-card sm:p-10">
          <Suspense
            fallback={
              <div className="flex min-h-[40vh] items-center justify-center text-sm text-[#9299A3]">
                Se încarcă asistentul de asigurări...
              </div>
            }
          >
            <HelpDeskApp />
          </Suspense>
        </div>

        {/* Fast contact cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#22262D] bg-[#101216] p-6 shadow-card">
            <h3 className="text-sm font-semibold text-[#F5F6F7]">Preferi o discuție directă?</h3>
            <p className="mt-1 text-xs text-[#9299A3]">
              Sună sau trimite un mesaj pe WhatsApp pentru îndrumare și răspunsuri la întrebările tale.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={SITE.contact.phoneTel}
                className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#171A20] px-4 py-2 text-xs font-medium text-[#C7CBD1] hover:border-[#4779B8] hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-[#4779B8]" />
                <span>{SITE.contact.phone}</span>
              </a>
              <a
                href={SITE.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-950/40 px-4 py-2 text-xs font-medium text-emerald-300 hover:border-emerald-500 hover:text-white"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#22262D] bg-[#101216] p-6 shadow-card">
            <h3 className="text-sm font-semibold text-[#F5F6F7]">Ești antreprenor sau manager?</h3>
            <p className="mt-1 text-xs text-[#9299A3]">
              Accesează catalogul de riscuri comerciale structurat pe 12 industrii economice din România.
            </p>
            <div className="mt-4">
              <Link
                href="/afaceri"
                className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#171A20] px-4 py-2 text-xs font-semibold text-[#F5F6F7] hover:border-[#C92B35] hover:text-white"
              >
                <Building2 className="h-3.5 w-3.5 text-[#C92B35]" />
                <span>Deschide Protecția Afacerii Tale</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
