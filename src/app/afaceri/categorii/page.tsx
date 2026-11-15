import Link from "next/link";
import { Metadata } from "next";
import { BUSINESS_CATEGORIES } from "@/data/business/categories";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cele 22 de Categorii de Asigurare pentru Companii — Protecția Afacerii Tale",
  description:
    "Ghid complet al celor 22 de tipuri principale de polițe de asigurare pentru companii din România: clădiri, utilaje, stocuri, răspundere, D&O, cyber și angajați.",
};

export default function BusinessCategoriesPage() {
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
          Director complet de categorii
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Cele 22 de Categorii de Asigurare pentru Companii
        </h1>
        <p className="mt-3 text-lg text-muted">
          Descoperă în detaliu fiecare linie de protecție: ce riscuri acoperă, ce excluderi ascund polițele standard, ce documente solicită asigurătorii și cum să eviți plata inutilă a primelor.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BUSINESS_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.id}
            className="flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                  {idx + 1}
                </span>
                <span className="text-[11px] font-medium text-muted">Ghid educațional</span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-ink hover:text-brand">
                <Link href={`/afaceri/categorii/${cat.slug}`}>{cat.title}</Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{cat.shortDesc}</p>

              <div className="mt-4 border-t border-line/50 pt-3">
                <p className="text-xs font-semibold text-ink">Public țintă principal:</p>
                <ul className="mt-1 space-y-0.5 text-xs text-muted">
                  {cat.targetAudience.slice(0, 2).map((item, i) => (
                    <li key={i} className="line-clamp-1">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-4">
              <Link
                href={`/afaceri/categorii/${cat.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
              >
                Citește ghidul complet
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Help Desk */}
      <div className="mt-16 rounded-2xl border border-line bg-wash p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-ink">Nu ești sigur care categorii se aplică afacerii tale?</h3>
            <p className="mt-1 text-sm text-muted">
              Completează chestionarul nostru interactiv de 17 întrebări sau discută direct cu un consultant prin formularul de asistență.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand/90"
            >
              Evaluare riscuri
            </Link>
            <Link
              href="/asigurari?ajutor=oferta&tip=pj"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand"
            >
              Deschide Asistentul
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
