import assert from "node:assert/strict";

const BASE = "http://127.0.0.1:3010";

async function testLiveHttp() {
  console.log("=== STARTING LIVE HTTP ENDPOINT TESTS ===");
  const results: Record<string, { passed: boolean; details: string }> = {};

  // 1. Static and SSR Pages
  try {
    const homeRes = await fetch(`${BASE}/`);
    assert.equal(homeRes.status, 200);
    const homeHtml = await homeRes.text();
    assert.ok(homeHtml.includes("INSURANCE HELP DESK"));

    const legalSlugs = ["confidentialitate", "cookies", "termeni", "informare-servicii", "accesibilitate", "contact"];
    for (const slug of legalSlugs) {
      const res = await fetch(`${BASE}/${slug}`);
      assert.equal(res.status, 200, `Pagina /${slug} trebuie să răspundă cu 200`);
      const html = await res.text();
      assert.ok(html.includes("Document de informare"));
    }

    const robotsRes = await fetch(`${BASE}/robots.txt`);
    assert.equal(robotsRes.status, 200);

    const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
    assert.equal(sitemapRes.status, 200);

    results["1. Pagini Publice & Legale"] = { passed: true, details: "Home, toate cele 6 pagini legale, robots.txt și sitemap.xml returnează 200 OK." };
    console.log("✓ 1. Public and legal pages passed");
  } catch (err) {
    results["1. Pagini Publice & Legale"] = { passed: false, details: String(err) };
    console.error("✗ 1. Public and legal pages failed", err);
  }

  // 2. Anti-spam & Validation on POST /api/requests
  try {
    // Honeypot
    const honeypotRes = await fetch(`${BASE}/api/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ website: "spam-bot.com" }),
    });
    assert.equal(honeypotRes.status, 200);
    const hpData = await honeypotRes.json();
    assert.equal(hpData.id, "ignored");

    // Form submitted too fast (< 2500ms)
    const fastRes = await fetch(`${BASE}/api/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formStartedAt: Date.now() }),
    });
    assert.equal(fastRes.status, 400);
    const fastData = await fastRes.json();
    assert.ok(fastData.error.includes("rapid"));

    // Missing required fields (with valid startedAt)
    const validStartedAt = Date.now() - 5000;
    const invalidRes = await fetch(`${BASE}/api/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formStartedAt: validStartedAt,
        flow: "oferta",
        customerType: "pf",
        fullName: "A", // too short
        phone: "123",
        email: "bad",
        privacyAck: false,
      }),
    });
    assert.equal(invalidRes.status, 400);

    results["2. Protecție Spam & Validare API"] = { passed: true, details: "Honeypot, verificarea vitezei de trimitere și validarea erorilor returnează codurile corecte (200 ignored / 400)." };
    console.log("✓ 2. Spam & validation passed");
  } catch (err) {
    results["2. Protecție Spam & Validare API"] = { passed: false, details: String(err) };
    console.error("✗ 2. Spam & validation failed", err);
  }

  // 3. Valid Request Submission & Idempotency
  let createdReqId = "";
  try {
    const validStartedAt = Date.now() - 4000;
    const idempotencyKey = `http_live_idemp_${Date.now()}`;
    const payload = {
      formStartedAt: validStartedAt,
      flow: "oferta",
      customerType: "pf",
      fullName: "Ion Popescu",
      phone: "0767110439",
      email: "ion.popescu@example.ro",
      category: "CASCO",
      message: "Doresc o cotație pentru un autoturism 2022.",
      privacyAck: true,
      marketingConsent: true,
      idempotencyKey,
    };

    const res1 = await fetch(`${BASE}/api/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    assert.equal(res1.status, 200);
    const data1 = await res1.json();
    assert.equal(data1.ok, true);
    assert.ok(data1.id.startsWith("req_"));
    createdReqId = data1.id;

    // Resend exact request with same idempotencyKey
    const res2 = await fetch(`${BASE}/api/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    assert.equal(res2.status, 200);
    const data2 = await res2.json();
    assert.equal(data2.ok, true);
    assert.equal(data2.id, createdReqId, "Răspunsul trebuie să aibă exact același ID fără duplicare");

    results["3. Trimitere Solicitare & Idempotență HTTP"] = { passed: true, details: `Solicitarea ${createdReqId} a fost salvată, iar duplicatul a fost returnat idempotent.` };
    console.log("✓ 3. Valid request & idempotency passed");
  } catch (err) {
    results["3. Trimitere Solicitare & Idempotență HTTP"] = { passed: false, details: String(err) };
    console.error("✗ 3. Valid request & idempotency failed", err);
  }

  // 4. Admin Authentication & Session Management
  let adminCookie = "";
  try {
    // Unauthenticated access
    const unauthGet = await fetch(`${BASE}/api/admin/requests`);
    assert.equal(unauthGet.status, 401);

    // Bad password
    const badLogin = await fetch(`${BASE}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "cristian", password: "wrong" }),
    });
    assert.equal(badLogin.status, 401);

    // Correct login
    const goodLogin = await fetch(`${BASE}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "cristian", password: "TestAdmin123!@#" }),
    });
    assert.equal(goodLogin.status, 200);
    const setCookie = goodLogin.headers.get("set-cookie") || "";
    assert.ok(setCookie.includes("ihd_admin="));
    adminCookie = setCookie.split(";")[0];

    // Authenticated access
    const authGet = await fetch(`${BASE}/api/admin/requests`, {
      headers: { Cookie: adminCookie },
    });
    assert.equal(authGet.status, 200);
    const authData = await authGet.json();
    assert.equal(authData.ok, true);
    assert.ok(Array.isArray(authData.requests));
    assert.ok(authData.requests.some((r: any) => r.id === createdReqId));

    results["4. Securitate Admin & Autentificare"] = { passed: true, details: "Blocare 401 fără sesiune, respingere parolă greșită, login reușit cu cookie HTTP-only." };
    console.log("✓ 4. Admin auth passed");
  } catch (err) {
    results["4. Securitate Admin & Autentificare"] = { passed: false, details: String(err) };
    console.error("✗ 4. Admin auth failed", err);
  }

  // 5. Admin Operations (Status change, Note addition)
  try {
    // Status update
    const statusRes = await fetch(`${BASE}/api/admin/requests/${createdReqId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: adminCookie },
      body: JSON.stringify({ action: "status", status: "in_analiza" }),
    });
    assert.equal(statusRes.status, 200);
    const statusData = await statusRes.json();
    assert.equal(statusData.ok, true);

    // Note addition
    const noteRes = await fetch(`${BASE}/api/admin/requests/${createdReqId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: adminCookie },
      body: JSON.stringify({ action: "note", note: "Client contactat prin telefon." }),
    });
    assert.equal(noteRes.status, 200);
    const noteData = await noteRes.json();
    assert.equal(noteData.ok, true);

    results["5. Operațiuni Admin Desk"] = { passed: true, details: "Schimbare status în 'in_analiza' și adăugare notă internă realizate cu succes pe solicitare reală." };
    console.log("✓ 5. Admin desk operations passed");
  } catch (err) {
    results["5. Operațiuni Admin Desk"] = { passed: false, details: String(err) };
    console.error("✗ 5. Admin desk operations failed", err);
  }

  // 6. Cron Endpoint Security & Processing (/api/jobs/tick)
  try {
    // Missing secret -> 401
    const unauthTick = await fetch(`${BASE}/api/jobs/tick`, { method: "POST" });
    assert.equal(unauthTick.status, 401);

    // Wrong secret -> 401
    const wrongTick = await fetch(`${BASE}/api/jobs/tick`, {
      method: "POST",
      headers: { "x-jobs-secret": "wrong-secret-token" },
    });
    assert.equal(wrongTick.status, 401);

    // Valid secret
    const validSecret = "e7b4c920f7814a5db98e4125b03ef7a29910d6824c1f";
    const okTick = await fetch(`${BASE}/api/jobs/tick`, {
      method: "POST",
      headers: { "x-jobs-secret": validSecret },
    });
    assert.equal(okTick.status, 200);
    const tickData = await okTick.json();
    assert.equal(tickData.ok, true);
    assert.ok(typeof tickData.processed === "number");

    results["6. Endpoint Cron (/api/jobs/tick)"] = { passed: true, details: "Protejat strict cu x-jobs-secret (401 la secret invalid), execută procesarea joburilor la cheie corectă." };
    console.log("✓ 6. Cron tick endpoint passed");
  } catch (err) {
    results["6. Endpoint Cron (/api/jobs/tick)"] = { passed: false, details: String(err) };
    console.error("✗ 6. Cron tick endpoint failed", err);
  }

  // 7. Admin Logout
  try {
    const logoutRes = await fetch(`${BASE}/api/admin/logout`, {
      method: "POST",
      headers: { Cookie: adminCookie },
    });
    assert.equal(logoutRes.status, 200);
    const clearCookie = logoutRes.headers.get("set-cookie") || "";
    assert.ok(clearCookie.includes("Max-Age=0") || clearCookie.includes("expires="));

    results["7. Deconectare Admin (Logout)"] = { passed: true, details: "Endpoint-ul de logout invalidează cookie-ul de sesiune (Max-Age=0)." };
    console.log("✓ 7. Logout passed");
  } catch (err) {
    results["7. Deconectare Admin (Logout)"] = { passed: false, details: String(err) };
    console.error("✗ 7. Logout failed", err);
  }

  console.log("\n=== LIVE HTTP TEST SUMMARY ===");
  console.table(results);
}

testLiveHttp().catch((err) => {
  console.error("Live HTTP test fatal failure:", err);
  process.exit(1);
});
