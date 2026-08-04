// Rebuilds public/PAKSHIKAA_ELANGO_QA_ENGINEER_RESUME.pdf from resume.html.
//
//   node resume/build.js
//
// Needs a Chromium. Uses PLAYWRIGHT_CHROMIUM or falls back to a local Chrome.
// The original PDF was produced by Chromium print-to-PDF (Skia/PDF), so this
// reproduces it rather than introducing a second rendering engine.

const path = require("path");
const fs = require("fs");

const HTML = path.join(__dirname, "resume.html");
const OUT = path.join(__dirname, "..", "public", "PAKSHIKAA_ELANGO_QA_ENGINEER_RESUME.pdf");

const CANDIDATES = [
  process.env.PLAYWRIGHT_CHROMIUM,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

(async () => {
  let chromium;
  try {
    ({ chromium } = require("playwright-core"));
  } catch {
    console.error("playwright-core is not installed. Run: npm i -D playwright-core");
    process.exit(1);
  }

  const exe = CANDIDATES.find((p) => fs.existsSync(p));
  if (!exe) {
    console.error("No Chromium found. Set PLAYWRIGHT_CHROMIUM to a Chrome/Chromium binary.");
    process.exit(1);
  }

  const browser = await chromium.launch({ executablePath: exe });
  const page = await browser.newPage();
  await page.goto("file://" + HTML.replace(/\\/g, "/"), { waitUntil: "load" });
  await page.pdf({
    path: OUT,
    format: "Letter",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();

  const pages = fs.readFileSync(OUT).toString("latin1").match(/\/Type\s*\/Page[^s]/g);
  console.log(`Wrote ${OUT}`);
  console.log(`  ${(fs.statSync(OUT).size / 1024).toFixed(1)} KB, ${pages ? pages.length : "?"} page(s)`);
})();
