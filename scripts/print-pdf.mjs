import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const chrome =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const jobs = [
  ["docs/proposal-databypassion-reallife.html", "docs/proposal-databypassion-reallife.pdf"],
  ["docs/nuno-call-script.html", "docs/nuno-call-script.pdf"],
];

mkdirSync(path.join(root, "docs"), { recursive: true });

for (const [htmlRel, pdfRel] of jobs) {
  const html = path.join(root, htmlRel);
  const pdf = path.join(root, pdfRel);
  const result = spawnSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdf}`,
      `file://${html}`,
    ],
    { stdio: "inherit" },
  );
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  console.log("wrote", pdf);
}
