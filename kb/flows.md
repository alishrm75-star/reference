# Flows — экраны и переходы

> Источник: reference/pages и reference/flows  
> Все связи определены по HTML и HAR. Никаких предположений.

---

## 🧭 Основные сценарии

### 1. Master-First (начало с выбора мастера)
- **Старт:** `select-master__base.html`
- **Дальнейшие состояния:**  
  - `select-master__click-master.html` → переход на `select-time__base.html`
  - `select-master__click-slot.html` → переход на `confirm__base.html`
- **HAR:** `flows/master-first__full@guest.har`, `flows/master-first__full@auth.har`

### 2. Service-First (начало с выбора услуги)
- **Старт:** `select-services__base.html`
- **Состояния:**  
  - `select-services__with-selected.html` → переход на `select-master__base.html`
- **HAR:** `flows/service-first__full@guest.har`, `flows/service-first__full@auth.har`

### 3. Time-First (начало с выбора даты/времени)
- **Старт:** `select-time__base.html`
- **Состояния:**  
  - `select-time__change-day.html`
  - `select-time__click-slot.html` → переход на `confirm__base.html`
- **HAR:** `flows/time-first__full@guest.har`, `flows/time-first__full@auth.har`

---

## 📋 Дополнительные экраны

| Экран | Назначение | Связи |
|--------|-------------|--------|
| `confirm__base.html` | Подтверждение записи | после выбора слота |
| `confirm__error.html` | Ошибка валидации | остаётся на той же странице |
| `success__base.html` | Успешная запись | после `confirm__submit.har` |
| `cancel__base.html` | Отмена записи | доступна из личного кабинета |
| `personal__base.html` | Личный кабинет клиента | доступен из меню |
| `auth__base.html` | Авторизация по SMS / WhatsApp | вызывается при создании записи или через меню |

---

## ⚠️ TODO (уточнить позже)
- Уточнить переходы внутри `personal__base.html` (история записей, отмена, перенос).  
- Проверить HAR для авторизации — возможны два разных сценария (по SMS и по WhatsApp).  
- Добавить состояние `confirm__success.html`, если появится в новых выгрузках.
