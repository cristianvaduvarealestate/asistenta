export type Guidance = {
  title: string;
  updated: string;
  paragraphs: string[];
  checks?: string[];
  disclaimer: string;
};

const UPDATED = "Actualizat: 13 noiembrie 2026. Informație generală, nu interpretare a unei polițe individuale.";

const DISCLAIMER =
  "Aceste informații sunt generale. Acoperirea reală depinde de condițiile contractului tău și de asigurător. Nu pot confirma o daună sau o clauză fără verificarea poliței.";

export function guidanceFor(flow: string, payload: Record<string, unknown>): Guidance {
  switch (flow) {
    case "oferta":
      return {
        title: "Următorii pași pentru o ofertă",
        updated: UPDATED,
        paragraphs: [
          "O ofertă se construiește după ce se înțelege ce vrei să protejezi, cine este asiguratul (persoană fizică sau firmă) și ce riscuri sunt relevante.",
          "Nu există o primă corectă afișată automat aici. Variantele și costul țin de asigurător, de obiectul asigurării și de istoricul de risc.",
          "După ce lași datele, discutăm concret ce informații mai sunt necesare pentru o ofertă.",
        ],
        checks: [
          "Ce bun, persoană sau activitate vrei să asiguri",
          "Dacă există deja o poliță în vigoare",
          "Dacă solicitarea este pentru PF sau pentru firmă",
        ],
        disclaimer: DISCLAIMER,
      };
    case "aminteste":
      return {
        title: "Cum funcționează verificarea scadenței",
        updated: UPDATED,
        paragraphs: [
          "Solicitarea ta reprezintă o cerere de contact personal pentru a analiza opțiunile de reînnoire înainte de expirarea poliței.",
          "Nu este un serviciu de notificare automată prin SMS sau email; contactarea se realizează personal pe canalul preferat (telefon sau email).",
          "Vom analiza împreună condițiile curente și opțiunile de protecție adecvate din oferta Generali România.",
        ],
        disclaimer: DISCLAIMER,
      };
    case "explica":
      return explainGuidance(payload);
    case "acoperire":
      return coverageGuidance(payload);
    case "nevoi":
      return needsGuidance(payload);
    case "dauna":
      return claimGuidance(payload);
    default:
      return {
        title: "Am notat întrebarea",
        updated: UPDATED,
        paragraphs: [
          "Pentru întrebări generale pot explica noțiuni uzuale: franșiză, excludere, limită, obligațiile asiguratului.",
          "Pentru o poliță concretă am nevoie de condițiile contractului. Fără ele nu pot confirma acoperirea.",
        ],
        disclaimer: DISCLAIMER,
      };
  }
}

function explainGuidance(payload: Record<string, unknown>): Guidance {
  const topic = String(payload.topic || "");
  const map: Record<string, string[]> = {
    acopera: [
      "O poliță descrie evenimentele și pagubele pentru care asigurătorul poate plăti, în limitele și condițiile din contract.",
      "Ce „acoperă” se citește din condițiile generale, condițiile speciale și clauzele adiționale, nu din titlul produsului.",
    ],
    nu_acopera: [
      "Excluderile sunt situațiile în care asigurătorul nu despăgubește, chiar dacă există o poliță.",
      "Excluderile trebuie citite împreună cu definițiile și cu obligațiile tale. Fără textul poliței nu pot spune ce este exclus în cazul tău.",
    ],
    clauza: [
      "O clauză este o prevedere contractuală. Sensul ei depinde de formularea exactă și de restul contractului.",
      "Poți copia aici textul care te derutează. Interpretarea individuală o facem după ce văd clauza, nu înainte.",
    ],
    fransiza: [
      "Franșiza este partea din daună care rămâne în sarcina ta. Poate fi o sumă fixă sau un procent.",
      "Valoarea și modul de aplicare sunt cele din polița ta. Nu există o franșiză unică pentru toate produsele.",
    ],
    limite: [
      "Limitele sunt sumele maxime pe care asigurătorul le poate plăti (pe eveniment, pe an, pe persoană sau pe obiect).",
      "O daună poate fi acoperită ca tip, dar redusă sau refuzată parțial dacă depășește limita.",
    ],
    obligatii: [
      "Asiguratul are de regulă obligații de informare, de prevenire a daunelor și de anunțare în termenul din contract.",
      "Nerespectarea obligațiilor poate afecta despăgubirea. Termenele exacte sunt cele din polița ta.",
    ],
  };
  return {
    title: "Explicație generală",
    updated: UPDATED,
    paragraphs: map[topic] || [
      "Pot explica termeni uzuali. Pentru o clauză din contractul tău, am nevoie de textul relevant.",
    ],
    disclaimer: DISCLAIMER,
  };
}

function coverageGuidance(payload: Record<string, unknown>): Guidance {
  const situation = String(payload.situation || payload.message || "").toLowerCase();
  const hints: string[] = [];
  if (situation.includes("copac") || situation.includes("mașin") || situation.includes("masin")) {
    hints.push("Poate fi relevant CASCO (dacă există) și, în unele cazuri, asigurarea de locuință a proprietarului copacului sau răspunderea unui terț. RCA-ul propriu nu acoperă de regulă dauna ta.");
  }
  if (situation.includes("inund") || situation.includes("vecin") || situation.includes("teras")) {
    hints.push("Poate fi relevantă asigurarea de locuință (fenomene sau avarii la instalații, după caz) și/sau răspunderea civilă a vecinului. Trebuie verificate cauzele, menținerile și excluderile.");
  }
  if (situation.includes("bagaj") || situation.includes("călător") || situation.includes("calator")) {
    hints.push("Poate fi relevantă asigurarea de călătorie, în limitele pentru bagaje și cu excluderile uzuale (obiecte nesupravegheate, termene de anunțare).");
  }
  if (situation.includes("echipament") || situation.includes("firm")) {
    hints.push("Pentru firmă pot fi relevante bunurile, echipamentele electronice sau o poliță de tip property. Defectele de uzură nu sunt, în general, tratate ca daună accidentală.");
  }
  if (situation.includes("persoan") || situation.includes("terț") || situation.includes("tert")) {
    hints.push("Poate fi relevantă răspunderea civilă (inclusiv RCA, dacă e vorba de vehicul). Vinovăția și cuantumul se stabilesc pe baza faptelor, nu aici.");
  }

  return {
    title: "Ce trebuie verificat",
    updated: UPDATED,
    paragraphs: [
      hints[0] || "Din descriere pot indica ce tip de poliță ar putea fi relevant. Nu pot spune DA sau NU fără condițiile contractului.",
      "Pentru o confirmare individuală am nevoie de polița în vigoare la data evenimentului, cauza daunei și, dacă e cazul, documentele evenimentului.",
    ],
    checks: [
      "Există o poliță în vigoare la data evenimentului?",
      "Evenimentul se încadrează în riscurile din contract sau într-o excludere?",
      "Au fost respectate obligațiile de anunțare și de limitare a pagubei?",
    ],
    disclaimer: DISCLAIMER,
  };
}

function needsGuidance(payload: Record<string, unknown>): Guidance {
  const selected = Array.isArray(payload.needs) ? (payload.needs as string[]) : [];
  return {
    title: "Rezumat orientativ",
    updated: UPDATED,
    paragraphs: [
      selected.length
        ? `Ai marcat: ${selected.join(", ")}. Acestea sunt puncte de discuție, nu o analiză profesională completă.`
        : "Nu ai marcat încă elemente. Putem parcurge împreună locuința, auto, familia sau, pentru firmă, spații, flotă, stocuri și răspunderi.",
      "Nu calculez aici un scor de risc și nu estimez probabilitatea unei daune.",
    ],
    disclaimer: DISCLAIMER,
  };
}

function claimGuidance(payload: Record<string, unknown>): Guidance {
  const injured = payload.injured === true || payload.injured === "yes";
  const paragraphs = [
    injured
      ? "Dacă există persoane rănite sau pericol imediat, sună 112 înainte de orice formular sau discuție despre asigurare."
      : "Dacă situația este încă periculoasă, pune siguranța pe primul loc. Serviciul 112 rămâne numărul de urgență.",
    "Te pot îndruma în pregătirea și transmiterea informațiilor necesare pentru o solicitare de daună și îți pot explica pașii procedurii. Evaluarea dosarului, decizia privind despăgubirea și termenele de soluționare aparțin asigurătorului și depind de condițiile poliței și de documentele disponibile.",
    "În cazul unui incident acoperit de Generali, transmiterea corectă și completă a documentelor inițiale facilitează instrumentarea eficientă a dosarului de daună.",
  ];
  return {
    title: "Ce poți face acum",
    updated: UPDATED,
    paragraphs,
    checks: ["Siguranță / 112 dacă e urgență", "Documentare", "Anunțarea asigurătorului", "Păstrarea înscrisurilor"],
    disclaimer: DISCLAIMER,
  };
}
