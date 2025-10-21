# 🔄 Flows Implementation — Навигация по потокам

## ✅ Что реализовано

### 1. Скрипт анализа (`scripts/ref-build-seq.js`)
- Читает `ref-map.json` для получения всех страниц
- Анализирует имена HAR файлов для определения flows
- Строит эвристические последовательности на основе имён slug
- Генерирует `ref-seq.json` с flows и metadata

### 2. ref-seq.json
Содержит:
- `defaultFlow` — алфавитный порядок всех страниц
- `flows` — именованные последовательности:
  - `service-first` — сначала выбор услуги
  - `master-first` — сначала выбор мастера
  - `time-first` — сначала выбор времени
- `meta` — список всех страниц с title

### 3. TypeScript типы (`src/types/ref-seq.ts`)
```typescript
interface RefSeq {
  version: string;
  generated: string;
  defaultFlow: string[];
  flows: Flows;
  meta: PageMeta[];
}

type FlowName = keyof Flows | "default";
```

### 4. Утилиты (`src/lib/ref-seq.ts`)
- `getRefSeq()` — получить полные данные
- `getFlows()` — список доступных flows
- `getFlowSequence(flowName)` — последовательность для flow
- `getAllSlugs()` — все slug
- `getTitle(slug)` — title для slug
- `getPrevNext(slug, flow)` — предыдущая/следующая страница в flow
- `getFirstInFlow(flowName)` — первая страница flow
- `getFlowLabel(flowName)` — человекочитаемое название

### 5. Обновлённые страницы

#### `/ref/page.tsx` — Каталог
**Добавлено:**
- Секция "🚀 Запустить flow" с 3 карточками
- Клик на карточку → переход на первую страницу flow с `?flow=...`
- Сохранён существующий поиск и grid-сетка

#### `/ref/[slug]/page.tsx` — Просмотр
**Добавлено:**
- Чтение `?flow=...` из query params
- Использование `getPrevNext(slug, flow)` для навигации
- Отображение badge с названием flow
- Prev/Next кнопки учитывают выбранный flow
- URL сохраняет flow при переходах

## 🎯 Как использовать

### Запуск flow из каталога
1. Открыть http://localhost:3001/ref
2. Видеть 3 карточки flows:
   - "Сначала услуга"
   - "Сначала мастер"
   - "Сначала время"
3. Кликнуть на flow → открывается первая страница с `?flow=service-first`

### Навигация внутри flow
1. На странице `/ref/[slug]?flow=service-first`
2. Кнопки Prev/Next переключают по последовательности этого flow
3. Badge показывает текущий flow
4. Кнопка "Назад к каталогу" → возврат в `/ref`

### Переход между flows
1. Можно вручную изменить `?flow=master-first` в URL
2. Или вернуться в каталог и выбрать другой flow

## 📊 Структура flows

### Service-first flow (13 шагов)
```
select-branch
→ select_services_default
→ select_services_category_open
→ select_services_servise_selected
→ select_services_time_default
→ select_master_default
→ select_master_indicator_any
→ select-time_default
→ select-time_future-date
→ select-time__slot_selected
→ order-confirmation
→ auth
→ auth_code-verification
→ success-order
```

### Master-first flow (13 шагов)
```
select-branch
→ select_master_default
→ select_master_indicator_any
→ select_master_indicator_specific_master
→ master-info_default
→ select_services_default
→ select_services_servise_selected
→ select-time_default
→ select-time__slot_selected
→ order-confirmation
→ auth
→ auth_code-verification
→ success-order
```

### Time-first flow (11 шагов)
```
select-branch
→ select-time_default
→ select-time_all_masters
→ select-time__slot_selected
→ select_master_default
→ select_services_default
→ select_services_servise_selected
→ order-confirmation
→ auth
→ auth_code-verification
→ success-order
```

## 🔧 Технические детали

### Query параметры
- `?flow=service-first` — выбрать service-first flow
- `?flow=master-first` — выбрать master-first flow
- `?flow=time-first` — выбрать time-first flow
- Без параметра — используется defaultFlow

### URL структура
```
/ref → каталог с кнопками flows
/ref/[slug] → страница в defaultFlow
/ref/[slug]?flow=service-first → страница в service-first flow
```

### Навигация
```typescript
// Построение URL с flow
const buildUrl = (targetSlug: string) => {
  if (flowName === "default") {
    return `/ref/${targetSlug}`;
  }
  return `/ref/${targetSlug}?flow=${flowName}`;
};

// Получение prev/next
const { prev, next } = getPrevNext(slug, flowName);
```

## 📝 npm скрипты

```bash
# Генерация ref-seq.json
npm run ref:seq

# Полная сборка (включая seq)
npm run ref:build
```

## 🎨 UI компоненты

### Flow badge
```tsx
{flowName !== "default" && (
  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
    {getFlowLabel(flowName)}
  </span>
)}
```

### Flow card
```tsx
<Link
  href={`/ref/${first.slug}?flow=${flowName}`}
  className="flex flex-col p-4 border-2 border-gray-200 rounded-lg
           hover:border-blue-500 hover:shadow-md transition-all"
>
  <h3>{getFlowLabel(flowName)}</h3>
  <p>Начать с: {first.title}</p>
</Link>
```

## 🚀 Расширения (на будущее)

### 1. Визуализация flow
- Показать прогресс: шаг 3 из 13
- Progress bar
- Миникарта всех шагов

### 2. Сохранение состояния
- localStorage для запоминания последнего flow
- History API для back/forward

### 3. Дополнительные flows
- По ролям (guest vs auth)
- По типу услуги (haircut vs massage)
- По сложности (quick vs full)

### 4. Аналитика
- Отслеживание популярных flows
- Метрики прохождения
- Точки выхода

## 🐛 Известные особенности

1. **defaultFlow = алфавитный порядок**
   - Если не выбран flow, используется простой алфавитный список
   - Не отражает логику бизнес-процесса

2. **Эвристический подход**
   - Flows построены на основе имён файлов
   - Не анализируют реальные переходы из HAR (файлы слишком большие)

3. **Статичные flows**
   - Flows определены в ref-seq.json
   - Для изменения нужно перегенерировать файл

## ✅ Итог

**Реализована полноценная система навигации по flows:**
- ✅ Автоматическая генерация ref-seq.json
- ✅ 3 предопределённых flows (service/master/time-first)
- ✅ UI для запуска flows из каталога
- ✅ Навигация Prev/Next внутри flow
- ✅ Индикатор текущего flow
- ✅ TypeScript типизация
- ✅ Сохранение flow в URL

**Всё работает локально, без внешних зависимостей!**

---

*Создано: 20 октября 2025*

