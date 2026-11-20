import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActionDock } from "@/components/FloatingActionDock";
import "./globals.css";

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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cristian Văduva",
  jobTitle: "Consultanță Imobiliară & Partener Oficial Generali România",
  url: SITE.publicUrl,
  image: `${SITE.publicUrl}/images/cristian/cristian-hero-vest.webp`,
  telephone: SITE.phoneTel,
  email: SITE.email,
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Facultatea de Economie",
    },
    {
      "@type": "EducationalOrganization",
      name: "Facultatea de Drept",
    },
    {
      "@type": "EducationalOrganization",
      name: "Facultatea de Ecologie și Protecția Mediului",
    },
  ],
  knowsAbout: [
    "Consultanță Imobiliară",
    "Asigurări Generali România",
    "CASCO & Decontare Directă",
    "Management Financiar",
    "Evaluarea Riscurilor Comerciale",
    "Verificare Acte Imobiliare & Notariat",
  ],
  sameAs: [
    SITE.social.instagram.url,
    SITE.social.facebook.url,
    SITE.social.youtube.url,
    SITE.social.telegramPersonal.url,
    SITE.social.telegramChannel.url,
    SITE.social.linktree.url,
    SITE.platforms.cristianvaduva.url,
    SITE.platforms.aixluxury.url,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.publicUrl,
  description: SITE.seoDescription,
  author: {
    "@type": "Person",
    name: "Cristian Văduva",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
