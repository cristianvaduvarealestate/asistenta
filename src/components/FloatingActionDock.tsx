"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/config/site";
import { Phone, MessageSquare, Shield, HelpCircle, X, ChevronUp } from "lucide-react";

export function FloatingActionDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  // Independent smart auto-hide scroll listener for Floating Action Dock
  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const deltaY = currentScrollY - lastScrollYRef.current;

        // If open, always remain visible
        if (isOpen) {
          setIsVisible(true);
        } else if (currentScrollY < 60) {
          // Near top: always visible
          setIsVisible(true);
        } else if (deltaY > 10 && currentScrollY > 80) {
          // Scrolling down: hide dock downwards smoothly
          setIsVisible(false);
        } else if (deltaY < -5) {
          // Scrolling up: prompt reappearance
          setIsVisible(true);
        }

        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <aside
      aria-label="Asistent rapid"
      className={`fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-40 flex flex-col items-end gap-2 transition-all duration-300 ease-out motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div className="flex flex-col gap-1.5 rounded-2xl border border-[#D2D2D7] bg-white p-2.5 shadow-apple animate-in fade-in slide-in-from-bottom-2 duration-150 min-w-[220px]">
          <div className="px-2 py-1 border-b border-[#F5F5F7] mb-1">
            <span className="block text-[11px] font-semibold text-[#6E6E73] uppercase tracking-wider">
              Contact Rapid
            </span>
          </div>

          <a
            href={SITE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="h-4 w-4 text-[#1D1D1F]" />
              <span>WhatsApp</span>
            </div>
            <span className="font-mono text-[10px] text-[#6E6E73]">{SITE.whatsappDisplay}</span>
          </a>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-[#1D1D1F]" />
              <span>Telefon direct</span>
            </div>
            <span className="font-mono text-[10px] text-[#6E6E73]">{SITE.phoneDisplay}</span>
          </a>

          <Link
            href="/asigurari?ajutor=oferta"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          >
            <Shield className="h-4 w-4 text-[#6E6E73]" />
            <span>Asigurări Generali</span>
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 rounded-xl bg-[#1D1D1F] px-3 py-2.5 text-xs font-medium text-white hover:bg-black transition-colors mt-1"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Formular contact</span>
          </Link>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <div className="flex items-center rounded-full border border-[#D2D2D7] bg-white p-1 shadow-apple transition hover:border-[#6E6E73]">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={
            isOpen
              ? "Închide opțiunile de contact"
              : "Cristian Văduva — Opțiuni de contact rapid"
          }
          className="flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium text-[#1D1D1F] hover:text-black transition-colors"
        >
          <div className="relative h-6 w-6 overflow-hidden rounded-full border border-[#D2D2D7] bg-[#F5F5F7] shrink-0">
            <Image
              src="/images/cristian/cv-avatar-vest.webp"
              alt=""
              aria-hidden="true"
              fill
              className="object-cover"
            />
          </div>
          <span className="hidden sm:inline text-xs">
            {isOpen ? "Închide" : "Cristian Văduva"}
          </span>
          {isOpen ? <X className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5 text-[#6E6E73]" />}
        </button>

        <a
          href={SITE.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1D1D1F] text-white transition hover:bg-black"
          aria-label={`Deschide WhatsApp (${SITE.whatsappDisplay})`}
        >
          <MessageSquare className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}
