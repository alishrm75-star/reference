// scripts/audit-hash.js
import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "path";

const root = process.cwd();
const skip = ["node_modules", ".next", ".git", "prisma/dev.db"];

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    const rel = abs.replace(root + path.sep, "").replace(/\\/g, "/");
    if (skip.some(s => rel === s || rel.startsWith(s + "/"))) continue;
    if (e.isDirectory()) out.push(...await walk(abs));
    else out.push(rel);
  }
  return out.sort();
}

async function sha256(file) {
  const buf = await fs.readFile(path.join(root, file));
  return createHash("sha256").update(buf).digest("hex");
}

const files = await walk(root);
const result = {};
for (const f of files) result[f] = await sha256(f);

await fs.writeFile("repo-hash.json", JSON.stringify(result, null, 2), "utf8");
console.log(`Hashed ${files.length} files -> repo-hash.json`);
