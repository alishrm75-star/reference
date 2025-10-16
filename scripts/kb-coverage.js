// scripts/kb-coverage.js
// Контент-первый coverage: НИКАКОЙ опоры на имена. Только содержимое HTML/HAR/IMG.
// Результат: kb/coverage.json

import fs from "fs";
import path from "path";

// === helpers ===
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

const readText = (p, limit=800_000) => {
  try { return fs.readFileSync(p, "utf8").slice(0, limit); } catch { return ""; }
};
const readJSON = (p) => {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
};

// --- 1) Детект экранов ПО СОДЕРЖИМОМУ HTML ---
/*
  Мы ищем признаки в тексте и структуре:
  - select-branch (branch-home): список филиалов, карта
  - select-master: карточки мастеров, аватар, рейтинг
  - select-service: услуги, цена, длительность
  - select-time: даты/слоты/календарь/неделя
  - confirm: форма подтверждения (имя, телефон, кнопка)
  - success: текст об успешной записи / номер заказа
*/
const htmlDetectors = {
  "branch-home": [
    /филиал|branch|адрес|карта|map/i,
    /записать|записаться|выбрать/i
  ],
  "select-master": [
    /мастер|master/i,
    /аватар|avatar|рейтинг|rating|звезд/i
  ],
  "select-service": [
    /услу[г]|service/i,
    /цена|стоим|price/i,
    /длительн|duration/i
  ],
  "select-time": [
    /время|time|слот|slot|расписан|calendar|календар/i,
    /дата|недел/i
  ],
  "confirm": [
    /подтвержд|confirm|оформлени/i,
    /телефон|phone/i,
    /имя|name/i,
    /кнопк|button|отправ/i
  ],
  "success": [
    /успешн|успех|запись создан|order|номер/i
  ]
};

function classifyHTML() {
  const bucket = {
    "branch-home": [],
    "select-master": [],
    "select-service": [],
    "select-time": [],
    "confirm": [],
    "success": []
  };
  for (const f of html) {
    const t = readText(f.path);
    for (const [screen, rules] of Object.entries(htmlDetectors)) {
      const ok = rules.every(re => re.test(t)); // все признаки для надёжности
      if (ok) bucket[screen].push(f.path);
    }
  }
  return bucket;
}

// --- 2) Детект шагов ПО СОДЕРЖИМОМУ HAR ---
/*
  Ищем характерные эндпоинты/паттерны:
  - branch-home: /branches|/locations
  - select-master: /masters|/staff
  - select-service: /services (или услуги по мастеру)
  - select-time: /slots|/schedule
  - confirm: /booking|/orders (POST/PUT/PATCH)
  - success: /order|/booking/{id} (GET после создания)
*/
const harDetectors = {
  "branch-home":   [/\/branch|\/branches|\/locations/i],
  "select-master": [/\/master|\/masters|\/staff/i],
  "select-service":[/\/service|\/services/i],
  "select-time":   [/\/slot|\/slots|\/schedule/i],
  "confirm":       [/\/booking|\/bookings|\/order|\/orders/i],
  "success":       [/\/booking\/\w+|\/order\/\w+/i]
};

function classifyHAR() {
  const bucket = {
    "branch-home": [],
    "select-master": [],
    "select-service": [],
    "select-time": [],
    "confirm": [],
    "success": []
  };
  for (const f of har) {
    const j = readJSON(f.path);
    if (!j || !j.log || !Array.isArray(j.log.entries)) continue;
    const allUrls = j.log.entries.map(e => (e.request && e.request.url) || "").join("\n");
    for (const [screen, patterns] of Object.entries(harDetectors)) {
      if (patterns.some(re => re.test(allUrls))) bucket[screen].push(f.path);
    }
  }
  return bucket;
}

// --- 3) Детект по IMG (по содержимому мы тут мало что вытащим без CV),
// поэтому отмечаем наличие скринов как факт наличия визуальной опоры для шага.
// Привязку делаем эвристически по "ключевым словам в пути" К ТИПУ ЭКРАНА,
// но это НЕ влияет на факт покрытия HTML/HAR (они уже контентные).
const imgKeywords = {
  "branch-home": /branch|map|филиал|карта/i,
  "select-master": /master|мастер/i,
  "select-service": /service|услу/i,
  "select-time": /time|slot|время|слот/i,
  "confirm": /confirm|подтверж/i,
  "success": /success|успеш/i
};
function classifyIMG() {
  const bucket = {
    "branch-home": [],
    "select-master": [],
    "select-service": [],
    "select-time": [],
    "confirm": [],
    "success": []
  };
  for (const f of img) {
    const p = f.path.toLowerCase();
    for (const [screen, re] of Object.entries(imgKeywords)) {
      if (re.test(p)) bucket[screen].push(f.path);
    }
  }
  return bucket;
}

// --- 4) Сводный отчёт
const htmlBy = classifyHTML();
const harBy  = classifyHAR();
const imgBy  = classifyIMG();

const report = {
  generatedAt: new Date().toISOString(),
  totals: manifest.counts || {},
  screens: {}
};

for (const screen of ["branch-home","select-master","select-service","select-time","confirm","success"]) {
  report.screens[screen] = {
    html: (htmlBy[screen] || []).length > 0,
    har:  (harBy[screen]  || []).length > 0,
    img:  (imgBy[screen]  || []).length > 0,
    html_files: htmlBy[screen] || [],
    har_files:  harBy[screen]  || [],
    img_files:  imgBy[screen]  || []
  };
}

fs.mkdirSync("kb", { recursive: true });
fs.writeFileSync("kb/coverage.json", JSON.stringify(report, null, 2));
console.log("OK → kb/coverage.json");
