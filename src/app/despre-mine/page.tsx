import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import {
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Despre Cristian Văduva | Imobiliare și asigurări",
  description:
    "Consultanță imobiliară, soluții de protecție prin parteneriatul cu Generali și asistență pentru credite în colaborare cu Smart Credit România.",
  alternates: {
    canonical: `${SITE.publicUrl}/despre-mine`,
  },
  openGraph: {
    title: "Despre Cristian Văduva | Imobiliare și asigurări",
    description:
      "Consultanță imobiliară, soluții de protecție prin parteneriatul cu Generali și asistență pentru credite în colaborare cu Smart Credit România.",
    url: `${SITE.publicUrl}/despre-mine`,
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Despre Cristian Văduva — Consultant Imobiliare & Partener Generali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despre Cristian Văduva | Imobiliare și asigurări",
    description:
      "Consultanță imobiliară, soluții de protecție prin parteneriatul cu Generali și asistență pentru credite în colaborare cu Smart Credit România.",
    images: [`${SITE.publicUrl}/images/og-asistenta.jpg`],
  },
};

const DOMAINS = [
  {
    title: "Consultanță & Tranzacții Imobiliare",
    desc: "Asistență pentru achiziția, vânzarea și închirierea proprietăților rezidențiale și comerciale, cu accent pe analiza pieței și verificarea documentelor.",
  },
  {
    title: "Reprezentarea Cumpărătorului",
    desc: "Identificarea oportunităților relevante, analiza ofertelor din piață, suport la verificarea actelor și negocierea termenilor contractuali în favoarea clientului care mă angajează.",
  },
  {
    title: "Reprezentarea Vânzătorului",
    desc: "Pregătirea proprietății pentru piață, strategie de poziționare, promovare profesională și calificare riguroasă a potențialilor cumpărători.",
  },
  {
    title: "Proprietăți Premium & Internaționale",
    desc: "Oportunități imobiliare prin platforma AiXLuxury. Pentru proprietăți în Dubai, ofer consultanță inițială și te pun în legătură cu brokeri locali licențiați.",
  },
  {
    title: "Investiții Imobiliare & Randamente",
    desc: "Calculul realist al randamentelor din chirii (Yield), estimarea aprecierii de capital și structurarea achizițiilor pentru venit pasiv pe termen mediu și lung.",
  },
  {
    title: "Asigurări — Partener Generali",
    desc: "Consultanță și îndrumare pentru identificarea soluțiilor potrivite din gama Generali România pentru locuințe, companii, răspunderi civile și flote.",
  },
  {
    title: "Finanțare — Colaborare Smart Credit România",
    desc: "Asistență pentru credite ipotecare și finanțări de investiții, desfășurată în colaborare cu partenerul specializat Smart Credit România.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Înțelegerea reală a obiectivelor",
    desc: "Fiecare persoană sau companie are priorități specifice: o locuință pentru familie, un plasament financiar stabil sau protecția activelor unei afaceri. Încep întotdeauna prin a asculta cu atenție.",
  },
  {
    number: "02",
    title: "Analiză transparentă pe date reale",
    desc: "Nu fac promisiuni nerealiste și nu promovez opțiuni nepotrivite. Analizez datele concrete și prezint deschis atât avantajele, cât și eventualele riscuri sau limitări.",
  },
  {
    number: "03",
    title: "Atenție la detalii și clauze contractuale",
    desc: "Fie că este vorba despre condițiile și excluderile unei polițe de asigurare sau despre actele de proprietate ale unui imobil, verificarea amănunțită previne neplăcerile ulterioare.",
  },
  {
    number: "04",
    title: "Coordonare clară pe tot parcursul colaborării",
    desc: "Sprijin clientul în etapele importante: analiza ofertelor, îndrumare privind finanțarea cu Smart Credit România sau coordonarea demersurilor necesare la asigurătorul Generali.",
  },
  {
    number: "05",
    title: "Parteneriat pe termen lung",
    desc: "Obiectivul meu nu este încheierea unei singure tranzacții, ci construirea unei relații continue de încredere, pe care să te poți baza oricând ai nevoie de un sfat competent.",
  },
];

const PLATFORMS_SHOWCASE = [
  {
    name: "HomeFind",
    url: SITE.platforms.homefind.url,
    badge: "Rezidențial & Comercial",
    desc: "Platformă dedicată căutării și prezentării de proprietăți imobiliare accesibile și de calitate.",
  },
  {
    name: "AiXLuxury",
    url: SITE.platforms.aixluxury.url,
    badge: "Luxury & Exclusive",
    desc: "Proprietăți de lux și oportunități premium în București, Monaco și Dubai.",
  },
  {
    name: "Dubai Real Estate",
    url: SITE.platforms.dubai.url,
    badge: "Piața Internațională",
    desc: "Consultanță inițială pentru piața din Dubai, cu punere în legătură cu brokeri locali licențiați pentru activitățile de intermediere.",
  },
  {
    name: "Constructions",
    url: SITE.platforms.constructions.url,
    badge: "Construcții & Dezvoltări",
    desc: "Punct de legătură pentru proiecte de construcții civile și parteneriate industriale.",
  },
  {
    name: "CV Finance / Credite",
    url: SITE.platforms.credite.url,
    badge: "Finanțare & Credite",
    desc: "Consultanță privind soluțiile de creditare, desfășurată în colaborare cu Smart Credit România.",
  },
  {
    name: "cristianvaduva.com",
    url: SITE.platforms.cristianvaduva.url,
    badge: "Website Oficial",
    desc: "Hub-ul digital personal cu viziunea, contactul direct și proiectele dezvoltate.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 text-[#F5F6F7]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-[#9299A3]">
        <Link href="/" className="hover:text-[#F5F6F7] transition">
          Acasă
        </Link>
        <span className="text-[#22262D]">/</span>
        <span className="text-[#F5F6F7]">Despre mine</span>
      </div>

      {/* A. HERO PERSONAL */}
      <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-14">
        {/* Photo Container */}
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-4/5 max-w-md overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-card">
            <Image
              src="/images/cristian/cristian-vaduva-portrait.jpg"
              alt="Cristian Văduva — Consultant Imobiliare & Partener Generali"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent" />
          </div>
          <p className="mt-3 text-center text-xs text-[#9299A3]">
            Cristian Văduva • Consultant Imobiliare & Partener Generali
          </p>
        </div>

        {/* Hero Text */}
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#22262D] bg-[#171A20] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#C7CBD1]">
            Prezentare profesională
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#F5F6F7] sm:text-5xl lg:text-6xl">
            Cristian Văduva
          </h1>
          <p className="mt-2 text-lg font-semibold text-[#4779B8] sm:text-xl">
            Consultant Imobiliare & Partener Generali
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#9299A3] sm:text-lg">
            O abordare integrată pentru proprietăți, investiții și protecția activelor tale. Te ajut să iei decizii informate, să înțelegi opțiunile disponibile și să parcurgi orice tranzacție sau alegere de asigurare cu deplină claritate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5F6F7] px-6 py-3.5 text-xs font-semibold text-[#08090B] shadow-sm transition hover:bg-white"
            >
              <span>Contactează-mă direct</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#101216] px-5 py-3.5 text-xs font-semibold text-[#F5F6F7] transition hover:bg-[#171A20]"
            >
              <Phone className="h-4 w-4 text-[#C92B35]" />
              <span>{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* B. DESPRE MINE (POVESTE ȘI FILOSOFIE) */}
      <div className="mt-28 border-t border-[#22262D] pt-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9299A3]">
            Viziune & Activitate
          </span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7] sm:text-4xl">
            Două domenii strâns legate: Proprietăți și Protecție
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="space-y-5 text-base leading-relaxed text-[#C7CBD1] md:col-span-8">
            <p>
              În practică, achiziția unei proprietăți și protejarea acesteia nu ar trebui să fie două discuții separate. O locuință de familie, un spațiu comercial sau un portofoliu de investiții reprezintă sume importante și ani de muncă. Fără o analiză atentă la achiziție și fără o protecție adecvată pe termen lung, aceste active rămân expuse riscurilor neprevăzute.
            </p>
            <p>
              Activitatea mea se concentrează pe oferirea unei asistențe complete: de la identificarea oportunităților imobiliare potrivite pe piața locală până la analiza soluțiilor de protecție din gama Generali România și facilitarea accesului la consultanță financiară prin colaborarea cu Smart Credit România.
            </p>
            <p className="rounded-2xl border border-[#22262D] bg-[#101216] p-5 text-sm leading-relaxed text-[#F5F6F7]">
              Principiul meu de lucru este transparența: înțeleg nevoile clientului, explic opțiunile disponibile și clarific rolul meu în fiecare colaborare. Recomandările și soluțiile prezentate trebuie să corespundă situației concrete și condițiilor serviciilor sau produselor disponibile.
            </p>
          </div>

          {/* Secondary photo */}
          <div className="md:col-span-4">
            <div className="relative aspect-3/4 overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-card">
              <Image
                src="/images/cristian/cristian-aix-sny05672.jpg"
                alt="Cristian Văduva în consultanță profesională"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent" />
            </div>
            <p className="mt-2 text-center text-[11px] text-[#9299A3]">
              Consultanță orientată pe rezultate reale
            </p>
          </div>
        </div>
      </div>

      {/* C. DOMENII DE ACTIVITATE */}
      <div className="mt-28">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4779B8]">
          Expertiză integrată
        </span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7] sm:text-4xl">
          Domeniile principale în care ofer asistență
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[#9299A3]">
          Servicii structurate pentru persoane fizice, antreprenori și investitori care doresc claritate și siguranță.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((dom, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-3xl border border-[#22262D] bg-[#101216] p-6 shadow-card transition hover:border-[#4779B8]/60 hover:bg-[#171A20]"
            >
              <div>
                <span className="text-xs font-bold text-[#4779B8]">0{i + 1}</span>
                <h3 className="mt-2 text-base font-bold text-[#F5F6F7]">
                  {dom.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#9299A3]">
                  {dom.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* D. ABORDARE PROFESIONALĂ (5 ETAPE) */}
      <div className="mt-28 rounded-3xl bg-[#101216] p-8 sm:p-12 border border-[#22262D] shadow-card">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9299A3]">
            Cum colaborez cu fiecare client
          </span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7]">
            Filosofia și abordarea mea profesională
          </h2>
          <p className="mt-2 text-sm text-[#9299A3]">
            Fără presiune, fără jargon complicat și cu responsabilitate asumată. Fiecare pas este clarificat împreună.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div
              key={p.number}
              className="rounded-2xl border border-[#22262D] bg-[#171A20] p-6"
            >
              <span className="text-xs font-bold text-[#C92B35]">{p.number}</span>
              <h3 className="mt-2 text-base font-bold text-[#F5F6F7]">
                {p.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#9299A3]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* E. PREZENȚĂ PROFESIONALĂ (GALERIE IMAGINI FĂRĂ DUPLICATE) */}
      <div className="mt-28">
        <span className="text-xs font-bold uppercase tracking-wider text-[#9299A3]">
          Prezență & Activitate
        </span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7]">
          Galerie profesională
        </h2>
        <p className="mt-2 text-sm text-[#9299A3]">
          Imagini din activitatea de consultanță imobiliară, analiză și întâlniri de afaceri.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-card">
            <Image
              src="/images/cristian/cristian-aix-sny05672.jpg"
              alt="Cristian Văduva - Activitate Profesională și Analiză Imobiliară"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover transition hover:scale-102 duration-300"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-medium text-[#F5F6F7]">Analiză & Strategie Imobiliară</p>
              <p className="text-[11px] text-[#9299A3]">Evaluarea obiectivă a proprietăților și a contextului de piață</p>
            </div>
          </div>
          <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-card">
            <Image
              src="/images/cristian/cristian-aix-sny01904.jpg"
              alt="Cristian Văduva - Negociere & Consultanță de Afaceri"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover transition hover:scale-102 duration-300"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-medium text-[#F5F6F7]">Consultanță Directă & Negociere</p>
              <p className="text-[11px] text-[#9299A3]">Asistență dedicată pentru persoane fizice și antreprenori</p>
            </div>
          </div>
        </div>
      </div>

      {/* F. PLATFORME ȘI PROIECTE ACTIVE */}
      <div className="mt-28">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4779B8]">
          Ecosistem digital
        </span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7]">
          Proiecte și platforme administrate
        </h2>
        <p className="mt-2 text-sm text-[#9299A3]">
          Platforme prin care facilitez accesul clienților la oportunități din România și din străinătate.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS_SHOWCASE.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-[#22262D] bg-[#101216] p-5.5 transition hover:border-[#4779B8]/50 hover:bg-[#171A20]"
            >
              <div>
                <span className="rounded-full border border-[#22262D] bg-[#171A20] px-2.5 py-0.5 text-[10px] font-semibold text-[#9299A3]">
                  {p.badge}
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#F5F6F7]">{p.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#9299A3]">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
