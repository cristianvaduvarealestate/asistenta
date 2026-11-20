"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { HOME_FAQS, type FAQItem } from "@/data/faqs/home";

export type { FAQItem };

interface FAQSectionProps {
  items?: FAQItem[];
  heading?: string;
  subheading?: string;
  badge?: string;
  className?: string;
  showContactCta?: boolean;
}

export function FAQSection({
  items = HOME_FAQS,
  heading = "Răspunsuri simple la întrebări des întâlnite.",
  subheading = "Dacă ai o întrebare care nu se regăsește mai jos, mă poți contacta oricând direct.",
  badge = "Întrebări Frecvente",
  className = "",
  showContactCta = true,
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
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
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            {heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6E73] max-w-xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E8E8ED] rounded-3xl border border-[#E8E8ED] bg-[#F5F5F7]/50 overflow-hidden">
          {items.map((item, index) => {
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
                    <span className="font-mono text-xs text-[#6E6E73] shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base sm:text-lg font-semibold tracking-tight text-[#1D1D1F]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-[#6E6E73] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1D1D1F]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-5 pb-6 pt-1 sm:px-6 sm:pb-7 text-sm sm:text-base text-[#424245] leading-relaxed border-t border-[#F5F5F7] animate-in fade-in duration-150"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct CTA in FAQ */}
        {showContactCta && (
          <div className="mt-10 rounded-2xl bg-[#F5F5F7] p-6 text-center border border-[#E8E8ED] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="block text-sm font-semibold text-[#1D1D1F]">
                Ai o altă întrebare specifică?
              </span>
              <span className="block text-xs text-[#6E6E73] mt-0.5">
                Răspund personal la telefon sau pe WhatsApp.
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="apple-btn-secondary inline-flex items-center gap-1.5 !text-xs !py-2 !px-3.5"
              >
                <Phone className="h-3.5 w-3.5 text-[#1D1D1F]" />
                <span>{SITE.phoneDisplay}</span>
              </a>

              <a
                href={SITE.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-secondary inline-flex items-center gap-1.5 !text-xs !py-2 !px-3.5"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#1D1D1F]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
