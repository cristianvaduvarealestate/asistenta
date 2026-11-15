import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Home as HomeIcon,
  ArrowRight,
  FileText,
  Bell,
  BookOpen,
  ShieldQuestion,
  ScanSearch,
  AlertCircle,
  Building2,
  CheckCircle2,
  Phone,
  MessageSquare,
  Mail,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { SITE } from "@/config/site";

type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function HomePage({ searchParams }: PageProps) {
  // Handover seamless pentru linkuri de asistență vechi
  if (searchParams?.ajutor) {
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(searchParams)) {
      if (typeof v === "string") params.set(k, v);
      else if (Array.isArray(v)) v.forEach((val) => params.append(k, val));
    }
    redirect(`/asigurari?${params.toString()}`);
  }

  const insuranceFlows = [
    {
      title: "Ofertă nouă",
      desc: "Primești o propunere comparativă și clară pentru nevoile tale.",
      icon: FileText,
      href: "/asigurari?ajutor=oferta",
      badge: "PF & PJ",
    },
    {
      title: "Notificare expirare",
      desc: "Salvarea scadențelor și notificare din timp înainte de expirare.",
      icon: Bell,
      href: "/asigurari?ajutor=aminteste",
      badge: "Programat",
    },
    {
      title: "Explicare poliță",
      desc: "Traduc termenii complecși, clauzele și franșizele pe înțelesul tău.",
      icon: BookOpen,
      href: "/asigurari?ajutor=explica",
      badge: "Claritate",
    },
    {
      title: "Este asigurat?",
      desc: "Orientare și analiză a condițiilor contractuale pentru clarificarea acoperirii.",
      icon: ShieldQuestion,
      href: "/asigurari?ajutor=acoperire",
      badge: "Orientare",
    },
    {
      title: "Ce ar trebui să asigur?",
      desc: "Identificăm riscurile reale ale familiei sau afacerii tale.",
      icon: ScanSearch,
      href: "/asigurari?ajutor=nevoi",
      badge: "Evaluare",
    },
    {
      title: "Asistență daună",
      desc: "Ghid pas cu pas și sprijin imediat când se produce un incident.",
      icon: AlertCircle,
      href: "/asigurari?ajutor=dauna",
      badge: "Prioritar",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#08090B] pb-24 pt-8 text-[#F5F6F7] sm:pt-14">
      {/* Subtle Top Radial Ambient Lighting */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[450px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4779B8]/10 blur-[130px]" />
        <div className="absolute right-1/4 top-32 h-[300px] w-[500px] rounded-full bg-[#C92B35]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* HERO SECTION */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#101216]/80 px-4 py-1.5 text-xs font-medium tracking-wide text-[#C7CBD1] shadow-glass backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4779B8]" />
            <span>{SITE.name}</span>
            <span className="text-[#9299A3]">•</span>
            <span className="text-[#9299A3]">{SITE.tagline}</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#F5F6F7] sm:text-6xl lg:text-7xl">
            Cu ce te pot ajuta?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#C7CBD1] sm:text-lg">
            Spune-mi ce ai nevoie. Te ajut să înțelegi, să verifici și să găsești soluțiile potrivite,
            fie că este vorba despre tranzacții imobiliare sau programe complete de asigurare.
          </p>

          <p className="mt-2 text-xs font-medium tracking-wide text-[#9299A3]">
            {SITE.brandLine}
          </p>
        </section>

        {/* TWO CINEMATIC PRIMARY CARDS (IMOBILIARE & ASIGURĂRI) */}
        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* TRACK 1: IMOBILIARE */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] p-7 shadow-card transition-all duration-300 hover:border-[#4779B8]/60 hover:shadow-[0_20px_50px_-15px_rgba(71,121,184,0.18)] sm:p-10">
            {/* Ambient Background Visual using real photo */}
            <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl border border-[#22262D]/80 sm:h-64">
              <Image
                src="/images/cristian/cristian-aix-orig-sny05672.jpg"
                alt="Cristian Văduva — Consultanță Imobiliară"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101216] via-[#101216]/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#08090B]/80 px-3 py-1 text-[11px] font-semibold text-[#F5F6F7] backdrop-blur-md">
                  <HomeIcon className="h-3.5 w-3.5 text-[#4779B8]" />
                  <span>Tranzacții & Investiții</span>
                </div>
                <span className="text-[11px] font-medium text-[#C7CBD1] backdrop-blur-xs">
                  Rezidențial & Comercial
                </span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4779B8]">
                Direcția 01
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#F5F6F7] sm:text-3xl">
                Imobiliare
              </h2>
              <p className="mt-1 text-sm font-medium text-[#C7CBD1]">
                Am nevoie de ajutor cu o proprietate
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#9299A3] sm:text-sm">
                Vrei să cumperi, să vinzi, să închiriezi sau să investești într-o proprietate.
                Consultanță obiectivă bazată pe tranzacții reale, selecție riguroasă și acces la proprietăți premium locale și internaționale.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-[#C7CBD1]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4779B8]" />
                  <span>Reprezentarea cumpărătorului și a vânzătorului în tranzacții rezidențiale</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4779B8]" />
                  <span>Închiriere spații comerciale, birouri și proprietăți rezidențiale</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4779B8]" />
                  <span>Investiții imobiliare & randamente (inclusiv proiecte off-plan Dubai și AiXLuxury)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-[#22262D] pt-6">
              <Link
                href="/imobiliare"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F5F6F7] px-6 py-3.5 text-sm font-semibold text-[#08090B] shadow-md transition-all duration-200 hover:bg-white hover:shadow-[0_0_25px_-3px_rgba(255,255,255,0.3)]"
              >
                <span>Intră la Imobiliare</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* TRACK 2: ASIGURĂRI */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] p-7 shadow-card transition-all duration-300 hover:border-[#C92B35]/60 hover:shadow-[0_20px_50px_-15px_rgba(201,43,53,0.18)] sm:p-10">
            {/* Ambient Background Visual using real photo */}
            <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl border border-[#22262D]/80 sm:h-64">
              <Image
                src="/images/cristian/cristian-aix-orig-sny01904.jpg"
                alt="Cristian Văduva — Asistență Asigurări"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101216] via-[#101216]/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#08090B]/80 px-3 py-1 text-[11px] font-semibold text-[#F5F6F7] backdrop-blur-md">
                  <Shield className="h-3.5 w-3.5 text-[#C92B35]" />
                  <span>Persoane Fizice & Companii</span>
                </div>
                <span className="text-[11px] font-medium text-[#C7CBD1] backdrop-blur-xs">
                  Orientare Imparțială
                </span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C92B35]">
                Direcția 02
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#F5F6F7] sm:text-3xl">
                Asigurări
              </h2>
              <p className="mt-1 text-sm font-medium text-[#C7CBD1]">
                Am nevoie de ajutor cu o asigurare
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#9299A3] sm:text-sm">
                Oferte comparative, verificare polițe existente, explicare clauze tehnice și franșize,
                notificări la expirare, evaluare riscuri și asistență dedicată în caz de daună.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-[#C7CBD1]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C92B35]" />
                  <span>Persoane Fizice: Auto (CASCO/RCA), Locuință (PAD/Facultativă), Sănătate, Călătorie</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C92B35]" />
                  <span>Companii & IMM: Clădiri, Utilaje, Flote, Răspundere Profesională, D&O, Cyber Risk</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C92B35]" />
                  <span>Ghid complet Protecția Afacerii Tale (22 categorii, 12 industrii, 26 ghiduri)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-[#22262D] pt-6">
              <Link
                href="/asigurari"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F5F6F7] px-6 py-3.5 text-sm font-semibold text-[#08090B] shadow-md transition-all duration-200 hover:bg-white hover:shadow-[0_0_25px_-3px_rgba(255,255,255,0.3)]"
              >
                <span>Intră la Asigurări</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECONDARY ZONE: QUICK INSURANCE ACCESS TILES */}
        <section className="mt-16 sm:mt-24">
          <div className="flex flex-col items-start justify-between gap-2 border-b border-[#22262D] pb-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9299A3]">
                Servicii Directe
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-[#F5F6F7] sm:text-2xl">
                Asistență Rapidă în Asigurări
              </h2>
            </div>
            <p className="text-xs text-[#9299A3]">
              Alege opțiunea dorită pentru a accesa direct asistentul dedicat.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insuranceFlows.map((flow) => {
              const Icon = flow.icon;
              return (
                <Link
                  key={flow.title}
                  href={flow.href}
                  className="group flex flex-col justify-between rounded-2xl border border-[#22262D] bg-[#101216] p-5.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4779B8]/50 hover:bg-[#171A20]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#22262D] bg-[#171A20] text-[#F5F6F7] transition-colors group-hover:border-[#4779B8]/40 group-hover:bg-[#4779B8]/20 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-[#22262D] bg-[#171A20] px-2.5 py-0.5 text-[10px] font-medium text-[#C7CBD1]">
                        {flow.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-[#F5F6F7] transition-colors group-hover:text-white">
                      {flow.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#9299A3]">
                      {flow.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center text-xs font-medium text-[#4779B8] transition-colors group-hover:text-white">
                    <span>Deschide solicitarea</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* SPOTLIGHT SECTION: DESPRE CRISTIAN VĂDUVA & B2B HUB */}
        <section className="mt-16 grid gap-8 lg:grid-cols-2 sm:mt-24">
          {/* DESPRE CRISTIAN VĂDUVA */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#22262D] bg-[#101216] p-7 shadow-card sm:p-9">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#22262D] shadow-md">
                  <Image
                    src="/images/cristian/cristian-vaduva-portrait.jpg"
                    alt="Cristian Văduva"
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="rounded-full border border-[#22262D] bg-[#171A20] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#C7CBD1]">
                    Consultanță Directă
                  </span>
                  <h3 className="mt-1.5 text-lg font-bold text-[#F5F6F7]">Cristian Văduva</h3>
                  <p className="text-xs text-[#9299A3]">Consultant Imobiliare & Asigurări</p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-[#C7CBD1] sm:text-sm">
                O abordare integrată bazată pe claritate, analiză riguroasă a datelor și respect pentru timpul clienților.
                Fără promisiuni nerealiste și fără jargon tehnic inutil — asistență directă atât pentru tranzacții imobiliare, cât și pentru protecția completă prin asigurare a familiei sau a companiei tale.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-[#9299A3]">
                <span className="rounded-lg border border-[#22262D] bg-[#171A20] px-2.5 py-1">Tranzacții Rezidențiale</span>
                <span className="rounded-lg border border-[#22262D] bg-[#171A20] px-2.5 py-1">Spații Comerciale</span>
                <span className="rounded-lg border border-[#22262D] bg-[#171A20] px-2.5 py-1">Protecție Afaceri B2B</span>
                <span className="rounded-lg border border-[#22262D] bg-[#171A20] px-2.5 py-1">Investiții Dubai & AiXLuxury</span>
              </div>
            </div>

            <div className="mt-8 border-t border-[#22262D] pt-5">
              <Link
                href="/despre-mine"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F6F7] transition-colors hover:text-[#4779B8]"
              >
                <span>Descoperă profilul complet și principiile de lucru</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* SECȚIUNEA PROTECȚIA AFACERII B2B */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#22262D] bg-[#101216] p-7 shadow-card sm:p-9">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#22262D] bg-[#171A20] text-[#C92B35]">
                  <Building2 className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-[#22262D] bg-[#171A20] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C7CBD1]">
                  Companii & IMM-uri
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#F5F6F7]">
                Protecția Afacerii Tale
              </h3>
              <p className="mt-1 text-xs font-medium text-[#C7CBD1]">
                Ghid complet și structurat pentru riscurile comerciale din România
              </p>

              <p className="mt-3.5 text-xs leading-relaxed text-[#9299A3] sm:text-sm">
                O afacere înseamnă oameni, investiții, patrimoniu și responsabilități continue.
                Am structurat un catalog amplu care explică concret riscurile operaționale, clauzele contractuale și soluțiile de protecție pentru 12 domenii economice majore.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                <div className="rounded-xl border border-[#22262D] bg-[#171A20] p-2.5 text-center">
                  <span className="block text-base font-bold text-[#F5F6F7]">22</span>
                  <span className="text-[10px] text-[#9299A3]">Categorii risc</span>
                </div>
                <div className="rounded-xl border border-[#22262D] bg-[#171A20] p-2.5 text-center">
                  <span className="block text-base font-bold text-[#F5F6F7]">12</span>
                  <span className="text-[10px] text-[#9299A3]">Domenii CAEN</span>
                </div>
                <div className="rounded-xl border border-[#22262D] bg-[#171A20] p-2.5 text-center">
                  <span className="block text-base font-bold text-[#F5F6F7]">26</span>
                  <span className="text-[10px] text-[#9299A3]">Ghiduri produse</span>
                </div>
                <div className="rounded-xl border border-[#22262D] bg-[#171A20] p-2.5 text-center">
                  <span className="block text-base font-bold text-[#F5F6F7]">Gratuit</span>
                  <span className="text-[10px] text-[#9299A3]">Evaluare riscuri</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#22262D] pt-5">
              <Link
                href="/afaceri"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F6F7] transition-colors hover:text-[#C92B35]"
              >
                <span>Accesează hub-ul Protecția Afacerii Tale</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST & DIRECT CONTACT BAR */}
        <section className="mt-16 rounded-3xl border border-[#22262D] bg-gradient-to-r from-[#101216] via-[#171A20] to-[#101216] p-7 shadow-glass sm:mt-24 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="rounded-full border border-[#22262D] bg-[#08090B] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C7CBD1]">
                Consultanță Privată
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#F5F6F7]">
                Ai o întrebare sau un proiect specific?
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#9299A3] sm:text-sm">
                Fără liste de așteptare sau filtre impersonale. Mă poți contacta direct prin telefon, WhatsApp sau formular.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE.contact.phoneTel}
                className="inline-flex items-center gap-2 rounded-full border border-[#22262D] bg-[#08090B] px-4 py-2.5 text-xs font-medium text-[#C7CBD1] transition-all hover:border-[#4779B8] hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-[#4779B8]" />
                <span>{SITE.contact.phone}</span>
              </a>

              <a
                href={SITE.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-950/40 px-4 py-2.5 text-xs font-medium text-emerald-300 transition-all hover:border-emerald-500 hover:bg-emerald-900/40 hover:text-white"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>Discută pe WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5F6F7] px-5 py-2.5 text-xs font-semibold text-[#08090B] shadow-md transition-all hover:bg-white hover:shadow-lg"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Trimite mesaj</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
