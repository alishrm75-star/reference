// scripts/kb-coverage.js
const fs = require("fs");

const REQUIRED_SCREENS = [
  "branch-home", "select-master", "select-service", "select-slot", "confirm"
];

function loadManifest() {
  const p = "kb/manifest.json";
  if (!fs.existsSync(p)) throw new Error("Run kb:build first (kb/manifest.json not found).");
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function score(files, needle) {
  return files.some(f => f.toLowerCase().includes(needle));
}

const m = loadManifest();

const report = {
  generatedAt: new Date().toISOString(),
  totals: m.counts,
  screens: {}
};

for (const screen of REQUIRED_SCREENS) {
  const htmlOK = score(m.files.html || [], screen);
  const harOK  = score(m.files.har  || [], screen);
  const imgOK  = score(m.files.img  || [], screen);
  report.screens[screen] = { html: htmlOK, har: harOK, img: imgOK };
}

fs.writeFileSync("kb/coverage.json", JSON.stringify(report, null, 2));
console.log("Coverage written to kb/coverage.json");
console.log(report);
