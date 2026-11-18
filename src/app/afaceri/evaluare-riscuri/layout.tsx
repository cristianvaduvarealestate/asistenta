import type { Metadata } from "next";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Evaluare riscuri pentru companii | Cristian Văduva",
  description:
    "Chestionar interactiv de analiză a riscurilor comerciale și operaționale pentru companii și antreprenori.",
  alternates: {
    canonical: `${SITE.publicUrl}/afaceri/evaluare-riscuri`,
  },
};

export default function EvaluareRiscuriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
