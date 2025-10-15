// scripts/kb-coverage.js
import fs from "fs";

const MANIFEST = "kb/manifest.json";
if (!fs.existsSync(MANIFEST)) {
  console.error("Run kb:build first — kb/manifest.json not found.");
  process.exit(2);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));

const SCREENS = {
  "branch-home": {
    htmlHints: [/записаться/i, /branch/i, /home/i, /hero/i],
  },
  "select-master": {
    htmlHints: [/мастер/i, /master/i, /аватар/i, /rating/i, /звезд/i],
  },
  "select-service": {
    htmlHints: [/услуг/i, /service/i, /длительн/i, /цена/i],
  },
  "select-slot": {
    htmlHints: [/слот/i, /slot/i, /расписан/i, /недел/i, /time/i],
  },
  "confirm": {
    htmlHints: [/подтвержд/i, /confirm/i, /имя/i, /телефон/i, /форма/i],
  }
};

function loadText(rel) {
  try {
    const text = fs.readFileSync(rel, "utf8");
    // ограничим размер на случай огромных файлов
    return text.slice(0, 500_000);
  } catch {
    return "";
  }
}

function classifyHtmlByContent(htmlFiles) {
  // вернём карту: screen → массив путей
  const map = {};
  for (const f of htmlFiles) {
    const text = loadText(f.path);
    for (const [screen, cfg] of Object.entries(SCREENS)) {
      const ok = cfg.htmlHints?.some((re) => re.test(text));
      if (ok) {
        (map[screen] ||= []).push(f.path);
      }
    }
    // Fallback по названию файла (на случай, если контент не распознан)
    if (!Object.values(map).some(list => list?.includes(f.path))) {
      for (const screen of Object.keys(SCREENS)) {
        if (f.path.toLowerCase().includes(screen)) {
          (map[screen] ||= []).push(f.path);
        }
      }
    }
  }
  return map;
}

function existsForScreen(files, screen) {
  return files?.some(x =>
    x.path.toLowerCase().includes(screen) // по имени
  );
}

const files = manifest.files || {};
const htmlFiles = files.html || [];
const harFiles  = files.har  || [];
const imgFiles  = files.img  || [];

const htmlByScreen = classifyHtmlByContent(htmlFiles);

const report = {
  generatedAt: new Date().toISOString(),
  totals: manifest.counts || {},
  screens: {}
};

for (const screen of Object.keys(SCREENS)) {
  const htmlOK = !!(htmlByScreen[screen]?.length);
  const harOK  = existsForScreen(harFiles, screen);
  const imgOK  = existsForScreen(imgFiles, screen);
  report.screens[screen] = {
    detectedBy: htmlOK ? "content" : "filename-or-missing",
    html: htmlOK,
    har: harOK,
    img: imgOK
  };
}

fs.writeFileSync("kb/coverage.json", JSON.stringify(report, null, 2));
console.log("KB coverage:", "kb/coverage.json");
console.log(report);
