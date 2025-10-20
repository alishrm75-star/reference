// scripts/ref-gen-pages.js
// Генерирует ref-map.json - таблицу соответствий slug → html-файл, title
// Используется для каталога /ref и динамической маршрутизации /ref/[slug]
import { promises as fs } from "node:fs";
import path from "path";

const HTML_DIR = "html";
const MAP_PATH = "ref-map.json";

/**
 * Преобразует имя файла в slug (URL-friendly)
 * Например: "select-master_time_default.html" → "select-master_time_default"
 */
function slugify(file) {
  return file
    .replace(/\.html?$/i, "")
    .replace(/[^\p{Letter}\p{Number}\-_/]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

/**
 * Генерирует читаемый title из имени файла
 * Например: "select-master_time_default.html" → "Select Master Time Default"
 */
function generateTitle(file) {
  return file
    .replace(/\.html?$/i, "")
    .replace(/[_-]/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

async function main() {
  console.log("🔨 Генерация ref-map.json...\n");

  // 1) Читаем список HTML-файлов
  const files = await fs.readdir(HTML_DIR);
  const htmlFiles = files
    .filter(f => f.toLowerCase().endsWith(".html") && !f.startsWith("desktop.ini"))
    .sort();

  if (htmlFiles.length === 0) {
    console.error(`❌ Нет HTML-файлов в папке ${HTML_DIR}`);
    process.exit(1);
  }

  // 2) Генерируем карту
  const map = htmlFiles.map(file => {
    const slug = slugify(file);
    const title = generateTitle(file);
    const srcHtmlPath = path.join(HTML_DIR, file);

    return {
      slug,
      title,
      srcHtmlPath,
      file, // оригинальное имя файла для отладки
    };
  });

  // 3) Сохраняем JSON
  await fs.writeFile(MAP_PATH, JSON.stringify(map, null, 2), "utf8");

  console.log(`✅ Сгенерировано записей: ${map.length}`);
  console.log(`📄 Файл: ${MAP_PATH}`);
  console.log(`\nПримеры slug:`);
  map.slice(0, 5).forEach(({ slug, title }) => {
    console.log(`  • ${slug} → "${title}"`);
  });
}

main().catch((e) => {
  console.error("❌ Ошибка:", e);
  process.exit(1);
});
