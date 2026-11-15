"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/config/site";
import { Menu, X, Phone, Shield, Home, ArrowRight, Building2 } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Acasă" },
    { href: "/imobiliare", label: "Imobiliare" },
    { href: "/asigurari", label: "Asigurări" },
    { href: "/afaceri", label: "Protecția Afacerii (B2B)" },
    { href: "/despre-mine", label: "Despre mine" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#22262D]/90 bg-[#08090B]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col transition">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9299A3] transition-colors group-hover:text-[#C7CBD1]">
            Cristian Văduva
          </span>
          <span className="text-sm font-bold tracking-tight text-[#F5F6F7] transition-colors sm:text-base">
            {SITE.name}
          </span>
          <span className="hidden text-[10px] tracking-wide text-[#9299A3] sm:inline">
            {SITE.tagline}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navigare principală" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  active
                    ? "border border-[#22262D] bg-[#171A20] text-[#F5F6F7] shadow-sm"
                    : "text-[#9299A3] hover:bg-[#101216] hover:text-[#F5F6F7]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#101216]/90 px-3.5 py-2 text-xs font-medium text-[#C7CBD1] shadow-sm transition-all hover:border-[#4779B8]/60 hover:bg-[#171A20] hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-[#4779B8]" />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F6F7] px-4 py-2 text-xs font-semibold text-[#08090B] shadow-[0_0_20px_-4px_rgba(255,255,255,0.2)] transition-all hover:bg-white hover:shadow-[0_0_25px_-2px_rgba(255,255,255,0.35)]"
          >
            <span>Contactează-mă</span>
          </Link>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center justify-center rounded-full border border-[#22262D] bg-[#101216] p-2 text-[#C7CBD1] transition-all hover:border-[#4779B8] hover:text-white"
            aria-label="Apelează telefon"
          >
            <Phone className="h-4 w-4 text-[#4779B8]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-full border border-[#22262D] bg-[#101216] p-2 text-[#F5F6F7] transition-all hover:bg-[#171A20]"
            aria-label={mobileMenuOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#22262D] bg-[#08090B]/95 px-4 py-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="mb-3 px-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9299A3]">
              Navigare
            </p>
          </div>
          <nav aria-label="Meniu mobil" className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? "border border-[#22262D] bg-[#171A20] text-white font-semibold"
                      : "text-[#C7CBD1] hover:bg-[#101216] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-[#9299A3]" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 border-t border-[#22262D] pt-4">
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/imobiliare"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col rounded-xl border border-[#22262D] bg-[#101216] p-3 text-left transition hover:border-[#4779B8]/50 hover:bg-[#171A20]"
              >
                <Home className="h-4 w-4 text-[#4779B8]" />
                <span className="mt-2 text-xs font-semibold text-white">Imobiliare</span>
                <span className="text-[10px] text-[#9299A3]">Tranzacții & Investiții</span>
              </Link>
              <Link
                href="/asigurari"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col rounded-xl border border-[#22262D] bg-[#101216] p-3 text-left transition hover:border-[#C92B35]/50 hover:bg-[#171A20]"
              >
                <Shield className="h-4 w-4 text-[#C92B35]" />
                <span className="mt-2 text-xs font-semibold text-white">Asigurări</span>
                <span className="text-[10px] text-[#9299A3]">PF & Companii B2B</span>
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-2 pt-1">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#F5F6F7] py-3 text-xs font-semibold text-[#08090B] shadow-md transition hover:bg-white"
              >
                <span>Deschide formularul de contact</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <div className="mt-2 flex items-center justify-between px-1 text-xs text-[#9299A3]">
                <a href={`tel:${SITE.phoneTel}`} className="font-medium text-[#C7CBD1] hover:text-white">
                  {SITE.phoneDisplay}
                </a>
                <a href={`mailto:${SITE.email}`} className="text-[#9299A3] hover:text-[#C7CBD1]">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
