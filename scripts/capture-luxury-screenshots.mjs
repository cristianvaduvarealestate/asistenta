import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTPUT_DIR = path.resolve("./artifacts/audit-screenshots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const TARGETS = [
  { name: "homepage_desktop", url: "http://127.0.0.1:3010/", width: 1280, height: 800 },
  { name: "homepage_mobile", url: "http://127.0.0.1:3010/", width: 390, height: 844 },
  { name: "asigurari_desktop", url: "http://127.0.0.1:3010/asigurari", width: 1280, height: 800 },
  { name: "asigurari_mobile", url: "http://127.0.0.1:3010/asigurari", width: 390, height: 844 },
  { name: "imobiliare_desktop", url: "http://127.0.0.1:3010/imobiliare", width: 1280, height: 800 },
  { name: "imobiliare_mobile", url: "http://127.0.0.1:3010/imobiliare", width: 390, height: 844 },
  { name: "despre_mine_desktop", url: "http://127.0.0.1:3010/despre-mine", width: 1280, height: 800 },
  { name: "despre_mine_mobile", url: "http://127.0.0.1:3010/despre-mine", width: 390, height: 844 },
  { name: "afaceri_desktop", url: "http://127.0.0.1:3010/afaceri", width: 1280, height: 800 },
  { name: "afaceri_mobile", url: "http://127.0.0.1:3010/afaceri", width: 390, height: 844 },
];

console.log("=== CAPTURING DARK LUXURY SCREENSHOTS ===");

for (const target of TARGETS) {
  const outPath = path.join(OUTPUT_DIR, `${target.name}.png`);
  console.log(`[Capturing] ${target.name} (${target.width}x${target.height}) -> ${target.url}`);
  
  const cmd = `"${CHROME_PATH}" --headless --hide-scrollbars --window-size=${target.width},${target.height} --screenshot="${outPath}" "${target.url}"`;
  try {
    execSync(cmd, { stdio: "pipe" });
    const stats = fs.statSync(outPath);
    console.log(`  ✓ Saved: ${outPath} (${Math.round(stats.size / 1024)} KB)`);
  } catch (err) {
    console.error(`  ✗ Error capturing ${target.name}:`, err.message);
  }
}

console.log("\nAll requested screenshots captured successfully in:", OUTPUT_DIR);
