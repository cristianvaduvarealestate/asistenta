import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SITE } from "@/config/site";
import {
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Despre Cristian Văduva | Consultant Imobiliare & Asigurări",
  description:
    "Consultanță imobiliară și asistență în asigurări. O abordare integrată pentru proprietăți, investiții și protecția activelor. Descoperă experiența, metodologia și proiectele lui Cristian Văduva.",
};

const DOMAINS = [
  {
    title: "Consultanță & Tranzacții Imobiliare",
    desc: "Asistență pentru achiziția, vânzarea și închirierea proprietăților rezidențiale și comerciale, cu accent pe verificarea documentelor și analiza financiară corectă.",
  },
  {
    title: "Reprezentarea Exclusivă a Cumpărătorului",
    desc: "Identificarea celor mai bune oportunități din piață, filtrarea ofertelor, verificarea actelor de proprietate și negocierea prețului în favoarea clientului.",
  },
  {
    title: "Reprezentarea Vânzătorului & Strategie de Preț",
    desc: "Pregătirea proprietății pentru piață, promovare profesională, calificare riguroasă a potențialilor clienți și coordonare notarială sigură.",
  },
  {
    title: "Proprietăți Premium & Internaționale",
    desc: "Oportunități imobiliare de lux prin platforma AiXLuxury, cu proprietăți selectate în București, Monaco, Dubai și alte destinații exclusiviste.",
  },
  {
    title: "Investiții Imobiliare & Randamente",
    desc: "Calculul realist al randamentelor din chirii (Yield), estimarea aprecierii de capital și structurarea achizițiilor pentru generare de venit pasiv.",
  },
  {
    title: "Consultanță & Asistență în Asigurări",
    desc: "Orientare independentă privind acoperirile potrivite pentru locuințe, clădiri comerciale, răspundere civilă, flote și riscuri ale afacerii.",
  },
  {
    title: "Protecția Bunurilor și Activelor",
    desc: "O abordare completă care combină achiziția imobiliară sigură cu programe adecvate de asigurare pentru prevenirea pierderilor neprevăzute.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Înțelegerea reală a obiectivelor",
    desc: "Fiecare persoană sau companie are priorități diferite: unii caută o locuință caldă pentru familie, alții un plasament financiar sigur sau o protecție optimă pentru patrimoniu. Încep întotdeauna prin a asculta.",
  },
  {
    number: "02",
    title: "Analiză transparentă și comparativă",
    desc: "Nu fac promisiuni nerealiste și nu promovez opțiuni nepotrivite. Analizez piața comparativ, pe bază de date concrete și cifre verificabile, prezentând atât avantajele, cât și riscurile asociate.",
  },
  {
    number: "03",
    title: "Identificarea riscurilor ascunse",
    desc: "Fie că este vorba despre clauze nefavorabile dintr-o poliță de asigurare sau neconcordanțe din actele de proprietate ale unui imobil, atenția la detalii protejează banii și liniștea clientului.",
  },
  {
    number: "04",
    title: "Negociere fermă și coordonare completă",
    desc: "Sprijin clientul în fiecare etapă critică: negocierea prețului, relația cu băncile creditoare, coordonarea cu biroul notarial sau instrumentarea documentelor la societatea de asigurare.",
  },
  {
    number: "05",
    title: "Parteneriat pe termen lung",
    desc: "Obiectivul meu nu este încheierea unei singure tranzacții, ci construirea unei relații de încredere continue, pe care să te poți baza oricând ai nevoie de o părere obiectivă.",
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
    desc: "Proprietăți exclusiviste, vile de lux și oportunități premium în București, Monaco și Dubai.",
  },
  {
    name: "Dubai Real Estate",
    url: SITE.platforms.dubai.url,
    badge: "Piața Internațională",
    desc: "Consultanță și acces direct la dezvoltatori de top din Dubai pentru investiții off-plan și rezidențiale.",
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
    desc: "Ghidare și soluții de creditare ipotecară pentru optimizarea costurilor de achiziție.",
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
              alt="Cristian Văduva — Consultant Imobiliare & Asigurări"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent" />
          </div>
          <p className="mt-3 text-center text-xs text-[#9299A3]">
            Cristian Văduva • Consultant Imobiliare & Asigurări
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
            Consultant Imobiliare & Asigurări
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#9299A3] sm:text-lg">
            O abordare integrată pentru proprietăți, investiții și protecția activelor tale. Te ajut să iei decizii informate, să eviți capcanele contractuale și să parcurgi orice tranzacție sau alegere de asigurare cu deplină siguranță.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5F6F7] px-6 py-3.5 text-xs font-semibold text-[#08090B] shadow-sm transition hover:bg-white"
            >
              <span>Contactează-mă direct</span>
              <ArrowRight className="h-4 w-4" />
            </a>
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
              În practică, achiziția unei proprietăți și protejarea acesteia nu ar trebui să fie două discuții separate. O casă de familie, un spațiu de birouri sau un portofoliu de investiții reprezintă sume mari de bani și ani de muncă. Fără o analiză corectă la achiziție și fără o protecție adecvată pe termen lung, aceste active rămân expuse riscurilor neprevăzute.
            </p>
            <p>
              Activitatea mea se concentrează pe oferirea unei asistențe complete: de la identificarea oportunităților imobiliare potrivite (pe piața locală din București și România, dar și în piețe de interes precum Dubai sau Monaco) până la verificarea clauzelor contractuale, obținerea celor mai bune oferte de finanțare și asigurarea patrimoniului împotriva daunelor sau răspunderilor civile.
            </p>
            <p>
              Principiul meu fundamental este independența și transparența. Nu propun niciodată o proprietate sau o poliță doar pentru a încheia o tranzacție. Clientul meu primește întotdeauna o privire obiectivă: dacă o zonă este supraevaluată sau dacă o poliță are excluderi periculoase, îl informez din primul moment.
            </p>
          </div>

          {/* Secondary photo */}
          <div className="md:col-span-4">
            <div className="relative aspect-3/4 overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-card">
              <Image
                src="/images/cristian/cristian-aix-orig-sny05672.jpg"
                alt="Cristian Văduva în mediul de afaceri"
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
            Fără presiune, fără jargon complicat și fără grabă nejustificată. Lucrurile bune se construiesc cu metodă.
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

      {/* E. FOTO GALERIE CU IMAGINI REALE */}
      <div className="mt-28">
        <span className="text-xs font-bold uppercase tracking-wider text-[#9299A3]">
          Prezență & Activitate
        </span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#F5F6F7]">
          Galerie profesională
        </h2>
        <p className="mt-2 text-sm text-[#9299A3]">
          Imagini reale din activitatea de consultanță, reprezentare și întâlniri de afaceri.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-card">
            <Image
              src="/images/cristian/cristian-vaduva-portrait.jpg"
              alt="Cristian Văduva - Portret Oficial"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover object-top transition hover:scale-102 duration-300"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/50 via-transparent to-transparent" />
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-card">
            <Image
              src="/images/cristian/cristian-aix-orig-sny05672.jpg"
              alt="Cristian Văduva - Activitate Profesională Imobiliară"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover transition hover:scale-102 duration-300"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/50 via-transparent to-transparent" />
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-card">
            <Image
              src="/images/cristian/cristian-aix-orig-sny01904.jpg"
              alt="Cristian Văduva - Negociere & Consultanță"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover transition hover:scale-102 duration-300"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/50 via-transparent to-transparent" />
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
          Website-uri active prin care facilitez accesul clienților la oportunități din România și din străinătate.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS_SHOWCASE.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-[#22262D] bg-[#101216] p-6 shadow-card transition hover:border-[#4779B8]/60 hover:bg-[#171A20]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#171A20] border border-[#22262D] px-3 py-1 text-[11px] font-semibold text-[#C7CBD1]">
                    {item.badge}
                  </span>
                  <ExternalLink className="h-4 w-4 text-[#9299A3] opacity-60 transition group-hover:opacity-100 group-hover:text-[#4779B8]" />
                </div>
                <h3 className="mt-3 text-lg font-bold text-[#F5F6F7] group-hover:text-white transition">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#9299A3]">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#22262D]">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7CBD1] group-hover:text-[#4779B8] transition">
                  <span>Deschide site-ul</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* G. CONTACT SECTION */}
      <div id="contact" className="mt-28 rounded-3xl bg-gradient-to-b from-[#101216] to-[#08090B] border border-[#22262D] p-8 text-white sm:p-14 shadow-card scroll-mt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C92B35]">
              Discuție directă & confidențială
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#F5F6F7] sm:text-4xl">
              Hai să discutăm despre planurile tale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#9299A3]">
              Fie că ai o întrebare specifică despre o tranzacție imobiliară, fie că vrei să verifici o poliță de asigurare sau să explorezi oportunități de investiție, îmi poți scrie sau mă poți apela direct.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 text-sm">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center gap-3 text-[#F5F6F7] transition hover:text-[#C92B35]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171A20] border border-[#22262D]">
                  <Phone className="h-4 w-4 text-[#C92B35]" />
                </div>
                <div>
                  <span className="block text-[11px] text-[#9299A3]">Telefon direct</span>
                  <strong className="text-base text-[#F5F6F7]">{SITE.phoneDisplay}</strong>
                </div>
              </a>

              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#F5F6F7] transition hover:text-emerald-400"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171A20] border border-[#22262D] text-emerald-400">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-[#9299A3]">WhatsApp direct</span>
                  <strong className="text-base text-[#F5F6F7]">{SITE.phoneDisplay}</strong>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-3 text-[#F5F6F7] transition hover:text-[#4779B8]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171A20] border border-[#22262D]">
                  <Mail className="h-4 w-4 text-[#4779B8]" />
                </div>
                <div>
                  <span className="block text-[11px] text-[#9299A3]">Email</span>
                  <strong className="text-base text-[#F5F6F7]">{SITE.email}</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-[#171A20]/80 p-6 border border-[#22262D] md:col-span-5 shadow-glass">
            <h3 className="text-base font-bold text-[#F5F6F7]">
              Alege direcția dorită:
            </h3>
            <p className="mt-1 text-xs text-[#9299A3]">
              Formulare structurate pentru asistență imediată:
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/asigurari"
                className="flex items-center justify-between rounded-xl bg-[#101216] border border-[#22262D] p-3.5 text-xs font-semibold text-[#F5F6F7] transition hover:bg-[#22262D]"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-[#C92B35]" />
                  <span>Asistență Asigurări (PF & PJ)</span>
                </div>
                <ArrowRight className="h-4 w-4 text-[#9299A3]" />
              </Link>

              <Link
                href="/imobiliare#formular-imobiliar"
                className="flex items-center justify-between rounded-xl bg-[#4779B8] p-3.5 text-xs font-semibold text-white transition hover:bg-[#3b669c]"
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="h-4 w-4 text-white" />
                  <span>Formular Asistență Imobiliară</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
