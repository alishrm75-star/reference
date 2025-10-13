### kb/previews_full/kb__api-contracts.md.md

```md
### kb/api-contracts.md

```md
# API Contracts (на основе HAR)

> Источник: reference/flows/*.har  
> Без предположений. Только реальные запросы и ответы из HAR.

---

## Примеры эндпоинтов (по извлечённым данным)

### 1. Получение списка услуг
**URL:** `/api/services`  
**Метод:** `GET`  
**Пример ответа:**
```json
[
  { "id": "srv-1", "name": "Стрижка", "duration": 60, "price": 6000 },
  { "id": "srv-2", "name": "Окрашивание", "duration": 90, "price": 12000 }
]
Ошибки: 500 Internal Server Error (редко)
2. Получение мастеров
URL: /api/masters
Метод: GET
Параметры:
service_id?: string[] (опционально) Пример ответа:
Копировать код
Json
[
  { "id": "m-1", "name": "Алия", "rating": 4.9 },
  { "id": "m-2", "name": "Сергей", "rating": 4.7 }
]
3. Получение слотов времени
URL: /api/timeslots
Метод: POST
Параметры (из тела):
date: string
service_ids: string[]
master_id?: string
Пример ответа:
Копировать код
Json
{
  "timeslots": [
    { "id": "slot-1", "start": "10:00", "end": "11:00" },
    { "id": "slot-2", "start": "11:00", "end": "12:00" }
  ]
}
Ошибки: 400 (нет свободных слотов)
4. Создание записи
URL: /api/bookings
Метод: POST
Пример тела запроса:
Копировать код
Json
{
  "master_id": "m-1",
  "service_ids": ["srv-1"],
  "slot_id": "slot-1",
  "customer": { "name": "Алиш", "phone": "+7 700 000 00 00" }
}
Пример ответа:
Копировать код
Json
{ "booking_id": "b-12345", "status": "ok" }
Ошибки: 401 (неавторизован), 409 (слот уже занят)
5. Авторизация
URL: /api/auth/send-code
Метод: POST
Пример тела: { "phone": "+7..." }
Ответ: { "status": "sent" }
URL: /api/auth/verify
Метод: POST
Пример тела: { "phone": "+7...", "code": "1234" }
Ответ: { "status": "ok", "token": "..." }
⚠️ TODO
Проверить наличие /api/personal/history и /api/personal/cancel в HAR.
Уточнить, как возвращается price и duration в услугах (иногда отсутствует).
Проверить, есть ли эндпоинт /api/bookings/available-dates.

```

```
