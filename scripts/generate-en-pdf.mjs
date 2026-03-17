/**
 * generate-en-pdf.mjs
 *
 * Generates public/downloads/thesis-en.pdf by rendering /en/thesis/print
 * in a headless Chrome browser and printing to PDF.
 *
 * Usage:
 *   1. Start the dev server:  npm run dev
 *   2. In another terminal:   node scripts/generate-en-pdf.mjs
 *
 * Requires Google Chrome to be installed at the standard macOS path.
 * Adjust CHROME_PATH below if needed.
 */

import puppeteer from "puppeteer-core";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const CHROME_PATH =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PRINT_URL = "http://localhost:3000/en/thesis/print";
const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/downloads/thesis-en.pdf"
);

async function waitForServer(url, retries = 30, delayMs = 2000) {
  const { default: http } = await import("http");
  for (let i = 0; i < retries; i++) {
    try {
      await new Promise((resolve, reject) => {
        http
          .get(url, (res) => resolve(res))
          .on("error", (e) => reject(e));
      });
      return;
    } catch {
      console.log(`Waiting for server... (${i + 1}/${retries})`);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw new Error(`Server at ${url} did not respond after ${retries} retries.`);
}

(async () => {
  if (!fs.existsSync(CHROME_PATH)) {
    console.error(`Chrome not found at: ${CHROME_PATH}`);
    console.error("Update CHROME_PATH in this script to match your installation.");
    process.exit(1);
  }

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

  console.log("Checking dev server is running...");
  await waitForServer("http://localhost:3000");
  console.log("Server is up.");

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    protocolTimeout: 180000,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // Set a viewport matching A4 at 96dpi ≈ 794×1123px
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

    // Disable lazy loading so all images load immediately
    await page.setExtraHTTPHeaders({ "Accept": "text/html,*/*" });

    console.log(`Navigating to ${PRINT_URL}...`);
    await page.goto(PRINT_URL, { waitUntil: "domcontentloaded", timeout: 60000 });

    // Force all images to load eagerly (next/image uses loading="lazy" by default)
    console.log("Forcing eager image loading...");
    await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      imgs.forEach((img) => {
        img.loading = "eager";
        // If the browser hasn't started fetching (no naturalWidth), re-trigger by cloning src
        if (!img.complete || img.naturalWidth === 0) {
          const src = img.src || img.getAttribute("src");
          if (src) {
            img.src = "";
            img.src = src;
          }
        }
      });
    });

    // Give the browser time to start fetching all images
    await new Promise((r) => setTimeout(r, 2000));

    // Extend viewport height to full page so IntersectionObserver fires for all images
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.setViewport({ width: 794, height: pageHeight, deviceScaleFactor: 2 });

    // Wait for all images to complete loading
    console.log("Waiting for all images to finish loading...");
    await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll("img"));
      console.log(`Waiting for ${imgs.length} images`);
      await Promise.all(
        imgs.map((img) =>
          img.complete && img.naturalWidth > 0
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
                setTimeout(resolve, 15000); // safety timeout per image
              })
        )
      );
    }, { timeout: 120000 });

    // Reset viewport back to A4 for PDF generation
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

    // Brief extra wait for final repaints
    await new Promise((r) => setTimeout(r, 1500));

    console.log("Generating PDF...");
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "2.5cm", right: "3cm", bottom: "2.5cm", left: "3cm" },
      displayHeaderFooter: false,
    });

    fs.writeFileSync(OUTPUT_PATH, pdf);
    const sizeMB = (fs.statSync(OUTPUT_PATH).size / 1024 / 1024).toFixed(1);
    console.log(`Done! Saved to ${OUTPUT_PATH} (${sizeMB} MB)`);
  } finally {
    await browser.close();
  }
})();
