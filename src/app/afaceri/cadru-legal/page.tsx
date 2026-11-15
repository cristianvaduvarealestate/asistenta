import Link from "next/link";
import { Metadata } from "next";
import { LEGAL_FRAMEWORK } from "@/data/business/legal-framework";
import {
  ArrowLeft,
  ArrowRight,
  Scale,
  ShieldAlert,
  FileCheck2,
  Sparkles,
  AlertOctagon,
  Building2,
  HelpCircle,
  Wrench,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cadrul Legal al Asigurărilor pentru Afaceri — Obligatoriu vs. Contractual vs. Facultativ vs. Prevenție",
  description:
    "Ghid de conformitate juridică pentru companii din România: ce asigurări sunt obligatorii prin lege (RCA, malpraxis, profesii), ce se cere prin contracte (mall, FIDIC, bănci, CMR), ce este facultativ dar critic și ce reprezintă obligații tehnice de prevenție (ISU, PRAM, SSM).",
};

export default function LegalFrameworkPage() {
  const mandatory = LEGAL_FRAMEWORK.filter((l) => l.level === "obligatoriu");
  const contractual = LEGAL_FRAMEWORK.filter((l) => l.level === "contractual");
  const optional = LEGAL_FRAMEWORK.filter((l) => l.level === "facultativ");
  const prevention = LEGAL_FRAMEWORK.filter((l) => l.level === "preventie_tehnica");

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
          Conformitate & Reglementare în România
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Obligatoriu vs. Contractual vs. Facultativ vs. Prevenție
        </h1>
        <p className="mt-4 text-lg text-muted">
          Nu toate asigurările au același statut juridic. În timp ce lipsa unei polițe RCA sau de malpraxis atrage amenzi sau interdicția de funcționare, cerințele din contractele de mall sau FIDIC sunt imperative comercial. Distinct de acestea, măsurile tehnice precum buletinele PRAM sau autorizațiile ISU sunt obligații de prevenție SSM/PSI, nu asigurări, însă nerespectarea lor periclitează plata oricărei despăgubiri.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-red-200 bg-red-50/40 p-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-900">
            <AlertOctagon className="h-4 w-4 text-brand" />
            Nivel 1
          </div>
          <h2 className="mt-2 text-base font-bold text-ink">Obligatoriu Legal</h2>
          <p className="mt-1 text-xs text-muted">
            Impus de legi speciale (RCA, malpraxis medical, profesii reglementate). Lipsa atrage amenzi sau suspendarea activității.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <FileCheck2 className="h-4 w-4 text-blue-700" />
            Nivel 2
          </div>
          <h2 className="mt-2 text-base font-bold text-ink">Impus Contractual</h2>
          <p className="mt-1 text-xs text-muted">
            Condiții comerciale eliminatorii: CMR în transporturi, chiriași mall, FIDIC, licitații SEAP sau finanțări bancare.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
            <Sparkles className="h-4 w-4 text-emerald-700" />
            Nivel 3
          </div>
          <h2 className="mt-2 text-base font-bold text-ink">Facultativ Strategic</h2>
          <p className="mt-1 text-xs text-muted">
            Voluntar legal, dar indispensabil pentru solvabilitate: Business Interruption, Cyber Risk, D&O, Sănătate de grup.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
            <Wrench className="h-4 w-4 text-amber-700" />
            Nivel 4
          </div>
          <h2 className="mt-2 text-base font-bold text-ink">Prevenție Tehnică</h2>
          <p className="mt-1 text-xs text-muted">
            PRAM, ISU, SSM și analiza de risc fizic. Sunt măsuri de securitate tehnică, NU polițe de asigurare, dar condiționează plata daunelor.
          </p>
        </div>
      </div>

      {/* 1. Obligatoriu prin lege */}
      <div className="mt-16">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <AlertOctagon className="h-4 w-4" />
          Nivelul 1 de conformitate
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
          Polițe de Asigurare Obligatorii prin Lege în România
        </h2>
        <p className="mt-2 text-sm text-muted">
          Desfășurarea activității fără aceste asigurări constituie contravenție legală sau împiedică autorizarea/licențierea profesiei.
        </p>

        <div className="mt-8 space-y-6">
          {mandatory.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-ink">{req.title}</h3>
                <span className="rounded-full bg-red-100 px-3 py-0.5 text-xs font-bold text-brand">
                  OBLIGATORIU LEGAL
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-semibold text-slate-700">
                <div>
                  <strong className="text-ink">Temei juridic: </strong>
                  {req.lawOrSource}
                </div>
                {req.legalArticle && (
                  <div>
                    <strong className="text-ink">Articol: </strong>
                    {req.legalArticle}
                  </div>
                )}
                {req.officialSourceUrl && (
                  <a
                    href={req.officialSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-brand hover:underline"
                  >
                    <span>Sursă oficială</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <p className="mt-3 text-sm text-ink/80">{req.description}</p>

              <div className="mt-4 grid grid-cols-1 gap-3 rounded-xl bg-wash p-4 text-xs sm:grid-cols-2">
                <div>
                  <strong className="text-ink">Cui i se aplică: </strong>
                  <p className="mt-0.5 text-muted">{req.appliesTo}</p>
                </div>
                <div>
                  <strong className="text-red-700">Consecințele lipsei: </strong>
                  <p className="mt-0.5 text-red-900">{req.consequencesOfMissing}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 text-xs text-emerald-950">
                <strong>Recomandare practică: </strong>
                {req.practicalAdvice}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Impus contractual */}
      <div className="mt-20">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
          <FileCheck2 className="h-4 w-4" />
          Nivelul 2 de conformitate
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
          Asigurări Solicitate Contractual și Cerințe de Piață
        </h2>
        <p className="mt-2 text-sm text-muted">
          Deși legea nu sancționează direct lipsa poliței cu amendă contravențională pe stradă, fără aceste asigurări nu poți prelua marfă în transporturi (CMR), nu poți semna chiria în mall, nu poți trage creditul bancar și nu poți intra pe șantierul FIDIC.
        </p>

        <div className="mt-8 space-y-6">
          {contractual.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-ink">{req.title}</h3>
                <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-bold text-blue-900">
                  CERINȚĂ CONTRACTUALĂ / PIAȚĂ
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-semibold text-slate-700">
                <div>
                  <strong className="text-ink">Sursa cerinței / Cadrul normativ: </strong>
                  {req.lawOrSource}
                </div>
                {req.legalArticle && (
                  <div>
                    <strong className="text-ink">Referință: </strong>
                    {req.legalArticle}
                  </div>
                )}
                {req.officialSourceUrl && (
                  <a
                    href={req.officialSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-brand hover:underline"
                  >
                    <span>Sursă oficială</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <p className="mt-3 text-sm text-ink/80">{req.description}</p>

              <div className="mt-4 grid grid-cols-1 gap-3 rounded-xl bg-wash p-4 text-xs sm:grid-cols-2">
                <div>
                  <strong className="text-ink">Cui i se aplică: </strong>
                  <p className="mt-0.5 text-muted">{req.appliesTo}</p>
                </div>
                <div>
                  <strong className="text-amber-800">Consecințele lipsei: </strong>
                  <p className="mt-0.5 text-amber-950">{req.consequencesOfMissing}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 text-xs text-emerald-950">
                <strong>Recomandare practică: </strong>
                {req.practicalAdvice}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Facultativ strategic */}
      <div className="mt-20">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
          <Sparkles className="h-4 w-4" />
          Nivelul 3 de conformitate
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
          Asigurări Facultative, dar Esențiale Strategic
        </h2>
        <p className="mt-2 text-sm text-muted">
          Polițe voluntare care fac diferența între continuarea afacerii și intrarea în faliment imediat în caz de incendiu masiv, atac cibernetic ransomware sau insolvență a clienților strategici.
        </p>

        <div className="mt-8 space-y-6">
          {optional.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-ink">{req.title}</h3>
                <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-900">
                  STRATEGIC RECOMANDAT
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-semibold text-slate-700">
                <div>
                  <strong className="text-ink">Referință metodologică / Cod Civil: </strong>
                  {req.lawOrSource}
                </div>
                {req.legalArticle && (
                  <div>
                    <strong className="text-ink">Articol: </strong>
                    {req.legalArticle}
                  </div>
                )}
                {req.officialSourceUrl && (
                  <a
                    href={req.officialSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-brand hover:underline"
                  >
                    <span>Sursă oficială</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <p className="mt-3 text-sm text-ink/80">{req.description}</p>

              <div className="mt-4 grid grid-cols-1 gap-3 rounded-xl bg-wash p-4 text-xs sm:grid-cols-2">
                <div>
                  <strong className="text-ink">Cui i se aplică: </strong>
                  <p className="mt-0.5 text-muted">{req.appliesTo}</p>
                </div>
                <div>
                  <strong className="text-ink">Riscul dacă lipsește: </strong>
                  <p className="mt-0.5 text-muted">{req.consequencesOfMissing}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 text-xs text-emerald-950">
                <strong>Recomandare practică: </strong>
                {req.practicalAdvice}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Obligații Tehnice de Prevenție (Care NU sunt asigurări) */}
      <div className="mt-20">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <Wrench className="h-4 w-4" />
          Nivelul 4 de conformitate tehnică
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
          Obligații Legale de Securitate și Prevenție (Care NU sunt Asigurări)
        </h2>
        <p className="mt-2 text-sm text-muted">
          Atenție: Următoarele măsuri sunt obligații legale tehnice și administrative SSM/PSI. Ele NU pot fi înlocuite sau acoperite prin cumpărarea unei polițe de asigurare. Mai mult, lipsa lor permite asigurătorilor să refuze plata despăgubirilor în caz de daună!
        </p>

        <div className="mt-8 space-y-6">
          {prevention.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl border border-amber-300 bg-amber-50/30 p-6 shadow-sm transition hover:border-amber-500"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-ink">{req.title}</h3>
                <span className="rounded-full bg-amber-200 px-3 py-0.5 text-xs font-bold text-amber-950">
                  OBLIGAȚIE TEHNICĂ (NU ASIGURARE)
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-semibold text-slate-700">
                <div>
                  <strong className="text-ink">Temei juridic tehnic: </strong>
                  {req.lawOrSource}
                </div>
                {req.legalArticle && (
                  <div>
                    <strong className="text-ink">Articol: </strong>
                    {req.legalArticle}
                  </div>
                )}
                {req.officialSourceUrl && (
                  <a
                    href={req.officialSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-amber-900 hover:underline"
                  >
                    <span>Sursă oficială</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <p className="mt-3 text-sm text-ink/80">{req.description}</p>

              <div className="mt-4 grid grid-cols-1 gap-3 rounded-xl bg-white/80 p-4 text-xs sm:grid-cols-2">
                <div>
                  <strong className="text-ink">Cui i se aplică: </strong>
                  <p className="mt-0.5 text-muted">{req.appliesTo}</p>
                </div>
                <div>
                  <strong className="text-amber-900">Sancțiuni legale & Impact asupra asigurării: </strong>
                  <p className="mt-0.5 text-amber-950">{req.consequencesOfMissing}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-amber-300 bg-amber-100/60 p-3 text-xs text-amber-950">
                <strong>Clarificare esențială: </strong>
                {req.practicalAdvice}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Desk CTA */}
      <div className="mt-16 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Verificare Conformitate & Contracte
          </span>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Vrei să verificăm cerințele de asigurare din contractele tale?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Trimite-ne secțiunea de &bdquo;Insurance Requirements&rdquo; din contractul tău de închiriere, FIDIC sau leasing și îți spunem exact ce acoperiri sunt necesare și ce condiții tehnice trebuie să îndeplinești.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/asigurari?ajutor=explica&tip=pj"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
            >
              Verifică cerințele contractuale în asistent
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Evaluare interactivă de risc
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
