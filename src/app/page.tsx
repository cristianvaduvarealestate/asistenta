import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { ArrowRight, Phone, MessageSquare, HeartHandshake } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Cristian Văduva — Asistență Imobiliară & Partener Generali",
  description:
    "Ajutor sincer și consultanță dedicată pentru decizii imobiliare și asigurări prin parteneriatul cu Generali România. Discutăm deschis și găsim împreună varianta potrivită pentru tine.",
  alternates: {
    canonical: SITE.publicUrl,
  },
  openGraph: {
    title: "Cristian Văduva — Asistență Imobiliară & Partener Generali",
    description:
      "Ajutor sincer și consultanță dedicată pentru decizii imobiliare și asigurări prin parteneriatul cu Generali România.",
    url: SITE.publicUrl,
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

export default function HomePage() {
  const operations = [
    {
      num: "01",
      title: "Vreau o ofertă de asigurare",
      category: "Generali România",
      desc: "Pentru mașină (CASCO & RCA), locuință, sănătate sau pentru firma ta. Îți explic opțiunile pe înțelesul tău.",
      href: "/asigurari?ajutor=oferta",
    },
    {
      num: "02",
      title: "Vreau să verific când îmi expiră o poliță",
      category: "Fără întrerupere",
      desc: "Îmi lași data de scadență și vorbim din timp, ca să nu rămâi descoperit și să reînnoim în condiții bune.",
      href: "/asigurari?ajutor=aminteste",
    },
    {
      num: "03",
      title: "Nu înțeleg o clauză sau o franșiză",
      category: "Lămuriri deschise",
      desc: "Trimite-mi contractul sau întreabă-mă direct. Îți traduc termenii complicați în cuvinte simple și clare.",
      href: "/asigurari?ajutor=explica",
    },
    {
      num: "04",
      title: "Am o daună și am nevoie de îndrumare",
      category: "Ajutor direct",
      desc: "Îți spun pas cu pas ce trebuie să faci, ce acte pregătești și cum deschizi corect dosarul la Generali.",
      href: "/asigurari?ajutor=dauna",
    },
    {
      num: "05",
      title: "Caut o locuință sau vreau să vând",
      category: "Consultanță imobiliară",
      desc: "Spune-mi ce cauți sau ce proprietate vrei să valorifici. Discutăm deschis și stabilim cel mai bun plan.",
      href: "/imobiliare#formular-imobiliar",
    },
    {
      num: "06",
      title: "Am o firmă și vreau să știu ce riscuri am",
      category: "Companii & IMM",
      desc: "Ghid simplu pe industrii: clădiri, stocuri, utilaje, flote auto și răspundere civilă pentru afacerea ta.",
      href: "/afaceri",
    },
  ];

  return (
    <div className="bg-white text-[#1D1D1F]">
      {/* ========================================================================= */}
      {/* 1. HERO — WARM, HUMAN, WELCOMING */}
      {/* ========================================================================= */}
      <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-[#F5F5F7] px-3.5 py-1 text-xs font-medium text-[#424245] mb-5">
            <HeartHandshake className="h-3.5 w-3.5 text-[#1D1D1F]" />
            <span>Consultanță Imobiliară & Partener Oficial Generali România</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.1]">
            Hai să găsim împreună <br />
            <span className="text-[#86868B]">drumul potrivit pentru tine.</span>
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
            Când cauți o locuință, vrei să vinzi o proprietate sau ai nevoie de o asigurare bună, cel mai important este să ai pe cineva de încredere alături. Sunt aici să te ascult, să-ți explic opțiunile pe înțelesul tău și să te ajut să iei decizia corectă, fără grabă și fără presiune.
          </p>

          {/* Clean Apple Pill Buttons with Friendly Human Labels */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${SITE.phoneTel}`} className="apple-btn-primary inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Hai să vorbim direct</span>
            </a>
            <Link href="/imobiliare" className="apple-btn-secondary">
              Caut o proprietate
            </Link>
            <Link href="/asigurari" className="apple-btn-secondary">
              Întreabă despre asigurări
            </Link>
          </div>
        </div>

        {/* Hero Photographic Showcase — NATURAL 4:3 RATIO (NO CLIPPING) */}
        <div className="mt-14 mx-auto max-w-3xl">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] shadow-sm">
            <Image
              src="/images/cristian/cristian-hero-vest.webp"
              alt="Cristian Văduva — Consultanță personală, imobiliare și asigurări Generali"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION: IMOBILIARE — WARM, HUMAN, DEDICATED */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-[#F5F5F7]">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Locuințe & Proprietăți
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2 leading-tight">
              Sunt de partea ta. <br />
              <span className="text-[#86868B]">Fără comisioane ascunse și fără interese împărțite.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#86868B] leading-relaxed">
              Când cumperi sau vinzi o casă, ai nevoie de cineva care să reprezinte doar interesele tale. Verific actele cu atenție, negociem cinstit și sunt lângă tine la fiecare pas, de la prima vizionare până la semnarea actelor la notar. Nu iau niciodată comision dublu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/imobiliare" className="apple-btn-primary">
                Vezi cum te pot ajuta la imobiliare
              </Link>
              <Link href="/imobiliare#formular-imobiliar" className="apple-btn-secondary">
                Spune-mi ce cauți
              </Link>
            </div>
          </div>

          {/* Vertical Photographs in Natural 3:4 Containers (No Squishing, No Heads Cut Off) */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-[#E8E8ED] shadow-sm">
                <Image
                  src="/images/cristian/cristian-skyline-terrace.webp"
                  alt="Cristian Văduva pe terasă, analizând cartierele din București"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-2">
                <h3 className="text-sm font-semibold text-[#1D1D1F]">Căutăm împreună zona potrivită</h3>
                <p className="text-xs text-[#86868B] mt-0.5">Analizăm cartierul, accesul și facilitățile reale</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-[#E8E8ED] shadow-sm">
                <Image
                  src="/images/cristian/cristian-residences-vest.webp"
                  alt="Cristian Văduva la vizionarea unor case și apartamente"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-2">
                <h3 className="text-sm font-semibold text-[#1D1D1F]">Mergem împreună la vizionări</h3>
                <p className="text-xs text-[#86868B] mt-0.5">Verificăm calitatea construcției și actele de proprietate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION: ASIGURĂRI — CLEAR, FRIENDLY, ACCESSIBLE */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1D1D1F] text-white">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Asigurări Generali România
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-2 leading-tight">
              Asigurări explicate simplu. <br />
              <span className="text-[#86868B]">Să știi exact pe ce te bazezi.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#86868B] leading-relaxed">
              O asigurare bună este cea pe care o înțelegi dinainte, nu cea plină de clauze mărunte pe care le descoperi abia la nevoie. Ca partener oficial Generali România, îți explic deschis ce acoperă fiecare poliță, ce înseamnă fiecare franșiză și te ajut personal dacă apare o daună.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/asigurari" className="apple-btn-dark">
                Vezi opțiunile de asigurare
              </Link>
              <a href={`tel:${SITE.phoneTel}`} className="apple-btn-secondary !text-white !border-[#424245] hover:!bg-[#2A2A2D]">
                Sună pentru o întrebare
              </a>
            </div>
          </div>

          {/* Asymmetrical Natural Photo Composition */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:items-end">
            <div className="space-y-3">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-black border border-[#424245]">
                <Image
                  src="/images/cristian/cv-summit-suit.webp"
                  alt="Cristian Văduva — Parteneriat oficial cu Generali România"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top opacity-95"
                />
              </div>
              <div className="px-2">
                <h3 className="text-sm font-semibold text-white">Parteneriat oficial Generali</h3>
                <p className="text-xs text-[#86868B] mt-0.5">Garanția unei companii solide, cu sprijinul meu direct</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-black border border-[#424245]">
                <Image
                  src="/images/cristian/cv-executive-white-tie.webp"
                  alt="Cristian Văduva la birou, explicând condițiile unei polițe"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center opacity-95"
                />
              </div>
              <div className="px-2">
                <h3 className="text-sm font-semibold text-white">Fiecare franșiză explicată pe loc</h3>
                <p className="text-xs text-[#86868B] mt-0.5">Știi din prima zi cum funcționează despăgubirea</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION: DESPRE MINE — HUMAN, RELATABLE */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8ED] bg-white">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] shadow-sm">
              <Image
                src="/images/cristian/cv-palace-stairs.webp"
                alt="Cristian Văduva — Despre mine, onestitate și respect"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Cine sunt
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
              Oamenii înainte de cifre. <br />
              <span className="text-[#86868B]">Un parteneriat bazat pe încredere sinceră.</span>
            </h2>
            <blockquote className="text-lg sm:text-xl text-[#1D1D1F] font-normal leading-relaxed border-l-2 border-[#1D1D1F] pl-4">
              „Cea mai bună decizie nu se ia sub presiune. Se ia atunci când ai toate informațiile pe masă, când cineva îți răspunde sincer la întrebări și când simți că ești pe mâini bune.”
            </blockquote>
            <p className="text-sm sm:text-base text-[#86868B] leading-relaxed">
              Lucrez simplu și corect: când te asist la o achiziție sau vânzare imobiliară, reprezint doar partea ta, fără compromisuri. Când discutăm despre asigurări, îți ofer variante clare prin Generali România și îți spun deschis avantajele și limitele fiecărei opțiuni. Fără roluri inventate, fără promisiuni nerealiste.
            </p>
            <div className="pt-2">
              <Link href="/despre-mine" className="apple-btn-secondary">
                Află mai multe despre felul în care lucrez
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EDITORIAL PHOTO STRIP — DEDICATED VERTICAL CONTAINERS (NO CLIPPING) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Momente din activitatea de zi cu zi
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mt-1">
              Prezent acolo unde se iau deciziile.
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-[#E8E8ED] shadow-sm">
              <Image
                src="/images/cristian/cv-historic-architecture.webp"
                alt="Cristian Văduva în centrul istoric"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-[50%_35%]"
              />
            </div>

            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-[#E8E8ED] shadow-sm">
              <Image
                src="/images/cristian/cv-skytower-glass.webp"
                alt="Cristian Văduva la SkyTower"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top"
              />
            </div>

            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-[#E8E8ED] shadow-sm">
              <Image
                src="/images/cristian/cv-rooftop-lounge.webp"
                alt="Cristian Văduva în discuție personală"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION: DIRECT ASSISTANCE INDEX — FRIENDLY ACTIONS */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E8ED]">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
              Cum te pot ajuta
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
              Spune-mi de unde vrei să începem.
            </h2>
            <p className="mt-3 text-sm text-[#86868B]">
              Alege situația care se potrivește nevoii tale sau trimite-mi un mesaj direct.
            </p>
          </div>

          <div className="divide-y divide-[#D2D2D7]">
            {operations.map((op) => (
              <Link
                key={op.num}
                href={op.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 px-3 transition-colors hover:bg-[#F5F5F7] rounded-2xl"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-[#86868B]">{op.num}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] group-hover:text-black">
                        {op.title}
                      </h3>
                      <span className="text-[11px] font-medium text-[#86868B] border border-[#D2D2D7] rounded-full px-2.5 py-0.5">
                        {op.category}
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-[#86868B] max-w-xl">
                      {op.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex items-center gap-1 text-xs font-medium text-[#1D1D1F] group-hover:translate-x-1 transition-transform">
                  <span className="hidden sm:inline">Deschide</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION: FAQ — INTREBARI FRECVENTE */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* 8. SECTION: DIRECT CONTACT — PERSONAL INVITATION */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-sm relative bg-white">
            <Image
              src="/images/cristian/cv-avatar-vest.webp"
              alt="Cristian Văduva"
              fill
              className="object-cover"
            />
          </div>

          <span className="text-xs font-semibold tracking-tight uppercase text-[#86868B]">
            Discută direct cu Cristian Văduva
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2">
            Nu trebuie să știi exact ce îți trebuie. <br />
            <span className="text-[#86868B]">Vorbim și clarificăm totul.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-[#86868B]">
            Răspund personal la fiecare apel și mesaj. Fără intermediari și fără robot telefonic.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="apple-btn-primary inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>Sună-mă: {SITE.phoneDisplay}</span>
            </a>

            <a
              href={SITE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary inline-flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4 text-[#86868B]" />
              <span>Scrie-mi pe WhatsApp</span>
            </a>

            <Link href="/contact" className="apple-btn-secondary">
              Trimite un mesaj scris
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
