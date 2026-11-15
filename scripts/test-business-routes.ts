async function testBusinessRoutes() {
  const baseUrl = "http://127.0.0.1:3010";

  const routes = [
    "/afaceri",
    "/afaceri/categorii",
    "/afaceri/categorii/cladiri-si-spatii-comerciale",
    "/afaceri/categorii/cyber-risk",
    "/afaceri/domenii",
    "/afaceri/domenii/constructii-si-dezvoltari-imobiliare",
    "/afaceri/domenii/horeca-si-ospitalitate",
    "/afaceri/domenii/it-software-si-servicii-digitale",
    "/afaceri/ghid-asigurari",
    "/afaceri/ghid-asigurari/property-all-risks",
    "/afaceri/ghid-asigurari/business-interruption",
    "/afaceri/scenarii-daune",
    "/afaceri/scenarii-daune/incendiu-depozit-marfuri-retail",
    "/afaceri/checklist-uri",
    "/afaceri/checklist-uri/infiintare-companie-noua-start-up",
    "/afaceri/ce-se-intampla-daca",
    "/afaceri/cadru-legal",
    "/afaceri/evaluare-riscuri",
    "/afaceri/surse-si-glosar",
    "/sitemap.xml",
    "/?ajutor=oferta&tip=pj&categorie=car-ear&domeniu=constructii",
  ];

  console.log(`[Test Business Expansion] Testare ${routes.length} rute pe ${baseUrl}...`);

  let passed = 0;
  let failed = 0;

  for (const path of routes) {
    const url = `${baseUrl}${path}`;
    try {
      const res = await fetch(url);
      const text = await res.text();
      if (res.status === 200 && text.length > 500) {
        console.log(`✓ ${path} [HTTP ${res.status}] (${text.length} bytes)`);
        passed++;
      } else {
        console.error(`✕ ${path} [HTTP ${res.status}] - Invalid response size (${text.length} bytes)`);
        failed++;
      }
    } catch (err: any) {
      console.error(`✕ ${path} - Eroare conexiune: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nRezultat final: ${passed} trecute, ${failed} eșuate din ${routes.length} rute testate.`);

  if (failed > 0) {
    process.exit(1);
  }
}

testBusinessRoutes();
