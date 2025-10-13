# Flows — экраны и переходы

> **Источник:** `reference/pages` и `reference/flows`  
> Все связи подтверждены по HTML и HAR. Без предположений.

---

## 🧭 Основные сценарии

### 1. Master-First — начало с выбора мастера

**Описание:**  
Пользователь сначала выбирает мастера, затем дату и время, потом подтверждает запись.

**Стартовый экран:**  
`select-master__base.html`

**Переходы:**
- `select-master__click-master.html` → `select-time__base.html`
- `select-master__click-slot.html` → `confirm__base.html`

**HAR:**
- `flows/master-first__full@guest.har`
- `flows/master-first__full@auth.har`

---

### 2. Service-First — начало с выбора услуги

**Описание:**  
Пользователь начинает выбор с услуги, затем выбирает мастера и время.

**Стартовый экран:**  
`select-services__base.html`

**Переходы:**
- `select-services__with-selected.html` → `select-master__base.html`

**HAR:**
- `flows/service-first__full@guest.har`
- `flows/service-first__full@auth.har`

---

### 3. Time-First — начало с выбора даты и времени

**Описание:**  
Пользователь сначала выбирает дату и слот, затем мастера и подтверждает.

**Стартовый экран:**  
`select-time__base.html`

**Переходы:**
- `select-time__change-day.html` → обновление слотов
- `select-time__click-slot.html` → `confirm__base.html`

**HAR:**
- `flows/time-first__full@guest.har`
- `flows/time-first__full@auth.har`

---

## 📋 Дополнительные экраны

| Экран | Назначение | Связи |
|--------|-------------|--------|
| `confirm__base.html` | Подтверждение записи | После выбора слота |
| `confirm__error.html` | Ошибка валидации | Остаётся на странице подтверждения |
| `success__base.html` | Успешная запись | После запроса `confirm__submit.har` |
| `cancel__base.html` | Отмена записи | Из личного кабинета (`personal__base.html`) |
| `personal__base.html` | Личный кабинет клиента | Из меню или при авторизации |
| `auth__base.html` | Авторизация по SMS/WhatsApp | При создании записи или через меню |

---

## 🔗 Логика связей

1. Любой сценарий (`master-first`, `service-first`, `time-first`) → `confirm__base.html`
2. После подтверждения (`confirm__submit.har`) → `success__base.html`
3. Из `personal__base.html` → возможны:
   - просмотр истории записей  
   - переход к `cancel__base.html`  
   - повторная запись (возврат к `select-services__base.html`)
4. При ошибке API или невалидных данных → `confirm__error.html`

---

## ⚠️ TODO (уточнить позже)

- Уточнить переходы внутри `personal__base.html` (история, отмена, перенос).  
- Проверить HAR-файлы авторизации: возможны два сценария (по SMS и по WhatsApp).  
- Проверить наличие состояния `confirm__success.html` — иногда встречается в `flows/*success.har`.  
- В HAR для `service-first` и `master-first` уточнить шаги переключения даты (`select-time__change-day.html`).

---
