// scripts/kb-build.js
const fs = require("fs");
const path = require("path");

const FALLBACKS = [
  "docs/reference",           // вариант №1
  ".",                        // вариант №2 — текущие папки в корне
];

const SUBS = [
  { name: "html", exts: [".html"] },
  { name: "har", exts: [".har"] },
  { name: "img", exts: [".png"] },
  { name: "css", exts: [".css", ".scss"] }, // у тебя сейчас scc → тоже считаем css
  { name: "scc", exts: [".css"] },          // поддержим папку scc как css
  { name: "fonts", exts: [".woff2", ".woff", ".ttf"] },
  { name: "tokens", exts: [".json", ".csv"] },
];

function existingRoots() {
  return FALLBACKS.map(p => path.resolve(process.cwd(), p)).filter(p => fs.existsSync(p));
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function collect(root) {
  const base = {};
  for (const sub of SUBS) {
    const candidates = [path.join(root, sub.name)];
    // спец-случай: если root === '.' — ищем строго папку sub.name в корне
    for (const c of candidates) {
      if (!fs.existsSync(c)) continue;
      const files = walk(c)
        .filter(f => sub.exts.includes(path.extname(f).toLowerCase()))
        .map(f => f.replace(process.cwd() + path.sep, ""));
      if (files.length) base[sub.name] = (base[sub.name] || []).concat(files);
    }
  }
  return base;
}

const roots = existingRoots();
if (!roots.length) {
  console.error("No reference folders found. Expected either docs/reference/* or root-level folders.");
  process.exit(2);
}

const kb = { generatedAt: new Date().toISOString(), roots: [], files: {}, counts: {} };

for (const r of roots) {
  const got = collect(r);
  kb.roots.push(r.replace(process.cwd() + path.sep, ""));
  for (const k of Object.keys(got)) {
    kb.files[k] = (kb.files[k] || []).concat(got[k]);
  }
}

for (const k of Object.keys(kb.files)) kb.counts[k] = kb.files[k].length;

fs.mkdirSync("kb", { recursive: true });
fs.writeFileSync("kb/manifest.json", JSON.stringify(kb, null, 2));
console.log("KB manifest written to kb/manifest.json");
console.table(kb.counts);
