import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BUSINESS_INDUSTRIES } from "@/data/business/industries";
import {
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  Flame,
  DollarSign,
  Scale,
  Users,
  Building,
  Cpu,
  FileText,
  AlertTriangle,
  HelpCircle,
  CheckSquare,
  Sparkles,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BUSINESS_INDUSTRIES.map((ind) => ({
    slug: ind.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = BUSINESS_INDUSTRIES.find((ind) => ind.slug === params.slug);
  if (!industry) return { title: "Domeniu inexistent" };

  return {
    title: `${industry.name} — Ghid de Risc și Asigurare în 17 Puncte`,
    description: industry.subtitle,
  };
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = BUSINESS_INDUSTRIES.find((ind) => ind.slug === params.slug);

  if (!industry) {
    notFound();
  }

  const prefillUrl = `/asigurari?ajutor=oferta&tip=pj&categorie=${encodeURIComponent(
    industry.nextStepCta.prefillHelpDesk.category
  )}&domeniu=${encodeURIComponent(
    industry.nextStepCta.prefillHelpDesk.industry
  )}&mesaj=${encodeURIComponent(industry.nextStepCta.prefillHelpDesk.message)}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Back Link */}
      <Link
        href="/afaceri/domenii"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la toate domeniile
      </Link>

      {/* Hero Header */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
            {industry.letter}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Ghid Complet de Risc Industrial (17 Secțiuni)
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {industry.name}
        </h1>
        <p className="mt-3 text-xl text-muted">{industry.subtitle}</p>

        {/* Target Businesses Tag Cloud */}
        <div className="mt-6 rounded-2xl border border-line bg-wash p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Tipuri de activități și firme vizate în acest domeniu:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {industry.targetBusinesses.map((target, idx) => (
              <span
                key={idx}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink shadow-2xs"
              >
                {target}
              </span>
            ))}
          </div>
          <div className="mt-4 border-t border-line/60 pt-3 text-xs text-muted">
            <span className="font-semibold text-ink">Exemple coduri CAEN: </span>
            {industry.caenExamples.join(" • ")}
          </div>
        </div>
      </div>

      {/* 1. Model operațional */}
      <section className="mt-12 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <span>Secțiunea 1</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink">Modelul Operațional și Specificul Afacerii</h2>
        <p className="mt-3 text-base leading-relaxed text-ink/80">{industry.operatingModel}</p>
      </section>

      {/* 2. Ce se poate pierde */}
      <section className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <span>Secțiunea 2</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink">Ce se Poate Pierde în Caz de Sinistru</h2>
        <p className="mt-2 text-sm text-muted">
          Activele critice, lichiditățile și valorile intangibile expuse direct în această activitate:
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {industry.whatCanBeLost.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-wash p-4 text-sm text-ink">
              <span className="font-bold text-brand">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3 - 9. Harta celor 7 Dimensiuni de Risc (Grid) */}
      <div className="mt-12">
        <div className="text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Secțiunile 3 – 9
          </span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-ink">
            Harta Vulnerabilităților pe 7 Dimensiuni de Risc
          </h2>
          <p className="mt-2 text-sm text-muted">
            O imagine exhaustivă a pericolelor operaționale, fizice, financiare, juridice, de personal, terți și digitale.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {/* 3. Riscuri operaționale */}
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2 text-lg font-bold text-ink">
              <ShieldAlert className="h-5 w-5 text-indigo-600" />
              <h3>3. Riscuri Operaționale de Zi cu Zi</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {industry.operationalRisks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                  <span className="font-bold text-indigo-600">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Riscuri fizice și materiale */}
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2 text-lg font-bold text-ink">
              <Flame className="h-5 w-5 text-red-600" />
              <h3>4. Riscuri Fizice și Materiale (Incendiu, Clădiri, Utilaje)</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {industry.physicalRisks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                  <span className="font-bold text-red-600">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Riscuri financiare și comerciale */}
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2 text-lg font-bold text-ink">
              <DollarSign className="h-5 w-5 text-emerald-600" />
              <h3>5. Riscuri Financiare și Comerciale (Cash-Flow & Întrerupere)</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {industry.financialRisks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Riscuri juridice și contractuale */}
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2 text-lg font-bold text-ink">
              <Scale className="h-5 w-5 text-blue-600" />
              <h3>6. Riscuri Juridice, Contractuale și de Reglementare</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {industry.legalContractualRisks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                  <span className="font-bold text-blue-600">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 7. Riscuri legate de angajați */}
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2 text-lg font-bold text-ink">
              <Users className="h-5 w-5 text-amber-600" />
              <h3>7. Riscuri Legate de Personal și SSM (Accidente de Muncă)</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {industry.employeeRisks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                  <span className="font-bold text-amber-600">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 8. Riscuri față de terți și clienți */}
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2 text-lg font-bold text-ink">
              <Building className="h-5 w-5 text-slate-700" />
              <h3>8. Riscuri Față de Terți, Vizitatori și Vecini</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {industry.thirdPartyRisks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                  <span className="font-bold text-slate-700">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 9. Riscuri digitale și de date */}
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2 text-lg font-bold text-ink">
              <Cpu className="h-5 w-5 text-purple-600" />
              <h3>9. Riscuri Digitale, Cibernetice și de Protecție a Datelor (GDPR)</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {industry.digitalRisks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                  <span className="font-bold text-purple-600">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 10. Scenarii concrete de daune (Studii de caz) */}
      <section className="mt-14 rounded-2xl border border-line bg-wash/60 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <span>Secțiunea 10</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink">
          Scenarii Concrete de Daune și Studii de Caz din Industrie
        </h2>
        <div className="mt-6 space-y-6">
          {industry.caseScenarios.map((cs, idx) => (
            <div key={idx} className="rounded-xl border border-line bg-white p-5">
              <span className="inline-block rounded-full bg-slate-900 px-2.5 py-0.5 text-[11px] font-bold text-white">
                Studiu de caz #{idx + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold text-ink">{cs.title}</h3>
              <p className="mt-2 text-sm text-muted">
                <strong className="text-ink">Cauza producerii: </strong>
                {cs.trigger}
              </p>
              <p className="mt-2 text-sm text-muted">
                <strong className="text-ink">Consecințe financiare: </strong>
                {cs.consequences}
              </p>
              <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-900">
                <strong>Învățătură cheie / Soluție de asigurare: </strong>
                {cs.lesson}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Polițe de asigurare relevante */}
      <section className="mt-14">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <span>Secțiunea 11</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink">
          Polițele de Asigurare Relevante pentru Domeniu
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {industry.relevantPolicies.map((pol, idx) => (
            <div key={idx} className="rounded-xl border border-line bg-white p-5">
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                    pol.importance === "esențială"
                      ? "bg-red-50 text-brand"
                      : pol.importance === "recomandată"
                      ? "bg-amber-50 text-amber-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {pol.importance.toUpperCase()}
                </span>
                <Link
                  href={`/afaceri/categorii/${pol.slug}`}
                  className="text-xs font-semibold text-brand hover:underline"
                >
                  Vezi categoria →
                </Link>
              </div>
              <h3 className="mt-2 text-base font-bold text-ink">{pol.name}</h3>
              <p className="mt-1 text-xs text-muted">{pol.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Ce acoperă fiecare poliță */}
      <section className="mt-12 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <span>Secțiunea 12</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink">
          Ce Acoperă Concret Fiecare Poliță & Limite Recomandate
        </h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line bg-wash text-xs font-bold uppercase text-muted">
              <tr>
                <th className="p-3.5">Poliță</th>
                <th className="p-3.5">Obiect acoperit</th>
                <th className="p-3.5">Limită uzuală recomandată</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {industry.policyCoverageDetails.map((det, i) => (
                <tr key={i} className="hover:bg-wash/40">
                  <td className="p-3.5 font-semibold text-ink">{det.policy}</td>
                  <td className="p-3.5 text-xs text-muted">{det.coverage}</td>
                  <td className="p-3.5 text-xs font-medium text-brand">{det.typicalLimit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 13. Excluderi frecvente și limitări */}
      <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
          <span>Secțiunea 13</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xl font-bold text-amber-950">
          <AlertTriangle className="h-5 w-5 text-amber-700" />
          <h2>Excluderi Frecvente și Capcane Contractuale</h2>
        </div>
        <p className="mt-2 text-xs text-amber-800">
          Situații concrete în care asigurătorul poate respinge plata sau aplica franșize majorate:
        </p>
        <ul className="mt-4 space-y-2">
          {industry.exclusionsAndLimits.map((ex, i) => (
            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-amber-900">
              <span className="font-bold text-amber-700">•</span>
              <span>{ex}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 14. Informații necesare pentru ofertare */}
      <section className="mt-12 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <span>Secțiunea 14</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-ink">
          Ce Informații Sunt Necesare pentru o Cotație Corectă
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {industry.underwritingInfoNeeded.map((info, i) => (
            <div key={i} className="flex items-start gap-2 rounded-xl bg-wash p-3.5 text-xs text-ink">
              <span className="font-bold text-brand">{i + 1}.</span>
              <span>{info}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 15. Întrebări frecvente */}
      <section className="mt-12 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <span>Secțiunea 15</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-2xl font-bold text-ink">
          <HelpCircle className="h-6 w-6 text-brand" />
          <h2>Întrebări Frecvente Specifice Industriei</h2>
        </div>
        <div className="mt-6 space-y-4">
          {industry.faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-line/60 bg-wash/30 p-5">
              <h3 className="text-base font-bold text-ink">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 16. Checklist de verificare pentru antreprenor */}
      <section className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <span>Secțiunea 16</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-2xl font-bold text-emerald-950">
          <CheckSquare className="h-6 w-6 text-emerald-700" />
          <h2>Checklist de Verificare pentru Antreprenor</h2>
        </div>
        <p className="mt-2 text-xs text-emerald-800">
          Verifică dacă ai acoperit aceste aspecte cheie înainte de următoarea reînnoire sau audit:
        </p>
        <div className="mt-4 space-y-2.5">
          {industry.entrepreneurChecklist.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 rounded-lg bg-white p-3.5 text-xs text-ink shadow-2xs">
              <span className="font-bold text-emerald-700">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 17. Pasul următor și prefill Help Desk */}
      <section className="mt-14 rounded-3xl bg-slate-900 p-8 text-white sm:p-12">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
          <span>Secțiunea 17</span>
        </div>
        <div className="max-w-2xl">
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {industry.nextStepCta.title}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {industry.nextStepCta.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={prefillUrl}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
            >
              Configurează în asistent pentru acest domeniu
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Evaluare interactivă de risc
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
