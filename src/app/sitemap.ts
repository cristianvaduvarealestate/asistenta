import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { BUSINESS_CATEGORIES } from "@/data/business/categories";
import { BUSINESS_INDUSTRIES } from "@/data/business/industries";
import { BUSINESS_PRODUCTS } from "@/data/business/products";
import { CLAIM_SCENARIOS } from "@/data/business/scenarios";
import { BUSINESS_CHECKLISTS } from "@/data/business/checklists";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date("2026-11-14");

  const staticRoutes = [
    "",
    "/asigurari",
    "/imobiliare",
    "/despre-mine",
    "/confidentialitate",
    "/cookies",
    "/termeni",
    "/informare-servicii",
    "/accesibilitate",
    "/contact",
    "/afaceri",
    "/afaceri/categorii",
    "/afaceri/domenii",
    "/afaceri/ghid-asigurari",
    "/afaceri/scenarii-daune",
    "/afaceri/checklist-uri",
    "/afaceri/ce-se-intampla-daca",
    "/afaceri/cadru-legal",
    "/afaceri/evaluare-riscuri",
    "/afaceri/surse-si-glosar",
  ];

  const categoryRoutes = BUSINESS_CATEGORIES.map((c) => `/afaceri/categorii/${c.slug}`);
  const industryRoutes = BUSINESS_INDUSTRIES.map((i) => `/afaceri/domenii/${i.slug}`);
  const productRoutes = BUSINESS_PRODUCTS.map((p) => `/afaceri/ghid-asigurari/${p.slug}`);
  const scenarioRoutes = CLAIM_SCENARIOS.map((s) => `/afaceri/scenarii-daune/${s.slug}`);
  const checklistRoutes = BUSINESS_CHECKLISTS.map((ch) => `/afaceri/checklist-uri/${ch.slug}`);

  const allRoutes = [
    ...staticRoutes,
    ...categoryRoutes,
    ...industryRoutes,
    ...productRoutes,
    ...scenarioRoutes,
    ...checklistRoutes,
  ];

  return allRoutes.map((path) => ({
    url: `${SITE.publicUrl}${path}`,
    lastModified: lastMod,
  }));
}
