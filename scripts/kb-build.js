// scripts/kb-build.js — простая, без зависимостей.
// Делает kb/manifest.json со списком всех файлов референса и sha256.
import fs from "fs";
import path from "path";
import crypto from "crypto";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "kb");
const OUT = path.join(OUT_DIR, "manifest.json");

// поддерживаем твою текущую раскладку в корне и альтернативную docs/reference/*
const CANDIDATE_ROOTS = [
  path.join(ROOT, "docs", "reference"),
  ROOT
];

const FOLDERS = ["html", "har", "img", "css", "scc", "fonts", "tokens"];
const EXT_BY_FOLDER = {
  html: [".html"],
  har: [".har"],
  img: [".png"],
  css: [".css"],
  scc: [".css"],
  fonts: [".woff2", ".woff", ".ttf", ".otf"],
  tokens: [".json", ".csv"]
};

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}
const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");

const manifest = {
  generatedAt: new Date().toISOString(),
  rootsUsed: [],
  files: {},   // {folder: [{path, bytes, sha256}]}
  counts: {}   // {folder: number}
};

for (const base of CANDIDATE_ROOTS) {
  for (const folder of FOLDERS) {
    const dir = path.join(base, folder);
    if (!fs.existsSync(dir)) continue;
    manifest.rootsUsed.push(base.replace(ROOT + path.sep, ""));
    const all = walk(dir);
    const exts = EXT_BY_FOLDER[folder];
    const picked = all.filter(f => exts.includes(path.extname(f).toLowerCase()));
    if (!picked.length) continue;
    const arr = picked.map(f => {
      const rel = f.replace(ROOT + path.sep, "");
      const buf = fs.readFileSync(f);
      return { path: rel, bytes: buf.length, sha256: sha256(buf) };
    });
    manifest.files[folder] = (manifest.files[folder] || []).concat(arr);
  }
}
// посчитать количества
for (const k of Object.keys(manifest.files)) manifest.counts[k] = manifest.files[k].length;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2));
console.log("OK →", OUT);
console.table(manifest.counts);
