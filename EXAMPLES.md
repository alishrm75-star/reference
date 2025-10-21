# 📸 Reference UI — Примеры использования

## 🎯 Быстрые сценарии

### Сценарий 1: Найти экран авторизации

```bash
1. Открыть http://localhost:3000/ref
2. В поле поиска ввести "auth"
3. Результаты:
   - Auth
   - Auth Code Verification
   - Auth Password
4. Кликнуть на "Auth"
5. Экран открывается в просмотре
```

**URL**: `/ref/auth`

---

### Сценарий 2: Просмотреть все экраны выбора услуг

```bash
1. Открыть http://localhost:3000/ref
2. Ввести "select services"
3. Найдено 9 экранов:
   - Select Services Default
   - Select Services Category Open
   - Select Services Drawer Bottom Menu
   - Select Services Open Summary Edit
   - Select Services Servise Selected
   - Select Services Time Default
   - Select Services Time Category Open
   - Select Services Time Servise Selected
   - Select Services Start Category Open
```

**Фильтр**: `select services`

---

### Сценарий 3: Навигация по связанным экранам

```bash
1. Открыть /ref/select_services_default
2. Кнопка "Next" → select_services_drawer_bottom_menu
3. Кнопка "Next" → select_services_open_summary_edit
4. Кнопка "Prev" → возврат назад
5. Кнопка "Назад к каталогу" → /ref
```

**Навигация**: Prev ◄ | ► Next

---

### Сценарий 4: Поделиться ссылкой на экран

```bash
1. Открыть /ref/profile_default
2. Кнопка "Копировать ссылку"
3. Сообщение: "✓ Скопировано!"
4. Отправить коллеге в Slack/Telegram
5. Коллега открывает точно этот же экран
```

**Deep-link**: `http://localhost:3000/ref/profile_default`

---

### Сценарий 5: Открыть исходный HTML

```bash
1. Открыть любую страницу в /ref/[slug]
2. Кнопка "Открыть HTML" ↗
3. Открывается новая вкладка с /ref-html/[slug].html
4. Можно посмотреть исходный код (View Source)
5. Можно скачать HTML для анализа
```

**Прямой доступ**: `/ref-html/{slug}.html`

---

## 🔍 Примеры поиска

### По ключевому слову

| Запрос | Найдено | Примеры |
|--------|---------|---------|
| `auth` | 3 | Auth, Auth Code Verification, Auth Password |
| `master` | 10 | Select Master Default, Master Info Default, ... |
| `services` | 9 | Select Services Default, Select Services Category Open, ... |
| `time` | 11 | Select Time Default, Select Time Future Date, ... |
| `order` | 2 | Order Confirmation, Success Order |
| `profile` | 1 | Profile Default |
| `personal` | 4 | Personal Main Default, Personal Account, ... |

### По вариантам состояния

| Базовый экран | Варианты |
|---------------|----------|
| `about` | about_default, about_show_more_comments |
| `create-record` | create-record_default, create-record_invalid, create-record_ready |
| `select_services` | _default, _category_open, _servise_selected, _time_default |
| `select_master` | _default, _indicator_any, _indicator_specific_master |
| `new-move-record` | _default, _future-date, _slot_selected |

---

## 🎨 Визуальные паттерны в Reference UI

### 1. Экраны выбора (Select)

**Паттерн**: Список с карточками + кнопка действия

**Примеры**:
- `/ref/select_services_default` — выбор услуг
- `/ref/select_master_default` — выбор мастера
- `/ref/select_time_default` — выбор времени

**UI элементы**:
- Заголовок окна
- Карточки с превью
- Нижняя панель с кнопкой "Далее"

---

### 2. Экраны состояния (Status)

**Паттерн**: Иконка + текст + кнопки действий

**Примеры**:
- `/ref/success-order` — успешная запись
- `/ref/order-confirmation` — подтверждение
- `/ref/record_status` — статус записи

**UI элементы**:
- Большая иконка (✓ или ⚠)
- Заголовок результата
- Описание
- Кнопки действий

---

### 3. Формы (Forms)

**Паттерн**: Поля ввода + валидация + submit

**Примеры**:
- `/ref/auth` — ввод телефона
- `/ref/auth_code-verification` — ввод кода
- `/ref/auth_password` — ввод пароля

**UI элементы**:
- Label + Input
- Вспомогательный текст
- Кнопка "Продолжить"
- Ссылки (например, "Получить код повторно")

---

### 4. Информационные экраны (Info)

**Паттерн**: Аватар + данные + детали

**Примеры**:
- `/ref/master-info_default` — информация о мастере
- `/ref/profile_default` — профиль пользователя
- `/ref/about_default` — о бизнесе

**UI элементы**:
- Фото/аватар
- Имя и должность
- Рейтинг/статистика
- Описание
- Комментарии/отзывы

---

### 5. Drawer меню (Drawers)

**Паттерн**: Всплывающая панель снизу/сверху

**Примеры**:
- `/ref/select_services_drawer_bottom_menu`
- `/ref/select_master_drawer_bottom_menu`
- `/ref/personal_drawer_bottom_menu`

**UI элементы**:
- Drag handle (полоска сверху)
- Заголовок
- Список опций
- Кнопка закрытия

---

### 6. Календари и расписание

**Паттерн**: Календарная сетка + слоты времени

**Примеры**:
- `/ref/select_time_default`
- `/ref/select_time_calendar-collapsed`
- `/ref/select_time_future-date`

**UI элементы**:
- Календарь (месяц + дни)
- Временные слоты
- Индикаторы доступности
- Кнопка "Выбрать"

---

## 💡 Практические кейсы

### Кейс 1: Дизайнер изучает UI-паттерны

**Задача**: Понять как устроен экран выбора услуг

**Действия**:
```
1. Открыть /ref
2. Искать "select services"
3. Открыть select_services_default
4. Изучить layout:
   - Верхний бар с кнопкой "Назад"
   - Список услуг с ценами
   - Нижняя кнопка "Выбрать"
5. Сравнить с другими вариантами:
   - select_services_category_open (категория развернута)
   - select_services_servise_selected (услуга выбрана)
6. Задокументировать паттерн
```

**Результат**: Документ с описанием UI-паттерна "Select List"

---

### Кейс 2: Разработчик верстает форму авторизации

**Задача**: Сделать форму ввода телефона как в Altegio

**Действия**:
```
1. Открыть /ref/auth
2. Изучить HTML через DevTools:
   - Структура формы
   - CSS-классы
   - Стили инпутов
3. Открыть /ref-html/auth.html напрямую
4. View Source → скопировать нужные части
5. Извлечь стили из /ref-assets/css/scc.css
6. Создать React-компонент AuthForm
```

**Результат**: Компонент `<AuthForm />` идентичный оригиналу

---

### Кейс 3: Продакт-менеджер планирует функционал

**Задача**: Составить user flow для бронирования

**Действия**:
```
1. Открыть каталог /ref
2. Найти все экраны процесса:
   - select-branch (выбор филиала)
   - select_services_default (выбор услуги)
   - select_master_default (выбор мастера)
   - select_time_default (выбор времени)
   - order-confirmation (подтверждение)
   - success-order (успех)
3. Пройти flow по кнопкам Next
4. Сделать скриншоты каждого шага
5. Создать документ с описанием сценария
```

**Результат**: User Flow диаграмма "Процесс бронирования"

---

### Кейс 4: QA-инженер создаёт тест-кейсы

**Задача**: Написать тесты для формы с кодом

**Действия**:
```
1. Открыть /ref/auth_code-verification
2. Изучить состояния:
   - Пустые поля
   - Заполнение кода
   - Валидация
   - Кнопка "Получить повторно"
3. Открыть /ref/create-record_invalid (ошибка)
4. Сравнить с create-record_ready (успех)
5. Составить матрицу тест-кейсов
```

**Результат**: 15 тест-кейсов для проверки формы

---

### Кейс 5: Frontend-архитектор проектирует компоненты

**Задача**: Разбить UI на переиспользуемые компоненты

**Действия**:
```
1. Просмотреть все экраны в /ref
2. Выявить повторяющиеся паттерны:
   - Header (с кнопкой назад)
   - Card (для услуг, мастеров)
   - Button (primary, secondary)
   - Input (text, code, password)
   - Drawer (bottom sheet)
   - Avatar (круглый, квадратный)
   - Rating (звёзды)
3. Создать UI Kit в Figma/Storybook
```

**Результат**: Библиотека из 25 UI-компонентов

---

## 🎓 Учебные примеры

### Пример 1: Как добавить новую страницу

```bash
# 1. Положить HTML в /html/
cp new-page.html html/

# 2. Запустить сборку
npm run ref:build

# 3. Открыть каталог
http://localhost:3000/ref

# 4. Искать "new page"
# → Страница появилась автоматически!
```

---

### Пример 2: Как обновить CSS

```bash
# 1. Изменить scc/scc.css
nano scc/scc.css

# 2. Скопировать ассеты
npm run ref:assets

# 3. Перезагрузить страницу
# → Стили обновились
```

---

### Пример 3: Как извлечь токен цвета

```bash
# 1. Открыть /ref/auth
# 2. DevTools → Elements
# 3. Найти элемент с брендовым цветом
# 4. Computed → найти --widget-ui-kit-color-brand
# 5. Значение: #fcce2c

# Теперь можно использовать в Tailwind:
# colors: { brand: '#fcce2c' }
```

---

### Пример 4: Как сравнить два состояния

```bash
# 1. Открыть /ref/select_services_default
# 2. Скриншот (Win+Shift+S)
# 3. Открыть /ref/select_services_servise_selected
# 4. Скриншот
# 5. Положить рядом в Figma/Photoshop
# 6. Выявить различия:
#    - Галочка на выбранной услуге
#    - Кнопка "Далее" стала активной
#    - Цвет карточки изменился
```

---

## 📋 Чек-листы

### Чек-лист: Анализ экрана

- [ ] Открыть экран в /ref/[slug]
- [ ] Сделать скриншот
- [ ] Изучить структуру (DevTools)
- [ ] Выписать цвета и шрифты
- [ ] Измерить отступы и размеры
- [ ] Найти похожие экраны
- [ ] Задокументировать паттерн

### Чек-лист: Создание компонента

- [ ] Найти референсный экран
- [ ] Извлечь HTML-структуру
- [ ] Извлечь CSS-стили
- [ ] Создать React-компонент
- [ ] Добавить TypeScript типы
- [ ] Написать Storybook story
- [ ] Сравнить с референсом
- [ ] Отметить различия

### Чек-лист: Проверка вёрстки

- [ ] Открыть свою страницу
- [ ] Открыть референс /ref/[slug] в соседней вкладке
- [ ] Сравнить визуально (Alt+Tab)
- [ ] Проверить цвета (ColorPick)
- [ ] Проверить шрифты (DevTools)
- [ ] Проверить отступы (линейка)
- [ ] Исправить расхождения
- [ ] Повторить проверку

---

## 🚀 Продвинутые техники

### Техника 1: Batch-анализ экранов

```bash
# Скрипт для массового скриншотинга
for slug in auth select_services_default select_master_default; do
  open "http://localhost:3000/ref/$slug"
  sleep 2
  # Скриншот (автоматизировать через Puppeteer)
done
```

### Техника 2: Извлечение CSS-переменных

```javascript
// В консоли браузера на странице /ref/[slug]
const styles = getComputedStyle(document.documentElement);
const tokens = {};

for (let i = 0; i < styles.length; i++) {
  const name = styles[i];
  if (name.startsWith('--widget-ui-kit')) {
    tokens[name] = styles.getPropertyValue(name).trim();
  }
}

console.table(tokens);
// Копировать результат
```

### Техника 3: Создание сравнительной таблицы

```markdown
| Экран | Компоненты | Цвета | Шрифты |
|-------|-----------|-------|--------|
| auth | Input, Button | brand, text-primary | Inter 400, 600 |
| select_services | Card, List | brand, grey-03 | Inter 400, 500 |
| profile | Avatar, Text | brand, black | Inter 400, 700 |
```

---

## 💬 Часто задаваемые вопросы

### Как найти все экраны определённого типа?

**Ответ**: Используйте поиск в каталоге с ключевыми словами:
- "select" — экраны выбора
- "auth" — авторизация
- "master" — про мастеров
- "time" — выбор времени
- "order" — заказы

### Как посмотреть все варианты одного экрана?

**Ответ**: Ищите по базовому имени. Например, для `select_services`:
- select_services_default
- select_services_category_open
- select_services_drawer_bottom_menu
- select_services_open_summary_edit
- select_services_servise_selected

### Можно ли скачать HTML напрямую?

**Ответ**: Да! Откройте `/ref-html/{slug}.html` в браузере, затем Save As.

### Как сравнить два экрана визуально?

**Ответ**: 
1. Откройте оба в разных вкладках
2. Alt+Tab для быстрого переключения
3. Или используйте split-screen браузера

### Где посмотреть исходный CSS?

**Ответ**: `/public/ref-assets/css/scc.css`

---

**Документ обновлён**: 20 октября 2025  
**Всего примеров**: 25+  
**Категорий**: 7

