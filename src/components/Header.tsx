"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/config/site";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Prezentare" },
    { href: "/imobiliare", label: "Imobiliare" },
    { href: "/asigurari", label: "Asigurări" },
    { href: "/afaceri", label: "Companii" },
    { href: "/despre-mine", label: "Despre mine" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[#D2D2D7]/60 shadow-[0_1px_4px_rgba(0,0,0,0.03)] py-3"
          : "bg-white/70 backdrop-blur-lg border-b border-[#E8E8ED]/60 py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Apple-like Minimal Wordmark with Authentic Personal Avatar */}
        <Link href="/" className="group flex items-center gap-2.5 transition">
          <div className="relative h-7 w-7 overflow-hidden rounded-full border border-[#D2D2D7] bg-[#F5F5F7] shrink-0">
            <Image
              src="/images/cristian/cv-avatar-vest.webp"
              alt="Cristian Văduva"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#1D1D1F] transition-opacity group-hover:opacity-70">
            Cristian Văduva
          </span>
          <span className="hidden sm:inline-block text-[11px] font-normal text-[#86868B] border-l border-[#D2D2D7] pl-2.5">
            Imobiliare & Generali
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navigare principală" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-tight transition-colors duration-150 ${
                  active
                    ? "text-[#1D1D1F] font-semibold"
                    : "text-[#86868B] hover:text-[#1D1D1F]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Minimal Pill CTA */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="text-[13px] tracking-tight text-[#86868B] hover:text-[#1D1D1F] transition-colors"
          >
            {SITE.phoneDisplay}
          </a>

          <Link
            href="/contact"
            className="apple-btn-primary !py-1.5 !px-4 !text-[13px]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className="apple-btn-primary !py-1.5 !px-3.5 !text-xs"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 text-[#1D1D1F] transition-opacity hover:opacity-70"
            aria-label="Deschide meniul"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Apple-like Clean Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white px-6 py-6 lg:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#E8E8ED] pb-4">
            <span className="text-base font-semibold tracking-tight text-[#1D1D1F]">
              Cristian Văduva
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#1D1D1F] transition-opacity hover:opacity-70"
              aria-label="Închide meniul"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Meniu mobil" className="my-auto flex flex-col space-y-5 py-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-[#F5F5F7]"
                >
                  <span
                    className={`text-2xl tracking-tight transition-colors ${
                      active ? "text-[#1D1D1F] font-semibold" : "text-[#86868B]"
                    }`}
                  >
                    {link.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#86868B]" />
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-[#E8E8ED] pt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="apple-btn-primary w-full text-center"
            >
              Contact direct
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="apple-btn-secondary w-full text-center"
            >
              Apelează {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
