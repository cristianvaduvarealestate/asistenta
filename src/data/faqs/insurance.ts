export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const INSURANCE_FAQS: FAQItem[] = [
  {
    id: "rol-generali",
    question: "Care este rolul tău ca partener oficial Generali România?",
    answer:
      "Activez ca agent partener autorizat al Generali România. Rolul meu este să identific nevoile tale de protecție, să-ți explic condițiile contractuale și clauzele pe înțelesul tău și să te ghidez în întocmirea documentației. Emiterea formală a polițelor și plata despăgubirilor aparțin exclusiv asigurătorului Generali România conform contractului de asigurare.",
  },
  {
    id: "casco-decontare",
    question: "Ce acoperă o poliță CASCO completă și ce înseamnă decontarea directă?",
    answer:
      "Polița CASCO de la Generali poate acoperi, în funcție de clauzele contractate, avarii accidentale (tamponări, căderi de corpuri, zgârieturi în parcare), fenomene meteo (grindină, inundații, furtuni), vandalism și furt total sau parțial. Decontarea directă îți permite, în limita acoperirii aprobate de asigurător, repararea mașinii în service-uri partenere fără avans din buzunar pentru cheltuielile acoperite contractual.",
  },
  {
    id: "pad-vs-facultativa",
    question: "Care este diferența dintre asigurarea obligatorie a locuinței (PAD) și cea facultativă?",
    answer:
      "Asigurarea PAD este obligatorie prin lege și acoperă exclusiv 3 riscuri de dezastru natural: cutremur, alunecări de teren și inundații din cauze naturale, în limita legală de 20.000 euro (structură tip A) sau 10.000 euro (tip B). O asigurare facultativă completează această protecție conform valorii asigurate și poate acoperi incendiu, explozie, furtuni, conducte sparte, avarii electrice și bunurile din locuință, conform condițiilor contractuale.",
  },
  {
    id: "fransiza-explicata",
    question: "Ce înseamnă franșiza și cum influențează costul poliței și despăgubirea?",
    answer:
      "Franșiza reprezintă partea din valoarea unei daune pe care o suportă asiguratul la fiecare eveniment conform contractului (sumă fixă sau procentuală). O franșiză mai mare reduce prima anuală a poliței, în timp ce o poliță fără franșiză oferă acoperire din partea asigurătorului fără această contribuție proprie. Îți prezint ambele variante pentru a alege opțiunea potrivită bugetului tău.",
  },
  {
    id: "pasi-dauna",
    question: "Cum procedez pas cu pas în cazul unei daune auto sau de locuință?",
    answer:
      "În primul rând, asiguri siguranța persoanelor și limitezi extinderea pagubelor, fotografiind locul incidentului și avariile. Apoi mă poți contacta la 0767 110 439 pentru îndrumare procedurală privind actele necesare și transmiterea notificării către Generali România. Aprobarea dosarului și plata despăgubirilor sunt decise exclusiv de Generali România conform contractului de asigurare.",
  },
  {
    id: "asigurare-sanatate",
    question: "Oferi soluții de asigurare de sănătate pentru persoane fizice și familii?",
    answer:
      "Da. Generali oferă pachete de asigurare de sănătate care pot include consultații de specialitate, investigații imagistice avansate (RMN, CT), analize de laborator, intervenții chirurgicale și spitalizare în rețele medicale private partenere, în limitele și condițiile specificate în poliță.",
  },
  {
    id: "asigurari-firme",
    question: "Ce tipuri de polițe sunt recomandate pentru companii mici și medii?",
    answer:
      "Pentru afaceri structurăm soluții pe specificul activității: asigurarea sediilor, birourilor și depozitelor, protecția stocurilor și utilajelor, flote auto, precum și asigurarea de răspundere civilă generală sau profesională, adaptate riscurilor reale din industria în care activezi.",
  },
  {
    id: "scadenta-reinnoire",
    question: "Cum aflu când expiră polița mea actuală și cum o pot reînnoi la timp?",
    answer:
      "Îmi poți transmite data de expirare prin asistentul rapid de pe site sau printr-un mesaj pe WhatsApp. Te notez în calendarul de asistență și te contactez din timp cu oferta actualizată de reînnoire, evitând astfel perioadele fără acoperire sau întârzierile la plată.",
  },
];
