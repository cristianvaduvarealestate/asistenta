import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { POST } from "../src/app/api/requests/route";
import { NextRequest } from "next/server";

async function runFallbackTests() {
  console.log("=== TESTARE E2E: CONTAINER CONVERSIE ASIGURĂRI & FALLBACK ARCHITECTURE ===");

  // 1. Verificare integritate structurală componentă
  console.log("\n1. Verificare integritate cod sursă InsuranceConversionContainer.tsx...");
  const containerCode = fs.readFileSync(
    path.join(process.cwd(), "src/components/help-desk/InsuranceConversionContainer.tsx"),
    "utf8"
  );

  assert(containerCode.includes("HelpDeskErrorBoundary"), "Lipsă Error Boundary în container");
  assert(containerCode.includes("ssr: false"), "HelpDeskApp nu este importat cu ssr: false");
  assert(containerCode.includes("4000"), "Timeout-ul de 4 secunde lipsește");
  assert(containerCode.includes("StreamlinedFallbackForm"), "Lipsă formular fallback direct");
  assert(containerCode.includes("<noscript>"), "Lipsă container noscript");
  assert(containerCode.includes('action="/api/requests"'), "Formularul noscript nu are action=/api/requests");
  assert(containerCode.includes('method="POST"'), "Formularul noscript nu are method=POST");
  assert(!containerCode.includes('name="cnp"') && !containerCode.includes("id=\"cnp\""), "Formularul solicită câmp CNP");
  assert(containerCode.includes("phoneDisplay") || containerCode.includes("0767"), "Lipsește numărul de telefon direct");
  assert(containerCode.includes("whatsappDisplay") || containerCode.includes("43650"), "Lipsește numărul de WhatsApp direct");
  console.log("✓ Structura componentei validează toate cele 10 cerințe de reziliență");

  // 2. Testare formular no-JS (HTML standard POST cu application/x-www-form-urlencoded)
  console.log("\n2. Testare trimitere formular nativ no-JS (URL-encoded)...");

  // Scenariu A: Trimitere validă PF
  const validPfParams = new URLSearchParams({
    flow: "oferta",
    customerType: "pf",
    fullName: "Ion Testeanu",
    phone: "0767110439",
    email: "ion.testeanu@exemplu.ro",
    category: "Auto CASCO & RCA",
    message: "Doresc ofertă CASCO pentru autoturism 2022",
    privacyAck: "on",
    website: "",
  });

  const reqHtmlPf = new NextRequest("http://127.0.0.1:3010/api/requests", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-synthetic-test": "true",
    },
    body: validPfParams.toString(),
  });

  const resHtmlPf = await POST(reqHtmlPf);
  assert.equal(resHtmlPf.status, 303, "Trimiterea no-JS PF trebuie să returneze redirect 303");
  const locPf = resHtmlPf.headers.get("location") || "";
  assert(locPf.includes("trimis=succes"), `Redirectul trebuie să conțină trimis=succes, primit: ${locPf}`);
  console.log("✓ Submisie nativă no-JS PF procesată cu succes (Redirect 303 la trimis=succes)");

  // Scenariu B: Trimitere validă PJ (Companie)
  const validPjParams = new URLSearchParams({
    flow: "oferta",
    customerType: "pj",
    fullName: "Elena Popa",
    companyName: "SC Logistic Expres SRL",
    phone: "+40722123456",
    email: "office@logisticexpres.ro",
    category: "Afaceri & Răspunderi Comerciale",
    message: "Flotă 5 autoutilitare",
    privacyAck: "on",
    website: "",
  });

  const reqHtmlPj = new NextRequest("http://127.0.0.1:3010/api/requests", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-synthetic-test": "true",
    },
    body: validPjParams.toString(),
  });

  const resHtmlPj = await POST(reqHtmlPj);
  assert.equal(resHtmlPj.status, 303, "Trimiterea no-JS PJ trebuie să returneze redirect 303");
  const locPj = resHtmlPj.headers.get("location") || "";
  assert(locPj.includes("trimis=succes"), `Redirectul PJ trebuie să conțină trimis=succes, primit: ${locPj}`);
  console.log("✓ Submisie nativă no-JS PJ procesată cu succes (Redirect 303 la trimis=succes)");

  // Scenariu C: Eroare de validare no-JS (telefon invalid)
  const invalidPhoneParams = new URLSearchParams({
    flow: "oferta",
    customerType: "pf",
    fullName: "Mihai Invalid",
    phone: "12345",
    email: "mihai@invalid.ro",
    category: "Auto CASCO & RCA",
    privacyAck: "on",
  });

  const reqHtmlInvalid = new NextRequest("http://127.0.0.1:3010/api/requests", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-synthetic-test": "true",
    },
    body: invalidPhoneParams.toString(),
  });

  const resHtmlInvalid = await POST(reqHtmlInvalid);
  assert.equal(resHtmlInvalid.status, 303, "Eroarea no-JS trebuie să returneze redirect 303");
  const locInvalid = resHtmlInvalid.headers.get("location") || "";
  assert(locInvalid.includes("eroare="), `Redirectul trebuie să conțină parametrul eroare, primit: ${locInvalid}`);
  console.log("✓ Eroarea de validare no-JS redirecționează corect cu mesajul corespunzător");

  // Scenariu D: Honeypot bot trigger
  const botParams = new URLSearchParams({
    flow: "oferta",
    customerType: "pf",
    fullName: "Spam Bot",
    phone: "0767110439",
    email: "spam@bot.com",
    privacyAck: "on",
    website: "https://spam-link.com",
  });

  const reqBot = new NextRequest("http://127.0.0.1:3010/api/requests", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-synthetic-test": "true",
    },
    body: botParams.toString(),
  });

  const resBot = await POST(reqBot);
  assert.equal(resBot.status, 303, "Botul cu honeypot trebuie absorbit silențios");
  console.log("✓ Botul cu câmp honeypot a fost neutralizat silențios");

  // 3. Testare API JSON (Fallback Form cu JS activ)
  console.log("\n3. Testare trimitere formular direct via JSON API...");

  const reqJson = new NextRequest("http://127.0.0.1:3010/api/requests", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-synthetic-test": "true",
    },
    body: JSON.stringify({
      flow: "oferta",
      customerType: "pf",
      fullName: "Ana Maria",
      phone: "0767110439",
      email: "ana.maria@exemplu.ro",
      category: "Locuință & Bunuri",
      message: "Apartament 3 camere București",
      privacyAck: true,
      website: "",
      formStartedAt: Date.now() - 4000,
    }),
  });

  const resJson = await POST(reqJson);
  assert.equal(resJson.status, 200, "API-ul trebuie să returneze status 200 pentru JSON valid");
  const dataJson = await resJson.json();
  assert.equal(dataJson.ok, true, "Payload-ul de răspuns trebuie să fie ok: true");
  assert(dataJson.id, "Răspunsul trebuie să conțină un ID generat");
  console.log("✓ Submisie JSON API funcțională (status 200, ID:", dataJson.id, ")");

  console.log("\n=== TOATE CELE 6 SCENARII DE CONVERSIE ȘI FALLBACK AU TRECUT CU SUCCES! ===");
}

runFallbackTests().catch((err) => {
  console.error("EROARE TEST:", err);
  process.exit(1);
});
