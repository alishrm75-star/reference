# Quick Start - Homi Reference UI

## 🚀 Быстрый запуск

### 1. Установка зависимостей
```bash
npm install
```

### 2. Сборка Reference UI
```bash
npm run ref:build
```

Эта команда:
- ✅ Генерирует `ref-map.json` из `/html`
- ✅ Копирует ассеты в `/public/ref-assets`
- ✅ Переписывает HTML и копирует в `/public/ref-html`

### 3. Запуск dev-сервера
```bash
npm run dev
```

### 4. Откройте браузер
```
http://localhost:3000/ref
```

## 📁 Структура Reference UI

```
/src/app/ref
  ├── page.tsx           # Каталог всех страниц (с поиском)
  ├── [slug]/
  │   ├── page.tsx       # Просмотр страницы в iframe
  │   ├── copy-link-button.tsx  # Кнопка копирования ссылки
  │   └── not-found.tsx  # 404 страница
  └── layout.tsx         # Layout для /ref

/src/lib
  └── ref-map.ts         # Утилиты для работы с ref-map.json

/src/types
  └── ref-map.ts         # TypeScript типы

/scripts
  ├── ref-gen-pages.js   # Генерация ref-map.json
  ├── ref-copy-assets.js # Копирование ассетов
  └── ref-rewrite-html.js # Переписывание путей в HTML
```

## 🔧 Доступные команды

| Команда | Описание |
|---------|----------|
| `npm run ref:gen` | Генерирует ref-map.json |
| `npm run ref:assets` | Копирует ассеты в public/ref-assets |
| `npm run ref:html` | Переписывает HTML файлы |
| `npm run ref:build` | Выполняет все три команды |
| `npm run dev` | Запускает dev-сервер |
| `npm run build` | Production build |

## 📄 Страницы

- **`/`** - Главная страница с кнопкой "Открыть каталог"
- **`/ref`** - Каталог всех страниц (grid с поиском)
- **`/ref/[slug]`** - Просмотр страницы в iframe

## ✨ Особенности

### Каталог (/ref)
- Grid-сетка с карточками (2-3 колонки)
- Поиск в реальном времени по title и slug
- Счетчик найденных страниц
- Tailwind CSS стили

### Просмотр (/ref/[slug])
- Iframe с HTML-снимком на всю высоту
- Навигация: Prev/Next кнопки
- Кнопка "Копировать ссылку" (deep-link)
- Кнопка "Открыть HTML" (новая вкладка)
- Breadcrumbs назад к каталогу

## 🎯 Примеры

Откройте в браузере:
- http://localhost:3000/ref
- http://localhost:3000/ref/about_default
- http://localhost:3000/ref/auth
- http://localhost:3000/ref/select_master_default

## 🐛 Известные особенности

- Внешние CDN ссылки (`/cdn-cgi/*` от Cloudflare) будут 404 - это нормально
- HTML отображается в iframe с sandbox для безопасности
- Все пути к ассетам автоматически переписываются на `/ref-assets/*`

## 📦 Production

```bash
npm run ref:build
npm run build
npm start
```

Готово! 🎉

