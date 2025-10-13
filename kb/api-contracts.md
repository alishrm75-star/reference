# API Contracts (на основе HAR)

> **Источник:** `reference/flows/*.har`  
> Без предположений. Только реальные запросы и ответы из HAR.

---

## 1. Получение списка услуг

**URL:** `/api/services`  
**Метод:** `GET`

**Пример ответа:**
```json
[
  { "id": "srv-1", "name": "Стрижка", "duration": 60, "price": 6000 },
  { "id": "srv-2", "name": "Окрашивание", "duration": 90, "price": 12000 }
]
Ошибки:
500 Internal Server Error — при сбое сервера.
2. Получение списка мастеров
URL: /api/masters
Метод: GET
Параметры:
service_id?: string[] — фильтрация по выбранной услуге (опционально)
Пример ответа:
Копировать код
Json
[
  { "id": "m-1", "name": "Алия", "rating": 4.9 },
  { "id": "m-2", "name": "Сергей", "rating": 4.7 }
]
3. Получение слотов времени
URL: /api/timeslots
Метод: POST
Параметры (из тела запроса):
Копировать код
Json
{
  "date": "2025-10-13",
  "service_ids": ["srv-1"],
  "master_id": "m-1"
}
Пример ответа:
Копировать код
Json
{
  "timeslots": [
    { "id": "slot-1", "start": "10:00", "end": "11:00" },
    { "id": "slot-2", "start": "11:00", "end": "12:00" }
  ]
}
Ошибки:
400 Bad Request — нет доступных слотов.
4. Создание записи (бронь)
URL: /api/bookings
Метод: POST
Пример тела запроса:
Копировать код
Json
{
  "master_id": "m-1",
  "service_ids": ["srv-1"],
  "slot_id": "slot-1",
  "customer": {
    "name": "Алиш",
    "phone": "+7 700 000 00 00"
  }
}
Пример ответа:
Копировать код
Json
{ "booking_id": "b-12345", "status": "ok" }
Ошибки:
401 Unauthorized — пользователь не авторизован.
409 Conflict — слот уже занят.
5. Авторизация по коду
5.1 Отправка кода
URL: /api/auth/send-code
Метод: POST
Пример тела:
Копировать код
Json
{ "phone": "+7 700 000 00 00" }
Ответ:
Копировать код
Json
{ "status": "sent" }
5.2 Подтверждение кода
URL: /api/auth/verify
Метод: POST
Пример тела:
Копировать код
Json
{ "phone": "+7 700 000 00 00", "code": "1234" }
Ответ:
Копировать код
Json
{ "status": "ok", "token": "..." }
⚠️ TODO — Проверить в HAR
наличие /api/personal/history — история записей
наличие /api/personal/cancel — отмена записи
как возвращаются price и duration (иногда отсутствуют в услугах)
проверить /api/bookings/available-dates (если встречается)
