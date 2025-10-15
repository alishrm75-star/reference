// Строит kb/coverage.json по факту содержимого HTML (и fallback по имени)
import fs from "fs";

const MANIFEST = "kb/manifest.json";
if (!fs.existsSync(MANIFEST)) {
  console.error("Run kb:build first — kb/manifest.json not found.");
  process.exit(2);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const files = manifest.files || {};
const html = files.html || [];
const har  = files.har  || [];
const img  = files.img  || [];

const SCREENS = {
  "branch-home": { htmlHints: [/филиал|branch|карта|map/i] },
  "select-master": { htmlHints: [/мастер|master|звезд|rating|аватар/i] },
  "select-service": { htmlHints: [/услуг|service|цена|длительн/i] },
  "select-time": { htmlHints: [/слот|slot|расписан|время|time/i] },
  "confirm": { htmlHints: [/подтвержд|confirm|телефон|имя|форма/i] }
};

function loadText(p) {
  try { return fs.readFileSync(p, "utf8").slice(0, 500_000); } catch { return ""; }
}

function classifyHtml() {
  const byScreen = {};
  for (const f of html) {
    const p = f.path;
    const t = loadText(p);
    let tagged = false;
    for (const [screen, cfg] of Object.entries(SCREENS)) {
      if (cfg.htmlHints.some(re => re.test(t))) {
        (byScreen[screen] ||= []).push(p);
        tagged = true;
      }
    }
    if (!tagged) {
      for (const screen of Object.keys(SCREENS)) {
        if (p.toLowerCase().includes(screen.replace("-", "_").replace("-", "_"))) {
          (byScreen[screen] ||= []).push(p);
        }
      }
    }
  }
  return byScreen;
}

function anyForScreen(arr, screen) {
  const s = screen.replace("-", "_");
  return (arr || []).some(x => x.path.toLowerCase().includes(s));
}

const htmlByScreen = classifyHtml();
const report = {
  generatedAt: new Date().toISOString(),
  totals: manifest.counts || {},
  screens: {}
};

for (const screen of Object.keys(SCREENS)) {
  const htmlOK = !!(htmlByScreen[screen]?.length);
  const harOK  = anyForScreen(har, screen);
  const imgOK  = anyForScreen(img, screen);
  report.screens[screen] = { detectedBy: htmlOK ? "content" : "filename-or-missing", html: htmlOK, har: harOK, img: imgOK };
}

fs.mkdirSync("kb", { recursive: true });
fs.writeFileSync("kb/coverage.json", JSON.stringify(report, null, 2));
console.log("OK → kb/coverage.json");
