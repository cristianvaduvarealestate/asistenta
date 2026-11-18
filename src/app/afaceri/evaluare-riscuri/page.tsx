"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Building,
  Cpu,
  Users,
  Flame,
  FileText,
  DollarSign,
  Scale,
} from "lucide-react";

type Question = {
  id: string;
  category: string;
  text: string;
  explanation: string;
  options: Array<{
    label: string;
    riskTriggered?: string;
    recommendedPolicy?: string;
    missingInfoNotice?: string;
  }>;
};

const QUESTIONS: Question[] = [
  // 1
  {
    id: "q1_space",
    category: "Spații și Imobile",
    text: "1. Ce tip de spațiu folosește afacerea ta pentru desfășurarea activității?",
    explanation: "Statutul de proprietar sau chiriaș dictează ce asigurări sunt obligatorii prin contract.",
    options: [
      {
        label: "Spațiu comercial închiriat într-un mall sau centru de retail",
        riskTriggered: "Răspunderea chiriașului față de proprietar și daune aduse magazinelor vecine.",
        recommendedPolicy: "Răspundere Civilă Generală a Chiriașului (Tenant's Liability) cu renunțare la regres",
      },
      {
        label: "Hală industrială / depozit propriu",
        riskTriggered: "Risc catastrofic de incendiu, prăbușire de structură sau greutatea zăpezii pe acoperiș.",
        recommendedPolicy: "Property All Risks (Clădire și Instalații Fixe la Valoare de Reconstrucție)",
      },
      {
        label: "Birou închiriat într-o clădire de birouri",
        riskTriggered: "Infiltrații de apă, defecte de climatizare și cerințe contractuale de fit-out.",
        recommendedPolicy: "Asigurarea Amenajărilor Interioare și Răspundere Locativă",
      },
      {
        label: "Activitate 100% remote / de acasă",
        riskTriggered: "Riscuri fizice reduse, însă expunere majoră digitală și contractuală.",
        recommendedPolicy: "Asigurare echipamente IT portabile și Cyber Risk",
      },
    ],
  },
  // 2
  {
    id: "q2_equipment",
    category: "Echipamente & Utilaje",
    text: "2. Dețineți utilaje industriale, linii de producție sau mașini-unelte?",
    explanation: "Polița de incendiu nu acoperă avariile mecanice interne sau erorile de operare.",
    options: [
      {
        label: "Da, operăm utilaje industriale și linii tehnologice complexe",
        riskTriggered: "Avarie mecanică accidentală, scurtcircuit intern, forfecare de piese, oprire producție.",
        recommendedPolicy: "Machinery Breakdown (MB) + MLOP (Pierdere de Profit din avarii utilaje)",
      },
      {
        label: "Doar echipamente de birou și IT (laptopuri, monitoare, servere)",
        riskTriggered: "Supratensiuni electrice, variații de rețea, furt prin efracție.",
        recommendedPolicy: "Asigurarea Echipamentelor Electronice (EEI)",
      },
      {
        label: "Utilaje grele de șantier (excavatoare, buldozere, macarale)",
        riskTriggered: "Răsturnare pe teren instabil, avariere cabluri subterane, coliziuni.",
        recommendedPolicy: "Asigurarea Utilajelor de Șantier (CPM) și Agro-CASCO",
      },
      {
        label: "Nu deținem utilaje sau echipamente de valoare",
      },
    ],
  },
  // 3
  {
    id: "q3_inventory",
    category: "Stocuri & Mărfuri",
    text: "3. Aveți stocuri de marfă, materii prime sau produse finite depozitate?",
    explanation: "Fluctuațiile sezoniere de stoc necesită clauze flexibile pentru a nu plăti prime inutile.",
    options: [
      {
        label: "Da, stocuri mari cu variații sezoniere majore (vârfuri de sărbători/campanii)",
        riskTriggered: "Risc de sub-asigurare în perioadele de vârf sau primă plătită în exces în restul anului.",
        recommendedPolicy: "Poliță de Stocuri pe Bază de Declarație Lunară (Declaration Policy)",
      },
      {
        label: "Stocuri perisabile la temperatură controlată (camere frigorifice)",
        riskTriggered: "Alterarea mărfii în caz de pană a compresorului sau scurgere de freon.",
        recommendedPolicy: "Deterioration of Stock in Cold Storage (Alterarea Mărfurilor în Frigidere)",
      },
      {
        label: "Stocuri constante de volum mediu",
        riskTriggered: "Incendiu, inundație din conducte, furt prin efracție.",
        recommendedPolicy: "Asigurarea Stocurilor de Marfă la Preț de Achiziție / Producție",
      },
      {
        label: "Nu deținem stocuri de marfă",
      },
    ],
  },
  // 4
  {
    id: "q4_interruption",
    category: "Continuitatea Afacerii",
    text: "4. Ce se întâmplă dacă locația principală devine neutilizabilă timp de 3-6 luni din cauza unui incendiu sau inundații?",
    explanation: "Peste 40% din companiile fără asigurare de profit dau faliment în lunile de după un sinistru.",
    options: [
      {
        label: "Am intra în colaps financiar dacă am opri activitatea chiar și o lună",
        riskTriggered: "Cheltuielile fixe (salarii, chirii, rate de leasing) continuă fără venituri operaționale.",
        recommendedPolicy: "Business Interruption (Pierderea de Profit din Exploatare pe 12 luni)",
      },
      {
        label: "Am putea reloca parțial operațiunile, dar cu cheltuieli suplimentare masive",
        riskTriggered: "Costuri mari de închiriere spații temporare, subcontractare de urgență.",
        recommendedPolicy: "Business Interruption — Clauza de Costuri Suplimentare de Lucru (ICOW)",
      },
      {
        label: "Lucrăm 100% digital și putem continua de la distanță a doua zi",
        riskTriggered: "Expunere redusă la oprire fizică, dar expunere critică la indisponibilitate cloud.",
        recommendedPolicy: "Cyber Business Interruption",
      },
    ],
  },
  // 5
  {
    id: "q5_visitors",
    category: "Clienți & Vizitatori",
    text: "5. În spațiul companiei intră frecvent clienți, pacienți, curieri sau public larg?",
    explanation: "Accidentele vizitatorilor în incintă cad în răspunderea directă a firmei tale.",
    options: [
      {
        label: "Da, sute de cumpărători sau oaspeți zilnic (magazin, restaurant, hotel, clinică)",
        riskTriggered: "Alunecări pe podea umedă, căderi de obiecte, toxiinfecții alimentare.",
        recommendedPolicy: "Răspundere Civilă Generală (RCG) cu limită extinsă de minimum 500.000 EUR",
      },
      {
        label: "Ocazional, doar parteneri de afaceri și curieri la birou",
        riskTriggered: "Accidente minore ale vizitatorilor în recepție sau pe scări.",
        recommendedPolicy: "Răspundere Civilă Generală Terți de bază",
      },
      {
        label: "Nu intră niciun vizitator din exterior în sediu",
      },
    ],
  },
  // 6
  {
    id: "q6_product_defect",
    category: "Produse Fabricate & Import",
    text: "6. Fabricați, ambalați sau importați bunuri fizice din afara Uniunii Europene?",
    explanation: "Conform Legii 240/2004, importatorul non-UE este asimilat legal producătorului direct.",
    options: [
      {
        label: "Da, importăm bunuri de consum din afara UE (China, Turcia etc.)",
        riskTriggered: "Răspundere juridică directă pentru vătămările sau incendiile cauzate de bunurile defecte.",
        recommendedPolicy: "Răspunderea Producătorului (Product Liability) extinsă pentru calitatea de importator",
      },
      {
        label: "Da, fabricăm produse finite în fabrica proprie",
        riskTriggered: "Loturi neconforme, piese defecte, vătămări ale utilizatorilor finali.",
        recommendedPolicy: "Product Liability cu clauză de Rechemare de Produse (Product Recall)",
      },
      {
        label: "Distribuim exclusiv produse fabricate în interiorul Uniunii Europene",
        riskTriggered: "Răspundere comercială atenuată, producătorul european poartă sarcina principală.",
      },
      {
        label: "Prestăm exclusiv servicii, nu vindem produse fizice",
      },
    ],
  },
  // 7
  {
    id: "q7_professional_services",
    category: "Servicii Intelectuale & IT",
    text: "7. Oferiți consultanță, dezvoltare software, proiectare tehnică sau servicii contabile?",
    explanation: "O greșeală de cod sau un calcul fiscal eronat generează pierderi financiare pure clienților.",
    options: [
      {
        label: "Dezvoltare software, SaaS, aplicații mobile sau servicii IT la comandă",
        riskTriggered: "Bug-uri critice, eșec SLA, indisponibilitate aplicații, breșe de securitate.",
        recommendedPolicy: "Tech E&O (Technology Errors and Omissions) cu acoperire internațională",
      },
      {
        label: "Contabilitate, expertiză fiscală, audit financiar",
        riskTriggered: "Calcul eronat taxe, penalități ANAF imputate de clienți, termene depășite.",
        recommendedPolicy: "Răspundere Profesională Contabil/Auditor peste plafonul minim CECCAR",
      },
      {
        label: "Arhitectură, proiectare structurală, inginerie instalații",
        riskTriggered: "Erori în planșele de execuție, vicii de proiectare, carotări suplimentare.",
        recommendedPolicy: "Răspundere Profesională Arhitecți și Ingineri Proiectanți",
      },
      {
        label: "Consultanță de management, marketing sau HR",
        riskTriggered: "Litigii contractuale privind neatingerea indicatorilor de performanță.",
        recommendedPolicy: "Professional Indemnity pentru Consultanță de Afaceri",
      },
      {
        label: "Nu oferim servicii de consultanță sau IT",
      },
    ],
  },
  // 8
  {
    id: "q8_data_cyber",
    category: "Securitate Cibernetică",
    text: "8. Ce măsuri de securitate cibernetică aveți implementate pentru conturile de email și servere?",
    explanation: "Polițele Cyber impun cerințe stricte; lipsa MFA poate invalida complet despăgubirea.",
    options: [
      {
        label: "Nu avem MFA activat peste tot și backup-urile sunt pe același server/cloud conectat permanent",
        riskTriggered: "Vulnerabilitate extremă la ransomware; risc de neeligibilitate pentru asigurare Cyber!",
        missingInfoNotice: "Este urgentă activarea MFA și izolarea unui backup offline.",
      },
      {
        label: "Avem MFA obligatoriu, backup-uri izolate și soluție antivirus/EDR centralizată",
        riskTriggered: "Nivel bun de protecție tehnică; eligibilitate optimă pentru tarife preferențiale.",
        recommendedPolicy: "Poliță completă Cyber Risk & Data Breach (Forensics + Notificare GDPR + Cyber BI)",
      },
      {
        label: "Stocăm date extrem de sensibile (date medicale pacienți, carduri bancare, date biometrice)",
        riskTriggered: "Sancțiuni maxime conform GDPR (până la 4% din cifra de afaceri) și Directiva NIS 2.",
        recommendedPolicy: "Cyber Risk cu limite mari de Third-Party Liability și asistență juridică GDPR",
      },
    ],
  },
  // 9
  {
    id: "q9_employees",
    category: "Angajați & SSM",
    text: "9. Câți salariați aveți și în ce mediu își desfășoară aceștia activitatea?",
    explanation: "Accidentele de muncă atrag regresul Casei de Sănătate împotriva angajatorului.",
    options: [
      {
        label: "Peste 10 angajați în medii cu risc fizic ridicat (construcții, fabrică, depozit, teren)",
        riskTriggered: "Accidente grave de muncă, acțiuni în regres CNAS pentru spitalizare, daune morale.",
        recommendedPolicy: "Răspunderea Civilă a Angajatorului (Employers' Liability) + Asigurare de Accidente",
      },
      {
        label: "Echipă numeroasă de birou (IT, servicii, corporate)",
        riskTriggered: "Presiune pe retenție, concedii medicale, așteptare de beneficii competitive.",
        recommendedPolicy: "Asigurare Privată de Sănătate de Grup (deductibilă 400 EUR/an per salariat)",
      },
      {
        label: "Sub 5 salariați cu activități de birou",
        riskTriggered: "Expunere SSM redusă, dar util un pachet simplu de accidente de grup.",
      },
      {
        label: "Fără angajați (doar asociați / administratori)",
      },
    ],
  },
  // 10
  {
    id: "q10_fleet",
    category: "Flotă & Transport",
    text: "10. Operați o flotă de autovehicule sau camioane pentru activitatea firmei?",
    explanation: "Parcurile auto comerciale necesită gestionare unificată pentru a preveni vehicule neasigurate.",
    options: [
      {
        label: "Flotă de camioane de mare tonaj pentru transport rutier de marfă",
        riskTriggered: "Accidente pe autostrăzi externe, furt de marfă din parcare, avarii frigorifice.",
        recommendedPolicy: "Polițe CMR internaționale cu clauze speciale + CASCO Flotă cu tractare externă",
      },
      {
        label: "Flotă de autoutilitare de distribuție / curierat urban",
        riskTriggered: "Daunalitate ridicată din cauza traficului aglomerat, tamponări repetate.",
        recommendedPolicy: "Contract de Flotă RCA & CASCO cu decontare directă și reparații rapide",
      },
      {
        label: "Parc de autoturisme pentru agenți de vânzări / management",
        riskTriggered: "Imobilizarea agenților pe durata reparațiilor.",
        recommendedPolicy: "CASCO Flotă cu clauză de mașină la schimb (Replacement Car)",
      },
      {
        label: "Nu deținem vehicule în patrimoniul firmei",
      },
    ],
  },
  // 11
  {
    id: "q11_transport_cargo",
    category: "Tranzit Mărfuri",
    text: "11. Transportați mărfuri de mare valoare cu propriile vehicule sau cărăuși terți?",
    explanation: "Polița cărăușului CMR despăgubește doar ~10-12 EUR/kg, lăsând diferența pe umerii tăi.",
    options: [
      {
        label: "Da, transportăm mărfuri scumpe și ușoare (electronice, textile, cafea, băuturi fine)",
        riskTriggered: "Limita standard CMR de 8.33 DST/kg nu acoperă nici 10% din valoarea reală a mărfii furate sau distruse!",
        recommendedPolicy: "Poliță CARGO încheiată de proprietar (Toate Riscurile la 110% din valoarea CIF)",
      },
      {
        label: "Transportăm mărfuri industriale grele și voluminoase",
        riskTriggered: "Răsturnare, ancorare defectuoasă, umezire în timpul transportului.",
        recommendedPolicy: "Asigurare CARGO sau extindere CMR adecvată",
      },
      {
        label: "Nu transportăm mărfuri",
      },
    ],
  },
  // 12
  {
    id: "q12_construction_contracts",
    category: "Construcții & Instalații",
    text: "12. Derulați lucrări de construcții, instalații sanitare/electrice sau amenajări?",
    explanation: "Șantierele implică răspundere severă conform Legii 10/1995 și contractelor FIDIC.",
    options: [
      {
        label: "Da, suntem antreprenor general sau constructor pe șantiere de clădiri/infrastructură",
        riskTriggered: "Prăbușire structură, infiltrații, surpări de teren, fisurare case vecine.",
        recommendedPolicy: "Contractor's All Risks (CAR) Secțiunea I + II cu includerea beneficiarului ca asigurat",
      },
      {
        label: "Firme de instalații electrice, sanitare, HVAC sau hidroizolații",
        riskTriggered: "Incendiu la lucrări cu foc deschis (lipire membrane), conducte sparte sub presiune.",
        recommendedPolicy: "Răspunderea Civilă a Instalatorului / Subcontractorului",
      },
      {
        label: "Nu activăm în construcții",
      },
    ],
  },
  // 13
  {
    id: "q13_surety",
    category: "Garanții & Licitații",
    text: "13. Participați la licitații publice (SEAP) sau vi se cer garanții de bună execuție?",
    explanation: "Garanțiile bancare blochează cash-ul firmei; garanțiile de asigurare lasă banii liberi.",
    options: [
      {
        label: "Da, participăm frecvent la licitații publice SEAP și avem contracte cu statul",
        riskTriggered: "Blocarea banilor în depozite bancare de garanție sau riscul neconstituirii la timp.",
        recommendedPolicy: "Plafon de Garanții de Asigurare (Bid Bond, Performance Bond, Advance Payment)",
      },
      {
        label: "Semnăm contracte comerciale mari private unde beneficiarul cere garanții",
        riskTriggered: "Scăderea liniilor de credit bancare din cauza scrisorilor de garanție.",
        recommendedPolicy: "Garanții Contractuale de Bună Execuție prin Asigurare (Surety Bonds)",
      },
      {
        label: "Nu ni se solicită garanții contractuale",
      },
    ],
  },
  // 14
  {
    id: "q14_export",
    category: "Piețe Externe & Export",
    text: "14. Livrați mărfuri sau servicii către clienți din afara României (UE sau SUA/Canada)?",
    explanation: "Jurisdicțiile străine pot refuza acoperirea pe polițe locale dacă lipsește extinderea teritorială.",
    options: [
      {
        label: "Da, exportăm bunuri sau software în SUA / Canada",
        riskTriggered: "Litigii cu daune punitive de milioane de dolari; excludere automată pe polițe standard!",
        recommendedPolicy: "Polițe de Răspundere cu Extindere Teritorială și Jurisdicțională explicită USA/Canada",
      },
      {
        label: "Livrăm pe piața unică a Uniunii Europene",
        riskTriggered: "Cerințe stricte de asigurare din partea marilor parteneri germani sau francezi.",
        recommendedPolicy: "Polițe cu teritorialitate Worldwide excl. USA/Canada",
      },
      {
        label: "Activăm exclusiv pe teritoriul României",
      },
    ],
  },
  // 15
  {
    id: "q15_credit_risk",
    category: "Termene de Plată B2B",
    text: "15. Vindeți mărfuri sau servicii cu termen de plată (pe credit comercial la 30-90 zile)?",
    explanation: "Insolvența unui client important poate trage compania într-un faliment în lanț.",
    options: [
      {
        label: "Da, avem clienți B2B cărora le acordăm linii mari de credit comercial",
        riskTriggered: "Falimentul partenerului lasă firma cu creanțe nerecuperate și TVA necompensat.",
        recommendedPolicy: "Asigurarea Creditului Comercial (Trade Credit Insurance — acoperire 90%)",
      },
      {
        label: "Încasăm exclusiv cu plata pe loc, avans 100% sau ramburs la livrare",
        riskTriggered: "Risc de credit inexistent; nu este necesară asigurarea creanțelor.",
      },
    ],
  },
  // 16
  {
    id: "q16_management_liability",
    category: "Răspunderea Conducerii",
    text: "16. Compania are asociați minoritari, investitori externi sau credite bancare mari?",
    explanation: "Administratorul răspunde cu patrimoniul personal conform Legii 31/1990 și Legii 85/2014.",
    options: [
      {
        label: "Da, avem acționari/asociați externi, fonduri de investiții sau credite bancare de investiții",
        riskTriggered: "Atragerea răspunderii patrimoniale personale a administratorului în caz de litigii sau insolvență.",
        recommendedPolicy: "D&O (Directors & Officers Liability — Protecția averii personale a managerilor)",
      },
      {
        label: "Sunt asociat unic și administrator unic fără datorii mari bancare",
        riskTriggered: "Expunere internă redusă, însă riscul acțiunii lichidatorului judiciar rămâne.",
        recommendedPolicy: "D&O de bază recomandat la creșterea volumului de afaceri",
      },
    ],
  },
  // 17
  {
    id: "q17_solar_environment",
    category: "Energie & Mediu",
    text: "17. Dețineți panouri fotovoltaice industriale sau stocați substanțe chimice/combustibili?",
    explanation: "Grindina și scurgerile poluante atrag costuri imediate de decontaminare cerute de autorități.",
    options: [
      {
        label: "Avem panouri fotovoltaice montate pe acoperișul halei sau parc la sol",
        riskTriggered: "Grindină, microfisuri, arcuri electrice, pierdere de venit din nerealizarea producției.",
        recommendedPolicy: "Solar PV All Risks + Pierdere de Venit (Loss of Revenue)",
      },
      {
        label: "Stocăm rezervoare de carburant, solvenți, vopsele sau deșeuri industriale",
        riskTriggered: "Poluare accidentală a solului/pânzei freatice, amenzi de mediu, costuri de decontaminare.",
        recommendedPolicy: "Environmental Impairment Liability (Asigurare de Mediu / Poluare Accidentală)",
      },
      {
        label: "Niciuna dintre cele de mai sus",
      },
    ],
  },
];

export default function RiskEvaluationTool() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showSummary, setShowSummary] = useState(false);

  const currentQ = QUESTIONS[currentIdx];
  const totalQuestions = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;

  function handleSelect(optionIdx: number) {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: optionIdx }));
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowSummary(true);
    }
  }

  function handlePrev() {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  }

  function handleRestart() {
    setAnswers({});
    setCurrentIdx(0);
    setShowSummary(false);
  }

  // Aggregate findings
  const triggeredRisks: string[] = [];
  const recommendedPolicies: string[] = [];
  const missingNotices: string[] = [];

  QUESTIONS.forEach((q) => {
    const selectedIdx = answers[q.id];
    if (selectedIdx !== undefined) {
      const opt = q.options[selectedIdx];
      if (opt.riskTriggered) triggeredRisks.push(opt.riskTriggered);
      if (opt.recommendedPolicy && !recommendedPolicies.includes(opt.recommendedPolicy)) {
        recommendedPolicies.push(opt.recommendedPolicy);
      }
      if (opt.missingInfoNotice) missingNotices.push(opt.missingInfoNotice);
    }
  });

  const prefillMessage = `Evaluare risc finalizată (${answeredCount} răspunsuri). Vulnerabilități identificate: ${triggeredRisks
    .slice(0, 3)
    .join("; ")}. Polițe recomandate: ${recommendedPolicies.slice(0, 3).join("; ")}.`;

  const prefillUrl = `/asigurari?ajutor=oferta&tip=pj&mesaj=${encodeURIComponent(prefillMessage)}`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/afaceri"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Înapoi la hub-ul Protecția Afacerii
      </Link>

      <div className="mt-6">
        <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
          Instrument Interactiv de Diagnostic
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Ce Riscuri Are Afacerea Mea?
        </h1>
        <p className="mt-3 text-base text-muted">
          Răspunde la 17 întrebări structurate pentru a cartografia vulnerabilitățile operaționale, fizice, financiare, contractuale și cibernetice ale firmei tale.
        </p>
      </div>

      {!showSummary ? (
        <div className="mt-10 rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-10">
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Pasul {currentIdx + 1} din {totalQuestions}: {currentQ.category}
            </span>
            <span className="text-xs font-medium text-muted">
              {Math.round(((currentIdx + 1) / totalQuestions) * 100)}% parcurs
            </span>
          </div>

          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-wash">
            <div
              className="h-full bg-brand transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">{currentQ.text}</h2>
            <p className="mt-2 text-xs text-muted leading-relaxed">{currentQ.explanation}</p>
          </div>

          {/* Options */}
          <div className="mt-6 space-y-3">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = answers[currentQ.id] === optIdx;
              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelect(optIdx)}
                  className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? "border-brand bg-brand/5 shadow-2xs"
                      : "border-line bg-white hover:border-slate-400 hover:bg-wash/50"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                      isSelected
                        ? "border-brand bg-brand text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-ink">{opt.label}</p>
                    {opt.riskTriggered && (
                      <p className="mt-1 text-xs text-muted">
                        <strong className="text-slate-700">Risc asociat: </strong>
                        {opt.riskTriggered}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between border-t border-line/60 pt-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink disabled:opacity-30"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Întrebarea precedentă
            </button>

            {answers[currentQ.id] !== undefined && (
              <button
                type="button"
                onClick={() => {
                  if (currentIdx < totalQuestions - 1) {
                    setCurrentIdx(currentIdx + 1);
                  } else {
                    setShowSummary(true);
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2 text-xs font-semibold text-white hover:bg-brand"
              >
                {currentIdx < totalQuestions - 1 ? "Următoarea întrebare" : "Vezi rezultatele"}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Detailed Results Summary */
        <div className="mt-10 space-y-8">
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-10 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
              <div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  Diagnostic Finalizat
                </span>
                <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
                  Harta Riscurilor Identificate pentru Afacerea Ta
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Pe baza celor 17 răspunsuri furnizate, iată vulnerabilitățile critice și programul de protecție recomandat:
                </p>
              </div>

              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink hover:border-brand"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reia chestionarul
              </button>
            </div>

            {/* Warnings / Missing critical items */}
            {missingNotices.length > 0 && (
              <div className="mt-8 rounded-2xl border border-red-200 bg-red-50/50 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-red-950">
                  <AlertTriangle className="h-5 w-5 text-brand" />
                  <h3>Atenționări Critice de Securitate</h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-red-900">
                  {missingNotices.map((n, i) => (
                    <li key={i}>• {n}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Vulnerabilități detectate */}
            <div className="mt-8">
              <h3 className="text-base font-bold text-ink flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-brand" />
                Vulnerabilități operaționale și financiare detectate ({triggeredRisks.length}):
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {triggeredRisks.map((risk, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-wash p-3.5 text-xs text-ink">
                    <span className="font-bold text-brand">•</span>
                    <span>{risk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Polițe recomandate */}
            <div className="mt-10 border-t border-line/60 pt-8">
              <h3 className="text-base font-bold text-ink flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Programul de polițe recomandat pentru profilul tău ({recommendedPolicies.length}):
              </h3>
              <div className="mt-4 space-y-3">
                {recommendedPolicies.map((pol, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-line/70 bg-white p-4"
                  >
                    <span className="text-sm font-bold text-ink">{pol}</span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 shrink-0">
                      Recomandat strategic
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note regarding risk scores */}
            <div className="mt-8 rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-muted border border-slate-200">
              <strong className="text-slate-800">Notă de etică profesională: </strong>
              Help Insurance Desk nu inventează scoruri procentuale arbitrare de risc (de tip &bdquo;78% risc&rdquo;). Riscurile comerciale reale se evaluează pe baza valorii activelor, a contractelor semnate și a normativelor specifice industriei.
            </div>
          </div>

          {/* Help Desk Prefill Box */}
          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Pasul Următor Recomandat
              </span>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                Continuă cu această evaluare direct în asistent
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Toate răspunsurile și vulnerabilitățile identificate mai sus sunt transmise securizat în asistent pentru a primi îndrumare personalizată și recomandări adaptate din oferta Generali.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href={prefillUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
                >
                  Deschide Asistentul cu rezultatele evaluării
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
                >
                  Reevaluează de la început
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
