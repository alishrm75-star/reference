import { promises as fs } from "node:fs";
import path from "path";

const root = process.cwd();
const skip = ["node_modules", ".next", ".git", "prisma/dev.db", "prisma/dev.db-journal"];

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    const rel = abs.replace(root + path.sep, "").replace(/\\/g, "/");
    if (skip.some(s => rel === s || rel.startsWith(s + "/"))) continue;
    if (e.isDirectory()) out.push(...await walk(abs));
    else {
      const stat = await fs.stat(abs);
      out.push({ path: rel, size: stat.size, mtime: stat.mtime.toISOString() });
    }
  }
  return out.sort((a, b) => a.path.localeCompare(b.path));
}

const tree = await walk(root);
await fs.writeFile("repo-tree.json", JSON.stringify(tree, null, 2), "utf8");
console.log(`Tree of ${tree.length} files -> repo-tree.json`);
