# 📝 Flows Implementation — Полный список изменений

## 🆕 Новые файлы

### 1. `scripts/ref-build-seq.js` ✨
**Назначение**: Анализирует HTML и HAR файлы, строит flows

**Ключевые функции**:
- `getSlugFromFilename()` — извлечение slug
- `slugToTitle()` — генерация title
- `extractFlowFromFilename()` — определение flow из имени HAR
- `analyzeAllHARs()` — группировка HAR по flows
- `buildHeuristicFlows()` — построение последовательностей
- `main()` — генерация ref-seq.json

**Логика**:
1. Читает ref-map.json
2. Сканирует HAR файлы (без полного парсинга)
3. Строит flows эвристически по именам slug
4. Сохраняет в ref-seq.json

---

### 2. `ref-seq.json` 📄
**Структура**:
```json
{
  "version": "1.0",
  "generated": "2025-10-20T12:00:00.000Z",
  "defaultFlow": [...], // алфавитный порядок
  "flows": {
    "service-first": [...], // 13 шагов
    "master-first": [...], // 13 шагов  
    "time-first": [...]     // 11 шагов
  },
  "meta": [
    {"slug": "...", "title": "..."},
    ...
  ]
}
```

**Flows**:
- `service-first`: select-branch → services → master → time → order → auth → success
- `master-first`: select-branch → master → services → time → order → auth → success
- `time-first`: select-branch → time → master → services → order → auth → success

---

### 3. `src/types/ref-seq.ts` 📘
**Экспортируемые типы**:
```typescript
interface PageMeta {
  slug: string;
  title: string;
}

interface Flows {
  "service-first": string[];
  "master-first": string[];
  "time-first"?: string[];
  [key: string]: string[] | undefined;
}

interface RefSeq {
  version: string;
  generated: string;
  defaultFlow: string[];
  flows: Flows;
  meta: PageMeta[];
}

type FlowName = keyof Flows | "default";
```

---

### 4. `src/lib/ref-seq.ts` 🛠️
**API функции**:

```typescript
// Получить данные
getRefSeq(): RefSeq
getFlows(): string[]
getFlowSequence(flowName): string[]
getAllSlugs(): string[]
getTitle(slug): string

// Навигация
getPrevNext(slug, flowName): { prev, next, flowName }
getFirstInFlow(flowName): PageMeta | null

// Локализация
getFlowLabel(flowName): string
```

---

### 5. `FLOWS-IMPLEMENTATION.md` 📚
Полная документация реализации flows

### 6. `FLOWS-CHANGES-SUMMARY.md` 📋
Этот файл — детальный список изменений

---

## ✏️ Изменённые файлы

### 1. `package.json`
**Добавлено**:
```json
"scripts": {
  "ref:seq": "node scripts/ref-build-seq.js",
  "ref:build": "npm run ref:gen && npm run ref:assets && npm run ref:html && npm run ref:seq"
}
```

**Результат**: ref:build теперь также генерирует ref-seq.json

---

### 2. `src/app/ref/page.tsx`
**Импорты**:
```typescript
+import { getFlows, getFirstInFlow, getFlowLabel, type FlowName } from "@/lib/ref-seq";
```

**State**:
```typescript
+const flows = getFlows();
```

**Новая секция** (перед Search):
```tsx
{/* Flows */}
<div className="bg-white rounded-lg shadow-sm p-6">
  <h2 className="text-lg font-semibold mb-4">
    🚀 Запустить flow
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {flows.map((flowName) => {
      const first = getFirstInFlow(flowName as FlowName);
      return (
        <Link
          href={`${getRefPageUrl(first.slug)}?flow=${flowName}`}
          className="flex flex-col p-4 border-2 rounded-lg
                   hover:border-blue-500 hover:shadow-md group"
        >
          <h3>{getFlowLabel(flowName as FlowName)}</h3>
          <p>Начать с: {first.title}</p>
        </Link>
      );
    })}
  </div>
</div>
```

**Результат**: 
- 3 карточки flows в каталоге
- Клик → переход на первую страницу flow

---

### 3. `src/app/ref/[slug]/page.tsx`
**Импорты**:
```typescript
-import { getAdjacentPages } from "@/lib/ref-map";
+import { getPrevNext, getFlowLabel, type FlowName } from "@/lib/ref-seq";
```

**Props interface**:
```typescript
interface PageProps {
  params: Promise<{ slug: string }>;
+ searchParams: Promise<{ flow?: string }>;
}
```

**Component**:
```typescript
-export default async function RefViewPage({ params }: PageProps) {
+export default async function RefViewPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
+ const { flow } = await searchParams;
  
- const { prev, next } = getAdjacentPages(slug);
+ const flowName = (flow as FlowName) || "default";
+ const { prev, next } = getPrevNext(slug, flowName);
  
+ // URL builder с flow
+ const buildUrl = (targetSlug: string) => {
+   if (flowName === "default") {
+     return getRefPageUrl(targetSlug);
+   }
+   return `${getRefPageUrl(targetSlug)}?flow=${flowName}`;
+ };
```

**Title section**:
```tsx
<h1>{page.title}</h1>
<div className="flex items-center gap-3">
  <p className="font-mono">{slug}</p>
+ {flowName !== "default" && (
+   <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
+     {getFlowLabel(flowName)}
+   </span>
+ )}
</div>
```

**Navigation**:
```tsx
{prev ? (
- <Link href={getRefPageUrl(prev.slug)}>
+ <Link href={buildUrl(prev.slug)}>
    Prev
  </Link>
) : ...}

{next ? (
- <Link href={getRefPageUrl(next.slug)}>
+ <Link href={buildUrl(next.slug)}>
    Next
  </Link>
) : ...}
```

**Результат**:
- Навигация учитывает выбранный flow
- Badge показывает текущий flow
- URL сохраняет flow при переходах

---

## 🔄 Workflow изменений

### До
```
/ref → каталог (только поиск)
/ref/[slug] → просмотр (Prev/Next по алфавиту)
```

### После
```
/ref → каталог (flows + поиск)
  ↓ клик на flow
/ref/[slug]?flow=service-first → просмотр в flow
  ↓ Prev/Next
следующая страница в том же flow
```

---

## 📊 Статистика изменений

| Файл | Строк добавлено | Строк изменено |
|------|----------------|---------------|
| scripts/ref-build-seq.js | +295 | - |
| ref-seq.json | +169 | - |
| src/types/ref-seq.ts | +31 | - |
| src/lib/ref-seq.ts | +118 | - |
| package.json | +2 | - |
| src/app/ref/page.tsx | +38 | ~5 |
| src/app/ref/[slug]/page.tsx | +25 | ~15 |
| FLOWS-IMPLEMENTATION.md | +327 | - |
| **ИТОГО** | **~1005** | **~20** |

---

## 🧪 Тестирование

### 1. Генерация ref-seq.json
```bash
npm run ref:seq
# → создаётся ref-seq.json
# → flows определены эвристически
# → meta построена из ref-map.json
```

### 2. Запуск dev-сервера
```bash
npm run dev
# → http://localhost:3001/ref
```

### 3. Проверка каталога
- [x] Открыть /ref
- [x] Видеть 3 карточки flows
- [x] Клик на "Сначала услуга" → /ref/select-branch?flow=service-first

### 4. Проверка навигации
- [x] На странице видно badge "Сначала услуга"
- [x] Кнопка Next → следующая страница в service-first flow
- [x] URL сохраняет ?flow=service-first
- [x] Кнопка Prev → предыдущая страница

### 5. Переключение flows
- [x] Вручную изменить ?flow=master-first
- [x] Badge обновляется
- [x] Навигация переключается на master-first flow

---

## ✅ Критерии готовности

- [x] ref-seq.json создан
- [x] Содержит defaultFlow, flows (service/master/time-first), meta
- [x] /ref показывает кнопки Start flow
- [x] /ref/[slug] рендерит iframe как раньше
- [x] Prev/Next корректны согласно выбранному flow
- [x] Query param ?flow=... работает
- [x] TypeScript без ошибок
- [x] Всё работает локально
- [x] Документация создана

---

## 🎯 Использование

### Для пользователя
1. Открыть http://localhost:3001/ref
2. Выбрать flow (например, "Сначала мастер")
3. Кликнуть → начинается последовательность
4. Prev/Next → навигация по шагам flow
5. "Назад к каталогу" → выбрать другой flow

### Для разработчика
```typescript
// Получить flows
import { getFlows, getFirstInFlow } from "@/lib/ref-seq";

const flows = getFlows(); // ["service-first", "master-first", "time-first"]
const first = getFirstInFlow("service-first"); // {slug, title}

// Навигация
import { getPrevNext } from "@/lib/ref-seq";

const { prev, next } = getPrevNext(currentSlug, "master-first");
```

---

## 🚀 Дальнейшее развитие

### 1. Улучшение анализа
- Полный парсинг HAR для реальных переходов
- Машинное обучение для оптимальных flows
- A/B тестирование различных последовательностей

### 2. UX улучшения
- Progress bar (шаг 3 из 13)
- Миникарта всех шагов flow
- Bookmark для возврата на конкретный шаг
- История пройденных flows

### 3. Аналитика
- Отслеживание популярных flows
- Метрики завершения
- Точки выхода пользователей

### 4. Динамические flows
- Создание flows через UI
- Сохранение пользовательских flows
- Экспорт/импорт flows

---

## 🔗 Связанные файлы

- `REFERENCE-UI-GUIDE.md` — основное руководство
- `FLOWS-IMPLEMENTATION.md` — детальная документация flows
- `ref-seq.json` — данные flows
- `scripts/ref-build-seq.js` — генератор flows

---

**Реализация завершена! Flows полностью работают! 🎉**

*Дата: 20 октября 2025*

