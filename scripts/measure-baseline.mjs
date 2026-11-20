import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const REPORT_DIR = "/Users/cristianvaduva/.gemini/antigravity/brain/1d6e8b9d-5cf0-4f75-9966-fa18237af1e7/lighthouse-reports";

function runLighthouse(url, isDesktop, runIndex, label = "baseline") {
  const mode = isDesktop ? "desktop" : "mobile";
  const outputPath = path.join(REPORT_DIR, `${label}-${mode}-run${runIndex}.json`);
  const desktopFlag = isDesktop ? "--preset=desktop" : "";
  const cmd = `npx -y lighthouse "${url}" --chrome-flags="--headless=new --no-sandbox" --output=json --output-path="${outputPath}" --only-categories=performance,accessibility,best-practices,seo ${desktopFlag} --quiet`;
  
  console.log(`Running Lighthouse (${mode}, run ${runIndex}) on ${url}...`);
  try {
    execSync(cmd, { stdio: "inherit", timeout: 90000 });
    const report = JSON.parse(fs.readFileSync(outputPath, "utf8"));
    const categories = report.categories;
    const audits = report.audits;
    
    return {
      mode,
      run: runIndex,
      performance: Math.round((categories.performance?.score || 0) * 100),
      accessibility: Math.round((categories.accessibility?.score || 0) * 100),
      bestPractices: Math.round((categories["best-practices"]?.score || 0) * 100),
      seo: Math.round((categories.seo?.score || 0) * 100),
      fcp: audits["first-contentful-paint"]?.displayValue || audits["first-contentful-paint"]?.numericValue,
      lcp: audits["largest-contentful-paint"]?.displayValue || audits["largest-contentful-paint"]?.numericValue,
      tbt: audits["total-blocking-time"]?.displayValue || audits["total-blocking-time"]?.numericValue,
      cls: audits["cumulative-layout-shift"]?.displayValue || audits["cumulative-layout-shift"]?.numericValue,
      speedIndex: audits["speed-index"]?.displayValue || audits["speed-index"]?.numericValue,
    };
  } catch (err) {
    console.error(`Error running lighthouse ${mode} run ${runIndex}:`, err.message);
    return null;
  }
}

async function main() {
  const targetUrl = process.argv[2] || "https://asistenta.cristianvaduva.com";
  const label = process.argv[3] || "baseline";
  console.log(`=== RUNNING LIGHTHOUSE AUDITS FOR ${targetUrl} (${label}) ===`);

  const results = { mobile: [], desktop: [] };

  // Run 3 times mobile, 3 times desktop
  for (let i = 1; i <= 3; i++) {
    const res = runLighthouse(targetUrl, false, i, label);
    if (res) results.mobile.push(res);
  }

  for (let i = 1; i <= 3; i++) {
    const res = runLighthouse(targetUrl, true, i, label);
    if (res) results.desktop.push(res);
  }

  const summaryPath = path.join(REPORT_DIR, `${label}-summary.json`);
  fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));

  console.log("\n=== AUDIT SUMMARY ===");
  console.table(results.mobile);
  console.table(results.desktop);
}

main().catch(console.error);
