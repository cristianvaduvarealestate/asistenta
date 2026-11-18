import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { legalConfig } from "@/config/legal";
import { SITE } from "@/config/site";

type Section = { heading: string; body: string[] };
type Document = { title: string; intro: string; sections: Section[] };

const documents: Record<string, Document> = {
  confidentialitate: {
    title: "Politica de confidențialitate",
    intro:
      "Informare privind protecția și prelucrarea datelor cu caracter personal în cadrul platformei ASISTENȚĂ IMOBILIARE ȘI ASIGURĂRI.",
    sections: [
      {
        heading: "Operatorul și contactul",
        body: [
          "Pentru orice întrebări sau solicitări privind datele tale personale, mă poți contacta direct la " +
            SITE.email +
            " sau telefonic la " +
            SITE.phoneDisplay +
            ".",
        ],
      },
      {
        heading: "Date colectate și scopuri",
        body: [
          "Colectăm numele, numărul de telefon, adresa de email, tipul solicitantului (PF sau PJ) și detaliile transmise voluntar prin formulare, exclusiv pentru preluarea solicitării tale, oferirea de îndrumare și revenirea cu un răspuns.",
          "Consimțământul pentru eventuale comunicări comerciale este opțional și separat. Nu condiționăm răspunsul la întrebările tale generale de acordul pentru marketing.",
        ],
      },
      {
        heading: "Temei, destinatari și securitate",
        body: [
          "Datele sunt prelucrate pe baza demersurilor precontractuale la cererea ta sau pe baza consimțământului acordat. Informațiile sunt accesibile exclusiv consultantului Cristian Văduva și furnizorilor de infrastructură tehnică strict necesari funcționării securizate a platformei.",
          "Pentru siguranța ta, nu trimite CNP, copii ale actelor de identitate sau alte date sensibile prin formularele de pe site. Solicitările sunt transmise securizat pe server.",
        ],
      },
      {
        heading: "Drepturile tale conform GDPR",
        body: [
          "Beneficiezi de dreptul de acces, rectificare, ștergere, restricționare a prelucrării și opoziție. Pentru exercitarea acestor drepturi, trimite un mesaj la " +
            SITE.email +
            ".",
          "De asemenea, ai dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP - anspdcp.ro) conform legislației aplicabile.",
        ],
      },
    ],
  },
  cookies: {
    title: "Politica de cookies",
    intro:
      "Platforma folosește exclusiv stocare strict necesară bunei funcționări tehnice și nu instalează cookie-uri de marketing sau urmărire publicitară.",
    sections: [
      {
        heading: "Ce folosim",
        body: [
          "Site-ul reține local opțiunea ta privind informarea despre cookies pentru a nu afișa repetat bannerul.",
          "Pentru zona de administrare internă se utilizează un cookie de sesiune HTTP-only securizat, strict necesar autentificării.",
        ],
      },
      {
        heading: "Controlul tău",
        body: [
          "Poți șterge datele de navigare și cookie-urile oricând din setările browserului tău.",
        ],
      },
    ],
  },
  termeni: {
    title: "Termeni și condiții",
    intro:
      "Platforma ASISTENȚĂ IMOBILIARE ȘI ASIGURĂRI oferă un cadru de informare generală și preluare a solicitărilor de consultanță imobiliară și asistență în asigurări.",
    sections: [
      {
        heading: "Domeniul serviciului",
        body: [
          "Informațiile prezentate au caracter de îndrumare și orientare profesională. Ele nu reprezintă confirmarea automată a acoperirii unei daune, emiterea imediată a unei polițe sau interpretarea exhaustivă a unui contract.",
          "Pentru fiecare situație concretă se analizează condițiile specifice ale asigurătorului (Generali) și documentele existente.",
          "În situații de urgență sau dacă există persoane rănite, apelează imediat serviciul național 112.",
        ],
      },
      {
        heading: "Utilizarea platformei",
        body: [
          "Trimite numai informații relevante pentru solicitarea ta. Nu transmite CNP sau copii de documente prin formularele web.",
          "Ne rezervăm dreptul de a limita solicitările automate, de tip spam sau malițioase pentru protecția utilizatorilor și a platformei.",
        ],
      },
      {
        heading: "Legislație aplicabilă",
        body: [
          "Prezenții termeni sunt guvernați de legislația română în vigoare. Eventualele neînțelegeri se vor soluționa pe cale amiabilă sau de instanțele judecătorești competente.",
        ],
      },
    ],
  },
  "informare-servicii": {
    title: "Informare privind serviciile",
    intro:
      "Prezentare transparentă a rolului profesional, a parteneriatelor active și a modului de colaborare pe platforma Cristian Văduva.",
    sections: [
      {
        heading: "Consultanță în asigurări — Partener Generali",
        body: [
          "Cristian Văduva este partener Generali România și oferă consultanță, îndrumare și asistență în analiza nevoilor de protecție pentru persoane fizice și companii.",
          "Cristian Văduva nu este broker de asigurare și nu oferă o comparație independentă a întregii piețe de asigurări. Soluțiile de protecție și ofertele sunt structurate în cadrul parteneriatului cu Generali România.",
          "Te pot îndruma în pregătirea documentației și înțelegerea pașilor de urmat în caz de daună, însă evaluarea dosarului, decizia de despăgubire și termenele de plată aparțin exclusiv asigurătorului Generali, conform condițiilor contractuale.",
        ],
      },
      {
        heading: "Consultanță și reprezentare imobiliară",
        body: [
          "În serviciile imobiliare, rolul meu este stabilit în funcție de partea care solicită și angajează serviciile mele: proprietarul/vânzătorul sau cumpărătorul. Obiectivele colaborării și responsabilitățile sunt clarificate de la început.",
          "Într-o tranzacție, rolul meu și partea pe care o reprezint sunt comunicate clar înainte de începerea colaborării. Orice situație în care există interese diferite ale părților este clarificată înainte de prestarea serviciilor.",
        ],
      },
      {
        heading: "Proprietăți în Dubai și oportunități internaționale",
        body: [
          "Pentru solicitările privind proprietăți în Dubai, discutăm inițial obiectivele și preferințele tale. Ulterior, te pot pune în legătură cu un broker local licențiat, care gestionează activitățile de intermediere și pașii tranzacției în jurisdicția respectivă.",
          "Cristian Văduva este punctul inițial de contact și nu pretinde deținerea unei licențe de brokeraj imobiliar în Dubai sau Monaco.",
        ],
      },
      {
        heading: "Consultanță privind creditele — Smart Credit România",
        body: [
          "Pentru solicitările privind creditele și finanțarea, colaborez cu Smart Credit România. În funcție de situație, solicitarea poate fi preluată și analizată împreună cu partenerul specializat.",
          "Cristian Văduva nu este bancă, creditor sau intermediar independent de credite. Aprobarea finanțării depinde de analiza și criteriile instituției finanțatoare.",
        ],
      },
      {
        heading: "Verificarea scadențelor polițelor de asigurare",
        body: [
          "Înregistrarea scadenței unei polițe reprezintă o cerere de contact și nu garantează transmiterea automată a unei notificări prin SMS sau e-mail.",
          "Contactarea se realizează personal, în funcție de datele furnizate și disponibilitate, pentru a analiza opțiunile de reînnoire.",
        ],
      },
    ],
  },
  accesibilitate: {
    title: "Declarație de accesibilitate",
    intro:
      "Ne propunem ca platforma ASISTENȚĂ IMOBILIARE ȘI ASIGURĂRI să poată fi utilizată facil de cât mai multe persoane, țintind cerințele WCAG 2.2 nivel AA.",
    sections: [
      {
        heading: "Măsuri implementate",
        body: [
          "Pagina folosește structură semantică, etichete clare de formular, focus vizibil, controale acționabile prin tastatură, contrast ridicat și respectă setarea de mișcare redusă (prefers-reduced-motion).",
          "Opțiunile din formulare pot fi navigate facil, iar notificările de sistem sunt transmise prin atribute ARIA adecvate.",
        ],
      },
      {
        heading: "Feedback",
        body: [
          "Dacă întâmpini dificultăți de accesibilitate sau dorești sugestii de îmbunătățire, te rugăm să ne scrii la " +
            SITE.email +
            ".",
        ],
      },
    ],
  },
  contact: {
    title: "Contact și date de identificare",
    intro:
      "Canale directe de comunicare pentru consultanță imobiliară și asistență în asigurări.",
    sections: [
      {
        heading: "Date de contact direct",
        body: [
          "Cristian Văduva — Consultant Imobiliare & Partener Generali",
          "Telefon: " + SITE.phoneDisplay,
          "Email: " + SITE.email,
          "WhatsApp: " + SITE.phoneDisplay,
        ],
      },
      {
        heading: "Modalitate de lucru",
        body: [
          "Discuțiile de consultanță și analiza solicitărilor se realizează prin programare prealabilă, telefonic, online sau la birou, adaptat specificului fiecărui proiect.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(documents).map((document) => ({ document }));
}

export function generateMetadata({
  params,
}: {
  params: { document: string };
}): Metadata {
  const item = documents[params.document];
  if (!item) return {};

  const canonicalUrl = `${SITE.publicUrl}/${params.document}`;
  return {
    title: item.title,
    description: item.intro,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${item.title} | Cristian Văduva`,
      description: item.intro,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: `${SITE.publicUrl}/images/og-asistenta.jpg`,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} | Cristian Văduva`,
      description: item.intro,
      images: [`${SITE.publicUrl}/images/og-asistenta.jpg`],
    },
  };
}

export default function LegalPage({
  params,
}: {
  params: { document: string };
}) {
  const item = documents[params.document];
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand">
        Document de informare
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {item.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">{item.intro}</p>
      <p className="mt-5 text-sm text-muted">
        Ultima actualizare: {legalConfig.lastUpdatedLabel}
      </p>

      <div className="mt-10 space-y-9">
        {item.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-ink">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      <nav
        className="mt-12 border-t border-line pt-6 text-sm text-muted"
        aria-label="Documente legale"
      >
        <p className="font-medium text-ink">Documente și informări</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {Object.entries(documents).map(([slug, document]) => (
            <Link
              className="underline underline-offset-2 hover:text-ink"
              key={slug}
              href={`/${slug}`}
            >
              {document.title}
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
