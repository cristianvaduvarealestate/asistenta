"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/config/site";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "cu-ce-ajut",
    question: "Cu ce mă poți ajuta concret?",
    answer:
      "Te sprijin direct în două mari direcții: consultanță imobiliară dedicată (cumpărare, vânzare, închiriere și investiții cu verificarea minuțioasă a actelor) și asigurări prin parteneriatul oficial cu Generali România (CASCO, locuință, sănătate, flote auto și răspunderi pentru companii).",
  },
  {
    id: "cum-contactez",
    question: "Cum te pot contacta?",
    answer:
      "Mă poți suna direct la telefon la 0767 110 439, îmi poți scrie pe WhatsApp la +43 650 953 6345 sau poți lăsa o solicitare prin formularele de pe site. Răspund personal la fiecare mesaj.",
  },
  {
    id: "alegere-asigurare",
    question: "Mă poți ajuta să aleg o asigurare potrivită?",
    answer:
      "Da. Discutăm deschis despre ce vrei să protejezi, îți explic pe înțelesul tău ce acoperă polița, care sunt franșizele și ce excluderi există, înainte de a semna orice document. Emiterea polițelor se realizează prin Generali România conform contractului de asigurare.",
  },
  {
    id: "informatii-solicitare",
    question: "Ce informații sunt necesare pentru o solicitare?",
    answer:
      "Pentru o primă discuție sunt suficiente datele generale: ce fel de proprietate cauți sau ce bun vrei să asiguri (mașină, locuință, afacere) și datele tale de contact. Nu solicităm niciodată CNP, date bancare sau documente sensibile prin site.",
  },
  {
    id: "polita-existenta",
    question: "Mă poți ajuta dacă am deja o poliță și am nevoie de îndrumare?",
    answer:
      "Desigur. Dacă ai nelămuriri cu privire la clauze sau franșize, vrei să știi din timp când expiră polița sau ai o daună și nu știi ce pași să urmezi pentru dosarul de despăgubire Generali, îți ofer îndrumare practică pas cu pas.",
  },
  {
    id: "sprijin-firme",
    question: "Oferi sprijin și pentru companii (IMM / persoane juridice)?",
    answer:
      "Da. Ofer consultanță specializată pentru firme: clădiri de birouri, spații comerciale, utilaje, stocuri, flote auto și răspundere profesională adaptate specificului industriei în care activezi.",
  },
  {
    id: "consultanta-imobiliara",
    question: "Cum funcționează consultanța imobiliară?",
    answer:
      "Reprezint exclusiv o singură parte în tranzacție (cumpărătorul sau vânzătorul), fără comision dublu și fără conflicte de interese. Mergem împreună la vizionări, verificăm actele la cadastru și la notari publici autorizați până la finalizarea contractului.",
  },
  {
    id: "discutie-prealabila",
    question: "Pot discuta cu tine înainte să iau o decizie?",
    answer:
      "Sigur că da. O discuție preliminară telefonică sau pe WhatsApp nu implică niciun cost și nicio obligație. Cred că cele mai bune decizii se iau în liniște, fără grabă și fără presiune de vânzări.",
  },
];

export function FAQSection({ className = "" }: { className?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E8ED] ${className}`}>
      {/* Inject Structured Data for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#D2D2D7] bg-[#F5F5F7] px-3 py-1 text-xs font-semibold text-[#1D1D1F] mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-[#1D1D1F]" />
            <span>Întrebări Frecvente</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            Răspunsuri simple la întrebări des întâlnite.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#86868B] max-w-xl mx-auto">
            Dacă ai o întrebare care nu se regăsește mai jos, mă poți contacta oricând direct.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E8E8ED] rounded-3xl border border-[#E8E8ED] bg-[#F5F5F7]/50 overflow-hidden">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors bg-white">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition hover:bg-[#F5F5F7]/70 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] focus:ring-inset"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="font-mono text-xs text-[#86868B] shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base sm:text-lg font-semibold tracking-tight text-[#1D1D1F]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-[#86868B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1D1D1F]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-5 pb-6 pt-1 sm:px-6 sm:pb-7 text-sm sm:text-base text-[#515154] leading-relaxed border-t border-[#F5F5F7] animate-in fade-in duration-150"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct CTA in FAQ */}
        <div className="mt-10 rounded-2xl bg-[#F5F5F7] p-6 text-center border border-[#E8E8ED] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="block text-sm font-semibold text-[#1D1D1F]">
              Ai o altă întrebare specifică?
            </span>
            <span className="block text-xs text-[#86868B] mt-0.5">
              Răspund personal la telefon sau pe WhatsApp.
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="apple-btn-secondary !text-xs !py-2 !px-3.5 inline-flex items-center gap-1.5"
            >
              <Phone className="h-3.5 w-3.5 text-[#1D1D1F]" />
              <span>{SITE.phoneDisplay}</span>
            </a>

            <a
              href={SITE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary !text-xs !py-2 !px-3.5 inline-flex items-center gap-1.5"
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#1D1D1F]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
