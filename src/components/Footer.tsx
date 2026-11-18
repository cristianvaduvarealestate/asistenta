import Link from "next/link";
import { SITE } from "@/config/site";
import { Phone, Mail, MessageCircle, ExternalLink, ShieldCheck, Home } from "lucide-react";

const legalLinks = [
  { href: "/confidentialitate", label: "Politica de confidențialitate" },
  { href: "/cookies", label: "Politica de cookies" },
  { href: "/termeni", label: "Termeni și condiții" },
  { href: "/informare-servicii", label: "Informare servicii" },
  { href: "/accesibilitate", label: "Accesibilitate" },
  { href: "/contact", label: "Contact direct" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#22262D] bg-[#08090B]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Identity & Signature */}
          <div className="lg:col-span-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9299A3]">
              Platformă online de informare și consultanță
            </span>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-[#F5F6F7] sm:text-2xl">
              {SITE.name}
            </h2>
            <p className="mt-1 text-xs font-medium tracking-wide text-[#4779B8]">
              {SITE.tagline}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#9299A3]">
              {SITE.brandLine}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-xs">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#22262D] bg-[#101216] px-3.5 py-2 text-[#C7CBD1] transition-all hover:border-[#4779B8]/60 hover:bg-[#171A20] hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-[#4779B8]" />
                <span>{SITE.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#22262D] bg-[#101216] px-3.5 py-2 text-[#C7CBD1] transition-all hover:border-[#4779B8]/60 hover:bg-[#171A20] hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-[#4779B8]" />
                <span>{SITE.email}</span>
              </a>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#22262D] bg-[#101216] px-3.5 py-2 text-[#C7CBD1] transition-all hover:border-emerald-600/60 hover:bg-[#171A20] hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-500" />
                <span>WhatsApp: {SITE.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Imobiliare */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5F6F7]">
              Asistență Imobiliară
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#9299A3]">
              <li>
                <Link href="/imobiliare" className="transition hover:text-[#F5F6F7]">
                  Reprezentarea cumpărătorului
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="transition hover:text-[#F5F6F7]">
                  Reprezentarea vânzătorului
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="transition hover:text-[#F5F6F7]">
                  Închiriere rezidențială & comercială
                </Link>
              </li>
              <li>
                <Link href="/imobiliare" className="transition hover:text-[#F5F6F7]">
                  Consultanță investiții imobiliare & randamente
                </Link>
              </li>
              <li>
                <Link href="/despre-mine" className="font-medium text-[#4779B8] transition hover:text-white">
                  Despre Cristian Văduva & principii de lucru →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Asigurări */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5F6F7]">
              Asigurări
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#9299A3]">
              <li>
                <Link href="/asigurari?ajutor=oferta" className="transition hover:text-[#F5F6F7]">
                  Solicită ofertă Generali (PF & PJ)
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=aminteste" className="transition hover:text-[#F5F6F7]">
                  Verificare scadențe polițe
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=explica" className="transition hover:text-[#F5F6F7]">
                  Explicare clauze & franșize
                </Link>
              </li>
              <li>
                <Link href="/asigurari?ajutor=dauna" className="transition hover:text-[#F5F6F7]">
                  Asistență în caz de daună
                </Link>
              </li>
              <li>
                <Link href="/afaceri" className="font-medium text-[#C92B35] transition hover:underline">
                  Protecția Afacerii (B2B Hub) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Platforme proprii verificate */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5F6F7]">
              Platforme & Ecosistem
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#9299A3]">
              <li>
                <a
                  href={SITE.platforms.homefind.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#F5F6F7]"
                >
                  <span>HomeFind (Căutare Proprietăți)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.platforms.aixluxury.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#F5F6F7]"
                >
                  <span>AiXLuxury (Premium Real Estate)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.platforms.dubai.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#F5F6F7]"
                >
                  <span>Dubai Real Estate (Parteneri Locali)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.platforms.constructions.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#F5F6F7]"
                >
                  <span>Constructions (Proiecte & Șantiere)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.platforms.credite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#F5F6F7]"
                >
                  <span>CV Finance / Credite (Smart Credit România)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.platforms.cristianvaduva.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#C7CBD1] hover:text-white"
                >
                  <span>cristianvaduva.com (Website Oficial)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#22262D] pt-8 sm:flex-row">
          <p className="text-xs text-[#9299A3]">
            © {new Date().getFullYear()} {SITE.person}. Toate drepturile rezervate.
          </p>
          <nav aria-label="Documente legale" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-[#9299A3]">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#F5F6F7]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
