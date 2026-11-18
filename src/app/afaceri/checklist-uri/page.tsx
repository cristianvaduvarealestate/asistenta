import Link from "next/link";
import { Metadata } from "next";
import { BUSINESS_CHECKLISTS } from "@/data/business/checklists";
import { ArrowLeft, ArrowRight, CheckCircle2, ListChecks } from "lucide-react";

import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Checklist-uri de asigurare pentru companii",
  description:
    "14 checklist-uri practice pentru evenimente majore din viața firmei: înființare, închiriere spațiu, achiziție utilaje, flote, contracte.",
  alternates: {
    canonical: `${SITE.publicUrl}/afaceri/checklist-uri`,
  },
};

export default function ChecklistsIndexPage() {
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
          Ghiduri operaționale pas cu pas (14 evenimente)
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Checklist-uri de Asigurare pentru Evenimente Majore
        </h1>
        <p className="mt-4 text-lg text-muted">
          Fiecare decizie de dezvoltare vine cu riscuri noi. Urmează pașii recomandați înainte de a semna un contract de închiriere, de a cumpăra un utilaj sau de a depune o ofertă pe SEAP.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BUSINESS_CHECKLISTS.map((chk, idx) => (
          <div
            key={chk.id}
            className="flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                  {idx + 1}
                </span>
                <span className="text-[11px] font-medium text-muted">Eveniment cheie</span>
              </div>

              <h2 className="mt-3 text-lg font-bold text-ink hover:text-brand">
                <Link href={`/afaceri/checklist-uri/${chk.slug}`}>{chk.title}</Link>
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">{chk.summary}</p>

              <div className="mt-4 border-t border-line/50 pt-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Etape de acțiune:
                </p>
                <ul className="mt-1 space-y-1 text-xs text-ink/80">
                  {chk.steps.map((step, i) => (
                    <li key={i} className="line-clamp-1">
                      • {step.phase} ({step.items.length} verificări)
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-4">
              <Link
                href={`/afaceri/checklist-uri/${chk.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
              >
                Deschide checklist-ul interactiv
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
