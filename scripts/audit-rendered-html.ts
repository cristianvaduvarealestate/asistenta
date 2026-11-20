import assert from "node:assert/strict";

interface RouteCheck {
  path: string;
  expectedTitleSnippet: string;
  expectedCanonical: string;
  expectedStatus?: number;
  hasFaq?: boolean;
}

const ROUTES: RouteCheck[] = [
  {
    path: "/",
    expectedTitleSnippet: "Asistență Imobiliară & Partener Generali",
    expectedCanonical: "https://asistenta.cristianvaduva.com",
    hasFaq: true,
  },
  {
    path: "/asigurari",
    expectedTitleSnippet: "Asigurări Generali",
    expectedCanonical: "https://asistenta.cristianvaduva.com/asigurari",
    hasFaq: true,
  },
  {
    path: "/imobiliare",
    expectedTitleSnippet: "Consultanță Imobiliară",
    expectedCanonical: "https://asistenta.cristianvaduva.com/imobiliare",
    hasFaq: true,
  },
  {
    path: "/despre-mine",
    expectedTitleSnippet: "Despre Cristian Văduva",
    expectedCanonical: "https://asistenta.cristianvaduva.com/despre-mine",
    hasFaq: true,
  },
  {
    path: "/afaceri",
    expectedTitleSnippet: "Protecția Afacerii Tale",
    expectedCanonical: "https://asistenta.cristianvaduva.com/afaceri",
    hasFaq: false,
  },
  {
    path: "/confidentialitate",
    expectedTitleSnippet: "confidențialitate",
    expectedCanonical: "https://asistenta.cristianvaduva.com/confidentialitate",
    hasFaq: false,
  },
  {
    path: "/cookies",
    expectedTitleSnippet: "cookies",
    expectedCanonical: "https://asistenta.cristianvaduva.com/cookies",
    hasFaq: false,
  },
  {
    path: "/termeni",
    expectedTitleSnippet: "Termeni",
    expectedCanonical: "https://asistenta.cristianvaduva.com/termeni",
    hasFaq: false,
  },
  {
    path: "/accesibilitate",
    expectedTitleSnippet: "accesibilitate",
    expectedCanonical: "https://asistenta.cristianvaduva.com/accesibilitate",
    hasFaq: false,
  },
  {
    path: "/contact",
    expectedTitleSnippet: "Contact",
    expectedCanonical: "https://asistenta.cristianvaduva.com/contact",
    hasFaq: false,
  },
  {
    path: "/informare-servicii",
    expectedTitleSnippet: "",
    expectedCanonical: "",
    expectedStatus: 404,
  },
];

async function auditHtml() {
  console.log("=== AUDIT HTML RANDAT PENTRU TOATE RUTELE PUBLICE ===");

  for (const route of ROUTES) {
    const url = `http://127.0.0.1:3010${route.path}`;
    const res = await fetch(url);

    if (route.expectedStatus === 404) {
      assert.equal(res.status, 404, `Ruta ${route.path} trebuia să returneze 404, dar a returnat ${res.status}`);
      console.log(`✓ Ruta retrasă ${route.path} returnează curat HTTP 404 Not Found`);
      continue;
    }

    assert.equal(res.status, 200, `Ruta ${route.path} a returnat HTTP ${res.status}`);
    const html = await res.text();

    // 1. Verificare Canonical
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
      || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
    assert(canonicalMatch, `Lipsește tagul canonical pe ${route.path}`);
    const actualCanonical = canonicalMatch[1];
    assert.equal(actualCanonical, route.expectedCanonical, `Canonical nepotrivit pe ${route.path}: ${actualCanonical} vs ${route.expectedCanonical}`);

    // 2. Verificare Title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    assert(titleMatch, `Lipsește tagul <title> pe ${route.path}`);
    const actualTitle = titleMatch[1].replace(/&amp;/g, "&");
    assert(
      actualTitle.toLowerCase().includes(route.expectedTitleSnippet.toLowerCase()),
      `Titlul ${actualTitle} pe ${route.path} nu conține ${route.expectedTitleSnippet}`
    );

    // 3. Verificare Open Graph (og:title, og:description, og:url, og:image)
    assert(html.includes('property="og:title"') || html.includes('name="og:title"'), `Lipsește og:title pe ${route.path}`);
    assert(html.includes('property="og:description"') || html.includes('name="og:description"'), `Lipsește og:description pe ${route.path}`);
    assert(html.includes('property="og:url"') || html.includes('name="og:url"'), `Lipsește og:url pe ${route.path}`);
    assert(html.includes('property="og:image"') || html.includes('name="og:image"'), `Lipsește og:image pe ${route.path}`);

    // 4. Verificare Twitter Card (twitter:card, twitter:title, twitter:description)
    assert(html.includes('name="twitter:card"'), `Lipsește twitter:card pe ${route.path}`);
    assert(html.includes('name="twitter:title"'), `Lipsește twitter:title pe ${route.path}`);
    assert(html.includes('name="twitter:description"'), `Lipsește twitter:description pe ${route.path}`);

    // 5. Verificare Structured Data (JSON-LD)
    const jsonLdMatches = Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi));
    assert(jsonLdMatches.length > 0, `Lipsește JSON-LD pe ${route.path}`);

    let hasPerson = false;
    let hasWebSite = false;
    let hasFAQ = false;
    let hasLocalBusiness = false;

    for (const match of jsonLdMatches) {
      try {
        const parsed = JSON.parse(match[1]);
        if (parsed["@type"] === "Person") hasPerson = true;
        if (parsed["@type"] === "WebSite") hasWebSite = true;
        if (parsed["@type"] === "FAQPage") hasFAQ = true;
        if (parsed["@type"] === "LocalBusiness") hasLocalBusiness = true;
      } catch (e) {
        assert.fail(`JSON-LD invalid pe ${route.path}: ${e}`);
      }
    }

    assert(hasPerson, `Lipsește schema Person pe ${route.path}`);
    assert(hasWebSite, `Lipsește schema WebSite pe ${route.path}`);
    assert(!hasLocalBusiness, `Găsită schemă nepermisă LocalBusiness pe ${route.path}`);

    if (route.hasFaq) {
      assert(hasFAQ, `Trebuia să aibă FAQPage pe ${route.path}`);
    }

    console.log(`✓ Ruta ${route.path} validată complet (Canonical: ${actualCanonical}, OG, Twitter, JSON-LD)`);
  }

  console.log("\n=== TOATE CELE 11 RUTE AU FOST AUDITATE ȘI VALIDATE CU SUCCES! ===");
}

auditHtml().catch((err) => {
  console.error("EROARE AUDIT HTML:", err);
  process.exit(1);
});
