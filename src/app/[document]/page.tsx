import Link from "next/link";
import { notFound } from "next/navigation";
import { legalConfig } from "@/config/legal";
import { SITE } from "@/config/site";

type Section = { heading: string; body: string[] };
type Document = { title: string; intro: string; sections: Section[] };

const documents: Record<string, Document> = {
  confidentialitate: {
    title: "Politica de confidențialitate",
    intro: "Această versiune este o bază de informare pentru platformă. Identitatea operatorului și detaliile necesare publicării sunt marcate înainte de lansare.",
    sections: [
      { heading: "Operatorul și contactul", body: ["Operatorul de date trebuie identificat înainte de publicare. Până la completare, folosește datele de contact ale serviciului pentru întrebări: " + SITE.email + " și " + SITE.phoneDisplay + "."] },
      { heading: "Date și scopuri", body: ["Colectăm nume, telefon, email, tip solicitant și informațiile pe care le trimiți pentru a înregistra solicitarea, a reveni cu răspuns și, dacă alegi această funcție, a gestiona notificarea de expirare.", "Consimțământul pentru comunicări comerciale este separat și opțional. Nu condiționăm întrebările generale de acordul pentru marketing."] },
      { heading: "Temei, destinatari și securitate", body: ["Temeiul și perioada de păstrare trebuie confirmate de operator înainte de publicare. Datele sunt accesibile numai consultantului autorizat și furnizorilor tehnici necesari, după configurarea lor contractuală. Nu încărca documente sau copii de acte în această versiune.", "Platforma păstrează solicitarea chiar dacă alerta Telegram către consultant eșuează. Tokenurile de integrare rămân doar pe server."] },
      { heading: "Drepturile tale", body: ["Poți solicita acces, rectificare, ștergere, restricționare, opoziție sau informații despre prelucrare, în limitele aplicabile. Trimite solicitarea la " + SITE.email + ". Datele de contact ale operatorului și calea de escaladare către autoritatea de supraveghere trebuie completate înainte de lansare."] },
    ],
  },
  cookies: {
    title: "Politica de cookies",
    intro: "Platforma folosește numai stocare strict necesară funcționării și nu instalează cookie-uri de marketing sau analiză în această versiune.",
    sections: [
      { heading: "Ce folosim", body: ["Bannerul salvează local alegerea privind informarea despre cookies. Zona administrativă folosește un cookie de sesiune HTTP-only, strict necesar autentificării."] },
      { heading: "Control", body: ["Poți șterge datele de navigare din browser. Ștergerea cookie-ului de sesiune te va deconecta din admin. Dacă vor fi adăugate servicii opționale, politica și mecanismul de consimțământ vor fi actualizate înainte de activare."] },
    ],
  },
  termeni: {
    title: "Termeni și condiții",
    intro: "Platforma ASISTENȚĂ IMOBILIARE ȘI ASIGURĂRI oferă un punct de contact pentru informare generală și înregistrarea solicitărilor de asistență în asigurări și imobiliare.",
    sections: [
      { heading: "Domeniul serviciului", body: ["Informațiile generale nu reprezintă confirmarea acoperirii unei daune, interpretarea completă a unei polițe sau promisiunea de emitere. Pentru situația concretă se verifică polița, condițiile asigurătorului și faptele relevante.", "În urgențe sau dacă sunt persoane rănite, apelează 112 înainte de a continua pe platformă."] },
      { heading: "Utilizarea platformei", body: ["Trimite numai informații necesare solicitării. Nu transmite CNP, copii de documente sau alte date sensibile prin formulare. Ne rezervăm dreptul de a limita solicitările automate ori abuzive pentru protejarea serviciului."] },
      { heading: "Informații necesare publicării", body: ["Identitatea entității care oferă serviciul și statutul aplicabil în raport cu Legea nr. 236/2018 trebuie completate înainte de publicare. Până atunci, această versiune nu este pregătită pentru lansare publică."] },
    ],
  },
  "informare-servicii": {
    title: "Informare privind serviciile de asistență în asigurări",
    intro: "Platforma ajută utilizatorii să formuleze întrebări, să înțeleagă aspecte generale și să solicite contact personal.",
    sections: [
      { heading: "Ce poate face platforma", body: ["Poți cere o ofertă, o notificare de expirare, explicații generale despre termeni de poliță, orientare privind un eveniment, o discuție despre bunuri și riscuri sau îndrumare după o daună.", "Pentru notificări, data expirării și ferestrele alese se salvează. Contactarea clientului se face manual până la integrarea verificată a unui serviciu de email sau SMS."] },
      { heading: "Limitele informațiilor", body: ["Nicio explicație de pe platformă nu confirmă individual acoperirea. Aceasta poate depinde de poliță, anexele ei, cauza evenimentului, limite, excluderi și respectarea obligațiilor contractuale."] },
      { heading: "Cadrul aplicabil", body: ["Legea nr. 236/2018 reglementează distribuția de asigurări și a fost completată ulterior. Înainte de publicare trebuie verificat statutul real al entității și informările aplicabile, inclusiv cele cerute de ASF, fără a inventa autorizări sau parteneriate."] },
    ],
  },
  accesibilitate: {
    title: "Declarație de accesibilitate",
    intro: "Ne propunem ca platforma ASISTENȚĂ IMOBILIARE ȘI ASIGURĂRI să poată fi utilizată de cât mai multe persoane și țintim WCAG 2.2 nivel AA.",
    sections: [
      { heading: "Măsuri implementate", body: ["Pagina folosește structură semantică, etichete de formular, focus vizibil, controale accesibile cu tastatura, contrast ridicat și respectă preferința pentru reducerea mișcării.", "Cardurile și opțiunile pot fi acționate cu tastatura, iar mesajele de eroare sunt expuse ca alerte."] },
      { heading: "Limitări și feedback", body: ["Compatibilitatea cu toate combinațiile de browser și cititor de ecran trebuie verificată înainte de lansare. Pentru probleme de accesibilitate, contactează-ne la " + SITE.email + "."] },
    ],
  },
  contact: {
    title: "Contact și date de identificare",
    intro: "Poți cere ajutor prin formular, telefon sau email.",
    sections: [
      { heading: "Contact", body: ["Cristian Văduva — Consultant Imobiliare & Asigurări", "Telefon: " + SITE.phoneDisplay, "Email: " + SITE.email] },
      { heading: "Date care trebuie completate înainte de publicare", body: ["Entitatea juridică / operatorul de date, CUI sau CIF dacă există, sediul ori adresa de corespondență, numărul de înregistrare dacă există și statutul aplicabil în relație cu ASF trebuie confirmate înainte de publicarea platformei."] },
    ],
  },
};

export function generateStaticParams() { return Object.keys(documents).map((document) => ({ document })); }
export function generateMetadata({ params }: { params: { document: string } }) { const item = documents[params.document]; return item ? { title: item.title, description: item.intro } : {}; }

export default function LegalPage({ params }: { params: { document: string } }) {
  const item = documents[params.document]; if (!item) notFound();
  return <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6"><p className="text-xs font-semibold uppercase tracking-widest text-brand">Document de informare</p><h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{item.title}</h1><p className="mt-5 text-lg leading-relaxed text-muted">{item.intro}</p><p className="mt-5 text-sm text-muted">Ultima actualizare: {legalConfig.lastUpdatedLabel}</p>{!legalConfig.publicationReady && <section className="mt-8 rounded-2xl border border-brand/20 bg-brand-soft p-5"><h2 className="font-semibold text-brand-dark">Necompletat pentru publicare</h2><p className="mt-2 text-sm text-ink">Înainte de lansare trebuie verificate și completate următoarele date:</p><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink">{legalConfig.missingForPublication.map((missing) => <li key={missing}>{missing}</li>)}</ul></section>}<div className="mt-10 space-y-9">{item.sections.map((section) => <section key={section.heading}><h2 className="text-xl font-semibold text-ink">{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph} className="mt-3 leading-relaxed text-muted">{paragraph}</p>)}</section>)}</div><nav className="mt-12 border-t border-line pt-6 text-sm text-muted" aria-label="Documente legale"><p className="font-medium text-ink">Documente</p><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{Object.entries(documents).map(([slug, document]) => <Link className="underline underline-offset-2" key={slug} href={`/${slug}`}>{document.title}</Link>)}</div></nav></article>;
}
