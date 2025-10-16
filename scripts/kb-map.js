// scripts/kb-map.js
// Строит контент-первую карту соответствий экранов → файлы HTML/HAR/IMG.
// Вход: kb/manifest.json + сами HTML/HAR (чтение содержимого).
// Выход: kb/map.json (машиночитаемый «рецепт» для повторения UI).

import fs from "fs";

// ---------- helpers ----------
const readJSON = (p) => { try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; } };
const readText = (p, limit = 800_000) => { try { return fs.readFileSync(p, "utf8").slice(0, limit); } catch { return ""; } };

const MANIFEST = "kb/manifest.json";
if (!fs.existsSync(MANIFEST)) {
  console.error("kb/manifest.json not found. Run kb:build first.");
  process.exit(2);
}

const manifest = readJSON(MANIFEST) || {};
const files = manifest.files || {};
const HTML = files.html || [];
const HAR  = files.har  || [];
const IMG  = files.img  || [];

// ---------- 1) Контентные детекторы для HTML (DOM/текст) ----------
/*
  Логика: у экрана есть набор признаков, которые должны встретиться в тексте/DOM.
  Мы НЕ используем имена файлов — только содержимое.
*/
const HTML_DET = {
  "branch-home": [
    /филиал|адрес|телефон|branch|location|карта|map/i
  ],
  "select-master": [
    /мастер|master/i, /(аватар|avatar|rating|рейтинг|звезд)/i
  ],
  "select-service": [
    /услу[г]|service/i, /(цена|стоим|price)/i
  ],
  "select-time": [
    /(время|time|слот|slot|расписан|schedule|календар|calendar)/i
  ],
  "confirm": [
    /(подтвержд|confirm|оформлени)/i, /(телефон|phone)/i, /(имя|name)/i
  ],
  "success": [
    /(успешн|успех|запись создан|order|номер)/i
  ]
};

function classifyHTMLByContent() {
  const bucket = Object.fromEntries(Object.keys(HTML_DET).map(k => [k, []]));
  for (const f of HTML) {
    const t = readText(f.path);
    for (const [screen, rules] of Object.entries(HTML_DET)) {
      const ok = rules.every(re => re.test(t));
      if (ok) bucket[screen].push(f.path);
    }
  }
  return bucket;
}

// ---------- 2) Контентные детекторы для HAR (эндпоинты/пути) ----------
/*
  Логика: смотрим ВСЕ URL из entries и проверяем характерные паттерны.
  Например: select-time → /slots|/schedule; confirm → POST /booking|/orders
*/
const HAR_DET = {
  "branch-home":   [/\/branch|\/branches|\/location|\/locations/i],
  "select-master": [/\/master|\/masters|\/staff/i],
  "select-service":[/\/service|\/services/i],
  "select-time":   [/\/slot|\/slots|\/schedule/i],
  "confirm":       [/\/booking|\/bookings|\/order|\/orders/i],  // + проверим метод ниже
  "success":       [/\/booking\/[a-z0-9]+|\/order\/[a-z0-9]+/i]
};

function collectHarUrls(j) {
  const out = [];
  const entries = j?.log?.entries || [];
  for (const e of entries) {
    const url = e?.request?.url || "";
    const method = e?.request?.method || "";
    out.push({ url, method });
  }
  return out;
}

function classifyHARByContent() {
  const bucket = Object.fromEntries(Object.keys(HAR_DET).map(k => [k, []]));
  for (const f of HAR) {
    const j = readJSON(f.path);
    if (!j) continue;
    const urls = collectHarUrls(j);

    const hit = (screen) => {
      const pats = HAR_DET[screen];
      return pats.some(re => urls.some(u => re.test(u.url)));
    };

    for (const screen of Object.keys(HAR_DET)) {
      if (!hit(screen)) continue;
      // Дополнительный фильтр для confirm: наличие POST/PUT/PATCH на booking/orders
      if (screen === "confirm") {
        const hasWrite = urls.some(u =>
          /(POST|PUT|PATCH)/i.test(u.method) &&
          /\/(booking|bookings|order|orders)/i.test(u.url)
        );
        if (!hasWrite) continue; // "confirm" считаем только если видим сабмит/создание
      }
      bucket[screen].push(f.path);
    }
  }
  return bucket;
}

// ---------- 3) Классификация IMG (только вспомогательная визуальная опора) ----------
/*
  Для IMG мы не можем анализировать пиксели без CV, поэтому просто раскладываем
  по ключевым словам в путях — это НЕ влияет на достоверность HTML/HAR.
*/
const IMG_HINTS = {
  "branch-home": /(branch|map|филиал|карта)/i,
  "select-master": /(master|мастер)/i,
  "select-service": /(service|услу)/i,
  "select-time": /(time|slot|время|слот|schedule|календар)/i,
  "confirm": /(confirm|подтверж)/i,
  "success": /(success|успеш)/i
};

function classifyIMGHeuristic() {
  const bucket = Object.fromEntries(Object.keys(IMG_HINTS).map(k => [k, []]));
  for (const f of IMG) {
    const p = f.path.toLowerCase();
    for (const [screen, re] of Object.entries(IMG_HINTS)) {
      if (re.test(p)) bucket[screen].push(f.path);
    }
  }
  return bucket;
}

// ---------- 4) Собираем карту ----------
const htmlBy = classifyHTMLByContent();
const harBy  = classifyHARByContent();
const imgBy  = classifyIMGHeuristic();

const map = {
  generatedAt: new Date().toISOString(),
  totals: manifest.counts || {},
  screens: {}
};

for (const screen of ["branch-home","select-master","select-service","select-time","confirm","success"]) {
  map.screens[screen] = {
    html: htmlBy[screen] || [],
    har:  harBy[screen]  || [],
    img:  imgBy[screen]  || []
  };
}

fs.mkdirSync("kb", { recursive: true });
fs.writeFileSync("kb/map.json", JSON.stringify(map, null, 2));
console.log("OK → kb/map.json");
