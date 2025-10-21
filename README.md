# 🏠 Homi Reference — Visual UI Catalog

> **100% точная визуальная копия интерфейсов Altegio** для референса и разработки продукта Homi

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-Private-red)]()

---

## 🎯 Что это?

**Homi** — это полноценная система онлайн-бронирования с двумя зонами:

### 📸 Reference UI (`/ref`)
Визуальный каталог из **59 HTML-снимков** интерфейсов Altegio:
- ✅ **Дизайнерам** — изучать UI-паттерны
- ✅ **Разработчикам** — брать визуальный референс
- ✅ **Всей команде** — единый источник правды

### 🎯 Booking UI (`/b`)
Живой рабочий интерфейс бронирования:
- ✅ **Полный флоу** — выбор филиала/услуги/мастера/времени
- ✅ **Реальные данные** — Prisma + SQLite
- ✅ **API интеграция** — создание и отмена броней
- ✅ **Визуал 1-в-1** — использует стили из Reference UI

---

## ⚡ Quick Start

```bash
# 1. Установка
npm install

# 2. Настройка БД
npm run db:generate
npm run db:push
npm run db:seed

# 3. Сборка Reference UI
npm run ref:build

# 4. Запуск
npm run dev

# 5. Открыть браузер
# → http://localhost:3000/ref  (Reference UI - каталог)
# → http://localhost:3000/b    (Booking UI - живой флоу)
```

**Готово!** Каталог из 59 экранов + живой booking UI доступны.

---

## 📸 Интерфейсы

### 📚 Reference UI (`/ref`)
Каталог HTML-снимков с поиском и flows:
```
┌─────────────────────────────────────────┐
│ 🚀 Запустить flow                       │
│ [Сначала услуга] [Сначала мастер]      │
│                                         │
│ 🔍 [Поиск...]          Найдено: 59     │
├─────────────────────────────────────────┤
│  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │ Auth   │  │ Select │  │ Master │   │
│  └────────┘  └────────┘  └────────┘   │
└─────────────────────────────────────────┘
```

### 🎯 Booking UI (`/b`)
Живой флоу бронирования:
```
┌─────────────────────────────────────────┐
│ Выбор филиала                           │
│ ┌─────────────────────┐                 │
│ │ Главный офис       │                 │
│ │ ул. Ленина, 1       │                 │
│ └─────────────────────┘                 │
│ ┌─────────────────────┐                 │
│ │ Филиал №2          │                 │
│ └─────────────────────┘                 │
└─────────────────────────────────────────┘
  ↓ выбор → услуга → мастер → время
┌─────────────────────────────────────────┐
│ ✓ Запись создана!                       │
│ Номер брони: xxxxxxxx                   │
└─────────────────────────────────────────┘
```

---

## 🗂️ Структура проекта

```
reference/
├── html/                    # 59 HTML-снимков Altegio
├── scc/                     # CSS-файлы
├── fonts/                   # Шрифты Inter (.woff2)
├── img/                     # 70 изображений
├── scripts/                 # Скрипты сборки
│   ├── ref-gen-pages.js     # Генерация карты
│   ├── ref-copy-assets.js   # Копирование ассетов
│   └── ref-rewrite-html.js  # Переписывание путей
├── src/app/ref/             # Next.js приложение
│   ├── page.tsx             # Каталог с поиском
│   └── [slug]/page.tsx      # Просмотр в iframe
└── public/
    ├── ref-assets/          # Ассеты для iframe
    └── ref-html/            # Обработанные HTML
```

---

## 🔧 Команды

| Команда | Описание |
|---------|----------|
| `npm run ref:build` | **Полная сборка Reference UI** (gen + assets + html + seq) |
| `npm run ref:gen` | Генерация ref-map.json |
| `npm run ref:assets` | Копирование ассетов |
| `npm run ref:html` | Переписывание HTML |
| `npm run ref:seq` | Генерация flows (ref-seq.json) |
| `npm run db:generate` | Генерация Prisma Client |
| `npm run db:push` | Push schema в БД |
| `npm run db:seed` | Заполнение тестовыми данными |
| `npm run dev` | Dev-сервер |
| `npm run build` | Production build |

---

## 📚 Документация

### Reference UI
| Файл | Описание |
|------|----------|
| **[REFERENCE-UI-GUIDE.md](REFERENCE-UI-GUIDE.md)** | 🌟 Полное руководство Reference UI |
| [QUICK-START.md](QUICK-START.md) | Быстрый старт |
| [README-REF.md](README-REF.md) | Основная документация |
| [EXAMPLES.md](EXAMPLES.md) | Практические примеры |
| [FLOWS-IMPLEMENTATION.md](FLOWS-IMPLEMENTATION.md) | Система flows и навигация |

### Booking UI
| Файл | Описание |
|------|----------|
| **[BOOKING-UI-GUIDE.md](BOOKING-UI-GUIDE.md)** | 🌟 Полное руководство Booking UI |
| [BOOKING-UI-SUMMARY.md](BOOKING-UI-SUMMARY.md) | Краткая сводка |
| [BOOKING-UI-FINAL.md](BOOKING-UI-FINAL.md) | Финальный отчёт |

---

## ✨ Особенности

### Каталог страниц
- 🔍 **Поиск** в реальном времени
- 📊 **Grid-сетка** (1-3 колонки, responsive)
- 🔢 **Счётчик** найденных страниц

### Просмотр страницы
- 🖼️ **Iframe** на всю высоту
- ◀️▶️ **Навигация** Prev/Next
- 📋 **Копирование** deep-link
- ↗️ **Открытие** HTML в новой вкладке

### Технологии
- ⚡ **Next.js 15** (App Router)
- 📘 **TypeScript** (строгая типизация)
- 🎨 **Tailwind CSS** (responsive)
- 🏗️ **SSG** (Static Site Generation)

---

## 🎨 Примеры страниц

| Категория | Примеры slug |
|-----------|--------------|
| Авторизация | `auth`, `auth_password`, `auth_code-verification` |
| Выбор услуг | `select_services_default`, `select_services_category_open` |
| Выбор мастера | `select_master_default`, `select_master_indicator_any` |
| Выбор времени | `select_time_default`, `select_time_future-date` |
| Заказы | `order-confirmation`, `success-order` |
| Профиль | `profile_default`, `personal-account` |

**Всего доступно**: 59 страниц

Полный список: [ref-map.json](ref-map.json)

---

## 🔄 Workflow

### 1. Добавление новой страницы

```bash
# Положить HTML в папку
cp new-page.html html/

# Запустить сборку
npm run ref:build

# Открыть каталог
# → Страница появилась автоматически!
```

### 2. Обновление ассетов

```bash
# Изменить CSS/fonts/images
nano scc/scc.css

# Скопировать в public/
npm run ref:assets

# Перезагрузить браузер
# → Изменения применились
```

### 3. Production deploy

```bash
npm run ref:build
npm run build
npm start
```

---

## 🧠 Как это работает

### Шаг 1: Генерация карты
```bash
html/*.html → ref-map.json
```
Сканирует HTML-файлы, создаёт slug и title.

### Шаг 2: Копирование ассетов
```bash
scc/   → public/ref-assets/css/
fonts/ → public/ref-assets/fonts/
img/   → public/ref-assets/img/
```

### Шаг 3: Переписывание путей
```bash
url("./media/font.woff2")
  ↓
url("/ref-assets/fonts/font.woff2")
```

### Шаг 4: Next.js рендеринг
```
/ref → каталог с поиском
/ref/[slug] → iframe с HTML
```

---

## 📊 Статистика

- **59** HTML-страниц
- **70** изображений
- **4** шрифта Inter
- **75** HAR-файлов (для анализа API)
- **~800** строк документации

---

## 🚀 Дальнейшее развитие

### Фаза 1: Design Tokens
Извлечь цвета, шрифты, отступы → `tokens.json` → Tailwind config

### Фаза 2: User Flows
Описать сценарии → `ref-seq.json` → интерактивные переходы

### Фаза 3: Живой интерфейс
React-компоненты → API → `/b/[slug]` (рабочий HOMI UI)

### Фаза 4: Автоматизация
Screenshot testing → Visual regression → CI/CD

---

## 🐛 Troubleshooting

### Не загружаются шрифты?
```bash
npm run ref:assets
# Проверить: public/ref-assets/fonts/
```

### Страница не отображается?
```bash
npm run ref:build
# Проверить: ref-map.json и public/ref-html/
```

### 404 на CDN-ссылки?
Это нормально. Внешние CDN недоступны локально.

---

## 📞 Полезные ссылки

- **Каталог**: http://localhost:3000/ref
- **Документация**: [REFERENCE-UI-GUIDE.md](REFERENCE-UI-GUIDE.md)
- **Примеры**: [EXAMPLES.md](EXAMPLES.md)
- **API**: `/api/*` (в разработке)

---

## ⚖️ Лицензия

Private. Только для внутреннего использования в проекте Homi.

---

## 🤝 Контакты

Если возникнут вопросы:
1. Прочитайте [REFERENCE-UI-GUIDE.md](REFERENCE-UI-GUIDE.md)
2. Посмотрите [EXAMPLES.md](EXAMPLES.md)
3. Проверьте [QUICK-START.md](QUICK-START.md)

---

**Проект готов к использованию!** 🎉

*Создано: 20 октября 2025*

