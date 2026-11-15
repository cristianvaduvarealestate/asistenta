import Link from "next/link";
import { Metadata } from "next";
import { OFFICIAL_SOURCES } from "@/data/business/types";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  Scale,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Surse Oficiale Verificate & Glosar Tehnic de Asigurări Comerciale",
  description:
    "Surse legislative românești și europene verificate (ASF, Codul Civil, Legea 132/2017, GDPR, NIS 2) și glosarul termenilor tehnici de asigurare (All Risks, franșiză, sublimită, claims made).",
};

const GLOSSARY_TERMS = [
  {
    term: "Property All Risks (Toate Riscurile)",
    definition:
      "Polită de asigurare care acoperă orice distrugere fizică sau avariere accidentală a bunurilor asigurate, cu excepția riscurilor care sunt expres și explicit menționate în lista de excluderi. Este opusul polițelor pe bază de 'riscuri numite' (Named Perils).",
  },
  {
    term: "FLEXA+",
    definition:
      "Acronimul internațional pentru pachetul de bază al asigurării de incendiu: Fire (Incendiu), Lightning (Trăsnet), Explosion (Explozie) și Aircraft (Căderea aparatelor de zbor). Semnul '+' indică adăugarea riscurilor catastrofice (cutremur, inundație, alunecare) și atmosferice (grindină, furtună).",
  },
  {
    term: "Franșiză (Deductible / Excess)",
    definition:
      "Partea din valoarea fiecărei daune pe care asiguratul o suportă din fonduri proprii conform contractului. Poate fi o sumă fixă (ex: 500 EUR per eveniment) sau procentuală (ex: 10% din cuantumul daunei). Pentru catastrofe naturale, asigurătorii români aplică de regulă 2% - 5% din suma asigurată a locației.",
  },
  {
    term: "Sublimită de despăgubire (Sublimit)",
    definition:
      "O limită maximă specifică de plată aplicată unei anumite categorii de bunuri sau unui anumit risc, inferioară sumei asigurate totale a poliței. De exemplu: într-o poliță de bunuri de 2.000.000 EUR, riscul de furt prin efracție poate avea o sublimită de 100.000 EUR.",
  },
  {
    term: "Claims Made (Cereri Notificate)",
    definition:
      "Principiul de funcționare specific polițelor de răspundere profesională (PI), D&O și Cyber: polița acoperă prejudiciile dacă reclamația sau acțiunea în justiție este formulată și notificată asigurătorului în perioada de valabilitate a contractului, chiar dacă fapta a avut loc în trecut (în cadrul Datei Retroactive).",
  },
  {
    term: "Dată Retroactivă (Retroactive Date)",
    definition:
      "Data din trecut stabilită în contractul de asigurare de la care faptele profesionale, erorile sau omisiunile asiguratului sunt preluate în acoperire, cu condiția ca acestea să nu fi fost cunoscute de asigurat la momentul încheierii poliței.",
  },
  {
    term: "Regula Proporțională (Underinsurance / Average Clause)",
    definition:
      "Principiul legal conform căruia, dacă suma asigurată declarată de asigurat este inferioară valorii reale de reconstrucție sau înlocuire a bunului (sub-asigurare), despăgubirea se reduce proporțional cu raportul dintre suma asigurată și valoarea reală, chiar și pentru daune parțiale mici.",
  },
  {
    term: "Renunțare la Dreptul de Regres (Waiver of Subrogation)",
    definition:
      "Clauză contractuală prin care asigurătorul renunță la dreptul legal conferit de Art. 2210 din Codul Civil de a se îndrepta împotriva unui terț responsabil de producerea daunei (de exemplu proprietarul spațiului sau un chiriaș asociat), cu condiția reciprocității.",
  },
  {
    term: "Cesiune de Drepturi / Loss Payee Clause",
    definition:
      "Mențiune oficială în poliță prin care dreptul de a încasa despăgubirea în caz de daună majoră sau totală este transferat către o bancă finanțatoare sau companie de leasing, până la concurența sumei rămase de rambursat din credit.",
  },
  {
    term: "Perioadă de Indemnizare (Indemnity Period)",
    definition:
      "Durata maximă de timp (uzual 6, 12, 18 sau 24 de luni) pe parcursul căreia asigurătorul de Business Interruption compensează pierderea de profit din exploatare și cheltuielile fixe ale companiei, începând de la data producerii sinistrului fizic până la restabilirea cifrei de afaceri normale.",
  },
  {
    term: "8.33 DST per Kilogram (Limita CMR)",
    definition:
      "Plafonul legal internațional de despăgubire instituit de Convenția CMR pentru transportul rutier de marfă: aproximativ 10 – 12 EUR per kilogram de greutate brută lipsă sau avariată, calculat pe baza cotației Drepturilor Speciale de Tragere ale Fondului Monetar Internațional.",
  },
  {
    term: "Rip and Tear Clause (Montare / Demontare)",
    definition:
      "Clauză tehnică în polițele de răspundere a producătorului care acoperă costul manoperei de demontare a componentelor defecte deja asamblate în produsul clientului final (ex: industria auto) și montarea noilor piese conforme.",
  },
];

export default function SourcesAndGlossaryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/afaceri"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la hub-ul Protecția Afacerii
      </Link>

      <div className="mt-6 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">
          Documentație & Rigoare Tehnică
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Surse Oficiale Verificate & Glosar Tehnic
        </h1>
        <p className="mt-4 text-lg text-muted">
          Toate ghidurile noastre educaționale sunt fundamentate pe legislația românească în vigoare, normele ASF, directivele europene și uzanțele de subscriere de pe piața internațională a asigurărilor.
        </p>
      </div>

      {/* Verified Sources Section */}
      <div className="mt-14">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <Scale className="h-4 w-4" />
          Surse Legislative & Instituționale Verificate
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
          Baza Legală și Autoritățile Consultate
        </h2>

        <div className="mt-8 space-y-4">
          {OFFICIAL_SOURCES.map((src, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:border-brand"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-800">
                    {src.institution}
                  </span>
                  <h3 className="mt-1.5 text-base font-bold text-ink">{src.title}</h3>
                </div>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                >
                  Consultă sursa oficială
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">{src.scope}</p>
              <div className="mt-3 border-t border-line/50 pt-2 text-[11px] text-slate-400">
                Verificat la: {src.verifiedAt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Glossary Section */}
      <div className="mt-20">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <BookOpen className="h-4 w-4" />
          Dicționar de Asigurări Comerciale
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
          Glosar de Termeni Tehnici și Clauze Contractuale
        </h2>
        <p className="mt-2 text-sm text-muted">
          Traducerea clară a termenilor folosiți în condițiile generale și speciale de asigurare emise de societățile din România:
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {GLOSSARY_TERMS.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-ink">{item.term}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Help Desk CTA */}
      <div className="mt-16 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Claritate totală
          </span>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Ai găsit o clauză neclară în contractul tău de asigurare?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Trimite-ne un fragment sau o pagină din condițiile tale de asigurare prin asistent și îți explicăm în termeni simpli ce drepturi și obligații ai.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/asigurari?ajutor=explica&tip=pj"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
            >
              Explică-mi o clauză în asistent
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
