"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/config/site";
import { Menu, X, ArrowRight, Phone, MessageSquare } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  // Independent smart auto-hide scroll listener for Header
  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const deltaY = currentScrollY - lastScrollYRef.current;

        setIsScrolled(currentScrollY > 20);

        // Always show near top
        if (currentScrollY < 60) {
          setIsVisible(true);
        } else if (mobileMenuOpen) {
          // Never hide while mobile menu is open
          setIsVisible(true);
        } else if (deltaY > 10 && currentScrollY > 80) {
          // Scrolling down: hide smoothly
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
  }, [mobileMenuOpen]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
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

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#D2D2D7]/70 shadow-[0_1px_4px_rgba(0,0,0,0.03)] py-3"
            : "bg-white/80 backdrop-blur-lg border-b border-[#E8E8ED]/70 py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Apple-like Minimal Wordmark with Authentic Personal Avatar */}
          <Link href="/" onClick={closeMenu} className="group flex items-center gap-2.5 transition">
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
              className="p-2 text-[#1D1D1F] transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label="Deschide meniul de navigare"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE NAVIGATION OVERLAY — 100% OPAQUE SOLID BACKGROUND, ZERO TRANSPARENCY */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Meniu de navigare mobil"
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-white text-[#1D1D1F] px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] overflow-y-auto animate-in fade-in duration-150"
        >
          {/* Top Bar with Brand & Close Button */}
          <div className="flex items-center justify-between border-b border-[#E8E8ED] pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[#D2D2D7] bg-[#F5F5F7] shrink-0">
                <Image
                  src="/images/cristian/cv-avatar-vest.webp"
                  alt="Cristian Văduva"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block text-base font-semibold tracking-tight text-[#1D1D1F]">
                  Cristian Văduva
                </span>
                <span className="block text-[11px] text-[#86868B]">
                  Imobiliare & Generali România
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]"
              aria-label="Închide meniul"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links — Comfortably Tappable (min 48px height) with Strong Contrast */}
          <nav aria-label="Navigare mobilă" className="my-auto py-6 flex flex-col divide-y divide-[#F5F5F7]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between min-h-[52px] py-3 px-2 group transition-colors"
                >
                  <span
                    className={`text-xl sm:text-2xl tracking-tight transition-colors ${
                      active ? "text-[#1D1D1F] font-bold" : "text-[#515154] group-hover:text-[#1D1D1F]"
                    }`}
                  >
                    {link.label}
                  </span>
                  <ArrowRight
                    className={`h-5 w-5 transition-transform ${
                      active ? "text-[#1D1D1F] translate-x-1" : "text-[#86868B] group-hover:translate-x-1"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Form, Telephone (+40), WhatsApp (+43) */}
          <div className="border-t border-[#E8E8ED] pt-5 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="apple-btn-primary w-full text-center !py-3 !text-sm"
            >
              Scrie-mi un mesaj
            </Link>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="apple-btn-secondary flex items-center justify-center gap-1.5 !py-2.5 !text-xs !px-2 text-center"
              >
                <Phone className="h-3.5 w-3.5 text-[#1D1D1F] shrink-0" />
                <span className="truncate">{SITE.phoneDisplay}</span>
              </a>

              <a
                href={SITE.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-secondary flex items-center justify-center gap-1.5 !py-2.5 !text-xs !px-2 text-center"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#1D1D1F] shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
