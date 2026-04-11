-- ============================================================================
-- 0001_init.sql — initial schema, tsvector, triggers, RLS policies
-- ============================================================================

-- Extensions ----------------------------------------------------------------

create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm";

-- Enums ---------------------------------------------------------------------

do $$ begin
  create type compound_category as enum (
    'peptide', 'supplement', 'nootropic', 'sarm', 'adaptogen',
    'glp', 'racetam', 'amino_acid', 'medicine', 'herb', 'growth_hormone'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type user_role as enum ('user', 'admin');
exception when duplicate_object then null; end $$;

do $$ begin
  create type suggestion_status as enum ('pending', 'accepted', 'rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type ai_message_role as enum ('user', 'assistant', 'system', 'tool');
exception when duplicate_object then null; end $$;

-- Shared updated_at trigger function ----------------------------------------

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Core tables ---------------------------------------------------------------

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger categories_set_updated_at before update on public.categories
  for each row execute function public.set_updated_at();

create table if not exists public.use_cases (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger use_cases_set_updated_at before update on public.use_cases
  for each row execute function public.set_updated_at();

create table if not exists public.tags (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.compounds (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category compound_category not null,
  summary text not null,
  quick_verdict text,
  evidence_score integer not null default 0,
  research_notes text,
  cautions text,
  caveats text,
  benefits text[],
  dosage_notes text,
  side_effects text[],
  structure_image_url text,
  published boolean not null default false,
  search_vector tsvector
    generated always as (
      setweight(to_tsvector('english', coalesce(name, '')), 'A') ||
      setweight(to_tsvector('english', coalesce(summary, '')), 'B') ||
      setweight(to_tsvector('english', coalesce(research_notes, '')), 'C')
    ) stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists compounds_slug_idx on public.compounds (slug);
create index if not exists compounds_category_idx on public.compounds (category);
create index if not exists compounds_published_idx on public.compounds (published);
create index if not exists compounds_search_vector_idx
  on public.compounds using gin (search_vector);
create trigger compounds_set_updated_at before update on public.compounds
  for each row execute function public.set_updated_at();

create table if not exists public.compound_use_case_scores (
  compound_id uuid not null references public.compounds(id) on delete cascade,
  use_case_id uuid not null references public.use_cases(id) on delete cascade,
  score integer not null check (score between 0 and 100),
  rationale text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (compound_id, use_case_id)
);
create index if not exists scores_use_case_score_idx
  on public.compound_use_case_scores (use_case_id, score desc);
create trigger scores_set_updated_at before update on public.compound_use_case_scores
  for each row execute function public.set_updated_at();

create table if not exists public.compound_relations (
  compound_id uuid not null references public.compounds(id) on delete cascade,
  related_compound_id uuid not null references public.compounds(id) on delete cascade,
  relation_type text not null default 'related',
  created_at timestamptz not null default now(),
  primary key (compound_id, related_compound_id),
  check (compound_id <> related_compound_id)
);

create table if not exists public.compound_tags (
  compound_id uuid not null references public.compounds(id) on delete cascade,
  tag_id uuid not null references public.tags(id) on delete cascade,
  primary key (compound_id, tag_id)
);

create table if not exists public.protocols (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  goal text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists protocols_slug_idx on public.protocols (slug);
create trigger protocols_set_updated_at before update on public.protocols
  for each row execute function public.set_updated_at();

create table if not exists public.protocol_compounds (
  protocol_id uuid not null references public.protocols(id) on delete cascade,
  compound_id uuid not null references public.compounds(id) on delete cascade,
  role text not null default 'core',
  dosage_notes text,
  order_index integer not null default 0,
  primary key (protocol_id, compound_id)
);

create table if not exists public.expert_quotes (
  id uuid primary key default gen_random_uuid(),
  compound_id uuid not null references public.compounds(id) on delete cascade,
  expert_name text not null,
  source_url text,
  quote_text text not null,
  posted_at timestamptz,
  created_at timestamptz not null default now()
);

-- User tables ---------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  handle text unique,
  display_name text,
  avatar_url text,
  bio text,
  role user_role not null default 'user',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger profiles_set_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

-- Auto-create a profiles row when a new auth user is created
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, split_part(new.email, '@', 1))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  compound_id uuid not null references public.compounds(id) on delete cascade,
  title text not null,
  body text not null,
  rating integer not null check (rating between 1 and 5),
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists reviews_compound_idx on public.reviews (compound_id);
create trigger reviews_set_updated_at before update on public.reviews
  for each row execute function public.set_updated_at();

create table if not exists public.bookmarks (
  user_id uuid not null references public.profiles(id) on delete cascade,
  compound_id uuid not null references public.compounds(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, compound_id)
);

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  confirmed boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.suggestions (
  id uuid primary key default gen_random_uuid(),
  compound_name text not null,
  status suggestion_status not null default 'pending',
  submitted_ip text,
  created_at timestamptz not null default now()
);

-- AI chat -------------------------------------------------------------------

create table if not exists public.ai_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null default 'New conversation',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger ai_sessions_set_updated_at before update on public.ai_sessions
  for each row execute function public.set_updated_at();

create table if not exists public.ai_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.ai_sessions(id) on delete cascade,
  role ai_message_role not null,
  content jsonb not null,
  created_at timestamptz not null default now()
);
create index if not exists ai_messages_session_idx
  on public.ai_messages (session_id, created_at);

-- Admin / audit -------------------------------------------------------------

create table if not exists public.compound_revisions (
  id uuid primary key default gen_random_uuid(),
  compound_id uuid not null references public.compounds(id) on delete cascade,
  editor_id uuid references public.profiles(id) on delete set null,
  diff jsonb not null,
  created_at timestamptz not null default now()
);
create index if not exists compound_revisions_compound_idx
  on public.compound_revisions (compound_id);

create table if not exists public.admin_audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  target_table text not null,
  target_id text,
  payload jsonb,
  created_at timestamptz not null default now()
);

-- ============================================================================
-- Row-Level Security
-- ============================================================================

-- Helper: is the caller an admin?
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- Enable RLS on all tables --------------------------------------------------

alter table public.categories                enable row level security;
alter table public.use_cases                 enable row level security;
alter table public.tags                      enable row level security;
alter table public.compounds                 enable row level security;
alter table public.compound_use_case_scores  enable row level security;
alter table public.compound_relations        enable row level security;
alter table public.compound_tags             enable row level security;
alter table public.protocols                 enable row level security;
alter table public.protocol_compounds        enable row level security;
alter table public.expert_quotes             enable row level security;
alter table public.profiles                  enable row level security;
alter table public.reviews                   enable row level security;
alter table public.bookmarks                 enable row level security;
alter table public.subscribers               enable row level security;
alter table public.suggestions               enable row level security;
alter table public.ai_sessions               enable row level security;
alter table public.ai_messages               enable row level security;
alter table public.compound_revisions        enable row level security;
alter table public.admin_audit_log           enable row level security;

-- Public read policies ------------------------------------------------------

create policy "categories_public_read" on public.categories
  for select using (true);

create policy "use_cases_public_read" on public.use_cases
  for select using (true);

create policy "tags_public_read" on public.tags
  for select using (true);

create policy "compounds_public_read" on public.compounds
  for select using (published = true or public.is_admin());

create policy "compound_scores_public_read" on public.compound_use_case_scores
  for select using (true);

create policy "compound_relations_public_read" on public.compound_relations
  for select using (true);

create policy "compound_tags_public_read" on public.compound_tags
  for select using (true);

create policy "protocols_public_read" on public.protocols
  for select using (published = true or public.is_admin());

create policy "protocol_compounds_public_read" on public.protocol_compounds
  for select using (true);

create policy "expert_quotes_public_read" on public.expert_quotes
  for select using (true);

-- Profiles ------------------------------------------------------------------

create policy "profiles_public_read" on public.profiles
  for select using (true);

create policy "profiles_self_update" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- Reviews -------------------------------------------------------------------

create policy "reviews_public_read" on public.reviews
  for select using (published = true or user_id = auth.uid() or public.is_admin());

create policy "reviews_self_insert" on public.reviews
  for insert with check (user_id = auth.uid());

create policy "reviews_self_update" on public.reviews
  for update using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "reviews_self_delete" on public.reviews
  for delete using (user_id = auth.uid() or public.is_admin());

-- Bookmarks -----------------------------------------------------------------

create policy "bookmarks_self_select" on public.bookmarks
  for select using (user_id = auth.uid());

create policy "bookmarks_self_insert" on public.bookmarks
  for insert with check (user_id = auth.uid());

create policy "bookmarks_self_delete" on public.bookmarks
  for delete using (user_id = auth.uid());

-- Subscribers (anyone can join, only admins can read)

create policy "subscribers_public_insert" on public.subscribers
  for insert with check (true);

create policy "subscribers_admin_read" on public.subscribers
  for select using (public.is_admin());

-- Suggestions (anyone can submit, only admins can read)

create policy "suggestions_public_insert" on public.suggestions
  for insert with check (true);

create policy "suggestions_admin_read" on public.suggestions
  for select using (public.is_admin());

-- AI sessions / messages (owner only)

create policy "ai_sessions_self" on public.ai_sessions
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "ai_messages_self_select" on public.ai_messages
  for select using (
    exists (
      select 1 from public.ai_sessions s
      where s.id = session_id and s.user_id = auth.uid()
    )
  );

create policy "ai_messages_self_insert" on public.ai_messages
  for insert with check (
    exists (
      select 1 from public.ai_sessions s
      where s.id = session_id and s.user_id = auth.uid()
    )
  );

-- Admin-only tables ---------------------------------------------------------

create policy "compound_revisions_admin_read" on public.compound_revisions
  for select using (public.is_admin());

create policy "admin_audit_log_admin_read" on public.admin_audit_log
  for select using (public.is_admin());

-- Admin write policies for content tables
-- (Service-role bypasses RLS; these allow logged-in admins to write via RLS.)

create policy "compounds_admin_write" on public.compounds
  for all using (public.is_admin()) with check (public.is_admin());

create policy "protocols_admin_write" on public.protocols
  for all using (public.is_admin()) with check (public.is_admin());

create policy "categories_admin_write" on public.categories
  for all using (public.is_admin()) with check (public.is_admin());

create policy "use_cases_admin_write" on public.use_cases
  for all using (public.is_admin()) with check (public.is_admin());

create policy "tags_admin_write" on public.tags
  for all using (public.is_admin()) with check (public.is_admin());

create policy "compound_scores_admin_write" on public.compound_use_case_scores
  for all using (public.is_admin()) with check (public.is_admin());

create policy "compound_relations_admin_write" on public.compound_relations
  for all using (public.is_admin()) with check (public.is_admin());

create policy "compound_tags_admin_write" on public.compound_tags
  for all using (public.is_admin()) with check (public.is_admin());

create policy "protocol_compounds_admin_write" on public.protocol_compounds
  for all using (public.is_admin()) with check (public.is_admin());

create policy "expert_quotes_admin_write" on public.expert_quotes
  for all using (public.is_admin()) with check (public.is_admin());
