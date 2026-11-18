import type { Metadata } from "next";
import { BUSINESS_CHECKLISTS } from "@/data/business/checklists";
import { SITE } from "@/config/site";

export function generateStaticParams() {
  return BUSINESS_CHECKLISTS.map((ch) => ({
    slug: ch.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = BUSINESS_CHECKLISTS.find((c) => c.slug === params.slug);
  if (!item) return { title: "Checklist afaceri" };

  return {
    title: `${item.title} | Checklist afaceri`,
    description: item.summary,
    alternates: {
      canonical: `${SITE.publicUrl}/afaceri/checklist-uri/${item.slug}`,
    },
  };
}

export default function ChecklistSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
