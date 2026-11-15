// ==============================================================================
// TIPURI DE DATE ȘI SURSE DOCUMENTARE — PROTECȚIA AFACERII
// ==============================================================================

export type VerifiedSource = {
  title: string;
  institution: string;
  url: string;
  verifiedAt: string;
  scope: string;
};

export const OFFICIAL_SOURCES: VerifiedSource[] = [
  {
    title: "Autoritatea de Supraveghere Financiară — Sectorul Asigurări",
    institution: "ASF România",
    url: "https://asfromania.ro/",
    verifiedAt: "14 noiembrie 2026",
    scope: "Reglementare intermediari și societăți de asigurare, Registrul Intermediarilor, ghiduri de informare consumatori",
  },
  {
    title: "Legea nr. 236/2018 privind distribuția de asigurări",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/205658",
    verifiedAt: "14 noiembrie 2026",
    scope: "Transpunerea Directivei IDD (UE) 2016/97, cerințe de informare, test de cerințe și necesități (DNT)",
  },
  {
    title: "Legea nr. 132/2017 privind asigurarea obligatorie de răspundere civilă auto (RCA)",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/190447",
    verifiedAt: "14 noiembrie 2026",
    scope: "Obligativitatea RCA pentru vehicule înmatriculate/înregistrate, limite minime de despăgubire",
  },
  {
    title: "Convenția CMR privind contractul de transport internațional de mărfuri pe șosele (Geneva 1956)",
    institution: "UNECE / Portalul Legislativ",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/1063",
    verifiedAt: "14 noiembrie 2026",
    scope: "Răspunderea cărăușului rutier, limitarea la 8.33 DST per kg greutate brută lipsă",
  },
  {
    title: "Regulamentul (UE) 2016/679 privind protecția datelor (GDPR)",
    institution: "EUR-Lex",
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
    verifiedAt: "14 noiembrie 2026",
    scope: "Securitatea prelucrării datelor, notificarea breșelor de securitate (termen 72 ore către ANSPDCP)",
  },
  {
    title: "Directiva (UE) 2022/2555 privind securitatea rețelelor și a sistemelor informatice (NIS 2)",
    institution: "EUR-Lex / DNSC",
    url: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj",
    verifiedAt: "14 noiembrie 2026",
    scope: "Cerințe sporite de securitate cibernetică și continuitate a activității pentru entități esențiale și importante",
  },
  {
    title: "Directoratul Național de Securitate Cibernetică",
    institution: "DNSC România",
    url: "https://dnsc.ro/",
    verifiedAt: "14 noiembrie 2026",
    scope: "Alerte de securitate, ghiduri de răspuns la atacuri ransomware și prevenire incidente",
  },
  {
    title: "Agenția Uniunii Europene pentru Securitate Cibernetică",
    institution: "ENISA",
    url: "https://www.enisa.europa.eu/",
    verifiedAt: "14 noiembrie 2026",
    scope: "Rapoarte anuale privind peisajul amenințărilor (Threat Landscape) și reziliență operațională",
  },
  {
    title: "Legea nr. 10/1995 privind calitatea în construcții",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/5681",
    verifiedAt: "14 noiembrie 2026",
    scope: "Răspunderea proiectanților, verificatorilor, executanților și diriginților de șantier pe durata de existență a construcției",
  },
  {
    title: "Legea nr. 319/2006 a securității și sănătății în muncă",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/73768",
    verifiedAt: "14 noiembrie 2026",
    scope: "Obligațiile angajatorilor privind prevenirea accidentelor de muncă și a bolilor profesionale",
  },
  {
    title: "Codul Civil Român (Legea nr. 287/2009) — Contractul de Asigurare (Art. 2199 - 2241)",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/175630",
    verifiedAt: "14 noiembrie 2026",
    scope: "Principiile generale ale contractului de asigurare, interesul asigurabil, obligația de declarare a riscului și plata despăgubirilor",
  },
  {
    title: "Legea nr. 95/2006 privind reforma în domeniul sănătății (Titlul XV - Răspunderea civilă a personalului medical)",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/71120",
    verifiedAt: "14 noiembrie 2026",
    scope: "Obligativitatea asigurării de malpraxis pentru medici, asistenți și unități sanitare",
  },
  {
    title: "Legea nr. 240/2004 privind răspunderea producătorilor pentru pagubele generate de produsele cu defecte",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/53412",
    verifiedAt: "14 noiembrie 2026",
    scope: "Răspunderea obiectivă a producătorului și importatorului pentru vătămări corporale sau pagube materiale produse de bunuri cu defecte",
  },
  {
    title: "Legea nr. 98/2016 privind achizițiile publice",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/178667",
    verifiedAt: "14 noiembrie 2026",
    scope: "Art. 154: constituirea garanției de participare (Bid Bond) și de bună execuție (Performance Bond) prin instrumente de garantare emise de societăți de asigurare",
  },
  {
    title: "Codul Fiscal Român (Legea nr. 227/2015 cu modificările ulterioare)",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/171282",
    verifiedAt: "14 noiembrie 2026",
    scope: "Art. 76 alin. 4 lit. t & Art. 76 alin. 4^1: deductibilitatea și scutirea de contribuții pentru primele de asigurare voluntară de sănătate (400 EUR/an per angajat)",
  },
  {
    title: "Legea nr. 333/2003 privind paza obiectivelor, bunurilor, valorilor și protecția persoanelor",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/44763",
    verifiedAt: "14 noiembrie 2026",
    scope: "Obligația analizei de risc la securitate fizică pentru societăți comerciale și cerințele de licențiere IGPR pentru firme de pază",
  },
  {
    title: "HG nr. 1146/2006 privind cerințele minime de securitate și sănătate în muncă (Normativul I7/2011)",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/75765",
    verifiedAt: "14 noiembrie 2026",
    scope: "Verificarea tehnică periodică a instalațiilor electrice și prizelor de pământ (buletine PRAM) ca obligație de prevenție SSM",
  },
  {
    title: "Legea nr. 307/2006 privind apărarea împotriva incendiilor & HG nr. 571/2016",
    institution: "Portalul Legislativ al României",
    url: "https://legislatie.just.ro/Public/DetaliiDocument/73656",
    verifiedAt: "14 noiembrie 2026",
    scope: "Criteriile de obținere și menținere a autorizației de securitate la incendiu (ISU) pentru spații economice",
  },
  {
    title: "Legislația Corpurilor Profesionale Reglementate (OG 65/1994, Legea 51/1995, Legea 184/2001, Legea 36/1995)",
    institution: "CECCAR, UNBR, OAR, UNNPR",
    url: "https://legislatie.just.ro/",
    verifiedAt: "14 noiembrie 2026",
    scope: "Obligativitatea asigurării de răspundere profesională civilă pentru contabili autorizați, avocați, arhitecți și notari publici",
  },
];

// Categorie de asigurare comercială
export type BusinessCategory = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  overview: string;
  targetAudience: string[];
  keyRisksCovered: string[];
  commonExclusions: string[];
  underwritingRequirements: string[];
  practicalQuestions: string[];
  legalNotes: string;
  helpDeskPrefill: {
    category: string;
    messageIntro: string;
  };
};

// Domeniu de activitate industrială / comercială (17 secțiuni standardizate)
export type IndustryDomain = {
  id: string;
  letter: string; // 'A' .. 'L'
  slug: string;
  name: string;
  subtitle: string;
  targetBusinesses: string[];
  caenExamples: string[];
  // 1. Model operațional
  operatingModel: string;
  // 2. Ce se poate pierde
  whatCanBeLost: string[];
  // 3. Riscuri operaționale
  operationalRisks: string[];
  // 4. Riscuri fizice și materiale
  physicalRisks: string[];
  // 5. Riscuri financiare și comerciale
  financialRisks: string[];
  // 6. Riscuri juridice și contractuale
  legalContractualRisks: string[];
  // 7. Riscuri legate de angajați
  employeeRisks: string[];
  // 8. Riscuri față de terți și clienți
  thirdPartyRisks: string[];
  // 9. Riscuri digitale și de date
  digitalRisks: string[];
  // 10. Scenarii concrete de daune (studii de caz)
  caseScenarios: Array<{
    title: string;
    trigger: string;
    consequences: string;
    lesson: string;
  }>;
  // 11. Polițe de asigurare relevante
  relevantPolicies: Array<{
    name: string;
    slug: string;
    importance: "esențială" | "recomandată" | "opțională";
    role: string;
  }>;
  // 12. Ce acoperă fiecare poliță
  policyCoverageDetails: Array<{
    policy: string;
    coverage: string;
    typicalLimit: string;
  }>;
  // 13. Excluderi frecvente și limitări
  exclusionsAndLimits: string[];
  // 14. Ce informații sunt necesare pentru ofertare
  underwritingInfoNeeded: string[];
  // 15. Întrebări frecvente specifice industriei
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  // 16. Checklist de verificare pentru antreprenor
  entrepreneurChecklist: string[];
  // 17. Pasul următor și prefill Help Desk
  nextStepCta: {
    title: string;
    description: string;
    prefillHelpDesk: {
      category: string;
      industry: string;
      message: string;
    };
  };
};

// Ghid complet de produs
export type ProductGuide = {
  id: string;
  slug: string;
  name: string;
  acronym?: string;
  category: string;
  shortDesc: string;
  overview: string;
  targetAudience: string[];
  keyCoverages: string[];
  limitsAndSublimits: string[];
  deductiblesExplanation: string;
  commonExclusions: string[];
  underwritingRequirements: string[];
  claimsProcedure: string[];
  questionsToAskInsurer: string[];
  officialLawReference?: string;
  helpDeskPrefill: {
    category: string;
    messageIntro: string;
  };
};

// Scenariu concret de daună
export type ClaimScenario = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  industrySlug: string;
  shortSummary: string;
  triggerEvent: string;
  concreteDamages: string[];
  partiesInvolved: string[];
  relevantPolicies: string[];
  claimsProcessSteps: string[];
  criticalChecks: string[];
  trapsAndExclusions: string[];
  requiredDocuments: string[];
  educationalDisclaimer: string;
};

// Checklist antreprenor
export type BusinessChecklist = {
  id: string;
  slug: string;
  title: string;
  targetEvent: string;
  summary: string;
  steps: Array<{
    phase: string;
    items: Array<{
      title: string;
      details: string;
      priority: "critic" | "important" | "recomandat";
      verifiedNote?: string;
    }>;
  }>;
  pitfallsToAvoid: string[];
  prefillAction: {
    category: string;
    message: string;
  };
};

// Scenariu "Ce se întâmplă dacă?"
export type WhatIfScenario = {
  id: string;
  slug: string;
  question: string;
  shortAnswer: string;
  detailedAnalysis: string;
  immediateImpact: string[];
  insuranceIntervention: string;
  uninsurableAspects: string;
  mitigationSteps: string[];
  legalBasis?: string;
};

// Cadrul Legal: Obligatoriu vs Contractual vs Facultativ vs Prevenție Tehnică
export type LegalRequirement = {
  id: string;
  level: "obligatoriu" | "contractual" | "facultativ" | "preventie_tehnica";
  title: string;
  lawOrSource: string;
  legalArticle?: string;
  officialSourceUrl?: string;
  verificationDate?: string;
  verdictStatus: "confirmat" | "clarificat" | "cerinta_contractuala";
  isInsurancePolicy: boolean;
  appliesTo: string;
  consequencesOfMissing: string;
  description: string;
  practicalAdvice: string;
};
