// scripts/ref-build-seq.js
// Анализирует HTML и HAR файлы для построения ref-seq.json
// Извлекает последовательности экранов и строит flows

import { promises as fs } from "node:fs";
import path from "path";

const HTML_DIR = "html";
const HAR_DIR = "har";
const REF_MAP = "ref-map.json";
const OUTPUT = "ref-seq.json";

/**
 * Извлекает slug из имени файла
 */
function getSlugFromFilename(filename) {
  return filename
    .replace(/\.html$/i, "")
    .replace(/\.har$/i, "")
    .toLowerCase();
}

/**
 * Извлекает человекочитаемый title из slug
 */
function slugToTitle(slug) {
  return slug
    .replace(/[_-]/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Анализирует HAR файл и извлекает последовательность страниц
 * (Упрощённая версия - только extracting flow type from filename)
 */
async function analyzeHAR(harPath) {
  // HAR файлы слишком большие для полного парсинга
  // Используем только имена файлов для определения flow
  return { pages: [], transitions: [] };
}

/**
 * Извлекает flow из имени HAR файла
 * Примеры: service-first__master-and-slot@guest.har → "service-first"
 */
function extractFlowFromFilename(filename) {
  const match = filename.match(/^(service-first|master-first|time-first)__/);
  return match ? match[1] : null;
}

/**
 * Анализирует все HAR файлы и строит граф переходов
 */
async function analyzeAllHARs() {
  console.log("📊 Анализ HAR файлов (по именам)...\n");
  
  const files = await fs.readdir(HAR_DIR);
  const harFiles = files.filter(f => f.endsWith(".har"));
  
  const flowFiles = {
    "service-first": [],
    "master-first": [],
    "time-first": []
  };
  
  // Группируем HAR файлы по flows
  for (const file of harFiles) {
    const flow = extractFlowFromFilename(file);
    if (flow && flowFiles[flow]) {
      flowFiles[flow].push(file);
    }
  }
  
  console.log(`  • service-first: ${flowFiles["service-first"].length} файлов`);
  console.log(`  • master-first: ${flowFiles["master-first"].length} файлов`);
  console.log(`  • time-first: ${flowFiles["time-first"].length} файлов`);
  console.log(`\n✅ Проанализировано ${harFiles.length} HAR файлов`);
  
  return flowFiles;
}

/**
 * Читает ref-map.json для получения списка всех slug
 */
async function loadRefMap() {
  try {
    const content = await fs.readFile(REF_MAP, "utf8");
    const refMap = JSON.parse(content);
    return refMap;
  } catch (error) {
    console.error("❌ Не найден ref-map.json. Запустите: npm run ref:gen");
    process.exit(1);
  }
}

/**
 * Строит последовательность для flow на основе переходов
 */
function buildFlowSequence(transitions, allSlugs) {
  // Подсчитываем частоту переходов
  const graph = new Map();
  
  for (const t of transitions) {
    const key = `${t.from}→${t.to}`;
    graph.set(key, (graph.get(key) || 0) + 1);
  }
  
  // Пытаемся построить оптимальный путь
  // (упрощённая эвристика - просто берём самые частые переходы)
  const sequence = [];
  const visited = new Set();
  
  // Находим возможные начальные точки
  const startPoints = [
    "select-branch",
    "select_services_default",
    "select-services__start-service-first",
    "select_master_default",
    "select-master_start-time-first",
    "auth"
  ];
  
  // Ищем первую доступную начальную точку
  let current = null;
  for (const start of startPoints) {
    if (allSlugs.includes(start)) {
      current = start;
      break;
    }
  }
  
  if (!current && allSlugs.length > 0) {
    current = allSlugs[0];
  }
  
  // Строим путь
  while (current && sequence.length < allSlugs.length) {
    if (!visited.has(current)) {
      sequence.push(current);
      visited.add(current);
    }
    
    // Ищем следующий наиболее вероятный переход
    let maxWeight = 0;
    let next = null;
    
    for (const [key, weight] of graph.entries()) {
      if (key.startsWith(current + "→")) {
        const to = key.split("→")[1];
        if (!visited.has(to) && weight > maxWeight) {
          maxWeight = weight;
          next = to;
        }
      }
    }
    
    current = next;
  }
  
  // Добавляем остальные slug, которые не вошли в последовательность
  for (const slug of allSlugs) {
    if (!visited.has(slug)) {
      sequence.push(slug);
    }
  }
  
  return sequence;
}

/**
 * Строит эвристические flows на основе имён файлов
 */
function buildHeuristicFlows(allSlugs) {
  console.log("\n🧠 Построение эвристических flows...\n");
  
  // Service-first flow
  const serviceFirst = allSlugs.filter(slug => {
    // Сначала выбор услуг, затем мастера, затем времени
    return slug.includes("service") || slug.includes("master") || slug.includes("time");
  }).sort((a, b) => {
    const order = ["service", "master", "time", "order", "success"];
    const aIndex = order.findIndex(word => a.includes(word));
    const bIndex = order.findIndex(word => b.includes(word));
    if (aIndex !== bIndex && aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    return a.localeCompare(b);
  });
  
  // Master-first flow
  const masterFirst = allSlugs.filter(slug => {
    return slug.includes("master") || slug.includes("service") || slug.includes("time");
  }).sort((a, b) => {
    const order = ["master", "service", "time", "order", "success"];
    const aIndex = order.findIndex(word => a.includes(word));
    const bIndex = order.findIndex(word => b.includes(word));
    if (aIndex !== bIndex && aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    return a.localeCompare(b);
  });
  
  // Time-first flow
  const timeFirst = allSlugs.filter(slug => {
    return slug.includes("time") || slug.includes("master") || slug.includes("service");
  }).sort((a, b) => {
    const order = ["time", "master", "service", "order", "success"];
    const aIndex = order.findIndex(word => a.includes(word));
    const bIndex = order.findIndex(word => b.includes(word));
    if (aIndex !== bIndex && aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    return a.localeCompare(b);
  });
  
  return {
    "service-first": serviceFirst.length > 0 ? serviceFirst : null,
    "master-first": masterFirst.length > 0 ? masterFirst : null,
    "time-first": timeFirst.length > 0 ? timeFirst : null
  };
}

/**
 * Главная функция
 */
async function main() {
  console.log("🔨 Построение ref-seq.json...\n");
  
  // 1. Загружаем ref-map
  const refMap = await loadRefMap();
  const allSlugs = refMap.map(item => item.slug);
  console.log(`📄 Загружено ${allSlugs.length} страниц из ref-map.json\n`);
  
  // 2. Анализируем HAR файлы (только подсчёт по типам)
  const flowFiles = await analyzeAllHARs();
  
  // 3. Строим flows на основе эвристик (по именам slug)
  const heuristicFlows = buildHeuristicFlows(allSlugs);
  
  // 4. Строим итоговые flows
  const flows = {
    "service-first": heuristicFlows["service-first"] || allSlugs.slice(),
    "master-first": heuristicFlows["master-first"] || allSlugs.slice()
  };
  
  // Добавляем time-first только если есть соответствующие HAR
  if (flowFiles["time-first"].length > 0 && heuristicFlows["time-first"]) {
    flows["time-first"] = heuristicFlows["time-first"];
  }
  
  // 5. Default flow - просто алфавитный порядок
  const defaultFlow = [...allSlugs].sort((a, b) => a.localeCompare(b));
  
  // 6. Строим meta
  const meta = allSlugs.map(slug => ({
    slug,
    title: slugToTitle(slug)
  }));
  
  // 7. Формируем итоговый JSON
  const result = {
    version: "1.0",
    generated: new Date().toISOString(),
    defaultFlow,
    flows,
    meta
  };
  
  // 8. Сохраняем
  await fs.writeFile(OUTPUT, JSON.stringify(result, null, 2), "utf8");
  
  console.log(`\n✅ ref-seq.json создан`);
  console.log(`📊 Статистика:`);
  console.log(`   • Всего страниц: ${allSlugs.length}`);
  console.log(`   • Default flow: ${defaultFlow.length} страниц`);
  console.log(`   • Service-first: ${flows["service-first"].length} страниц`);
  console.log(`   • Master-first: ${flows["master-first"].length} страниц`);
  if (flows["time-first"]) {
    console.log(`   • Time-first: ${flows["time-first"].length} страниц`);
  }
  console.log(`\n🎯 Первые страницы flows:`);
  console.log(`   • Service-first: ${flows["service-first"][0]}`);
  console.log(`   • Master-first: ${flows["master-first"][0]}`);
  if (flows["time-first"]) {
    console.log(`   • Time-first: ${flows["time-first"][0]}`);
  }
}

main().catch(error => {
  console.error("❌ Ошибка:", error);
  process.exit(1);
});

