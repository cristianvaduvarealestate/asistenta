import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { RealEstateForm } from "@/components/real-estate/RealEstateForm";
import { FAQSection } from "@/components/FAQSection";
import { REAL_ESTATE_FAQS } from "@/data/faqs/real-estate";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Lock,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultanță Imobiliară — Cristian Văduva | De partea ta",
  description:
    "Consultanță imobiliară onestă pentru cumpărare, vânzare, închiriere și investiții. Fără presiune, cu verificarea atentă a actelor și reprezentare exclusivă a intereselor tale.",
  alternates: {
    canonical: `${SITE.publicUrl}/imobiliare`,
  },
  openGraph: {
    title: "Consultanță Imobiliară — Cristian Văduva | De partea ta",
    description:
      "Consultanță imobiliară onestă pentru cumpărare, vânzare, închiriere și investiții.",
    url: `${SITE.publicUrl}/imobiliare`,
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Consultanță Imobiliară — Cristian Văduva | De partea ta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultanță Imobiliară — Cristian Văduva | De partea ta",
    description:
      "Consultanță imobiliară onestă pentru cumpărare, vânzare, închiriere și investiții. Fără presiune, cu verificarea atentă a actelor.",
    images: [`${SITE.publicUrl}/images/og-asistenta.jpg`],
  },
};

const PLATFORMS = [
  {
    id: "homefind",
    name: "HomeFind",
    url: SITE.platforms.homefind.url,
    desc: "Căutare inteligentă de apartamente și case rezidențiale, cu filtre clare și informații complete.",
    badge: "Rezidențial",
  },
  {
    id: "aixluxury",
    name: "AiXLuxury",
    url: SITE.platforms.aixluxury.url,
    desc: "Selecție de proprietăți exclusiviste și oportunități premium în București, Monaco și Dubai.",
    badge: "Premium & Internațional",
  },
  {
    id: "dubai",
    name: "Dubai Real Estate",
    url: SITE.platforms.dubai.url,
    desc: "Consultanță inițială pentru piața din Emirate, cu redirecționare către brokeri locali licențiați.",
    badge: "Dubai Partners",
  },
  {
    id: "constructions",
    name: "Constructions",
    url: SITE.platforms.constructions.url,
    desc: "Proiecte de construcții, dezvoltări rezidențiale și parteneriate tehnice din industrie.",
    badge: "Proiecte & Șantiere",
  },
  {
    id: "credite",
    name: "CV Finance / Credite",
    url: SITE.platforms.credite.url,
    desc: "Consultanță privind finanțarea bancară și creditele ipotecare, în colaborare cu Smart Credit România.",
    badge: "Finanțare Ipotecară",
  },
  {
    id: "cristianvaduva",
    name: "CristianVaduva.com",
    url: SITE.platforms.cristianvaduva.url,
    desc: "Website-ul oficial și portofoliul profesional integrat al lui Cristian Văduva.",
    badge: "Website Oficial",
  },
];

export default function RealEstatePage() {
  return (
    <div className="bg-white text-[#1D1D1F]">
      {/* ========================================================================= */}
      {/* 1. HERO — EDITORIAL REAL ESTATE WITH AUTHENTIC PORTRAIT (UNCLIPPED) */}
      {/* ========================================================================= */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6E6E73] mb-6">
            <Link href="/" className="hover:text-[#1D1D1F] transition">
              Acasă
            </Link>
            <span>/</span>
            <span>Consultanță Imobiliară</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Warm Human Intro */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-tight uppercase text-[#6E6E73]">
                Consultanță Personală • Cristian Văduva
              </span>
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.08]">
                Găsim locuința potrivită. <br />
                <span className="text-[#6E6E73]">Fără grabă și fără capcane.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
                Fie că vrei să cumperi căminul perfect pentru familia ta sau vrei să vinzi o proprietate la prețul corect, sunt de partea ta de la prima vizionare până la semnarea actelor la notar.
              </p>
              <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
                Verificăm fiecare act, îți spun deschis plusurile și minusurile fiecărei proprietăți și negociem ferm, exclusiv în interesul tău. Fără comision dublu.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#formular-imobiliar" className="apple-btn-primary">
                  Spune-mi ce fel de proprietate cauți
                </a>
                <a href={`tel:${SITE.phoneTel}`} className="apple-btn-secondary inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#6E6E73]" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E8E8ED] flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#6E6E73]">
                <span className="flex items-center gap-1.5 text-[#1D1D1F]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1D1D1F]" />
                  Reprezentare exclusivă
                </span>
                <span className="flex items-center gap-1.5 text-[#1D1D1F]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1D1D1F]" />
                  Fără comision dublu
                </span>
                <span className="flex items-center gap-1.5 text-[#1D1D1F]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1D1D1F]" />
                  Verificare acte la notar
                </span>
              </div>
            </div>

            {/* Right Column: Authentic Unclipped Portrait (3:4 Ratio) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] shadow-sm">
                <Image
                  src="/images/cristian/cristian-skyline-terrace.webp"
                  alt="Cristian Văduva — Consultanță Imobiliară Penthouse Terrace"
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
      {/* 2. STATUTORY MANDATE NOTICE */}
      {/* ========================================================================= */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl flex items-start gap-3 text-xs text-[#6E6E73] leading-relaxed">
          <Lock className="h-4 w-4 shrink-0 text-[#1D1D1F] mt-0.5" />
          <p>
            <strong className="text-[#1D1D1F]">Transparență totală:</strong> În orice tranzacție reprezint exclusiv partea care mă angajează (cumpărătorul sau vânzătorul). Nu percep niciodată comision dublu și nu încerc să mulțumesc ambele părți pe ascuns. Verificarea juridică a actelor și autentificarea contractului se fac doar la notari publici autorizați.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FOUR DISTINCT DESTINATIONS WITH AUTHENTIC PHOTOGRAPHY (PROPER RATIOS) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#6E6E73]">
              Cum lucrăm împreună
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
              Te sprijin la fiecare pas.
            </h2>
          </div>

          <div className="space-y-20">
            {/* 1. CUMPĂRARE */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center border-b border-[#E8E8ED] pb-16">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs text-[#6E6E73]">01 • ACHIZIȚIE</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                  Vrei să cumperi o proprietate?
                </h3>
                <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                  Căutăm activ în piață cele mai bune oferte reale, eliminăm proprietățile cu probleme de acte și negociem doar în favoarea ta.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#1D1D1F] bg-[#F5F5F7] p-5 rounded-2xl">
                  <p>• Apartamente bine compartimentate și case primitoare în cartiere bune.</p>
                  <p>• Verificarea cărții funciare, a sarcinilor și a calității construcției.</p>
                  <p>• Prezență la vizionări, negociere și asistență la notar până la primirea cheilor.</p>
                </div>
                <div>
                  <a href="#formular-imobiliar" className="apple-btn-secondary !text-xs !py-2 !px-4">
                    Spune-mi ce cauți →
                  </a>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                  <Image
                    src="/images/cristian/cristian-residences-vest.webp"
                    alt="Cristian Văduva — Achiziții imobiliare și vizionări"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* 2. VÂNZARE */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center border-b border-[#E8E8ED] pb-16">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                  <Image
                    src="/images/cristian/cv-historic-architecture.webp"
                    alt="Cristian Văduva — Reprezentare vânzător"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <span className="font-mono text-xs text-[#6E6E73]">02 • VÂNZARE</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                  Vrei să vinzi o proprietate?
                </h3>
                <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                  Stabilim un preț corect și realist pe baza tranzacțiilor recente, pregătim proprietatea pentru prezentare și aducem doar cumpărători serioși.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#1D1D1F] bg-[#F5F5F7] p-5 rounded-2xl">
                  <p>• Estimare sinceră a valorii, fără evaluări exagerate doar pentru a semna contractul.</p>
                  <p>• Fotografii de calitate și promovare targetată către cumpărători reali.</p>
                  <p>• Gestionarea vizionărilor și a ofertelor fără stres pentru tine.</p>
                </div>
                <div>
                  <a href="#formular-imobiliar" className="apple-btn-secondary !text-xs !py-2 !px-4">
                    Propune proprietatea spre vânzare →
                  </a>
                </div>
              </div>
            </div>

            {/* 3. ÎNCHIRIERE */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center border-b border-[#E8E8ED] pb-16">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs text-[#6E6E73]">03 • ÎNCHIRIERE</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                  Închirieri sigure și fără bătăi de cap.
                </h3>
                <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                  Te ajut să găsești chiriași serioși și stabili pentru locuința ta, sau spațiul optim de birouri pentru afacerea ta.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#1D1D1F] bg-[#F5F5F7] p-5 rounded-2xl">
                  <p>• Închirieri de apartamente și case pentru familii sau expați.</p>
                  <p>• Spații de birouri și spații comerciale potrivite activității tale.</p>
                  <p>• Verificarea profilului chiriașilor și contracte clare înregistrate fiscal.</p>
                </div>
                <div>
                  <a href="#formular-imobiliar" className="apple-btn-secondary !text-xs !py-2 !px-4">
                    Discută termenii de închiriere →
                  </a>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                  <Image
                    src="/images/cristian/cv-residence-interior.webp"
                    alt="Cristian Văduva — Închirieri reședințe și birouri"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 4. INVESTIȚII */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                  <Image
                    src="/images/cristian/cv-sunset-terrace.webp"
                    alt="Cristian Văduva — Oportunități imobiliare de durată"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <span className="font-mono text-xs text-[#6E6E73]">04 • INVESTIȚII</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                  Investiții calculate pe termen lung.
                </h3>
                <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                  Dacă vrei să plasezi economiile într-o proprietate generatoare de chirie sau cu apreciere în timp, calculăm randamentul net real, dincolo de promisiuni optimiste.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-[#F5F5F7] p-4 rounded-2xl">
                    <span className="block text-[11px] text-[#6E6E73] font-mono">București</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#1D1D1F] block mt-0.5">6% - 8%</span>
                    <span className="text-[10px] text-[#6E6E73] block mt-0.5">Randament net</span>
                  </div>
                  <div className="bg-[#F5F5F7] p-4 rounded-2xl">
                    <span className="block text-[11px] text-[#6E6E73] font-mono">Dubai</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#1D1D1F] block mt-0.5">7% - 9%</span>
                    <span className="text-[10px] text-[#6E6E73] block mt-0.5">Parteneri locali</span>
                  </div>
                  <div className="bg-[#F5F5F7] p-4 rounded-2xl">
                    <span className="block text-[11px] text-[#6E6E73] font-mono">Monaco</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#1D1D1F] block mt-0.5">Capital</span>
                    <span className="text-[10px] text-[#6E6E73] block mt-0.5">Apreciere valoare</span>
                  </div>
                </div>
                <div>
                  <a href="#formular-imobiliar" className="apple-btn-secondary !text-xs !py-2 !px-4">
                    Discută o investiție →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REAL ESTATE FORM PAVILION WITH PERSONAL ADVISOR BADGE */}
      {/* ========================================================================= */}
      <section id="formular-imobiliar" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            {/* Authentic Advisor Avatar */}
            <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-sm relative bg-white">
              <Image
                src="/images/cristian/cv-avatar-vest.webp"
                alt="Cristian Văduva"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-semibold tracking-tight uppercase text-[#6E6E73]">
              Direct către Cristian Văduva
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
              Spune-mi ce proprietate ai în minte
            </h2>
            <p className="mt-3 text-sm text-[#6E6E73]">
              Completează câteva detalii și revin personal către tine cu opțiuni concrete și sfaturi practice.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D2D2D7] bg-white p-6 sm:p-10 shadow-apple">
            <RealEstateForm />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FAQ — ÎNTREBĂRI FRECVENTE */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* 5. VERIFIED ECOSYSTEM PLATFORMS */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#6E6E73]">
              Platforme Conectate
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
              Platforme active din ecosistem
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORMS.map((pl) => (
              <a
                key={pl.id}
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-[#E8E8ED] bg-[#F5F5F7] p-6 transition hover:border-[#6E6E73] hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#6E6E73]">
                      {pl.badge}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#1D1D1F]">{pl.name}</h3>
                  <p className="mt-1 text-xs text-[#6E6E73] leading-relaxed">{pl.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ========================================================================= */}
      {/* 6. FAQ — ÎNTREBĂRI FRECVENTE IMOBILIARE */}
      {/* ========================================================================= */}
      <FAQSection
        items={REAL_ESTATE_FAQS}
        badge="Întrebări Frecvente Imobiliare"
        heading="Claritate și siguranță în tranzacțiile imobiliare."
        subheading="Răspunsuri transparente despre reprezentarea exclusivă, verificarea actelor și onorarii cinstite."
      />

    </div>
  );
}
