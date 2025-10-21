# 🎨 Reference UI - Полное руководство

## 📖 Оглавление

1. [Введение](#введение)
2. [Архитектура](#архитектура)
3. [Быстрый старт](#быстрый-старт)
4. [Структура проекта](#структура-проекта)
5. [Скрипты сборки](#скрипты-сборки)
6. [Next.js страницы](#nextjs-страницы)
7. [Работа с ассетами](#работа-с-ассетами)
8. [Технические детали](#технические-детали)
9. [Дальнейшее развитие](#дальнейшее-развитие)

---

## Введение

**Reference UI** — это визуальный фундамент проекта Homi, представляющий собой 100% копию интерфейсов Altegio, воссозданную из сохранённых HTML-снимков, CSS, шрифтов и изображений.

### 🎯 Цель

Создать эталонный каталог UI-экранов, который:
- Служит визуальным референсом для дизайна и разработки
- Позволяет быстро находить и просматривать любой экран
- Обеспечивает базу для построения "живого" интерфейса Homi

### ✨ Принципы

1. **Точность** — визуал 1-в-1 с оригиналом Altegio
2. **Автономность** — все ассеты локальные, без внешних зависимостей
3. **Масштабируемость** — простое добавление новых экранов
4. **Типобезопасность** — TypeScript во всём проекте

---

## Архитектура

```
┌─────────────────────────────────────────────────┐
│                   Source Data                   │
│  html/ | scc/ | fonts/ | img/ | har/           │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│              Build Scripts                      │
│  ref-gen-pages → ref-copy-assets → ref-rewrite  │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│            Generated Artifacts                  │
│  ref-map.json | public/ref-assets/ | ref-html/  │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│             Next.js App Router                  │
│  /ref (catalog) | /ref/[slug] (viewer)          │
└─────────────────────────────────────────────────┘
```

---

## Быстрый старт

### 1️⃣ Установка

```bash
npm install
```

### 2️⃣ Сборка Reference UI

```bash
npm run ref:build
```

Эта команда последовательно выполняет:
1. `ref:gen` — генерирует карту страниц
2. `ref:assets` — копирует ассеты
3. `ref:html` — переписывает пути в HTML

### 3️⃣ Запуск dev-сервера

```bash
npm run dev
```

### 4️⃣ Открыть в браузере

- **Каталог**: http://localhost:3000/ref
- **Пример страницы**: http://localhost:3000/ref/auth

---

## Структура проекта

### 📁 Исходные данные (source)

```
html/                       # HTML-снимки страниц Altegio
  ├── auth.html
  ├── select_services_default.html
  └── ... (всего 59 файлов)

scc/                        # CSS-файлы
  └── scc.css

fonts/                      # Шрифты Inter (.woff2)
  ├── inter-regular-GS5EHSMB.woff2
  ├── inter-medium-5IRUMIHZ.woff2
  ├── inter-semibold-SVBZ7NC6.woff2
  └── inter-bold-UGVMS3V6.woff2

img/                        # Изображения и скриншоты
  └── ... (70 PNG файлов)

har/                        # Сетевые дампы (для анализа)
  └── ... (75 HAR файлов)
```

### 🔧 Скрипты (scripts/)

```
scripts/
  ├── ref-gen-pages.js      # Генерация ref-map.json
  ├── ref-copy-assets.js    # Копирование ассетов
  └── ref-rewrite-html.js   # Переписывание HTML путей
```

### ⚛️ Next.js приложение (src/)

```
src/
  ├── app/
  │   ├── layout.tsx        # Root layout
  │   ├── page.tsx          # Главная страница
  │   └── ref/
  │       ├── layout.tsx    # Layout для /ref
  │       ├── page.tsx      # Каталог страниц
  │       └── [slug]/
  │           ├── page.tsx  # Просмотр страницы
  │           ├── copy-link-button.tsx
  │           └── not-found.tsx
  ├── lib/
  │   └── ref-map.ts        # Утилиты для работы с картой
  ├── types/
  │   └── ref-map.ts        # TypeScript типы
  └── styles/
      ├── globals.css       # Глобальные стили
      └── ref.css           # Референс стили
```

### 📦 Генерируемые файлы (public/)

```
public/
  ├── ref-assets/           # Ассеты для iframe
  │   ├── css/
  │   │   └── scc.css
  │   ├── fonts/
  │   │   └── inter-*.woff2
  │   └── img/
  │       └── *.png
  ├── ref-html/             # Переписанные HTML-файлы
  │   ├── auth.html
  │   └── ...
  └── scc/                  # Дублирование для совместимости
      └── media/
          └── inter-*.woff2

ref-map.json                # Карта всех страниц
```

---

## Скрипты сборки

### 1. ref-gen-pages.js

**Назначение**: Сканирует папку `html/` и генерирует `ref-map.json`

**Что делает**:
- Читает все `.html` файлы
- Генерирует slug (URL-friendly ID)
- Создаёт читаемый title
- Сохраняет JSON-карту

**Пример вывода**:
```json
{
  "slug": "select_master_default",
  "title": "Select Master Default",
  "srcHtmlPath": "html/select_master_default.html",
  "file": "select_master_default.html"
}
```

**Команда**: `npm run ref:gen`

---

### 2. ref-copy-assets.js

**Назначение**: Копирует ассеты в `public/ref-assets/`

**Маппинг**:
```
scc/    → public/ref-assets/css/
fonts/  → public/ref-assets/fonts/
img/    → public/ref-assets/img/
fonts/  → public/scc/media/        (дублирование)
```

**Зачем дублирование шрифтов?**
- Некоторые CSS-файлы используют относительные пути `./media/*`
- Для максимальной совместимости шрифты дублируются в оба места

**Команда**: `npm run ref:assets`

---

### 3. ref-rewrite-html.js

**Назначение**: Переписывает пути в HTML и копирует в `public/ref-html/`

**Преобразования**:
```
url("./media/inter-regular.woff2")
  → url("/ref-assets/fonts/inter-regular.woff2")

href="/scc/scc.css"
  → href="/ref-assets/css/scc.css"

src="/img/avatar.png"
  → src="/ref-assets/img/avatar.png"
```

**Что НЕ трогается**:
- Внешние CDN-ссылки (будут 404, это нормально)
- JavaScript-файлы (работают в sandbox iframe)

**Команда**: `npm run ref:html`

---

### 4. ref:build (all-in-one)

**Назначение**: Выполняет все три скрипта по порядку

```bash
npm run ref:build
# = npm run ref:gen && npm run ref:assets && npm run ref:html
```

**Когда запускать**:
- После добавления новых HTML-файлов
- После изменения ассетов (CSS, шрифты, изображения)
- Перед production build

---

## Next.js страницы

### 📄 /ref/page.tsx — Каталог

**Особенности**:
- Grid-сетка с карточками (responsive: 1/2/3 колонки)
- Поиск в реальном времени по title и slug
- Счётчик найденных страниц
- Клик на карточку → переход на `/ref/[slug]`

**Технологии**:
- Client Component (`"use client"`)
- `useState` для поискового запроса
- `useMemo` для фильтрации
- Tailwind CSS для стилей

**Пример использования**:
```typescript
import { getRefMap } from "@/lib/ref-map";

const refMap = getRefMap(); // Получить все страницы
```

---

### 🖼️ /ref/[slug]/page.tsx — Просмотр

**Особенности**:
- Iframe на всю высоту экрана
- Навигация Prev/Next
- Кнопка "Копировать ссылку" (deep-link)
- Кнопка "Открыть HTML" (в новой вкладке)
- Breadcrumbs "Назад к каталогу"

**Технологии**:
- Server Component
- Static Generation (`generateStaticParams`)
- Iframe с `sandbox="allow-same-origin allow-scripts allow-forms"`

**Пример генерации статических путей**:
```typescript
export function generateStaticParams() {
  const refMap = getRefMap();
  return refMap.map((item) => ({
    slug: item.slug,
  }));
}
```

**Навигация**:
```typescript
import { getAdjacentPages } from "@/lib/ref-map";

const { prev, next } = getAdjacentPages(slug);
// prev и next содержат данные соседних страниц
```

---

### 🎛️ /ref/[slug]/copy-link-button.tsx

**Назначение**: Client-компонент для копирования ссылки в буфер обмена

**Особенности**:
- `navigator.clipboard.writeText()`
- Feedback анимация (✓ Скопировано!)
- Auto-reset через 2 секунды

---

## Работа с ассетами

### CSS и шрифты

**Подключение в HTML**:
```html
<style>
@font-face {
  font-family: Inter;
  src: url("/ref-assets/fonts/inter-regular-GS5EHSMB.woff2") format("woff2");
  font-weight: 400;
}
</style>
```

**Дублирование шрифтов**:
```
/public/ref-assets/fonts/  ← основной путь
/public/scc/media/         ← fallback для совместимости
```

### Изображения

Все изображения автоматически переписываются на `/ref-assets/img/*`

### CSS переменные

Altegio использует CSS-переменные для брендинга:
```css
--widget-ui-kit-color-brand: #fcce2c;
--widget-ui-kit-h1-font-size: 32px;
--widget-ui-kit-logo-border-radius: 8px;
```

Эти токены сохраняются и могут быть использованы в будущем для HOMI UI.

---

## Технические детали

### TypeScript типы

**RefMapItem**:
```typescript
interface RefMapItem {
  slug: string;           // "select_master_default"
  title: string;          // "Select Master Default"
  srcHtmlPath: string;    // "html/select_master_default.html"
  file: string;           // "select_master_default.html"
}
```

**RefMap**:
```typescript
type RefMap = RefMapItem[];
```

### Утилиты lib/ref-map.ts

```typescript
// Получить всю карту
const refMap = getRefMap();

// Найти страницу по slug
const page = getRefPageBySlug("auth");

// Получить соседние страницы для навигации
const { prev, next } = getAdjacentPages("auth");

// Сгенерировать URL
const url = getRefPageUrl("auth");        // "/ref/auth"
const htmlUrl = getRefHtmlUrl("auth");    // "/ref-html/auth.html"
```

### Iframe sandbox

Атрибуты безопасности:
```jsx
<iframe
  src={htmlUrl}
  sandbox="allow-same-origin allow-scripts allow-forms"
  title={page.title}
/>
```

**Что разрешено**:
- `allow-same-origin` — доступ к localStorage, cookies
- `allow-scripts` — выполнение JavaScript
- `allow-forms` — работа с формами

**Что запрещено**:
- Навигация наверх (`top.location`)
- Открытие popups
- Автовоспроизведение медиа

---

## Дальнейшее развитие

### 1. Цепочки экранов (ref-seq.json)

**Идея**: Описать пользовательские сценарии и переходы между экранами

```json
{
  "scenario": "booking-flow",
  "steps": [
    { "slug": "select_services_default", "action": "Выбрать услугу" },
    { "slug": "select_master_default", "action": "Выбрать мастера" },
    { "slug": "select_time_default", "action": "Выбрать время" },
    { "slug": "order-confirmation", "action": "Подтвердить" }
  ]
}
```

**Применение**:
- Интерактивная навигация по сценариям
- Документация user flows
- Тестирование UX

### 2. Токенизация дизайна

**Идея**: Извлечь design tokens из CSS

```json
{
  "colors": {
    "brand": "#fcce2c",
    "text-primary": "#292b33",
    "grey-main": "#808080"
  },
  "typography": {
    "h1-size": "32px",
    "h1-weight": "800"
  },
  "spacing": {
    "container-padding": "16px"
  }
}
```

**Применение**:
- Генерация Tailwind config
- CSS-переменные для HOMI UI
- Design system documentation

### 3. Живой интерфейс HOMI (/b/[slug])

**Идея**: Воссоздать Reference UI как работающее приложение

**План**:
1. Разбить HTML на React-компоненты
2. Подключить API бэкенда
3. Добавить роутинг и состояние
4. Использовать токены из Reference UI

**Структура**:
```
/b/[slug]          # Рабочие страницы HOMI
  ├── auth         # Живая форма авторизации
  ├── services     # Выбор услуг с API
  └── booking      # Создание записи
```

### 4. HAR-анализатор

**Идея**: Использовать HAR-файлы для понимания API

```bash
npm run har:analyze
```

**Выходные данные**:
- Схемы API endpoints
- Форматы request/response
- Зависимости между запросами

### 5. Screenshot testing

**Идея**: Автоматическое сравнение скриншотов

```bash
npm run ref:screenshot
```

**Применение**:
- Visual regression testing
- Проверка верстки после изменений
- CI/CD интеграция

---

## Приложения

### A. Полный список команд

```bash
# Сборка Reference UI
npm run ref:gen      # Генерация ref-map.json
npm run ref:assets   # Копирование ассетов
npm run ref:html     # Переписывание HTML
npm run ref:build    # Всё вместе

# Development
npm run dev          # Dev-сервер
npm run build        # Production build
npm run start        # Production server

# База данных
npm run db:generate  # Генерация Prisma Client
npm run db:push      # Push schema в БД
npm run db:seed      # Seed данных

# Knowledge Base
npm run kb:build     # Сборка KB
npm run kb:coverage  # Анализ покрытия
npm run kb:anomalies # Поиск аномалий
npm run kb:map       # Генерация карты
```

### B. Соглашения о наименовании

**Slug format**:
- Lowercase
- Underscore для разделения слов
- Пример: `select_master_default`, `auth_password`

**File naming**:
- HTML: `{page}_{variant}.html`
- Пример: `select_services_default.html`, `auth_code-verification.html`

**Title format**:
- Title Case
- Пробелы между словами
- Пример: "Select Master Default", "Auth Code Verification"

### C. Troubleshooting

**Проблема**: Не загружаются шрифты в iframe

**Решение**:
1. Проверить что `ref:assets` скопировал шрифты
2. Убедиться что пути в CSS переписаны корректно
3. Проверить Network tab в DevTools

---

**Проблема**: 404 на внешние ресурсы (CDN)

**Решение**: Это нормально. Внешние CDN-ссылки (Cloudflare, Google Fonts) недоступны локально.

---

**Проблема**: Страница не отображается в каталоге

**Решение**:
1. Проверить что HTML-файл в `html/`
2. Запустить `npm run ref:build`
3. Проверить `ref-map.json`

---

## 🎉 Заключение

Reference UI — это фундамент для создания продукта Homi. Все визуальные паттерны, стили и компоненты Altegio доступны для изучения и использования.

**Ключевые преимущества**:
✅ Точность — 100% копия оригинала
✅ Автономность — все ассеты локальные
✅ Масштабируемость — легко добавлять новые экраны
✅ Типобезопасность — TypeScript везде
✅ Документация — подробное описание всех компонентов

**Следующие шаги**:
1. Изучите каталог `/ref`
2. Проанализируйте ключевые экраны
3. Извлеките design tokens
4. Начните создавать компоненты HOMI

Удачи в разработке! 🚀

