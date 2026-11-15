"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS_CHECKLISTS } from "@/data/business/checklists";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export default function ChecklistDetailPage({ params }: Props) {
  const checklist = BUSINESS_CHECKLISTS.find((c) => c.slug === params.slug);

  if (!checklist) {
    notFound();
  }

  // Track checked items
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  const totalItems = checklist.steps.reduce((acc, step) => acc + step.items.length, 0);
  const checkedCount = Object.values(checkedMap).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItems) * 100);

  function toggleItem(id: string) {
    setCheckedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function resetChecklist() {
    setCheckedMap({});
  }

  const prefillUrl = `/asigurari?ajutor=oferta&tip=pj&categorie=${encodeURIComponent(
    checklist.prefillAction.category
  )}&mesaj=${encodeURIComponent(checklist.prefillAction.message)}`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/afaceri/checklist-uri"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la toate checklist-urile
      </Link>

      <div className="mt-6">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
          {checklist.targetEvent}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {checklist.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{checklist.summary}</p>
      </div>

      {/* Progress Bar & Actions */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              Progres verificare:
            </span>
            <span className="ml-2 text-sm font-bold text-ink">
              {checkedCount} din {totalItems} finalizate ({progressPercent}%)
            </span>
          </div>
          {checkedCount > 0 && (
            <button
              onClick={resetChecklist}
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted hover:text-brand"
            >
              <RotateCcw className="h-3 w-3" />
              Resetează
            </button>
          )}
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-wash">
          <div
            className="h-full bg-emerald-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist Phases */}
      <div className="mt-10 space-y-10">
        {checklist.steps.map((step, stepIdx) => (
          <div key={stepIdx} className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="text-lg font-bold text-ink">{step.phase}</h2>

            <div className="mt-6 space-y-4">
              {step.items.map((item, itemIdx) => {
                const itemId = `s${stepIdx}-i${itemIdx}`;
                const isChecked = !!checkedMap[itemId];

                return (
                  <div
                    key={itemIdx}
                    onClick={() => toggleItem(itemId)}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      isChecked
                        ? "border-emerald-300 bg-emerald-50/40 text-emerald-950"
                        : "border-line bg-wash/30 hover:border-brand hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                          isChecked
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="h-3.5 w-3.5" />}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`text-sm font-bold ${
                              isChecked ? "line-through text-muted" : "text-ink"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                              item.priority === "critic"
                                ? "bg-red-100 text-brand"
                                : item.priority === "important"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {item.priority}
                          </span>
                        </div>

                        <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.details}</p>

                        {item.verifiedNote && (
                          <div className="mt-2 text-[11px] font-medium text-emerald-700">
                            ✓ {item.verifiedNote}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Pitfalls to Avoid */}
      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-base font-bold text-amber-950">
          <AlertTriangle className="h-5 w-5 text-amber-700" />
          <h2>Capcane frecvente de evitat</h2>
        </div>
        <ul className="mt-4 space-y-2">
          {checklist.pitfallsToAvoid.map((pitfall, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-amber-900">
              <span className="font-bold text-amber-700">✕</span>
              <span>{pitfall}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Help Desk CTA */}
      <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Pasul Următor
          </span>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Vrei sprijin pentru implementarea acestui checklist?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Deschide o solicitare de asistență precompletată și te ajutăm să verifici cerințele specifice afacerii tale.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={prefillUrl}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
            >
              Continuă în asistent cu acest eveniment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/afaceri/evaluare-riscuri"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Evaluare completă riscuri
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
