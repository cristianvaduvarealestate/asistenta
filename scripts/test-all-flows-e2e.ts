import { saveRequestAndNotify } from "../src/lib/requests";
import Database from "better-sqlite3";
import { getDbPath } from "../src/lib/db";
import { isValidEmail, isValidPhone, isFlowId } from "../src/lib/validation";

interface TestResult {
  name: string;
  passed: boolean;
  requestId?: string;
  error?: string;
  details?: Record<string, unknown>;
}

async function runAllFlowTests(): Promise<void> {
  console.log("=== ÎNCEPERE TESTARE COMPLETĂ FLUXURI: ASIGURĂRI (PF & PJ) + IMOBILIARE ===");
  const results: TestResult[] = [];
  const db = new Database(getDbPath());

  // 1. FLUXURI ASIGURĂRI PERSOANE FIZICE (PF) - 6 FLUXURI
  const pfFlows = [
    {
      flow: "oferta",
      category: "CASCO & RCA",
      message: "Doresc ofertă comparativă CASCO pentru autoturism nou an 2024.",
      payload: { vehicle: "Volkswagen Tiguan 2024", usage: "Personal", estimatedValue: "32000 EUR" }
    },
    {
      flow: "aminteste",
      category: "RCA",
      message: "Vreau alertă înainte de expirarea poliței RCA.",
      payload: { policyType: "RCA", expiryDate: "2026-12-20", offsets: [30, 15, 7] },
      reminder: { policyType: "RCA", expiryDate: "2026-12-20", offsets: [30, 15, 7], deliveryChannel: "phone" as const }
    },
    {
      flow: "explica",
      category: "Locuință",
      message: "Nu înțeleg diferența dintre franșiza deductibilă și cea atinsă din polița facultativă.",
      payload: { policyNumber: "FAC-12345-BUC", clauseQueried: "Franșiză daune apă" }
    },
    {
      flow: "acoperire",
      category: "Bunuri & Răspundere",
      message: "Dacă s-a spart o țeavă și am inundat vecinul, polița mea de locuință acoperă reparațiile lui?",
      payload: { incident: "Inundație apartament vecin", damagesEstimated: "5000 RON" }
    },
    {
      flow: "nevoi",
      category: "Familie & Sănătate",
      message: "Avem un copil mic și dorim o evaluare pentru o asigurare de sănătate și viață.",
      payload: { familyMembers: 3, priorities: ["Spitalizare privată", "Intervenții chirurgicale", "Economisire"] }
    },
    {
      flow: "dauna",
      category: "Auto",
      message: "Am fost lovit în parcare, autorul e necunoscut. Ce pași trebuie să urmez pe CASCO?",
      payload: { dateOfEvent: "2026-11-14", eventType: "Avarie parcare autor necunoscut", policeReport: true }
    }
  ];

  for (const pf of pfFlows) {
    try {
      const res = await saveRequestAndNotify({
        flow: pf.flow as any,
        customerType: "pf",
        fullName: `Client PF ${pf.flow.toUpperCase()}`,
        phone: "0721111222",
        email: `client.pf.${pf.flow}@example.ro`,
        category: pf.category,
        message: pf.message,
        payload: pf.payload,
        reminder: pf.reminder,
        privacyAck: true,
        marketingConsent: false
      });
      const saved = db.prepare("SELECT id, customer_type, flow, payload FROM requests WHERE id = ?").get(res.id) as any;
      const pass = Boolean(saved && saved.customer_type === "pf" && saved.flow === pf.flow);
      results.push({
        name: `PF Flow: ${pf.flow} (${pf.category})`,
        passed: pass,
        requestId: res.id,
        details: JSON.parse(saved.payload)
      });
    } catch (e: any) {
      results.push({ name: `PF Flow: ${pf.flow}`, passed: false, error: e.message });
    }
  }

  // 2. FLUXURI ASIGURĂRI PERSOANE JURIDICE (PJ) - 6 FLUXURI
  const pjFlows = [
    {
      flow: "oferta",
      category: "Răspundere Profesională IT",
      activity: "Servicii IT, software și securitate cibernetică",
      companyName: "SC DevCode Solutions SRL",
      employeeCount: "10-49",
      message: "Doresc ofertă pachet E&O (Errors & Omissions) și Cyber Risk pentru contracte internaționale.",
      payload: { turnover: "2.5M EUR", exportMarkets: "UE și Marea Britanie", subcontracts: true }
    },
    {
      flow: "aminteste",
      category: "Poliță CAR (Construcții)",
      activity: "Construcții și dezvoltări imobiliare",
      companyName: "SC Structuri Rezistente SRL",
      employeeCount: "50-249",
      message: "Notificare expirare poliță de șantier pentru ansamblul rezidențial Floreasca.",
      payload: { siteName: "Ansamblu Rezidențial Floreasca", policyType: "CAR", expiryDate: "2027-01-15" },
      reminder: { policyType: "CAR Constructii", expiryDate: "2027-01-15", offsets: [30, 15, 1], deliveryChannel: "email" as const }
    },
    {
      flow: "explica",
      category: "Business Interruption",
      activity: "Producție industrială și prelucrare",
      companyName: "SC Confectii Metalice SA",
      employeeCount: "50-249",
      message: "Avem nevoie de clarificarea perioadei de indemnizație de 12 vs 24 luni la pierderea de profit.",
      payload: { indemnityPeriodQueried: "18 luni", fixedCostsPerMonth: "45000 EUR" }
    },
    {
      flow: "acoperire",
      category: "Răspundere Producător",
      activity: "Producție bunuri de larg consum și ambalaje",
      companyName: "SC EcoPlast Distribution SRL",
      employeeCount: "10-49",
      message: "Un lot de ambalaje a prezentat defecte la clientul final. Este acoperită retragerea de pe piață?",
      payload: { recallRisk: true, affectedBatchCount: 15000, claimNoticeReceived: false }
    },
    {
      flow: "nevoi",
      category: "Audit de Riscuri HoReCa",
      activity: "HoReCa, restaurante, hoteluri și evenimente",
      companyName: "SC Gourmet Hospitality SRL",
      employeeCount: "10-49",
      message: "Deschidem a treia locație de restaurant și vrem o evaluare a riscurilor comerciale și patrimoniale.",
      payload: { locations: 3, seatingCapacity: 280, terraceSummer: true, deliveryFleet: 4 }
    },
    {
      flow: "dauna",
      category: "Daună Transport CMR",
      activity: "Transport și logistică de marfă",
      companyName: "SC EuroCargo Logistics SRL",
      employeeCount: "50-249",
      message: "Un camion frigorific a suferit o defecțiune la agregat în Ungaria. Marfa perisabilă este compromisă.",
      payload: { incidentLocation: "M1 Ungaria", cargoType: "Produse lactate refrigerate", cargoValue: "68000 EUR" }
    }
  ];

  for (const pj of pjFlows) {
    try {
      const res = await saveRequestAndNotify({
        flow: pj.flow as any,
        customerType: "pj",
        fullName: `Manager ${pj.companyName}`,
        phone: "0733333444",
        email: `contact@${pj.companyName.toLowerCase().replace(/[^a-z]/g, "")}.ro`,
        companyName: pj.companyName,
        activity: pj.activity,
        employeeCount: pj.employeeCount,
        category: pj.category,
        message: pj.message,
        payload: pj.payload,
        reminder: pj.reminder,
        privacyAck: true,
        marketingConsent: true
      });
      const saved = db.prepare("SELECT id, customer_type, company_name, activity, payload FROM requests WHERE id = ?").get(res.id) as any;
      const pass = Boolean(saved && saved.customer_type === "pj" && saved.company_name === pj.companyName);
      results.push({
        name: `PJ Flow: ${pj.flow} (${pj.activity})`,
        passed: pass,
        requestId: res.id,
        details: JSON.parse(saved.payload)
      });
    } catch (e: any) {
      results.push({ name: `PJ Flow: ${pj.flow}`, passed: false, error: e.message });
    }
  }

  // 3. FLUXURI IMOBILIARE (4 TRANZACȚII: CUMPĂRARE, VÂNZARE, ÎNCHIRIERE, INVESTIȚIE)
  const reFlows = [
    {
      name: "Imobiliare: Cumpărare Apartament",
      customerType: "pf" as const,
      fullName: "Dan Georgescu",
      phone: "0744555666",
      email: "dan.georgescu@example.com",
      category: "IMOBILIARE",
      message: "Tranzacție: Cumpărare | Proprietate: Apartament | Buget: 200k-250k EUR",
      payload: {
        transactionType: "cumpar",
        propertyType: "apartament",
        location: "București, zona Herăstrău / Aviatorilor",
        budget: "200.000 - 250.000 EUR",
        timeline: "1-3 luni",
        details: "Etaj 2-4, bloc după 2015, parcare inclusă."
      }
    },
    {
      name: "Imobiliare: Vânzare Vilă",
      customerType: "pf" as const,
      fullName: "Cornel Vasilescu",
      phone: "0766777888",
      email: "cornel.vasilescu@example.com",
      category: "IMOBILIARE",
      message: "Tranzacție: Vânzare | Proprietate: Vilă | Pipera",
      payload: {
        transactionType: "vand",
        propertyType: "vila",
        location: "Ilfov, Pipera / Voluntari",
        budget: "550.000 EUR",
        timeline: "Urgent (1 lună)",
        details: "Suprafață utilă 280 mp, teren 600 mp, piscină, recepție 2021."
      }
    },
    {
      name: "Imobiliare: Închiriere Spațiu Comercial",
      customerType: "pj" as const,
      companyName: "SC Retail Prime Stores SRL",
      activity: "Retail și comerț",
      fullName: "Raluca Teodorescu",
      phone: "0722888999",
      email: "raluca@retailprime.ro",
      category: "IMOBILIARE",
      message: "Tranzacție: Închiriere | Proprietate: Spațiu Comercial | Piața Victoriei",
      payload: {
        transactionType: "inchiriez",
        propertyType: "comercial",
        location: "București, Bulevardul Aviatorilor / Victoriei",
        budget: "3.500 - 5.000 EUR/lună",
        timeline: "2-4 luni",
        details: "Vitrină stradală minim 8m, flux pietonal ridicat, branșament trifazic."
      }
    },
    {
      name: "Imobiliare: Investiție Dubai / Randament",
      customerType: "pf" as const,
      fullName: "Bogdan Stanciu",
      phone: "0755999000",
      email: "bogdan.stanciu@invest-capital.ro",
      category: "IMOBILIARE",
      message: "Tranzacție: Investiție | Proprietate: Apartament Off-plan Dubai",
      payload: {
        transactionType: "investitie",
        propertyType: "apartament",
        location: "Dubai, Downtown / Business Bay",
        budget: "350.000 - 500.000 USD",
        timeline: "Flexibil",
        details: "Plan de plată flexibil pe durata construcției, randament estimat 7-8% net."
      }
    }
  ];

  for (const re of reFlows) {
    try {
      const res = await saveRequestAndNotify({
        flow: "imobiliare",
        customerType: re.customerType,
        fullName: re.fullName,
        phone: re.phone,
        email: re.email,
        companyName: (re as any).companyName,
        activity: (re as any).activity,
        category: re.category,
        message: re.message,
        payload: re.payload,
        privacyAck: true,
        marketingConsent: true
      });
      const saved = db.prepare("SELECT id, customer_type, flow, category, payload FROM requests WHERE id = ?").get(res.id) as any;
      const pass = Boolean(saved && saved.flow === "imobiliare" && saved.category === "IMOBILIARE");
      results.push({
        name: re.name,
        passed: pass,
        requestId: res.id,
        details: JSON.parse(saved.payload)
      });
    } catch (e: any) {
      results.push({ name: re.name, passed: false, error: e.message });
    }
  }

  // 4. TESTARE VALIDĂRI ȘI MECANISME DE SECURITATE
  const validationTests = [
    {
      name: "Validare: Telefon invalid respins",
      test: () => !isValidPhone("12345") && !isValidPhone("abcdef") && isValidPhone("0767110439")
    },
    {
      name: "Validare: Email invalid respins",
      test: () => !isValidEmail("adresa-gresita") && !isValidEmail("fara@domeniu") && isValidEmail("valid@exemplu.ro")
    },
    {
      name: "Validare: FlowId 'imobiliare' recunoscut",
      test: () => isFlowId("imobiliare") && isFlowId("oferta") && !isFlowId("hack_flow")
    }
  ];

  for (const vt of validationTests) {
    const pass = vt.test();
    results.push({ name: vt.name, passed: pass });
  }

  // AFISARE REZULTATE
  console.log("\n=== REZULTATE TESTARE FLUXURI & PERSISTENȚĂ ===");
  console.table(
    results.map((r) => ({
      Test: r.name,
      Status: r.passed ? "✓ PASS" : "✗ FAIL",
      ID: r.requestId || "-",
      Detalii: r.details ? JSON.stringify(r.details).slice(0, 50) + "..." : r.error || "OK"
    }))
  );

  const allPassed = results.every((r) => r.passed);
  console.log(`\nTOTAL TESTE: ${results.length} | TRECUTE: ${results.filter((r) => r.passed).length} | EȘUATE: ${results.filter((r) => !r.passed).length}`);
  if (!allPassed) {
    process.exit(1);
  }
}

runAllFlowTests().catch((e) => {
  console.error("FATAL ERROR IN TEST SUITE:", e);
  process.exit(1);
});
