import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HelpDeskApp } from "@/components/help-desk/HelpDeskApp";
import { ArrowLeft, Building2, Phone, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Asistență Asigurări | Asistență Imobiliare și Asigurări — Cristian Văduva",
  description:
    "Oferte noi de asigurare, verificare polițe existente, explicare clauze, notificare expirare, evaluare riscuri și asistență în caz de daună pentru persoane fizice și companii.",
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
            <span>Consultanță & Orientare Imparțială</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F6F7] sm:text-5xl">
            Asistență Asigurări
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#C7CBD1] sm:text-base">
            Alege serviciul de care ai nevoie. Fie că vrei o ofertă nouă comparativă, vrei să verifici o poliță existentă,
            ai nevoie de clarificări privind o clauză tehnică sau vrei asistență în caz de daună, îți ofer suport clar,
            fără termeni tehnici complicați.
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
              <span className="text-[11px] font-medium text-[#9299A3]">Timp de Răspuns</span>
              <p className="mt-0.5 text-xs font-semibold text-[#F5F6F7]">Prompt & Confidențial</p>
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
            <strong className="font-semibold text-white">Notă informativă:</strong> Platforma oferă servicii de consultanță, îndrumare și orientare independentă. Cotațiile comparative și emiterea contractelor de asigurare se realizează prin parteneri și societăți autorizate conform Legii nr. 236/2018. Confirmarea formală a acoperirii unui risc sau a unei daune aparține exclusiv asigurătorului emitent.
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
              Sună sau trimite un mesaj pe WhatsApp pentru asistență imediată sau urgențe de daună.
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
              Consultă ghidurile noastre complete pentru companii: 22 de categorii de asigurare B2B, 12 domenii de activitate și evaluare gratuită de riscuri.
            </p>
            <div className="mt-4">
              <Link
                href="/afaceri"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C92B35] transition-colors hover:text-white"
              >
                <span>Deschide ghidul Protecția Afacerii Tale</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
