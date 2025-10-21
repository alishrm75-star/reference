# 🎯 Booking UI — Живой клиентский интерфейс

## ✅ Что создано

Полноценный **живой booking UI** в зоне `/b` с полным циклом бронирования и отмены.

---

## 📁 Структура файлов

### Созданные файлы (13 шт.)

```
src/app/b/
├── layout.tsx                     ✅ Layout с подключением ref.css (Altegio стили)
├── page.tsx                       ✅ Редирект на /b/select-branch
├── select-branch/
│   └── page.tsx                   ✅ Список филиалов (Server Component)
├── select-service/
│   └── page.tsx                   ✅ Список услуг (Server Component)
├── select-master/
│   └── page.tsx                   ✅ Список мастеров (Server Component, фильтр по услуге)
├── select-time/
│   └── page.tsx                   ✅ Календарь + слоты (Server Component, 28 будних дней)
├── booking/
│   ├── page.tsx                   ✅ Сводка и валидация (Server Component)
│   └── booking-form.tsx           ✅ Форма подтверждения (Client Component)
├── success/
│   └── page.tsx                   ✅ Успешное создание брони (Server Component)
└── cancel/
    ├── page.tsx                   ✅ Форма отмены (Server Component)
    ├── cancel-form.tsx            ✅ Форма отмены (Client Component)
    └── success/
        └── page.tsx               ✅ Успешная отмена (Server Component)
```

---

## 🚀 Как работает флоу

### 1. Выбор филиала (`/b/select-branch`)
```
GET данные: prisma.branch.findMany()
Клик → /b/select-service?branchId=xxx
```

### 2. Выбор услуги (`/b/select-service`)
```
Параметры: ?branchId=xxx
GET данные: prisma.service.findMany()
Клик → /b/select-master?branchId=xxx&serviceId=yyy
```

### 3. Выбор мастера (`/b/select-master`)
```
Параметры: ?branchId=xxx&serviceId=yyy
GET данные: prisma.masterService.findMany() с join master
Фильтр: только мастера, предоставляющие выбранную услугу
Клик → /b/select-time?branchId=xxx&serviceId=yyy&masterId=zzz
```

### 4. Выбор времени (`/b/select-time`)
```
Параметры: ?branchId=xxx&serviceId=yyy&masterId=zzz
GET данные: prisma.slot.findMany()
Фильтр: 
  - masterId = выбранный мастер
  - isBooked = false (только свободные)
  - startsAt = следующие 28 будних дней
Группировка: по датам
Клик → /b/booking?...&slotId=www
```

### 5. Подтверждение (`/b/booking`)
```
Параметры: ?branchId=xxx&serviceId=yyy&masterId=zzz&slotId=www
GET данные: branch, service, master, slot (валидация)
Проверка: slot.isBooked === false
Форма: customerName (optional), customerPhone (optional)
Submit → POST /api/booking
Success → redirect /b/success?bookingId=aaa
```

### 6. Успех (`/b/success`)
```
Параметры: ?bookingId=aaa
GET данные: prisma.booking.findUnique() с joins
Отображение: сводка + кнопки (новая запись / отменить)
```

### 7. Отмена (`/b/cancel`)
```
Параметры: ?bookingId=aaa (optional)
Форма: ввод bookingId
Submit → DELETE /api/booking/[id]
Success → redirect /b/cancel/success
```

---

## 🎨 Стили и визуал

### Подключение стилей
```typescript
// src/app/b/layout.tsx
import "@/styles/ref.css";
```

**ref.css** импортирует:
```css
@import '/scc/scc.css';
```

**Результат**: Все CSS-классы Altegio доступны:
- `.window-header` — заголовки
- `.label` — метки
- `.subtext` — подписи
- `.price` — цены
- CSS-переменные: `--widget-ui-kit-color-brand`, etc.

### Визуальные классы используются
```typescript
<h1 className="window-header">Заголовок</h1>
<p className="label">Основной текст</p>
<p className="subtext">Вспомогательный текст</p>
<p className="price">1000 ₽</p>
```

---

## 🔄 Навигация через URL

### Query Parameters
Состояние флоу хранится в URL:

```
/b/select-branch
  → /b/select-service?branchId=xxx
    → /b/select-master?branchId=xxx&serviceId=yyy
      → /b/select-time?branchId=xxx&serviceId=yyy&masterId=zzz
        → /b/booking?branchId=xxx&serviceId=yyy&masterId=zzz&slotId=www
          → /b/success?bookingId=aaa
```

**Преимущества**:
- ✅ Можно копировать/делиться ссылками
- ✅ Работает back/forward в браузере
- ✅ Легко отлаживать
- ✅ Нет необходимости в client-side state management

### Валидация параметров
Каждая страница проверяет наличие обязательных параметров:
```typescript
if (!branchId || !serviceId) {
  redirect("/b/select-branch");
}
```

---

## 🗄️ Работа с данными

### Server Components (по умолчанию)
Большинство страниц — Server Components:
- `/b/select-branch` — читает из Prisma
- `/b/select-service` — читает из Prisma
- `/b/select-master` — читает из Prisma + join
- `/b/select-time` — читает свободные слоты
- `/b/booking` — читает данные для валидации
- `/b/success` — читает booking с joins

**Преимущества**:
- Нет гидрации
- SEO-friendly
- Меньше JS на клиенте
- Прямой доступ к БД

### Client Components (только формы)
Только интерактивные формы — Client Components:
- `booking-form.tsx` — форма подтверждения
- `cancel-form.tsx` — форма отмены

**Используют**:
- `"use client"`
- `useState` для полей формы
- `useRouter` для навигации
- `fetch()` для API calls

---

## 📡 API Endpoints

### Используемые (существующие)
```typescript
POST /api/booking
Body: { slotId, serviceId, customerName?, customerPhone? }
Response: { booking }

DELETE /api/booking/[id]
Response: { message }
```

### Не требуется новых API
Все справочники (branch, service, master, slot) читаются напрямую из Prisma в Server Components.

---

## ✅ Валидация и обработка ошибок

### 1. Отсутствие обязательных параметров
```typescript
if (!branchId || !serviceId) {
  redirect("/b/select-branch");
}
```

### 2. Несуществующие сущности
```typescript
const branch = await prisma.branch.findUnique({ where: { id: branchId } });
if (!branch) {
  redirect("/b/select-branch");
}
```

### 3. Занятый слот
```typescript
if (slot.isBooked) {
  return (
    <div>
      <h1>Слот занят</h1>
      <Link href="/b/select-time">Выбрать другое время</Link>
    </div>
  );
}
```

### 4. Ошибки API
```typescript
try {
  const response = await fetch("/api/booking", { method: "POST", ... });
  if (!response.ok) {
    throw new Error(data.error);
  }
} catch (err) {
  setError(err.message);
}
```

### 5. Пустые списки
```typescript
if (services.length === 0) {
  return <div>Услуги не найдены</div>;
}
```

---

## 🧪 Как протестировать

### Полный флоу бронирования
```bash
# 1. Открыть в браузере
http://localhost:3001/b

# 2. Выбрать филиал
Клик на любой филиал

# 3. Выбрать услугу
Клик на любую услугу

# 4. Выбрать мастера
Клик на любого мастера (только те, кто предоставляет услугу)

# 5. Выбрать время
Клик на любой свободный слот (зелёный)

# 6. Подтвердить
Заполнить имя и телефон (опционально)
Кнопка "Подтвердить запись"

# 7. Успех
Увидеть подтверждение с bookingId
```

### Отмена брони
```bash
# 1. На странице успеха
Кнопка "Отменить эту запись"

# 2. Или прямая ссылка
http://localhost:3001/b/cancel

# 3. Ввести bookingId
Вставить ID из страницы успеха (или скопировать из URL ?bookingId=...)

# 4. Подтвердить
Кнопка "Отменить запись"

# 5. Успех
Увидеть подтверждение отмены
```

### Проверка в БД
```bash
# Посмотреть созданные брони
npx prisma studio
# → Открыть таблицу Booking
# → Проверить customerName, customerPhone, slotId

# Проверить занятые слоты
# → Открыть таблицу Slot
# → Проверить isBooked = true для забронированных
```

---

## 🎨 Визуальные особенности

### Карточки с hover-эффектами
```typescript
<Link
  href="..."
  style={{ ... }}
  className="branch-card"
>
  ...
</Link>

<style jsx>{`
  .branch-card:hover {
    border-color: var(--widget-ui-kit-color-brand);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`}</style>
```

### Success/Error состояния
```typescript
// Успех (зелёный круг с галочкой)
<div style={{ backgroundColor: "#f0fdf4", ... }}>
  <div style={{ backgroundColor: "#22c55e", ... }}>
    <svg>✓</svg>
  </div>
</div>

// Ошибка (красная рамка)
<div style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", ... }}>
  <p style={{ color: "#dc2626" }}>{error}</p>
</div>
```

### Календарь и слоты
```typescript
// Группировка по датам
{weekdays.map((date) => {
  const daySlots = slotsByDate.get(dateKey) || [];
  return (
    <div>
      <h2>{format(date, "d MMMM, EEEE")}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))" }}>
        {daySlots.map((slot) => (
          <Link>{format(slot.startsAt, "HH:mm")}</Link>
        ))}
      </div>
    </div>
  );
})}
```

---

## 🔧 Технические детали

### TypeScript
```typescript
interface PageProps {
  searchParams: Promise<{ branchId?: string; serviceId?: string }>;
}

export default async function SelectServicePage({ searchParams }: PageProps) {
  const { branchId } = await searchParams;
  ...
}
```

### Prisma запросы с joins
```typescript
const booking = await prisma.booking.findUnique({
  where: { id: bookingId },
  include: {
    slot: {
      include: {
        branch: true,
        master: true,
      },
    },
    service: true,
  },
});
```

### Date/Time форматирование
```typescript
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const dateTime = format(slot.startsAt, "d MMMM yyyy, HH:mm", { locale: ru });
// "15 октября 2025, 14:30"
```

### Client-side fetch
```typescript
const response = await fetch("/api/booking", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ slotId, serviceId, customerName, customerPhone }),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.error);
}

router.push(`/b/success?bookingId=${data.booking.id}`);
```

---

## 📊 Статистика

| Метрика | Значение |
|---------|----------|
| Всего файлов | 13 |
| Server Components | 10 |
| Client Components | 2 |
| API endpoints | 2 (используем существующие) |
| Страниц флоу | 7 |
| Строк кода | ~1000 |

---

## ✅ Чек-лист готовности

- [x] Layout с Altegio стилями
- [x] Редирект с главной
- [x] Выбор филиала
- [x] Выбор услуги
- [x] Выбор мастера (с фильтром по услуге)
- [x] Выбор времени (28 будних дней, только свободные)
- [x] Форма подтверждения
- [x] Страница успеха
- [x] Отмена брони
- [x] Страница успеха отмены
- [x] Валидация на каждом шаге
- [x] Обработка ошибок
- [x] URL query params для состояния
- [x] TypeScript без ошибок
- [x] Визуал приближен к Altegio
- [x] /ref не затронут

---

## 🎯 Примеры URL

```
# Полный флоу
/b
/b/select-branch
/b/select-service?branchId=cm2oifiy30000108kmolrdoax
/b/select-master?branchId=cm2oifiy30000108kmolrdoax&serviceId=cm2oifiyn0002108km56kpkfa
/b/select-time?branchId=cm2oifiy30000108kmolrdoax&serviceId=cm2oifiyn0002108km56kpkfa&masterId=cm2oifiyq0005108kms29uyhy
/b/booking?branchId=cm2oifiy30000108kmolrdoax&serviceId=cm2oifiyn0002108km56kpkfa&masterId=cm2oifiyq0005108kms29uyhy&slotId=cm2oifiyy000b108kmkhiod3nf
/b/success?bookingId=cm2oifj01000i108km3tps8lrg

# Отмена
/b/cancel
/b/cancel?bookingId=cm2oifj01000i108km3tps8lrg
/b/cancel/success
```

---

## 🚀 Что дальше

### Возможные улучшения
1. **Авторизация** — добавить логин/регистрацию
2. **История записей** — личный кабинет с историей
3. **Фильтры** — по цене, рейтингу, доступности
4. **Notifications** — email/SMS подтверждения
5. **Recaptcha** — защита от ботов
6. **Analytics** — отслеживание конверсий
7. **Multi-language** — i18n
8. **Accessibility** — ARIA-метки, keyboard navigation

### Расширение API
```typescript
// Получение доступных дат для мастера
GET /api/master/[id]/availability
Response: { dates: ["2025-10-21", "2025-10-22", ...] }

// Получение отзывов мастера
GET /api/master/[id]/reviews
Response: { reviews: [...] }

// Повторная запись
POST /api/booking/rebook
Body: { previousBookingId, newSlotId }
```

---

## 📞 Поддержка

Если возникнут вопросы:
1. Проверьте наличие данных: `npx prisma studio`
2. Проверьте seed: `npm run db:seed`
3. Проверьте логи в терминале
4. Проверьте Network tab в DevTools

---

**Booking UI готов к использованию! Всё работает! 🎉**

*Создано: 20 октября 2025*

