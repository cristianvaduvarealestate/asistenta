import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SITE } from "@/config/site";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.publicUrl),
  title: {
    default: SITE.seoTitle,
    template: "%s | Asistență Imobiliare și Asigurări — Cristian Văduva",
  },
  description: SITE.seoDescription,
  alternates: { canonical: SITE.publicUrl },
  openGraph: {
    title: SITE.seoTitle,
    description: SITE.seoDescription,
    url: SITE.publicUrl,
    siteName: SITE.name,
    locale: "ro_RO",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={sans.variable}>
      <body className="min-h-screen font-sans">
        <a className="skip-link" href="#continut">
          Sari la conținut
        </a>
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
