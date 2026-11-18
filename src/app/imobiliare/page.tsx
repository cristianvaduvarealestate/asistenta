import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { RealEstateForm } from "@/components/real-estate/RealEstateForm";
import {
  Building2,
  Phone,
  ArrowRight,
  Compass,
  FileCheck2,
  Search,
  Key,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asistență Imobiliară | Cristian Văduva",
  description:
    "Consultanță imobiliară dedicată pentru cumpărare, vânzare, închiriere și investiții. Rol profesional clar și suport adaptat intereselor fiecărui client.",
  alternates: {
    canonical: `${SITE.publicUrl}/imobiliare`,
  },
  openGraph: {
    title: "Asistență Imobiliară | Cristian Văduva",
    description:
      "Consultanță imobiliară dedicată pentru cumpărare, vânzare, închiriere și investiții.",
    url: `${SITE.publicUrl}/imobiliare`,
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Asistență Imobiliară — Cristian Văduva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asistență Imobiliară | Cristian Văduva",
    description:
      "Consultanță imobiliară dedicată pentru cumpărare, vânzare, închiriere și investiții.",
    images: [`${SITE.publicUrl}/images/og-asistenta.jpg`],
  },
};

const MAIN_CARDS = [
  {
    title: "VREAU SĂ CUMPĂR",
    badge: "Achiziții",
    desc: "Identificăm și analizăm proprietățile potrivite criteriilor și bugetului tău, de la locuințe de familie până la active comerciale.",
    items: [
      "Apartamente (noi sau existente)",
      "Case și vile rezidențiale",
      "Terenuri pentru construcție",
      "Spații comerciale și birouri",
      "Proprietăți premium și penthouse-uri",
      "Proprietăți pentru investiții",
    ],
    cta: "Caută o proprietate",
  },
  {
    title: "VREAU SĂ VÂND",
    badge: "Vânzări",
    desc: "Strategie completă de poziționare, promovare și negociere pentru valorificarea proprietății tale la cel mai bun preț de piață.",
    items: [
      "Analiza comparativă a proprietății și a pieței",
      "Poziționare și strategie corectă de preț",
      "Pregătirea proprietății pentru promovare (Home staging)",
      "Fotografie și video profesional",
      "Promovare pe portaluri și canale calificate",
      "Calificarea potențialilor cumpărători",
      "Negociere și asistență pe tot parcursul tranzacției",
    ],
    cta: "Propune proprietatea",
  },
  {
    title: "VREAU SĂ ÎNCHIRIEZ",
    badge: "Închirieri",
    desc: "Asistență atât pentru proprietarii care doresc chiriași stabili și solvabili, cât și pentru chiriașii în căutarea spațiului ideal.",
    items: [
      "Închiriere rezidențială (apartamente și case)",
      "Închiriere comercială (birouri, retail, logistic)",
      "Identificarea și verificarea chiriașilor",
      "Prezentarea profesionistă a proprietății",
      "Asistență în redactarea contractului și negociere",
      "Property management prin servicii și parteneri disponibili",
    ],
    cta: "Discută despre închiriere",
  },
  {
    title: "CAUT O INVESTIȚIE IMOBILIARĂ",
    badge: "Investiții",
    desc: "Analiză de randament și selecție de active pentru generarea de venit pasiv sau apreciere de capital pe termen mediu și lung.",
    items: [
      "Proprietăți cu potențial investițional ridicat",
      "Analiza prețului de intrare și a poziționării în piață",
      "Estimarea realistă a veniturilor și cheltuielilor",
      "Analiza randamentului (Yield / ROI) cu ipoteze explicite",
      "Portofolii rezidențiale și active comerciale",
      "Oportunități locale și internaționale (Dubai, Monaco prin parteneri licențiați)",
    ],
    cta: "Explorează opțiunile de investiție",
  },
];

const SERVICES = [
  {
    letter: "A",
    title: "REPREZENTAREA CUMPĂRĂTORULUI",
    icon: Search,
    steps: [
      "Analiza clară a obiectivelor personale sau financiare și a bugetului disponibil.",
      "Stabilirea criteriilor esențiale de căutare (zonă, compartimentare, facilități).",
      "Identificarea proprietăților relevante din piață (inclusiv oferte din rețeaua profesională).",
      "Analiza comparativă a ofertelor și a alternativelor concurente.",
      "Negocierea fermă a prețului și a condițiilor contractuale în interesul cumpărătorului.",
      "Coordonarea etapelor tranzacției până la semnarea finală la notar.",
      "Îndrumare privind documentația cadastrală, extrasul CF și asistență la verificările notariale.",
    ],
  },
  {
    letter: "B",
    title: "REPREZENTAREA VÂNZĂTORULUI",
    icon: Key,
    steps: [
      "Analiza detaliată a proprietății, a atuurilor și a istoricului din piață.",
      "Stabilirea unei strategii optime de poziționare și preț de lansare.",
      "Pregătire vizuală, recomandări de amenajare și prezentare profesională.",
      "Fotografie și video profesional realizat pentru evidențierea calităților spațiului.",
      "Promovare targetată pe portalurile imobiliare și în rețelele de colaborare.",
      "Filtrarea și calificarea cumpărătorilor serioși pentru a elimina vizionările inutile.",
      "Negociere profesională și asistență pentru procedurile notariale până la încasarea prețului.",
    ],
  },
  {
    letter: "C",
    title: "CONSULTANȚĂ & ANALIZĂ IMOBILIARĂ",
    icon: Compass,
    steps: [
      "Analiză de piață bazată pe tranzacții reale încheiate, nu doar pe prețuri afișate de promovare.",
      "Analiza obiectivă a punctelor forte și a minusurilor zonale (transport, infrastructură, regim urbanistic).",
      "Evaluarea oportunităților și a potențialului de creștere pe termen mediu.",
      "Analiză financiară a randamentelor din închiriere sau revânzare.",
      "Estimarea costurilor conexe (taxe notariale, impozite, amenajare, mentenanță).",
      "Îndrumare strategică pentru decizii informate, fără presiune de vânzare.",
    ],
  },
  {
    letter: "D",
    title: "SERVICII FACILITATE PRIN PARTENERI",
    icon: FileCheck2,
    steps: [
      "Credite și finanțare bancară în colaborare cu Smart Credit România.",
      "Soluții de asigurare pentru locuințe, clădiri și răspunderi civile prin parteneriatul cu Generali România.",
      "Pentru proprietăți în Dubai: consultanță inițială și punere în legătură cu un broker local licențiat în acea jurisdicție.",
      "Pentru Monaco: orientare inițială și direcționare către profesioniști autorizați local.",
      "Cadastru, intabulare, certificate energetice și măsurători topografice.",
      "Consultanță juridică imobiliară și verificare antecontracte prin avocați colaboratori.",
      "Birouri notariale partenere pentru finalizarea tranzacției în siguranță.",
      "Evaluatori autorizați ANEVAR pentru credite sau rapoarte financiare.",
    ],
  },
];

const PLATFORMS = [
  {
    id: "homefind",
    name: "HomeFind",
    url: SITE.platforms.homefind.url,
    desc: "Platformă dedicată căutării inteligente de apartamente și case rezidențiale, cu filtre clare și informații complete.",
    badge: "Căutare Rezidențială",
  },
  {
    id: "aixluxury",
    name: "AiXLuxury",
    url: SITE.platforms.aixluxury.url,
    desc: "Selecție de proprietăți de lux și oportunități premium în București, Monaco și Dubai.",
    badge: "Luxury & International",
  },
  {
    id: "dubai",
    name: "Dubai Real Estate",
    url: SITE.platforms.dubai.url,
    desc: "Consultanță inițială pentru piața din Dubai, cu redirecționare către brokeri locali licențiați pentru tranzacții.",
    badge: "Piața din Dubai",
  },
  {
    id: "constructions",
    name: "Constructions",
    url: SITE.platforms.constructions.url,
    desc: "Platformă dedicată proiectelor de construcții, dezvoltărilor rezidențiale și colaborărilor din domeniu.",
    badge: "Construcții & Proiecte",
  },
  {
    id: "credite",
    name: "CV Finance / Credite",
    url: SITE.platforms.credite.url,
    desc: "Consultanță privind finanțarea bancară și creditele ipotecare, desfășurată în colaborare cu Smart Credit România.",
    badge: "Consultanță Finanțare",
  },
  {
    id: "cristianvaduva",
    name: "CristianVaduva.com",
    url: SITE.platforms.cristianvaduva.url,
    desc: "Website-ul oficial și portofoliul personal al lui Cristian Văduva — viziune, activitate integrată și proiecte active.",
    badge: "Website Oficial",
  },
];

export default function RealEstatePage() {
  return (
    <div className="relative min-h-screen bg-[#08090B] pb-24 pt-8 text-[#F5F6F7]">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px] overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4779B8]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#9299A3]">
          <Link href="/" className="transition hover:text-white">
            Acasă
          </Link>
          <span>/</span>
          <span className="text-[#F5F6F7]">Imobiliare</span>
        </div>

        {/* Hero Header */}
        <div className="mt-8 max-w-4xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#4779B8]/30 bg-[#4779B8]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F5F6F7]">
            <Building2 className="h-3.5 w-3.5 text-[#4779B8]" />
            Consultanță & Reprezentare Imobiliară
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#F5F6F7] sm:text-6xl">
            Asistență Imobiliară
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#C7CBD1] sm:text-xl">
            Fie că vrei să cumperi, să vinzi, să închiriezi sau să investești, te ajut să identifici oportunitățile potrivite și să parcurgi procesul imobiliar cu mai multă claritate.
          </p>
          <p className="mt-2 text-xs text-[#9299A3] sm:text-sm">
            Ofer servicii structurate de asistență imobiliară pentru proprietăți rezidențiale, spații comerciale și oportunități de investiție.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#formular-imobiliar"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5F6F7] px-6 py-3.5 text-xs font-semibold text-[#08090B] shadow-md transition hover:bg-white hover:shadow-lg"
            >
              <span>Completează criteriile proprietății</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#101216] px-5 py-3.5 text-xs font-medium text-[#C7CBD1] transition hover:border-[#4779B8] hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#4779B8]" />
              <span>Discută direct: {SITE.phoneDisplay}</span>
            </a>
          </div>

          {/* Informative transparency notice for real estate representation */}
          <div className="mt-8 rounded-2xl border border-[#22262D] bg-[#101216]/90 p-5 text-xs leading-relaxed text-[#C7CBD1]">
            <div className="flex items-center gap-2 text-white font-semibold mb-2">
              <ShieldCheck className="h-4 w-4 text-[#4779B8]" />
              <span>Transparență privind rolul profesional și reprezentarea</span>
            </div>
            <p className="mb-2">
              În serviciile imobiliare, rolul meu este stabilit în funcție de partea care solicită și angajează serviciile mele: proprietarul/vânzătorul sau cumpărătorul. Obiectivele colaborării și responsabilitățile sunt clarificate de la început.
            </p>
            <p className="text-[#9299A3]">
              Într-o tranzacție, rolul meu și partea pe care o reprezint sunt comunicate clar înainte de începerea colaborării. Orice situație în care există interese diferite ale părților trebuie clarificată înainte de prestarea serviciilor. Asistența juridică de specialitate și autentificarea actelor se realizează prin notari publici și avocați autorizați.
            </p>
          </div>
        </div>

        {/* 4 Main Action Cards */}
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4779B8]">
                Direcții de acțiune
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#F5F6F7] sm:text-3xl">
                Cum te pot ajuta în mod concret
              </h2>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {MAIN_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-[#22262D] bg-[#101216] p-7 shadow-card transition-all duration-300 hover:border-[#4779B8]/60 hover:bg-[#12151B]"
              >
                <div>
                  <span className="rounded-full border border-[#22262D] bg-[#171A20] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C7CBD1]">
                    {card.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-[#F5F6F7]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#9299A3]">
                    {card.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-[#22262D] pt-5 text-xs text-[#C7CBD1]">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-0.5 text-[#4779B8] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#formular-imobiliar"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4779B8] transition group-hover:text-white"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Form Section */}
        <div id="formular-imobiliar" className="mt-24">
          <div className="mb-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4779B8]">
              Solicitare structurată & confidențială
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#F5F6F7] sm:text-3xl">
              Hai să stabilim proprietatea pe care o cauți sau o propui
            </h2>
            <p className="mt-2 text-xs text-[#9299A3] sm:text-sm">
              Completează formularul de mai jos pentru a înțelege exact criteriile tale. Îți voi răspunde prompt cu opțiuni și îndrumări relevante.
            </p>
          </div>

          <RealEstateForm />
        </div>

        {/* Detailed Services Section */}
        <div className="mt-28">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9299A3]">
              Metodologie de lucru
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#F5F6F7] sm:text-3xl">
              Cu ce te pot ajuta în imobiliare?
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-[#9299A3] sm:text-sm">
              O abordare structurată, transparentă și responsabilă, de la analiza inițială a pieței până la finalizarea tranzacției la notar.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.letter}
                  className="rounded-3xl border border-[#22262D] bg-[#101216] p-7 shadow-card"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#22262D] bg-[#171A20] text-sm font-bold text-[#4779B8]">
                      {srv.letter}
                    </span>
                    <h3 className="text-sm font-bold tracking-tight text-[#F5F6F7]">
                      {srv.title}
                    </h3>
                  </div>

                  <ul className="mt-6 space-y-2.5 border-t border-[#22262D] pt-5 text-xs leading-relaxed text-[#C7CBD1]">
                    {srv.steps.map((st, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-0.5 text-[#4779B8] font-bold">•</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform Ecosystem */}
        <div className="mt-28">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4779B8]">
              Ecosistem digital
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#F5F6F7] sm:text-3xl">
              Platforme active
            </h2>
            <p className="mt-2 text-xs text-[#9299A3] sm:text-sm">
              Canale digitale prin care extind accesul clienților la proprietăți și asistență de specialitate.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORMS.map((pl) => (
              <a
                key={pl.id}
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-[#22262D] bg-[#101216] p-5.5 transition hover:border-[#4779B8]/50 hover:bg-[#171A20]"
              >
                <div>
                  <span className="rounded-full border border-[#22262D] bg-[#171A20] px-2.5 py-0.5 text-[10px] font-semibold text-[#9299A3]">
                    {pl.badge}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-[#F5F6F7]">{pl.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#9299A3]">{pl.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
