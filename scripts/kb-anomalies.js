// Строит kb/anomalies.json: дубликаты по sha256 и непарные материалы
import fs from "fs";

const MANIFEST = "kb/manifest.json";
if (!fs.existsSync(MANIFEST)) {
  console.error("Run kb:build first — kb/manifest.json not found.");
  process.exit(2);
}
const m = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const files = m.files || {};
const kinds = Object.keys(files);

function duplicatesByHash(list) {
  const map = new Map();
  for (const f of list) {
    const key = f.sha256 + "::" + (f.bytes || "?");
    (map.get(key) || map.set(key, []).get(key)).push(f.path);
  }
  return [...map.entries()].filter(([, arr]) => arr.length > 1).map(([k, arr]) => ({ key: k.split("::")[0], files: arr }));
}

function baseName(p) {
  return p.toLowerCase()
    .replace(/\.html$|\.har$|\.png$|\.jpg$|\.jpeg$|\.webp$|\.gif$|\.css$/g, "")
    .replace(/[^a-z0-9_-]+/g, "_");
}

function indexByBase(list) {
  const map = new Map();
  for (const f of list) {
    const b = baseName(f.path);
    (map.get(b) || map.set(b, []).get(b)).push(f.path);
  }
  return map;
}

const htmlIdx = indexByBase(files.html || []);
const harIdx  = indexByBase(files.har  || []);
const imgIdx  = indexByBase(files.img  || []);

function withoutPair(aIdx, bIdx) {
  const res = [];
  for (const [k, paths] of aIdx.entries()) {
    if (!bIdx.has(k)) res.push({ key: k, files: paths });
  }
  return res;
}

const anomalies = {
  generatedAt: new Date().toISOString(),
  duplicates: {},
  unpaired: {
    html_without_har: withoutPair(htmlIdx, harIdx),
    har_without_html: withoutPair(harIdx, htmlIdx),
    html_without_img: withoutPair(htmlIdx, imgIdx),
    img_without_html: withoutPair(imgIdx, htmlIdx)
  }
};

for (const kind of kinds) {
  anomalies.duplicates[kind] = duplicatesByHash(files[kind]);
}

fs.mkdirSync("kb", { recursive: true });
fs.writeFileSync("kb/anomalies.json", JSON.stringify(anomalies, null, 2));
console.log("OK → kb/anomalies.json");
