import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { name: "360x800 (Compact Mobile)", width: 360, height: 800, isMobile: true },
  { name: "375x812 (iPhone Standard)", width: 375, height: 812, isMobile: true },
  { name: "390x844 (Modern Mobile)", width: 390, height: 844, isMobile: true },
  { name: "1280x800 (Desktop/Laptop)", width: 1280, height: 800, isMobile: false },
];

const PAGES = [
  { name: "Homepage", path: "/" },
  { name: "Asigurari", path: "/asigurari" },
  { name: "Imobiliare", path: "/imobiliare" },
  { name: "Despre Mine", path: "/despre-mine" },
  { name: "Protectia Afacerii", path: "/afaceri" },
];

const BASE_URL = "http://localhost:3010";
const SCREENSHOT_DIR = path.resolve("./artifacts/audit-screenshots");

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function getBrowserWs() {
  const res = await fetch("http://127.0.0.1:9222/json/version");
  const data = await res.json();
  return data.webSocketDebuggerUrl;
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.msgId = 1;
    this.pending = new Map();
    this.events = [];
    this.consoleLogs = [];
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (e) => reject(e);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.pending.has(msg.id)) {
          const { res, rej } = this.pending.get(msg.id);
          this.pending.delete(msg.id);
          if (msg.error) rej(msg.error);
          else res(msg.result);
        } else if (msg.method) {
          if (msg.method === "Runtime.consoleAPICalled" || msg.method === "Log.entryAdded") {
            this.consoleLogs.push(msg.params);
          }
        }
      };
    });
  }

  async send(method, params = {}) {
    const id = this.msgId++;
    return new Promise((res, rej) => {
      this.pending.set(id, { res, rej });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function runAudit() {
  console.log("=== STARTING CHROMIUM CDP VISUAL AUDIT ===");
  const browserWs = await getBrowserWs();
  console.log("Connected to Chrome via CDP:", browserWs);

  // Create a new target/page
  const targetRes = await fetch("http://127.0.0.1:9222/json/new", { method: "PUT" });
  const target = await targetRes.json();
  const pageWsUrl = target.webSocketDebuggerUrl;

  const client = new CDPClient(pageWsUrl);
  await client.connect();

  await client.send("Page.enable");
  await client.send("DOM.enable");
  await client.send("Runtime.enable");

  const auditReport = [];

  for (const page of PAGES) {
    console.log(`\n--- Inspecting Page: ${page.name} (${page.path}) ---`);

    for (const vp of VIEWPORTS) {
      // 1. Set Device Metrics
      await client.send("Emulation.setDeviceMetricsOverride", {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.isMobile,
      });

      // 2. Navigate to URL
      const targetUrl = `${BASE_URL}${page.path}`;
      await client.send("Page.navigate", { url: targetUrl });

      // Wait for load
      await new Promise((r) => setTimeout(r, 1200));

      // 3. Evaluate visual measurements in browser
      const evalMetrics = await client.send("Runtime.evaluate", {
        expression: `(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const innerWidth = window.innerWidth;
          const hasHorizontalOverflow = scrollWidth > innerWidth + 1; // 1px threshold for subpixels

          // Find overflowing elements if any
          const overflowing = [];
          if (hasHorizontalOverflow) {
            const all = document.querySelectorAll('*');
            for (let el of all) {
              const rect = el.getBoundingClientRect();
              if (rect.right > innerWidth + 1) {
                overflowing.push({
                  tag: el.tagName,
                  className: (el.className || '').toString().slice(0, 60),
                  right: Math.round(rect.right),
                  width: Math.round(rect.width)
                });
                if (overflowing.length >= 3) break;
              }
            }
          }

          // Check images
          const images = Array.from(document.querySelectorAll('img')).map(img => ({
            src: img.src.split('/').pop(),
            alt: img.alt || '',
            complete: img.complete,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            displayedWidth: img.clientWidth,
            displayedHeight: img.clientHeight
          }));

          // Check header & footer
          const header = Boolean(document.querySelector('header'));
          const footer = Boolean(document.querySelector('footer'));
          const mobileMenuBtn = Boolean(document.querySelector('button[aria-label="Deschide meniul"]'));

          // Check main CTA buttons
          const buttons = Array.from(document.querySelectorAll('button, a')).filter(el => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.height > 0 && r.top < 1200;
          }).length;

          return {
            innerWidth,
            scrollWidth,
            hasHorizontalOverflow,
            overflowing,
            imagesCount: images.length,
            images,
            header,
            footer,
            mobileMenuBtn,
            interactiveElementsCount: buttons
          };
        })()`,
        returnByValue: true,
      });

      const metrics = evalMetrics.result.value;

      // 4. Capture screenshot
      const shot = await client.send("Page.captureScreenshot", {
        format: "png",
        clip: {
          x: 0,
          y: 0,
          width: vp.width,
          height: Math.min(vp.height * 2, 2400),
          scale: 1,
        },
      });

      const shotFileName = `${page.name.toLowerCase().replace(/[^a-z]/g, "")}_${vp.width}x${vp.height}.png`;
      fs.writeFileSync(path.join(SCREENSHOT_DIR, shotFileName), Buffer.from(shot.data, "base64"));

      const resultRow = {
        page: page.name,
        viewport: `${vp.width}x${vp.height}`,
        isMobile: vp.isMobile,
        innerWidth: metrics.innerWidth,
        scrollWidth: metrics.scrollWidth,
        overflow: metrics.hasHorizontalOverflow ? "⚠️ OVERFLOW" : "✓ OK",
        header: metrics.header ? "✓" : "✗",
        footer: metrics.footer ? "✓" : "✗",
        mobileMenu: vp.isMobile ? (metrics.mobileMenuBtn ? "✓" : "✗") : "N/A",
        images: `${metrics.images.filter((i) => i.complete && i.naturalWidth > 0).length}/${metrics.imagesCount} loaded`,
        overflowElements: metrics.overflowing.length > 0 ? JSON.stringify(metrics.overflowing) : "None",
        screenshot: shotFileName,
      };

      auditReport.push(resultRow);
      console.log(`  [${vp.width}x${vp.height}] Overflow: ${resultRow.overflow} (scrollWidth: ${metrics.scrollWidth} vs innerWidth: ${metrics.innerWidth}) | Images: ${resultRow.images}`);
      if (metrics.hasHorizontalOverflow) {
        console.warn(`    ⚠️ Overflowing elements:`, metrics.overflowing);
      }
    }
  }

  // Close tab
  await client.send("Page.close");
  client.close();

  console.log("\n=== COMPREHENSIVE VIEWPORT AUDIT REPORT ===");
  console.table(
    auditReport.map((r) => ({
      Page: r.page,
      Viewport: r.viewport,
      Widths: `${r.innerWidth} / ${r.scrollWidth}`,
      Overflow: r.overflow,
      Header: r.header,
      Footer: r.footer,
      MobileBtn: r.mobileMenu,
      Images: r.images,
    }))
  );

  const anyOverflow = auditReport.some((r) => r.overflow !== "✓ OK");
  if (anyOverflow) {
    console.error("CRITICAL: Horizontal overflow detected on some viewports!");
  } else {
    console.log("✓ SUCCESS: All 20 viewport/page combinations passed with ZERO horizontal overflow!");
  }
}

runAudit().catch((e) => {
  console.error("Error running audit:", e);
  process.exit(1);
});
