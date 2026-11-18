import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { BUSINESS_CATEGORIES } from "@/data/business/categories";
import { BUSINESS_INDUSTRIES } from "@/data/business/industries";
import { BUSINESS_PRODUCTS } from "@/data/business/products";
import { CLAIM_SCENARIOS } from "@/data/business/scenarios";
import { BUSINESS_CHECKLISTS } from "@/data/business/checklists";

export default function sitemap(): MetadataRoute.Sitemap {
  // Actual content modification dates derived from repository git history:
  // - Main advisory pages updated during the Apple-inspired & FAQ integration: 2026-11-19
  // - Legal compliance documents updated: 2026-11-18
  // - Business insurance knowledge base data and scenarios committed: 2026-11-15
  const DATE_CORE_PAGES = new Date("2026-11-19T00:30:22.000Z");
  const DATE_LEGAL_DOCS = new Date("2026-11-18T19:33:58.000Z");
  const DATE_KNOWLEDGE_BASE = new Date("2026-11-15T02:03:14.000Z");

  // 1. Core Public Advisory Pages (High Priority, recently updated)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE.publicUrl,
      lastModified: DATE_CORE_PAGES,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.publicUrl}/imobiliare`,
      lastModified: DATE_CORE_PAGES,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.publicUrl}/asigurari`,
      lastModified: DATE_CORE_PAGES,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.publicUrl}/despre-mine`,
      lastModified: DATE_CORE_PAGES,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Legal & Public Contact Pages (Low-Medium Priority, static)
  const legalRoutes = [
    "/confidentialitate",
    "/cookies",
    "/termeni",
    "/informare-servicii",
    "/accesibilitate",
    "/contact",
  ];
  const legalPages: MetadataRoute.Sitemap = legalRoutes.map((path) => ({
    url: `${SITE.publicUrl}${path}`,
    lastModified: DATE_LEGAL_DOCS,
    changeFrequency: "monthly",
    priority: path === "/contact" ? 0.7 : 0.3,
  }));

  // 3. Business Knowledge Base Landing & Tool Hubs
  const businessHubs = [
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
  const businessHubPages: MetadataRoute.Sitemap = businessHubs.map((path) => ({
    url: `${SITE.publicUrl}${path}`,
    lastModified: DATE_KNOWLEDGE_BASE,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 4. Dynamic Knowledge Base Content (Categories, Industries, Products, Scenarios, Checklists)
  const categoryPages: MetadataRoute.Sitemap = BUSINESS_CATEGORIES.map((c) => ({
    url: `${SITE.publicUrl}/afaceri/categorii/${c.slug}`,
    lastModified: DATE_KNOWLEDGE_BASE,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const industryPages: MetadataRoute.Sitemap = BUSINESS_INDUSTRIES.map((i) => ({
    url: `${SITE.publicUrl}/afaceri/domenii/${i.slug}`,
    lastModified: DATE_KNOWLEDGE_BASE,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productPages: MetadataRoute.Sitemap = BUSINESS_PRODUCTS.map((p) => ({
    url: `${SITE.publicUrl}/afaceri/ghid-asigurari/${p.slug}`,
    lastModified: DATE_KNOWLEDGE_BASE,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const scenarioPages: MetadataRoute.Sitemap = CLAIM_SCENARIOS.map((s) => ({
    url: `${SITE.publicUrl}/afaceri/scenarii-daune/${s.slug}`,
    lastModified: DATE_KNOWLEDGE_BASE,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const checklistPages: MetadataRoute.Sitemap = BUSINESS_CHECKLISTS.map((ch) => ({
    url: `${SITE.publicUrl}/afaceri/checklist-uri/${ch.slug}`,
    lastModified: DATE_KNOWLEDGE_BASE,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...corePages,
    ...legalPages,
    ...businessHubPages,
    ...categoryPages,
    ...industryPages,
    ...productPages,
    ...scenarioPages,
    ...checklistPages,
  ];
}
