import { spawn } from "node:child_process";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9222;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runChromeAudit() {
  console.log("=== STARTING HEADLESS CHROME CDP UI AUDIT ===");

  // Clean temp profile
  const fs = await import("node:fs");
  fs.rmSync("/tmp/chrome_helpdesk_test", { recursive: true, force: true });

  // 1. Launch Chrome with remote debugging
  const chromeProcess = spawn(CHROME_PATH, [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-gpu",
    "--user-data-dir=/tmp/chrome_helpdesk_test",
  ]);

  await sleep(1500);

  let versionData: any;
  for (let i = 0; i < 10; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      versionData = await res.json();
      break;
    } catch {
      await sleep(500);
    }
  }

  if (!versionData || !versionData.webSocketDebuggerUrl) {
    chromeProcess.kill();
    throw new Error("Could not connect to Chrome DevTools port");
  }

  console.log("Connected to Chrome:", versionData.Browser);

  // Get existing page or create one
  const listRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
  const pages = await listRes.json();
  let target = pages.find((p: any) => p.type === "page");
  if (!target) {
    const targetRes = await fetch(`http://127.0.0.1:${PORT}/json/new`, { method: "PUT" });
    target = await targetRes.json();
  }
  const wsUrl = target.webSocketDebuggerUrl;

  const ws = new WebSocket(wsUrl);

  let msgId = 1;
  const pending = new Map<number, (res: any) => void>();
  const consoleErrors: string[] = [];

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data.toString());
    if (data.id && pending.has(data.id)) {
      const cb = pending.get(data.id)!;
      pending.delete(data.id);
      cb(data);
    }
    if (data.method === "Runtime.consoleAPICalled") {
      if (data.params.type === "error") {
        consoleErrors.push(JSON.stringify(data.params.args));
      }
    }
    if (data.method === "Runtime.exceptionThrown") {
      consoleErrors.push(data.params.exceptionDetails?.text || "Unknown exception");
    }
  };

  await new Promise<void>((resolve, reject) => {
    ws.onopen = () => resolve();
    ws.onerror = (e) => reject(e);
  });

  function send(method: string, params: any = {}): Promise<any> {
    const id = msgId++;
    return new Promise((resolve) => {
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async function evaluate(expression: string): Promise<any> {
    const res = await send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    return res.result?.result?.value;
  }

  await send("Page.enable");
  await send("Runtime.enable");

  // 1. Test Desktop View
  console.log("\n--- Testing Desktop Viewport (1280x800) ---");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
    mobile: false,
  });

  await send("Page.navigate", { url: "http://127.0.0.1:3010/" });
  await sleep(2000);

  const desktopTitle = await evaluate("document.title");
  console.log("Desktop Page Title:", desktopTitle);

  const cardCount = await evaluate("document.querySelectorAll('button[type=\"button\"]').length");
  console.log("Interactive buttons / cards found:", cardCount);

  const cardTitles = await evaluate(`
    Array.from(document.querySelectorAll('h3, [role="button"], button')).map(el => el.innerText.trim()).filter(Boolean)
  `);
  console.log("Sample UI text items:", cardTitles.slice(0, 10));

  // 2. Test Mobile View
  console.log("\n--- Testing Mobile Viewport (390x844 - iPhone 14) ---");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });

  await sleep(1000);
  const scrollWidth = await evaluate("document.documentElement.scrollWidth");
  const clientWidth = await evaluate("document.documentElement.clientWidth");
  const hasHorizontalScroll = scrollWidth > clientWidth;
  console.log(`Mobile dimensions: clientWidth=${clientWidth}, scrollWidth=${scrollWidth}, overflow=${hasHorizontalScroll}`);

  // 3. Complete User Flow Interaction: "Vreau o ofertă"
  console.log("\n--- Testing Interactive User Flow via UI Click & Fill ---");
  const allButtons = await evaluate(`
    Array.from(document.querySelectorAll('button')).map((b, i) => ({ i, text: b.innerText.replace(/\\n/g, ' ') }))
  `);
  console.log("All buttons on page:", allButtons);

  // Click on card with exact title "Vreau o ofertă"
  const clickedOffer = await evaluate(`
    (() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const offerBtn = buttons.find(b => b.innerText.startsWith('Vreau o ofertă'));
      if (offerBtn) {
        const text = offerBtn.innerText;
        offerBtn.click();
        return { clicked: true, text };
      }
      return { clicked: false };
    })()
  `);
  console.log("Clicked offer card:", clickedOffer);
  await sleep(1000);

  // Click on "Persoană fizică (PF)"
  const clickedPf = await evaluate(`
    (() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const pfBtn = buttons.find(b => b.innerText.includes('Persoană fizică'));
      if (pfBtn) {
        pfBtn.click();
        return true;
      }
      return false;
    })()
  `);
  console.log("Clicked 'Persoană fizică (PF)':", clickedPf);
  await sleep(1000);

  // Fill category / details and click "Vezi explicația"
  const filledDetails = await evaluate(`
    (() => {
      // Click CASCO category button with exact match
      const buttons = Array.from(document.querySelectorAll('button'));
      const catBtn = buttons.find(b => b.innerText.trim() === 'CASCO');
      if (catBtn) catBtn.click();
      
      const textarea = document.querySelector('textarea');
      if (textarea) {
        textarea.value = 'Audi A4 2021, utilizare privată';
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.dispatchEvent(new Event('change', { bubbles: true }));
      }
      const nextBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Vezi explicația'));
      if (nextBtn) {
        nextBtn.click();
        return true;
      }
      return false;
    })()
  `);
  console.log("Filled flow details and clicked 'Vezi explicația':", filledDetails);
  await sleep(1000);

  // Guidance step: click "Lasă datele de contact"
  const clickedGuidance = await evaluate(`
    (() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Lasă datele de contact'));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    })()
  `);
  console.log("Clicked 'Lasă datele de contact':", clickedGuidance);
  await sleep(1000);

  // Fill Contact form
  const filledContact = await evaluate(`
    (() => {
      function setReactInput(input, val) {
        if (!input) return false;
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(input, val);
        const tracker = input._valueTracker;
        if (tracker) {
          tracker.setValue('');
        }
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      }

      const nameInput = document.getElementById('fullName');
      const phoneInput = document.getElementById('phone');
      const emailInput = document.getElementById('email');
      const privacyCheck = document.querySelector('input[type="checkbox"]');

      setReactInput(nameInput, 'Maria Ionescu');
      setReactInput(phoneInput, '0767110439');
      setReactInput(emailInput, 'maria.ionescu@example.ro');

      if (privacyCheck && !privacyCheck.checked) {
        privacyCheck.click();
      }

      return {
        hasName: !!nameInput && nameInput.value === 'Maria Ionescu',
        hasPhone: !!phoneInput && phoneInput.value === '0767110439',
        hasEmail: !!emailInput && emailInput.value === 'maria.ionescu@example.ro',
        hasPrivacyCheck: !!privacyCheck && privacyCheck.checked
      };
    })()
  `);
  console.log("Filled contact inputs:", filledContact);

  // Wait 3.5 seconds to pass formStartedAt anti-spam timing threshold
  console.log("Waiting 3.5 seconds for anti-bot timestamp requirement...");
  await sleep(3500);

  const preSubmitInfo = await evaluate(`
    ({
      url: window.location.href,
      h2: document.querySelector('h2')?.innerText,
      errorText: document.querySelector('[role="alert"]')?.innerText
    })
  `);
  console.log("Pre-submit info:", preSubmitInfo);

  // Click Submit
  const submitted = await evaluate(`
    (() => {
      const submitBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Trimite solicitarea'));
      if (submitBtn) {
        submitBtn.click();
        return true;
      }
      return false;
    })()
  `);
  console.log("Clicked submit button:", submitted);

  await sleep(3000);

  // Intercept or log fetch in page
  await evaluate(`
    const origFetch = window.fetch;
    window._lastFetchBody = null;
    window.fetch = async (...args) => {
      if (args[0] && args[0].includes('/api/requests')) {
        window._lastFetchBody = args[1]?.body;
      }
      return origFetch(...args);
    };
  `);
  const screenState = await evaluate(`
    ({
      error: document.querySelector('[role="alert"]')?.innerText || null,
      headings: Array.from(document.querySelectorAll('h2')).map(h => h.innerText),
      bodySnippet: document.body.innerText.slice(0, 500)
    })
  `);
  console.log("Post-submit screen state:", screenState);
  const isConfirmed = screenState.bodySnippet.includes("înregistrată") || screenState.headings.some((h: string) => h.includes("înregistrată"));
  console.log("Confirmation screen shown:", isConfirmed);

  // 4. Test Legal Page Rendering
  console.log("\n--- Testing Legal Page Navigation ---");
  await send("Page.navigate", { url: "http://127.0.0.1:3010/confidentialitate" });
  await sleep(1500);

  const legalContent = await evaluate(`
    ({
      title: document.querySelector('h1')?.innerText,
      hasMissingBanner: !!document.body.innerText.includes('Necompletat pentru publicare'),
      hasSections: document.querySelectorAll('section').length
    })
  `);
  console.log("Legal page rendering:", legalContent);

  // Check console errors
  console.log("\n--- Console Error Audit ---");
  console.log("Console Errors detected:", consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log("Errors:", consoleErrors);
  }

  // Cleanup
  ws.close();
  chromeProcess.kill();

  console.log("\n=== CHROME CDP UI AUDIT COMPLETE ===");
}

runChromeAudit().catch((err) => {
  console.error("Chrome audit failed:", err);
  process.exit(1);
});
