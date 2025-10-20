// scripts/ref-copy-assets.js
// Копирует ассеты (CSS, шрифты, изображения) в public/ref-assets/
// для использования HTML-снимками внутри iframe
import { promises as fs } from "node:fs";
import path from "node:path";

const PAIRS = [
  { from: "scc",   to: "public/ref-assets/css" },
  { from: "fonts", to: "public/ref-assets/fonts" },
  { from: "img",   to: "public/ref-assets/img" },
];

/**
 * Рекурсивно копирует директорию
 */
async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const items = await fs.readdir(src, { withFileTypes: true });
  
  for (const item of items) {
    // Пропускаем системные файлы
    if (item.name === "desktop.ini" || item.name.startsWith(".")) {
      continue;
    }

    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);

    if (item.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  console.log("🔨 Копирование ассетов в public/ref-assets/...\n");

  for (const { from, to } of PAIRS) {
    try {
      await fs.stat(from);
    } catch {
      console.log(`⚠️  Пропускаю: нет папки ${from}`);
      continue;
    }

    await copyDir(from, to);
    console.log(`✅ Скопировано: ${from} → ${to}`);
  }

  console.log("\n📂 Ассеты готовы в public/ref-assets/");
}

main().catch(e => {
  console.error("❌ Ошибка:", e);
  process.exit(1);
});

