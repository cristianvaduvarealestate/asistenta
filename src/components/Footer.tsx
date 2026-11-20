import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/config/site";
import {
  Phone,
  MessageSquare,
  ArrowUpRight,
  Send,
  ExternalLink,
} from "lucide-react";

const legalLinks = [
  { href: "/confidentialitate", label: "Confidențialitate" },
  { href: "/cookies", label: "Politica de cookies" },
  { href: "/termeni", label: "Termeni și condiții" },
  { href: "/accesibilitate", label: "Accesibilitate" },
  { href: "/contact", label: "Contact direct" },
];

export function Footer() {
  const ecosystem = SITE.ecosystem;
  const social = SITE.social;

  return (
    <footer className="border-t border-[#E8E8ED] bg-[#F5F5F7] text-[#6E6E73] text-xs">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 space-y-12">
        {/* Advisor Signature Block & Direct Contacts */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#D2D2D7] pb-8">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#D2D2D7] bg-white shrink-0 shadow-sm">
              <Image
                src="/images/cristian/cv-avatar-vest.webp"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-[#1D1D1F] text-base tracking-tight">
                Cristian Văduva
              </div>
              <p className="text-xs text-[#6E6E73] mt-0.5">
                Consultanță Imobiliară & Partener Oficial Generali România
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
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
              <span>WhatsApp: {SITE.whatsappDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="apple-btn-primary !text-xs !py-2 !px-4"
            >
              Scrie un mesaj
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 6: COMPLETE VERIFIED WEBSITE ECOSYSTEM DIRECTORY */}
        {/* ========================================================================= */}
        <div className="space-y-6 border-b border-[#D2D2D7] pb-10">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Ecosistemul meu • Platforme Verificate
            </span>
            <p className="text-xs text-[#6E6E73] mt-1">
              Hub-urile digitale, instrumentele de analiză și platformele specializate din portofoliul Cristian Văduva.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Hub Central & Advisory */}
            <div className="space-y-2.5">
              <span className="font-mono text-[10px] uppercase text-[#1D1D1F] font-semibold tracking-wider">
                01 • Hub Central & Advisory
              </span>
              {ecosystem.central.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-[#E8E8ED] bg-white p-3 transition hover:border-[#6E6E73] hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#1D1D1F] group-hover:text-black">
                      {p.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors" />
                  </div>
                  <p className="text-[11px] text-[#6E6E73] mt-1 leading-normal line-clamp-2">
                    {p.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* Imobiliare & Construcții */}
            <div className="space-y-2.5">
              <span className="font-mono text-[10px] uppercase text-[#1D1D1F] font-semibold tracking-wider">
                02 • Imobiliare & Active
              </span>
              {ecosystem.realEstate.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-[#E8E8ED] bg-white p-3 transition hover:border-[#6E6E73] hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#1D1D1F] group-hover:text-black">
                      {p.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors" />
                  </div>
                  <p className="text-[11px] text-[#6E6E73] mt-1 leading-normal line-clamp-2">
                    {p.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* Asigurări & Finanțare */}
            <div className="space-y-2.5">
              <span className="font-mono text-[10px] uppercase text-[#1D1D1F] font-semibold tracking-wider">
                03 • Asigurări & Finanțare
              </span>
              {ecosystem.insuranceFinance.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-[#E8E8ED] bg-white p-3 transition hover:border-[#6E6E73] hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#1D1D1F] group-hover:text-black">
                      {p.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors" />
                  </div>
                  <p className="text-[11px] text-[#6E6E73] mt-1 leading-normal line-clamp-2">
                    {p.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* Tehnologie, Media & Aviație */}
            <div className="space-y-2.5">
              <span className="font-mono text-[10px] uppercase text-[#1D1D1F] font-semibold tracking-wider">
                04 • Tehnologie, Radar & Aviație
              </span>
              {ecosystem.techMediaAviation.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-[#E8E8ED] bg-white p-3 transition hover:border-[#6E6E73] hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#1D1D1F] group-hover:text-black">
                      {p.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors" />
                  </div>
                  <p className="text-[11px] text-[#6E6E73] mt-1 leading-normal line-clamp-2">
                    {p.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 7: OFFICIAL VERIFIED SOCIAL MEDIA PROFILES */}
        {/* ========================================================================= */}
        <div className="border-b border-[#D2D2D7] pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Rețele Oficiale & Canale de Comunicare
            </span>
            <span className="text-[11px] text-[#6E6E73]">
              Urmărește activitatea și noutățile directe
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cristian Văduva"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <span className="font-medium">Instagram</span>
            </a>

            <a
              href={social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Cristian Văduva"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <span className="font-medium">Facebook</span>
            </a>

            <a
              href={social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Cristian Văduva"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href={social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Cristian Văduva"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <span className="font-medium">YouTube</span>
            </a>

            <a
              href={social.telegramPersonal.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram Direct — Contact personal Cristian Văduva"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <Send className="h-3 w-3 text-[#1D1D1F]" />
              <span className="font-medium">Telegram Direct</span>
            </a>

            <a
              href={social.telegramChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Canal Telegram — Actualizări și analize"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <span className="font-medium">Canal Telegram</span>
            </a>

            <a
              href={social.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Cristian Văduva"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <span className="font-medium">TikTok</span>
            </a>

            <a
              href={social.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Cristian Văduva"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <span className="font-medium">X (Twitter)</span>
            </a>

            <a
              href={social.linktree.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linktree Cristian Văduva"
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-3.5 py-1.5 text-xs text-[#1D1D1F] transition hover:border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              <span className="font-medium">Linktree</span>
            </a>
          </div>
        </div>

        {/* Footnote Disclaimers in Apple Style */}
        <div className="space-y-2 border-b border-[#D2D2D7] pb-8 text-[11px] leading-relaxed text-[#6E6E73]">
          <p>
            1. Serviciile de consultanță în asigurări și emiterea polițelor sunt furnizate în calitate de partener oficial al Generali România. Cristian Văduva nu este broker independent de asigurare și nu furnizează comparații cu toți asigurătorii de pe piață.
          </p>
          <p>
            2. În tranzacțiile imobiliare, reprezentarea se realizează exclusiv în baza unui contract ferm încheiat cu una dintre părți (cumpărător sau vânzător), eliminând conflictele de interese. Fără comision dublu.
          </p>
          <p>
            3. Pentru piețele internaționale (Dubai, Monaco), asistența inițială constă în orientare și direcționare către brokeri licențiați în jurisdicțiile respective.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 gap-8 py-2 sm:grid-cols-4 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight text-xs">Imobiliare</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/imobiliare" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Reprezentare cumpărător
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Reprezentare vânzător
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Închirieri spații & birouri
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Consultanță investiții
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight text-xs">Asigurări Generali</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/asigurari?ajutor=oferta" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Polițe CASCO & Locuință
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=aminteste" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Verificare scadențe
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=explica" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Explicare clauze & franșize
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=dauna" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Îndrumare dosar daună
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight text-xs">Companii & B2B</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/afaceri" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Catalog riscuri comerciale
                </Link>
              </li>
              <li>
                <Link href="/afaceri/domenii" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Ghiduri pe industrii
                </Link>
              </li>
              <li>
                <Link href="/afaceri/evaluare-riscuri" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Evaluare interactivă
                </Link>
              </li>
              <li>
                <Link href="/afaceri/checklist-uri" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Checklist-uri de verificare
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight text-xs">Despre & Contact</h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/despre-mine" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Profil Cristian Văduva
                </Link>
              </li>
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  Telefon: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-[#1D1D1F] transition">
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <Link href="/contact" className="inline-block py-1 hover:text-[#1D1D1F] transition">
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
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="inline-block py-1.5 hover:text-[#1D1D1F] transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
