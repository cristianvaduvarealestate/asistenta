import Link from "next/link";
import { Metadata } from "next";
import { BUSINESS_PRODUCTS } from "@/data/business/products";
import { ArrowLeft, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Ghidul produselor de asigurare comercială",
  description:
    "Ghid al celor 26 de polițe de asigurare comercială: Property, Business Interruption, MB, EEI, RCG, Răspunderea Producătorului, D&O, Cyber, CMR.",
  alternates: {
    canonical: `${SITE.publicUrl}/afaceri/ghid-asigurari`,
  },
};

export default function ProductsIndexPage() {
  const categories = Array.from(new Set(BUSINESS_PRODUCTS.map((p) => p.category)));

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
          Ghid tehnic complet (26 polițe)
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Ghidul Produselor de Asigurare Comercială
        </h1>
        <p className="mt-4 text-lg text-muted">
          Înțelege clauzele, franșizele, sub-limitele, excluderile și procedura de daună pentru fiecare poliță utilizată în mediul de afaceri românesc. Fără limbaj opac de asigurare.
        </p>
      </div>

      {categories.map((catName) => {
        const prods = BUSINESS_PRODUCTS.filter((p) => p.category === catName);
        return (
          <div key={catName} className="mt-14">
            <h2 className="border-b border-line pb-3 text-xl font-bold text-ink">
              {catName}
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {prods.map((prod) => (
                <div
                  key={prod.id}
                  className="flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-slate-900 px-2 py-0.5 text-xs font-bold text-white">
                        {prod.acronym || "POLIȚĂ"}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-ink hover:text-brand">
                      <Link href={`/afaceri/ghid-asigurari/${prod.slug}`}>{prod.name}</Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{prod.shortDesc}</p>

                    <div className="mt-4 border-t border-line/50 pt-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                        Acoperiri cheie:
                      </p>
                      <ul className="mt-1 space-y-1 text-xs text-ink/80">
                        {prod.keyCoverages.slice(0, 3).map((cov, i) => (
                          <li key={i} className="line-clamp-1">
                            • {cov}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-line/60 pt-4">
                    <Link
                      href={`/afaceri/ghid-asigurari/${prod.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                    >
                      Ghidul complet al poliței
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
