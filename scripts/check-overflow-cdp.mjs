import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const TMP_PROFILE = `/tmp/chrome-cdp-audit-${Date.now()}`;

const VIEWPORTS = [
  { name: "360x800", width: 360, height: 800 },
  { name: "375x812", width: 375, height: 812 },
  { name: "390x844", width: 390, height: 844 },
  { name: "1280x800", width: 1280, height: 800 },
];

const PAGES = [
  { name: "Homepage", path: "/" },
  { name: "Asigurari", path: "/asigurari" },
  { name: "Imobiliare", path: "/imobiliare" },
  { name: "Despre Mine", path: "/despre-mine" },
  { name: "Protectia Afacerii", path: "/afaceri" },
];

const BASE_URL = "http://127.0.0.1:3010";

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.msgId = 1;
    this.pending = new Map();
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

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function run() {
  console.log("Starting Chrome Headless on port 9222...");
  const chromeProc = spawn(
    CHROME_PATH,
    [
      "--headless",
      "--disable-gpu",
      "--remote-debugging-port=9222",
      `--user-data-dir=${TMP_PROFILE}`,
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  let connected = false;
  let browserWs = "";
  for (let i = 0; i < 20; i++) {
    await sleep(300);
    try {
      const res = await fetch("http://127.0.0.1:9222/json/version");
      const data = await res.json();
      browserWs = data.webSocketDebuggerUrl;
      connected = true;
      break;
    } catch {}
  }

  if (!connected) {
    console.error("Could not connect to Chrome port 9222.");
    chromeProc.kill();
    return;
  }

  console.log("Connected to Chrome CDP:", browserWs);

  const targetRes = await fetch("http://127.0.0.1:9222/json/new", { method: "PUT" });
  const target = await targetRes.json();
  const client = new CDPClient(target.webSocketDebuggerUrl);
  await client.connect();

  await client.send("Page.enable");
  await client.send("DOM.enable");
  await client.send("Runtime.enable");

  const results = [];

  for (const page of PAGES) {
    for (const vp of VIEWPORTS) {
      await client.send("Emulation.setDeviceMetricsOverride", {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 800,
      });

      await client.send("Page.navigate", { url: `${BASE_URL}${page.path}` });
      await sleep(600);

      const evalRes = await client.send("Runtime.evaluate", {
        expression: `
          (() => {
            const scrollW = document.documentElement.scrollWidth;
            const innerW = window.innerWidth;
            const hasHorizontalOverflow = scrollW > innerW;
            
            // Find offending elements if any
            let offending = [];
            if (hasHorizontalOverflow) {
              const all = document.querySelectorAll('*');
              for (const el of all) {
                const rect = el.getBoundingClientRect();
                if (rect.right > innerW + 1) {
                  offending.push({
                    tag: el.tagName,
                    id: el.id,
                    className: el.className ? el.className.toString().slice(0, 50) : '',
                    right: Math.round(rect.right),
                    excess: Math.round(rect.right - innerW)
                  });
                }
              }
            }

            // Contrast & Colors check of main headings
            const h1 = document.querySelector('h1');
            const h1Color = h1 ? window.getComputedStyle(h1).color : null;
            const bodyBg = window.getComputedStyle(document.body).backgroundColor;

            return {
              scrollWidth: scrollW,
              innerWidth: innerW,
              hasHorizontalOverflow,
              overflowPixels: scrollW - innerW,
              offendingCount: offending.length,
              offendingSample: offending.slice(0, 3),
              h1Color,
              bodyBg
            };
          })()
        `,
        returnByValue: true,
      });

      const metrics = evalRes.result.value;
      results.push({
        page: page.name,
        viewport: vp.name,
        ...metrics,
      });

      console.log(
        `[${page.name} @ ${vp.name}] scrollW: ${metrics.scrollWidth}, winW: ${metrics.innerWidth}, overflow: ${metrics.hasHorizontalOverflow ? `FAIL (+${metrics.overflowPixels}px)` : "OK (0px)"}`
      );
    }
  }

  client.close();
  chromeProc.kill();
  try {
    fs.rmSync(TMP_PROFILE, { recursive: true, force: true });
  } catch {}

  console.log("\n=== SUMMARY TABLE ===");
  console.table(
    results.map((r) => ({
      Page: r.page,
      Viewport: r.viewport,
      Width: r.innerWidth,
      ScrollW: r.scrollWidth,
      Overflow: r.hasHorizontalOverflow ? `FAIL (+${r.overflowPixels}px)` : "OK",
      H1_Color: r.h1Color,
      Body_BG: r.bodyBg,
    }))
  );
}

run().catch((e) => console.error("Error in CDP check:", e));
