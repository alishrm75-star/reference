// scripts/ref-rewrite-html.js
// Переписывает пути в HTML-снимках и копирует их в public/ref-html/
// Преобразует внутренние ссылки на /ref-assets/* для корректной работы в iframe
import { promises as fs } from "node:fs";
import path from "path";

const REF_MAP = "ref-map.json";
const OUTPUT_DIR = "public/ref-html";

/**
 * Переписывает пути к ассетам в HTML
 * Преобразует:
 * - /scc/* → /ref-assets/css/*
 * - /fonts/* → /ref-assets/fonts/*
 * - /img/* → /ref-assets/img/*
 * - href="/scc/scc.css" → href="/ref-assets/css/scc.css"
 * - url("./media/*") → url("/ref-assets/fonts/*")
 */
function rewriteAssetPaths(html) {
  let result = html;

  // CSS файлы: /scc/scc.css → /ref-assets/css/scc.css
  result = result.replace(
    /(['"])(\/scc\/[^'"]*\.css)(['"])/gi,
    (match, q1, path, q2) => {
      const newPath = path.replace(/^\/scc\//, "/ref-assets/css/");
      return `${q1}${newPath}${q2}`;
    }
  );

  // Шрифты в CSS: url(/scc/media/*.woff2) → url(/ref-assets/fonts/*.woff2)
  result = result.replace(
    /url\((['"]?)(\/scc\/media\/[^'")\s]+)(['"]?)\)/gi,
    (match, q1, path, q2) => {
      const newPath = path.replace(/^\/scc\/media\//, "/ref-assets/fonts/");
      return `url(${q1}${newPath}${q2})`;
    }
  );

  // Относительные пути к шрифтам: url("./media/*.woff2") → url("/ref-assets/fonts/*.woff2")
  result = result.replace(
    /url\((['"]?)\.\/media\/([^'")\s]+\.(woff2?|ttf|otf|eot))(['"]?)\)/gi,
    (match, q1, filename, ext, q2) => {
      return `url(${q1}/ref-assets/fonts/${filename}${q2})`;
    }
  );

  // Шрифты: /fonts/* → /ref-assets/fonts/*
  result = result.replace(
    /(['"])(\/fonts\/[^'"]*\.(woff2?|ttf|otf|eot))(['"])/gi,
    (match, q1, path, q2) => {
      const newPath = path.replace(/^\/fonts\//, "/ref-assets/fonts/");
      return `${q1}${newPath}${q2}`;
    }
  );

  // Изображения: /img/* → /ref-assets/img/*
  result = result.replace(
    /(['"])(\/img\/[^'"]*\.(png|jpg|jpeg|gif|webp|svg))(['"])/gi,
    (match, q1, path, q2) => {
      const newPath = path.replace(/^\/img\//, "/ref-assets/img/");
      return `${q1}${newPath}${q2}`;
    }
  );

  // Удаляем или игнорируем внешние CDN ссылки (они останутся как есть и будут 404)
  // Например: /cdn-cgi/* от Cloudflare - не трогаем, это нормально

  return result;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function main() {
  console.log("🔨 Переписываем HTML и копируем в public/ref-html/...\n");

  // 1) Читаем ref-map.json
  const mapData = await fs.readFile(REF_MAP, "utf8");
  const refMap = JSON.parse(mapData);

  if (!Array.isArray(refMap) || refMap.length === 0) {
    console.error("❌ ref-map.json пустой или некорректный");
    process.exit(1);
  }

  // 2) Создаем выходную директорию
  await ensureDir(OUTPUT_DIR);

  // 3) Обрабатываем каждый HTML
  let processed = 0;
  let errors = 0;

  for (const item of refMap) {
    const { slug, srcHtmlPath } = item;

    try {
      // Читаем исходный HTML
      const html = await fs.readFile(srcHtmlPath, "utf8");

      // Переписываем пути
      const rewritten = rewriteAssetPaths(html);

      // Сохраняем в public/ref-html/{slug}.html
      const outputPath = path.join(OUTPUT_DIR, `${slug}.html`);
      await fs.writeFile(outputPath, rewritten, "utf8");

      processed++;
    } catch (err) {
      console.error(`❌ Ошибка при обработке ${slug}:`, err.message);
      errors++;
    }
  }

  console.log(`\n✅ Обработано: ${processed} файлов`);
  if (errors > 0) {
    console.log(`⚠️  Ошибок: ${errors}`);
  }
  console.log(`📂 Директория: ${OUTPUT_DIR}`);
}

main().catch((e) => {
  console.error("❌ Критическая ошибка:", e);
  process.exit(1);
});

