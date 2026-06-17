# Gastric Cancer Platform 2026

Интерактивный курс для онкохирургов и резидентов по хирургии рака желудка.

## Технологический стек

- Next.js 15 + TypeScript + Tailwind CSS
- Supabase — PostgreSQL, схема, миграции
- Clerk Auth — аутентификация (следующий шаг)
- Stripe — подписки B2C/B2B (после auth)
- Claude API — AI-тьютор (после auth)
- localStorage — действующий локальный прогресс

## Текущее состояние

- 12 этюдов замкнуты и доступны по `/etudes/etude-1` .. `/etudes/etude-12`
- Есть интерактивный `CaseStudy` и общий прогресс
- Сторонние сервисы пока не подключены; проект работает в автономном режиме
- Build проходит

## Переменные окружения

### 1. Создайте файл `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://uwtxwuclutjdcjenahcd.supabase.co
```

### 2. Получите ключи

#### Supabase
1. Зарегистрируйтесь на https://supabase.com
2. Создайте новый проект
3. Перейдите в Settings → API
4. Скопируйте:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### Clerk
1. Зарегистрируйтесь на https://clerk.com
2. Создайте новое приложение
3. Перейдите в API Keys
4. Скопируйте:
   - Publishable Key → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Secret Key → `CLERK_SECRET_KEY`

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Режим разработки с отслеживанием прогресса
npm run dev

# Сборка продакшн
npm run build

# Запуск продакшн
npm start
```

## Структура проекта

- `src/app/etudes/` — 12 интерактивных модулей курса
- `src/app/api/` — API endpoints для прогресса и профиля
- `src/lib/` — клиенты Supabase, утилиты прогресса
- `src/hooks/` — React хуки (useProgress)
- `src/components/` — переиспользуемые компоненты (SiteNav, CaseStudy)
- `supabase/schema.sql` — схема БД и политики RLS

## Миграции Supabase

1. Установите Supabase CLI
2. Выполните `supabase db push` или примените SQL вручную из `supabase/schema.sql`

## Диагностика окружения

Перейдите на `/diagnostics` чтобы проверить статус всех интеграций.
