# Homi Reference UI

Каталог HTML-снимков Alteg.io для просмотра и референса дизайна.

## Структура проекта

```
/html                 # Исходные HTML-снимки страниц
/img                  # Изображения и скриншоты
/scc                  # CSS-файлы
/fonts                # Локальные шрифты (woff2)
/scripts              # Скрипты сборки
  - ref-gen-pages.js  # Генерация ref-map.json
  - ref-copy-assets.js # Копирование ассетов в public/
  - ref-rewrite-html.js # Переписывание путей и копирование HTML
/src/app/ref          # Reference UI
  - page.tsx          # Каталог страниц с поиском
  - [slug]/page.tsx   # Просмотр страницы в iframe
  - layout.tsx        # Layout для /ref
/public/ref-assets    # Ассеты для iframe (генерируются)
  - css/              # CSS из /scc
  - fonts/            # Шрифты из /fonts
  - img/              # Изображения из /img
/public/ref-html      # Переписанные HTML-файлы (генерируются)
ref-map.json          # Карта страниц (slug, title, srcHtmlPath)
```

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Сборка Reference UI

```bash
npm run ref:build
```

Эта команда выполняет:
- `npm run ref:gen` — генерирует ref-map.json из /html
- `npm run ref:assets` — копирует ассеты в /public/ref-assets
- `npm run ref:html` — переписывает пути в HTML и копирует в /public/ref-html

### 3. Запуск dev-сервера

```bash
npm run dev
```

Откройте [http://localhost:3000/ref](http://localhost:3000/ref)

## Маршруты

- `/ref` — каталог всех страниц с поиском и фильтрацией
- `/ref/[slug]` — просмотр конкретной страницы в iframe

## Особенности

### Каталог страниц (/ref)

- **Grid-сетка** с карточками страниц (2-3 колонки)
- **Поиск** по названию и slug в реальном времени
- **Счетчик** найденных страниц
- Клик на карточку открывает страницу для просмотра

### Просмотр страницы (/ref/[slug])

- **Iframe** с HTML-снимком на всю высоту экрана
- **Навигация**: кнопки Prev/Next для перехода между страницами
- **Инструменты**:
  - Кнопка "Копировать ссылку" — копирует deep-link в буфер обмена
  - Кнопка "Открыть HTML" — открывает исходный HTML в новой вкладке
- **Breadcrumbs**: ссылка "Назад к каталогу"

### Технические детали

- **Next.js 15** с App Router
- **Tailwind CSS** для стилей
- **TypeScript** с строгой типизацией
- **Static Generation** для всех страниц (generateStaticParams)
- **Iframe sandbox** для безопасного отображения HTML
- Переписанные пути к ассетам для корректной работы в iframe

## Скрипты

### ref:gen

Сканирует `/html` и генерирует `ref-map.json` с данными:

```json
{
  "slug": "about_default",
  "title": "About Default",
  "srcHtmlPath": "html/about_default.html",
  "file": "about_default.html"
}
```

### ref:assets

Копирует ассеты в `/public/ref-assets/`:
- `/scc` → `/public/ref-assets/css`
- `/fonts` → `/public/ref-assets/fonts`
- `/img` → `/public/ref-assets/img`

### ref:html

Переписывает пути в HTML и сохраняет в `/public/ref-html/`:
- `/scc/*.css` → `/ref-assets/css/*.css`
- `/fonts/*.woff2` → `/ref-assets/fonts/*.woff2`
- `/img/*.png` → `/ref-assets/img/*.png`

### ref:build

Выполняет все три скрипта по порядку.

## Разработка

### Добавление новой страницы

1. Положите HTML-файл в `/html`
2. Запустите `npm run ref:build`
3. Страница автоматически появится в каталоге

### Обновление HTML

После изменения HTML-файлов запустите:

```bash
npm run ref:html
```

### Обновление ассетов

После изменения CSS/шрифтов/изображений:

```bash
npm run ref:assets
```

## Типы

Все типы находятся в `src/types/ref-map.ts`:

```typescript
interface RefMapItem {
  slug: string;
  title: string;
  srcHtmlPath: string;
  file: string;
}
```

## Утилиты

Библиотека `src/lib/ref-map.ts` предоставляет:

- `getRefMap()` — получить полную карту страниц
- `getRefPageBySlug(slug)` — найти страницу по slug
- `getAdjacentPages(slug)` — получить prev/next для навигации
- `getRefPageUrl(slug)` — URL для просмотра
- `getRefHtmlUrl(slug)` — URL HTML-файла в iframe

## Заметки

- Внешние CDN-ссылки (например, `/cdn-cgi/*` от Cloudflare) останутся как есть и будут возвращать 404. Это нормально и не влияет на работу.
- HTML отображается в iframe с sandbox для безопасности
- Все страницы генерируются статически на build-time
- Tailwind CSS используется только для UI каталога, не влияет на HTML-снимки

## Production Build

```bash
npm run ref:build
npm run build
npm start
```

Готово! 🚀

