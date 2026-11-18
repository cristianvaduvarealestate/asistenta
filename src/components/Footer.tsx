import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/config/site";

const legalLinks = [
  { href: "/confidentialitate", label: "Confidențialitate" },
  { href: "/cookies", label: "Politica de cookies" },
  { href: "/termeni", label: "Termeni și condiții" },
  { href: "/informare-servicii", label: "Informare servicii" },
  { href: "/accesibilitate", label: "Accesibilitate" },
  { href: "/contact", label: "Contact direct" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E8E8ED] bg-[#F5F5F7] text-[#86868B] text-xs">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Advisor Signature Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#D2D2D7] pb-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#D2D2D7] bg-white shrink-0">
              <Image
                src="/images/cristian/cv-avatar-vest.webp"
                alt="Cristian Văduva"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-[#1D1D1F] text-sm tracking-tight">
                Cristian Văduva
              </div>
              <p className="text-xs text-[#86868B] mt-0.5">
                Consultanță Imobiliară & Partener Oficial Generali România
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="apple-btn-secondary !text-xs !py-1.5 !px-3.5"
            >
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/despre-mine"
              className="apple-btn-primary !text-xs !py-1.5 !px-3.5"
            >
              Profil complet
            </Link>
          </div>
        </div>

        {/* Footnote Disclaimers in Apple Style */}
        <div className="space-y-2 border-b border-[#D2D2D7] pb-8 text-[11px] leading-relaxed text-[#86868B]">
          <p>
            1. Serviciile de consultanță în asigurări și emiterea polițelor sunt furnizate în calitate de partener oficial al Generali România. Cristian Văduva nu este broker independent de asigurare și nu furnizează comparații cu toți asigurătorii de pe piață.
          </p>
          <p>
            2. În tranzacțiile imobiliare, reprezentarea se realizează exclusiv în baza unui contract ferm încheiat cu una dintre părți (cumpărător sau vânzător), eliminând conflictele de interese.
          </p>
          <p>
            3. Pentru piețele internaționale (Dubai, Monaco), asistența inițială constă în orientare și direcționare către brokeri licențiați în jurisdicțiile respective.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight text-xs">Imobiliare</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/imobiliare" className="hover:text-[#1D1D1F] transition">
                  Reprezentare cumpărător
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="hover:text-[#1D1D1F] transition">
                  Reprezentare vânzător
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="hover:text-[#1D1D1F] transition">
                  Închirieri spații & birouri
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="hover:text-[#1D1D1F] transition">
                  Consultanță investiții
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight text-xs">Asigurări Generali</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/asigurari?ajutor=oferta" className="hover:text-[#1D1D1F] transition">
                  Polițe CASCO & Locuință
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=aminteste" className="hover:text-[#1D1D1F] transition">
                  Verificare scadențe
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=explica" className="hover:text-[#1D1D1F] transition">
                  Explicare clauze & franșize
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=dauna" className="hover:text-[#1D1D1F] transition">
                  Îndrumare dosar daună
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight text-xs">Companii & B2B</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/afaceri" className="hover:text-[#1D1D1F] transition">
                  Catalog riscuri comerciale
                </Link>
              </li>
              <li>
                <Link href="/afaceri/domenii" className="hover:text-[#1D1D1F] transition">
                  Ghiduri pe industrii
                </Link>
              </li>
              <li>
                <Link href="/afaceri/evaluare-riscuri" className="hover:text-[#1D1D1F] transition">
                  Evaluare interactivă
                </Link>
              </li>
              <li>
                <Link href="/afaceri/checklist-uri" className="hover:text-[#1D1D1F] transition">
                  Checklist-uri de verificare
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight text-xs">Despre & Contact</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/despre-mine" className="hover:text-[#1D1D1F] transition">
                  Profil Cristian Văduva
                </Link>
              </li>
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-[#1D1D1F] transition">
                  Telefon: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] transition">
                  WhatsApp direct
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1D1D1F] transition">
                  Formular confidențial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal Sub-footer */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#D2D2D7] pt-6 sm:flex-row sm:items-center text-[11px]">
          <p>
            Copyright © {new Date().getFullYear()} {SITE.person}. Toate drepturile rezervate.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#1D1D1F] transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
