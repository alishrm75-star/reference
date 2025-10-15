// scripts/kb-build.js
import fs from "fs";
import path from "path";
import crypto from "crypto";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "kb");
const OUT = path.join(OUT_DIR, "manifest.json");

const ROOTS = [
  path.join(ROOT, "docs", "reference"), // вариант №1
  ROOT                                   // вариант №2 (текущие папки в корне)
];

const SUBS = [
  { name: "html", exts: [".html"] },
  { name: "har", exts: [".har"] },
  { name: "img", exts: [".png"] },
  { name: "css", exts: [".css"] },
  { name: "scc", exts: [".css"] }, // поддерживаем твою папку scc
  { name: "fonts", exts: [".woff2", ".woff", ".ttf", ".otf"] },
  { name: "tokens", exts: [".json", ".csv"] }
];

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function collect(root) {
  const base = {};
  for (const sub of SUBS) {
    const p = path.join(root, sub.name);
    if (!fs.existsSync(p)) continue;
    const files = walk(p).filter(f => sub.exts.includes(path.extname(f).toLowerCase()));
    if (!files.length) continue;
    base[sub.name] = files.map(f => {
      const rel = f.replace(ROOT + path.sep, "");
      const buf = fs.readFileSync(f);
      return {
        path: rel,
        bytes: buf.length,
        sha256: sha256(buf)
      };
    });
  }
  return base;
}

const kb = {
  generatedAt: new Date().toISOString(),
  rootsUsed: [],
  files: {},
  counts: {}
};

for (const r of ROOTS) {
  if (!fs.existsSync(r)) continue;
  const got = collect(r);
  if (Object.keys(got).length) kb.rootsUsed.push(r.replace(ROOT + path.sep, ""));
  for (const k of Object.keys(got)) {
    kb.files[k] = (kb.files[k] || []).concat(got[k]);
  }
}

for (const k of Object.keys(kb.files)) kb.counts[k] = kb.files[k].length;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(kb, null, 2));
console.log("KB manifest:", OUT);
console.table(kb.counts); 
