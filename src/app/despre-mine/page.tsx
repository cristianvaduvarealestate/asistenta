import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { Phone, MessageSquare, Lock, Heart, ShieldCheck, UserCheck } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Despre Cristian Văduva — Cine sunt și cum te pot ajuta",
  description:
    "Află mai multe despre Cristian Văduva: consultanță imobiliară onestă și parteneriat oficial Generali România. Relații de lungă durată construite pe încredere și fapte reale.",
  alternates: {
    canonical: `${SITE.publicUrl}/despre-mine`,
  },
  openGraph: {
    title: "Despre Cristian Văduva — Cine sunt și cum te pot ajuta",
    description:
      "Află mai multe despre Cristian Văduva: consultanță imobiliară onestă și parteneriat oficial Generali România.",
    url: `${SITE.publicUrl}/despre-mine`,
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Cristian Văduva",
      },
    ],
  },
};

export default function DespreMinePage() {
  const editorialGallery = [
    {
      src: "/images/cristian/cv-lounge-wine.webp",
      alt: "Cristian Văduva — O cafea și o discuție sinceră",
      caption: "O discuție sinceră la o cafea",
      sub: "Ascult întâi ce ai nevoie, fără grabă și fără prejudecăți.",
    },
    {
      src: "/images/cristian/cv-leather-armchair.webp",
      alt: "Cristian Văduva — Analiză lucidă și sfaturi cinstite",
      caption: "Sfaturi cinstite și bine cântărite",
      sub: "Dacă o proprietate sau o poliță nu ți se potrivește, îți spun deschis.",
    },
    {
      src: "/images/cristian/cv-sunset-terrace.webp",
      alt: "Cristian Văduva — Perspective urbane",
      caption: "Înțelegem orașul și cartierele",
      sub: "Cunoaștem zonele reale din București, dincolo de reclame.",
    },
    {
      src: "/images/cristian/cv-skytower-glass.webp",
      alt: "Cristian Văduva — Proiecte moderne",
      caption: "Atenție la fiecare detaliu",
      sub: "De la actele cadastrale până la calitatea efectivă a finisajelor.",
    },
    {
      src: "/images/cristian/cv-terrace-steps.webp",
      alt: "Cristian Văduva — Dialog direct și deschis",
      caption: "Sunt alături de tine la fiecare pas",
      sub: "Mergem împreună la vizionări, la negocieri și la notar.",
    },
    {
      src: "/images/cristian/cv-toast-event.webp",
      alt: "Cristian Văduva — Relații pe viață",
      caption: "Oameni înainte de orice altceva",
      sub: "Cele mai bune colaborări se transformă în prietenii de lungă durată.",
    },
  ];

  return (
    <div className="bg-white text-[#1D1D1F]">
      {/* ========================================================================= */}
      {/* 1. HERO — EDITORIAL PROFILE OPENING WITH AUTHENTIC PORTRAIT (UNCLIPPED) */}
      {/* ========================================================================= */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#86868B] mb-6">
            <Link href="/" className="hover:text-[#1D1D1F] transition">
              Acasă
            </Link>
            <span>/</span>
            <span>Despre mine</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Personal Greeting & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
                Salut, sunt Cristian Văduva
              </span>
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.08]">
                Oameni înainte de cifre. <br />
                <span className="text-[#86868B]">Și fapte înainte de vorbe.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
                Cred că cele mai bune decizii financiare și de viață se iau atunci când ai alături un om care te ascultă cu atenție și îți spune adevărul, simplu și fără ocolișuri.
              </p>
              <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
                Fără grabă, fără limbaj de lemn și fără să-ți vând iluzii. Sunt consultant imobiliar și partener oficial Generali România, dar mai presus de orice, sunt un om care ajută alți oameni să-și găsească liniștea.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="apple-btn-secondary inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-[#86868B]" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
                <a
                  href={SITE.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-secondary inline-flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4 text-[#86868B]" />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            {/* Right Column: Authentic Unclipped Portrait (3:4 Ratio) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] shadow-sm">
                <Image
                  src="/images/cristian/cv-historic-architecture.webp"
                  alt="Cristian Văduva — Consultanță directă și deschisă"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PHILOSOPHY & MANIFESTO — WARM & HUMAN */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-[#F5F5F7]">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-[#E8E8ED]">
              <Image
                src="/images/cristian/cv-palace-stairs.webp"
                alt="Cristian Văduva — Răbdare și respect pentru oameni"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#86868B] leading-relaxed">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Cum privesc eu lucrurile
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
              O casă este despre cămin. O asigurare este despre liniște.
            </h2>
            <blockquote className="text-xl sm:text-2xl text-[#1D1D1F] font-normal border-l-2 border-[#1D1D1F] pl-4">
              „Când cumperi un cămin pentru familia ta sau vrei să protejezi tot ce ai clădit cu trudă, nu ai nevoie de presiune de vânzări. Ai nevoie de un om cinstit care să stea lângă tine și să verifice fiecare detaliu.”
            </blockquote>
            <p>
              Nu cred în promisiuni umflate și nici în tehnici agresive de convingere. Când colaborăm, mă pun mereu în locul tău: dacă o proprietate are hibe ascunse sau dacă o poliță are clauze nefavorabile, ți-o spun clar de la început. Prefer să ratez o tranzacție decât să știi că nu ai făcut alegerea potrivită.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. VERIFIED CAREER & ADVISORY ROLES (AUTHENTIC PHOTOGRAPHY) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Ce fac pentru tine
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
              Trei moduri concrete în care te pot sprijini.
            </h2>
          </div>

          <div className="space-y-16">
            {/* Pilon 1: Imobiliare */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center border-b border-[#E8E8ED] pb-14">
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                  <Image
                    src="/images/cristian/cristian-residences-vest.webp"
                    alt="Cristian Văduva — Consultanță imobiliară pe teren"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <span className="font-mono text-xs text-[#86868B]">01 • IMOBILIARE</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                  Cumpărare sau vânzare, de partea ta
                </h3>
                <p className="text-sm sm:text-base text-[#86868B] leading-relaxed">
                  Fie că vrei să cumperi căminul potrivit, fie că vinzi o proprietate, sunt alături de tine de la prima vizionare până la semnarea actelor la notar. Verific actele cu atenție, negociez în folosul tău și nu iau niciodată comision dublu.
                </p>
                <div className="pt-2">
                  <Link href="/imobiliare" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] hover:underline">
                    <span>Află cum te ajut în imobiliare →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pilon 2: Asigurări Generali */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center border-b border-[#E8E8ED] pb-14">
              <div className="lg:col-span-7 order-2 lg:order-1 space-y-3">
                <span className="font-mono text-xs text-[#86868B]">02 • ASIGURĂRI GENERALI</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                  Partener Oficial Generali România
                </h3>
                <p className="text-sm sm:text-base text-[#86868B] leading-relaxed">
                  Îți explic pe înțelesul tău fiecare poliță: CASCO, asigurarea casei, sănătate sau răspunderi pentru compania ta. Fără steluțe ascunse, cu franșizele explicate dinainte și cu sprijin direct la telefon când apare un eveniment neplăcut.
                </p>
                <div className="pt-2">
                  <Link href="/asigurari" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] hover:underline">
                    <span>Vezi soluțiile de asigurare →</span>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative aspect-[3/2] sm:aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                  <Image
                    src="/images/cristian/cv-executive-white-tie.webp"
                    alt="Cristian Văduva — Partener Generali Asigurări la birou"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Pilon 3: Finanțare Smart Credit */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                  <Image
                    src="/images/cristian/cv-summit-suit.webp"
                    alt="Cristian Văduva — Sprijin pentru finanțare"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <span className="font-mono text-xs text-[#86868B]">03 • FINANȚARE</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                  Consultanță pentru credite ipotecare
                </h3>
                <p className="text-sm sm:text-base text-[#86868B] leading-relaxed">
                  Dacă ai nevoie de finanțare bancară pentru achiziție, colaborez cu Smart Credit România pentru a găsi cea mai avantajoasă opțiune de pe piață. Fără drumuri inutile și cu dosarul pregătit corect din prima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SUBSTANTIAL EDITORIAL PHOTO GALLERY SEQUENCE */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-14 text-center sm:text-left">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Dincolo de ecran
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
              Momente și întâlniri autentice.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#86868B]">
              Imagini din activitatea de zi cu zi, pe teren, la birou și în dialog cu oamenii cu care colaborez.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {editorialGallery.map((item, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-[#E8E8ED] transition-transform duration-300 group-hover:shadow-md">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                    className="object-cover object-top transition duration-500 group-hover:scale-102"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STATUTORY DECLARATION */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#F5F5F7] p-8 sm:p-12 border border-[#E8E8ED]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-tight text-[#1D1D1F] mb-6">
            <Lock className="h-4 w-4" />
            <span>Transparență deplină și rol profesional</span>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 text-xs leading-relaxed text-[#86868B]">
            <div>
              <strong className="text-[#1D1D1F] block text-sm mb-1">Consultanță Imobiliară</strong>
              Reprezentare exclusivă a unei singure părți în tranzacție. Nu ofer servicii notariale sau asistență juridică rezervată avocaților; actele finale se semnează întotdeauna la notari publici autorizați.
            </div>
            <div>
              <strong className="text-[#1D1D1F] block text-sm mb-1">Partener Generali</strong>
              Nu sunt broker independent de asigurare. Polițele oferite aparțin exclusiv portofoliului Generali România, conform contractului de asigurare.
            </div>
            <div>
              <strong className="text-[#1D1D1F] block text-sm mb-1">Finanțare Smart Credit</strong>
              Sprijin pentru dosarul de credit în parteneriat cu Smart Credit România. Aprobarea finanțării aparține băncii alese.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ — ÎNTREBĂRI FRECVENTE */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* 7. DIRECT CONTACT */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-2 border-[#E8E8ED] shadow-sm relative bg-[#F5F5F7]">
            <Image
              src="/images/cristian/cv-avatar-vest.webp"
              alt="Cristian Văduva"
              fill
              className="object-cover"
            />
          </div>

          <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
            Hai să ne cunoaștem • Cristian Văduva
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
            Vrei să stăm de vorbă?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-[#86868B]">
            Răspund personal la telefon sau pe WhatsApp. Îmi poți povesti situația ta și găsim împreună cea mai bună cale de urmat.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="apple-btn-secondary inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4 text-[#86868B]" />
              <span>{SITE.phoneDisplay}</span>
            </a>

            <a
              href={SITE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary inline-flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4 text-[#86868B]" />
              <span>WhatsApp</span>
            </a>

            <Link href="/contact" className="apple-btn-primary">
              Scrie-mi un mesaj
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
