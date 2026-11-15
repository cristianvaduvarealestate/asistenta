import Link from "next/link";
import { Metadata } from "next";
import { BUSINESS_INDUSTRIES } from "@/data/business/industries";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Biblioteca Domeniilor de Activitate — Asigurări pentru Companii pe Industrii",
  description:
    "Ghiduri exhaustive de risc și protecție prin asigurare pentru 12 domenii economice majore din România: construcții, HoReCa, retail, producție, transport, IT, sănătate, servicii profesionale, agricultură, energie, imobiliare.",
};

export default function IndustriesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/afaceri"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la hub-ul Protecția Afacerii
      </Link>

      <div className="mt-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">
          Biblioteca pe industrii (12 domenii)
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Biblioteca Domeniilor de Activitate
        </h1>
        <p className="mt-4 text-lg text-muted">
          Fiecare domeniu de activitate are particularități unice de risc, expuneri contractuale specifice și cerințe legale proprii. Alege domeniul tău pentru o analiză structurată în 17 puncte esențiale.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BUSINESS_INDUSTRIES.map((ind) => (
          <div
            key={ind.id}
            className="flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
                  {ind.letter}
                </span>
                <span className="text-[11px] font-medium text-muted">
                  {ind.targetBusinesses.length} tipuri afaceri
                </span>
              </div>

              <h2 className="mt-3 text-lg font-bold text-ink hover:text-brand">
                <Link href={`/afaceri/domenii/${ind.slug}`}>{ind.name}</Link>
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">{ind.subtitle}</p>

              <div className="mt-4 border-t border-line/60 pt-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Afaceri vizate:
                </p>
                <ul className="mt-1 space-y-1 text-xs text-ink/80">
                  {ind.targetBusinesses.slice(0, 3).map((item, i) => (
                    <li key={i} className="line-clamp-1">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Exemple CAEN:
                </p>
                <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-500">
                  {ind.caenExamples.join("; ")}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-4">
              <Link
                href={`/afaceri/domenii/${ind.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
              >
                Ghidul complet în 17 secțiuni
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
