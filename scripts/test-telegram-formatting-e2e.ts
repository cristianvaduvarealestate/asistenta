import assert from "node:assert/strict";
import {
  escapeTelegramHtml,
  formatBucharestDate,
  sendConsultantTelegram,
  type TelegramNotificationInput,
} from "../src/lib/telegram";

async function runTelegramTests() {
  console.log("=== TESTARE DETALIATĂ FORMATĂRI TELEGRAM PENTRU TOATE FLUXURILE ===");

  // 1. Test HTML Escaping
  console.log("1. Testare HTML Escaping...");
  assert.equal(escapeTelegramHtml("Hello & <world> \"test\""), "Hello &amp; &lt;world&gt; &quot;test&quot;");
  assert.equal(escapeTelegramHtml(null), "");
  assert.equal(escapeTelegramHtml(undefined), "");
  assert.equal(escapeTelegramHtml(123), "123");
  console.log("✓ HTML escaping conform");

  // 2. Test Bucharest Date
  console.log("2. Testare formatare dată Europe/Bucharest...");
  const dateStr = formatBucharestDate("2026-11-18T17:30:00Z");
  assert.ok(dateStr.includes("18.11.2026") || dateStr.includes("18 nov. 2026"));
  assert.ok(dateStr.includes("19:30")); // UTC 17:30 is 19:30 in UTC+2 (Europe/Bucharest)
  console.log(`✓ Data formatată corect: ${dateStr}`);

  // 3. Test interception for all flows
  const capturedMessages: Array<{ text: string; parse_mode: string }> = [];
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async (url: any, init?: any) => {
    if (String(url).includes("api.telegram.org")) {
      const body = JSON.parse(init.body);
      capturedMessages.push(body);
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }
    return originalFetch(url, init);
  };

  const testEnv = {
    TELEGRAM_BOT_TOKEN: "MOCK_TOKEN_12345",
    TELEGRAM_CHAT_ID: "MOCK_CHAT_99999",
  };

  const flowsToTest: Array<{ name: string; input: TelegramNotificationInput }> = [
    {
      name: "Imobiliare - Cumpărare (PF)",
      input: {
        id: "req_imob_buy_01",
        flow: "imobiliare",
        customerType: "pf",
        name: "Mihai Popescu",
        phone: "0767110439",
        email: "mihai@example.com",
        payload: {
          action: "cumpar",
          actionLabel: "Vreau să cumpăr",
          propertyType: "Apartament 3 camere",
          location: "București, Floreasca",
          budgetMin: "180000",
          budgetMax: "240000",
          rooms: "3",
          areaApprox: "85",
          financingMethod: "Credit ipotecar",
          timeframe: "1-3 luni",
          additionalDetails: "Orientare spre parc, etaj intermediar.",
        },
        message: "Caut un apartament luminos într-un bloc nou.",
        createdAt: "2026-11-18T17:30:00Z",
        d1Status: "quota_exceeded",
      },
    },
    {
      name: "Imobiliare - Vânzare (PJ)",
      input: {
        id: "req_imob_sell_02",
        flow: "imobiliare",
        customerType: "pj",
        name: "Elena Radu",
        phone: "0722334455",
        email: "elena@office-space.ro",
        companyName: "SC Tower Properties SRL",
        activity: "Dezvoltare imobiliară",
        employeeCount: "10-49",
        payload: {
          action: "vand",
          actionLabel: "Vreau să vând",
          propertyType: "Spațiu comercial",
          location: "Cluj-Napoca, Centru",
          askingPrice: "450000 EUR",
          areaApprox: "220",
          cui: "RO12345678",
          countyCity: "Cluj-Napoca",
          turnoverRange: "500k - 2M EUR",
        },
        message: "Clădire renovată complet, vitrină stradală generoasă.",
        createdAt: "2026-11-18T17:35:00Z",
        d1Status: "saved",
      },
    },
    {
      name: "Asigurare - Ofertă CASCO & RCA (PF)",
      input: {
        id: "req_asig_oferta_03",
        flow: "oferta",
        customerType: "pf",
        name: "Andrei Ionescu",
        phone: "0733445566",
        email: "andrei@autocare.ro",
        category: "Auto",
        payload: {
          categories: ["CASCO", "RCA"],
          vehicleType: "Autoturism",
        },
        message: "Autoturism nou BMW X3, an 2024, livrat săptămâna viitoare.",
        createdAt: "2026-11-18T17:40:00Z",
        d1Status: "quota_exceeded",
      },
    },
    {
      name: "Asigurare - Daună urgentă (PF)",
      input: {
        id: "req_asig_dauna_04",
        flow: "dauna",
        customerType: "pf",
        name: "Maria Vasile",
        phone: "0744556677",
        email: "maria@vasile.ro",
        payload: {
          claimType: "Inundație apartament",
          claimDate: "2026-11-18",
          injured: "no",
          hasPolicy: "Da",
          helpNeeded: "Deschidere dosar și constatare daune parchet.",
        },
        message: "Vecinul de sus a inundat baia și bucătăria.",
        createdAt: "2026-11-18T17:45:00Z",
        d1Status: "saved",
      },
    },
    {
      name: "Asigurare - Reminder scadență (PF)",
      input: {
        id: "req_asig_rem_05",
        flow: "aminteste",
        customerType: "pf",
        name: "Dan Tudor",
        phone: "0755667788",
        email: "dan@tudor.ro",
        payload: {
          policyType: "RCA",
          expiryDate: "2026-12-25",
          deliveryChannel: "Telefon",
          offsets: [30, 15, 7],
        },
        createdAt: "2026-11-18T17:50:00Z",
        d1Status: "saved",
      },
    },
    {
      name: "Asigurare - Explicare clauză (PJ)",
      input: {
        id: "req_asig_expl_06",
        flow: "explica",
        customerType: "pj",
        name: "George Stan",
        phone: "0766778899",
        email: "george@techlogistics.ro",
        companyName: "SC Tech Logistics SRL",
        activity: "Transport & Logistică",
        payload: {
          topicLabel: "Franșize și limite de răspundere CMR",
          cui: "RO98765432",
        },
        message: "Vrem să știm dacă marfa perisabilă este acoperită la variații de temperatură.",
        createdAt: "2026-11-18T17:55:00Z",
        d1Status: "quota_exceeded",
      },
    },
    {
      name: "Asigurare - Verificare acoperire (PF)",
      input: {
        id: "req_asig_acop_07",
        flow: "acoperire",
        customerType: "pf",
        name: "Simona Dragnea",
        phone: "0777889900",
        email: "simona@dragnea.ro",
        payload: {
          situation: "Geam termopan spart accidental de vânt puternic.",
          hasPolicy: "Da",
        },
        message: "Am PAD și poliță facultativă Generali.",
        createdAt: "2026-11-18T18:00:00Z",
        d1Status: "saved",
      },
    },
    {
      name: "Asigurare - Evaluare nevoi companie (PJ)",
      input: {
        id: "req_asig_nevoi_08",
        flow: "nevoi",
        customerType: "pj",
        name: "Carmen Nistor",
        phone: "0788990011",
        email: "carmen@clinica-dent.ro",
        companyName: "SC Dental Care SRL",
        activity: "Sănătate & Medicină",
        employeeCount: "10-49",
        payload: {
          needs: ["Malpraxis medical", "Asigurare echipamente stomatologice", "Răspundere față de terți"],
          cui: "RO55443322",
        },
        message: "Deschidem o clinică nouă cu 4 cabinete.",
        createdAt: "2026-11-18T18:05:00Z",
        d1Status: "quota_exceeded",
      },
    },
    {
      name: "Asigurare - Întrebare generală (PF)",
      input: {
        id: "req_asig_intreb_09",
        flow: "intrebare",
        customerType: "pf",
        name: "Vasile Marinescu",
        phone: "0799001122",
        email: "vasile@marinescu.ro",
        message: "Cum pot transfera clasa de bonus-malus de la vechea mașină la cea nouă?",
        createdAt: "2026-11-18T18:10:00Z",
        d1Status: "failed",
        d1Error: "Network connection reset",
      },
    },
  ];

  for (const item of flowsToTest) {
    capturedMessages.length = 0;
    const res = await sendConsultantTelegram(item.input, testEnv);
    assert.equal(res.ok, true, `Eroare trimitere pentru ${item.name}`);
    assert.equal(capturedMessages.length, 1);
    const msg = capturedMessages[0];
    assert.equal(msg.parse_mode, "HTML");

    // Check essential elements in message
    assert.ok(msg.text.includes("CRISTIAN VĂDUVA"), "Header prezent");
    assert.ok(msg.text.includes(item.input.name), "Nume client prezent");
    assert.ok(msg.text.includes(item.input.phone), "Telefon client prezent");
    assert.ok(msg.text.includes(item.input.id), "ID solicitare prezent");

    // Check D1 badge
    if (item.input.d1Status === "quota_exceeded") {
      assert.ok(msg.text.includes("Cotă D1 depășită"), `Badge cotă D1 depășită lipsește în ${item.name}`);
    } else if (item.input.d1Status === "saved") {
      assert.ok(msg.text.includes("Salvat în D1"), `Badge D1 salvat lipsește în ${item.name}`);
    } else if (item.input.d1Status === "failed") {
      assert.ok(msg.text.includes("D1 indisponibil"), `Badge D1 eroare lipsește în ${item.name}`);
    }

    // Check PJ specific fields
    if (item.input.customerType === "pj") {
      assert.ok(msg.text.includes("Persoană Juridică (PJ)"));
      if (item.input.companyName) {
        assert.ok(msg.text.includes(item.input.companyName));
      }
    }

    console.log(`✓ Verificat cu succes: ${item.name}`);
  }

  // Restore fetch
  globalThis.fetch = originalFetch;

  console.log("\n=== TOATE CELE 9 SCENARII DE FORMATARE TELEGRAM AU TRECUT CU SUCCES! ===");
}

runTelegramTests().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
