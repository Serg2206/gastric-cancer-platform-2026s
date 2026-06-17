-- gastric-cancer-platform-2026 schema
-- Supabase / Postgres

create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'resident',
  subscription_status text not null default 'free',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists etude_progress (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  etude_id text not null,
  completed boolean not null default false,
  last_visited timestamptz,
  completed_at timestamptz,
  answer_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint etude_progress_user_etude unique (user_id, etude_id)
);

create table if not exists chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  etude_id text not null,
  context jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists chat_messages (
  id bigserial primary key,
  session_id uuid not null references chat_sessions(id) on delete cascade,
  role text not null,
  content text not null,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_etude_progress_user on etude_progress(user_id);
create index if not exists idx_chat_messages_session on chat_messages(session_id);

-- RLS
alter table profiles enable row level security;
alter table etude_progress enable row level security;
alter table chat_sessions enable row level security;
alter table chat_messages enable row level security;

create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = id);

create policy "Users can view own progress" on etude_progress for select using (auth.uid() = user_id);
create policy "Users can upsert own progress" on etude_progress for all using (auth.uid() = user_id);

create policy "Users can manage own chat sessions" on chat_sessions for all using (auth.uid() = user_id);
create policy "Users can manage own messages" on chat_messages for all using (auth.uid() = user_id);
