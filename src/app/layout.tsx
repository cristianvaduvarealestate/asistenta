import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SITE } from "@/config/site";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActionDock } from "@/components/FloatingActionDock";
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
    template: "%s | Cristian Văduva",
  },
  description: SITE.seoDescription,
  openGraph: {
    title: SITE.seoTitle,
    description: SITE.seoDescription,
    url: SITE.publicUrl,
    siteName: SITE.name,
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
        width: 1200,
        height: 630,
        alt: "Cristian Văduva — Consultanță Imobiliară & Partener Generali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.seoTitle,
    description: SITE.seoDescription,
    images: [`${SITE.publicUrl}/images/og-asistenta.jpg`],
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
        <main id="continut" className="pt-20 sm:pt-24">{children}</main>
        <Footer />
        <FloatingActionDock />
        <CookieBanner />
      </body>
    </html>
  );
}
