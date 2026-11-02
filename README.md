# ZalogHub Todo

Тестовое задание на позицию Junior Frontend Developer: простой список задач на React и TypeScript.

## Возможности

- добавление задач с проверкой пустого ввода;
- переключение задач между активными и выполненными;
- удаление задач;
- фильтрация: все, активные и выполненные;
- сохранение задач в `localStorage`;
- сохранение черновика новой задачи;
- адаптивный интерфейс для компьютеров и мобильных устройств.

## Технологии

- React 19;
- TypeScript;
- Vite;
- CSS;
- Local Storage API.

## Запуск проекта

Для запуска необходим Node.js 20.19+ или 22.12+.

```bash
git clone https://github.com/JenkJS/zaloghub-testovoe
cd zaloghub-testovoe
npm install
npm run dev
```

После запуска приложение будет доступно по адресу, указанному Vite в терминале. Обычно это `http://localhost:5173`.

## Доступные команды

```bash
npm run dev      # запуск приложения в режиме разработки
npm run build    # проверка TypeScript и production-сборка
npm run lint     # проверка ESLint
npm run preview  # локальный просмотр production-сборки
```

## Деплой

Проект настроен для автоматического деплоя на GitHub Pages. После каждого push в ветку `main` GitHub Actions собирает приложение и публикует содержимое папки `dist`.

### Время выполнения: 60 минут.
