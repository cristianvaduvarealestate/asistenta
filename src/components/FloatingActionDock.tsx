"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/config/site";
import { Phone, MessageSquare, Shield, HelpCircle, X, ChevronUp } from "lucide-react";

export function FloatingActionDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/admin")) return null;
  if (!scrolled) return null;

  return (
    <aside
      aria-label="Asistent rapid"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div className="flex flex-col gap-1.5 rounded-2xl border border-[#D2D2D7] bg-white/95 p-2 backdrop-blur-xl shadow-apple animate-in fade-in slide-in-from-bottom-2 duration-150 min-w-[200px]">
          <a
            href={SITE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          >
            <MessageSquare className="h-4 w-4 text-[#86868B]" />
            <span>WhatsApp direct</span>
          </a>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          >
            <Phone className="h-4 w-4 text-[#86868B]" />
            <span>{SITE.phoneDisplay}</span>
          </a>

          <Link
            href="/asigurari?ajutor=oferta"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          >
            <Shield className="h-4 w-4 text-[#86868B]" />
            <span>Asigurări Generali</span>
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 rounded-xl bg-[#1D1D1F] px-3 py-2 text-xs font-medium text-white hover:bg-black transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Formular contact</span>
          </Link>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <div className="flex items-center rounded-full border border-[#D2D2D7] bg-white/90 p-1 backdrop-blur-xl shadow-apple transition hover:border-[#86868B]">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Închide opțiunile" : "Deschide opțiunile de contact"}
          className="flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium text-[#1D1D1F] hover:text-black transition-colors"
        >
          <div className="relative h-6 w-6 overflow-hidden rounded-full border border-[#D2D2D7] bg-[#F5F5F7] shrink-0">
            <Image
              src="/images/cristian/cv-avatar-vest.webp"
              alt="Cristian Văduva"
              fill
              className="object-cover"
            />
          </div>
          <span className="hidden sm:inline text-xs">
            {isOpen ? "Închide" : "Cristian Văduva"}
          </span>
          {isOpen ? <X className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5 text-[#86868B]" />}
        </button>

        <a
          href={SITE.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1D1D1F] text-white transition hover:bg-black"
          aria-label="WhatsApp"
        >
          <MessageSquare className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}
