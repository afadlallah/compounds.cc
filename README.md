# Compounds.cc

Evidence-forward reference library for nootropics, peptides, and supplements.
Built on Next.js 16 + Supabase + Drizzle + the Vercel AI SDK.

> **Medical disclaimer.** Nothing here is medical advice. Evidence quality is uneven
> across entries. Talk to a qualified clinician before making any health decision.

## Stack

| Layer          | Choice                                              |
| -------------- | --------------------------------------------------- |
| Runtime / PM   | Bun                                                 |
| Framework      | Next.js 16 (App Router, RSC, Server Actions)        |
| Language       | TypeScript                                          |
| Styling        | Tailwind CSS v4 + CSS variables                     |
| DB / Auth      | Supabase (Postgres + Auth + RLS + Storage)          |
| ORM            | Drizzle                                             |
| AI recommender | Vercel AI SDK + Anthropic Claude                    |
| Email          | Resend                                              |
| Rate limiting  | Upstash Redis                                       |
| Testing        | Vitest (unit) + Playwright (E2E)                    |
| Deployment     | Vercel                                              |

## Local setup

```bash
bun install
cp .env.example .env.local
```

Edit `.env.local` with real values. Minimum to run dev mode off the local seed data:

- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — any Supabase project
- `NEXT_PUBLIC_SITE_URL=http://localhost:3000`

Everything else is only needed for the feature that uses it (chat → Anthropic,
newsletter → Resend, rate limit → Upstash).

### Run dev

```bash
bun dev
```

Visit http://localhost:3000. The home page, database, A-Z, compound detail pages,
leaderboard, compare, and match pages all work against the local seed data in
`lib/data/seed-compounds.ts` — no database required yet.

### Provision Supabase (when ready)

```bash
# Option 1: local Supabase (requires Docker)
supabase init
supabase start
# copy the output URLs/keys into .env.local
supabase db push  # applies supabase/migrations/*

# Option 2: remote Supabase
# create project at supabase.com, copy keys into .env.local
bun db:push  # applies Drizzle-generated migration
# then run the hand-authored migration via the Supabase SQL editor:
#   supabase/migrations/0001_init.sql
```

### Seed the database

```bash
bun db:seed
```

This inserts the same objects from `lib/data/seed-compounds.ts` into Supabase.

## Layout

```
app/                        # Next.js App Router
  (auth)/sign-in/           # magic-link sign-in
  admin/                    # role-gated admin dashboard
    compounds/              #   CRUD (list / detail / new)
    scores/                 #   score management
    reviews/                #   review moderation
    suggestions/            #   user suggestion triage
    subscribers/            #   newsletter subscribers + export
    protocols/              #   protocol management
    audit-log/              #   admin activity log
  api/                      # route handlers
    chat/                   #   AI recommender streaming
    subscribe/              #   newsletter signup
    suggest/                #   user compound suggestions
  chat/                     # AI recommender UI
  compare/                  # side-by-side comparison
  database/                 # searchable library
  a-to-z/                   # alphabetical index
  leaderboard/              # ranked by use case
  match/                    # goal → compound picker
  protocols/                # curated stacks
  substances/[slug]/        # compound detail
  feed.xml/                 # RSS feed
  robots.ts                 # robots.txt
  sitemap.ts                # XML sitemap
components/
  layout/                   # header, footer, disclaimer, theme
lib/
  admin/                    # audit logging + role guard
  ai/                       # system prompt + tool definitions
  data/                     # seed data used before DB is wired
  db/                       # Drizzle schema, client, typed queries
  seo/                      # JSON-LD helpers
  supabase/                 # server / browser / admin client factories
  validation/               # Zod schemas for forms + API input
  env.ts                    # validated environment variables
  ratelimit.ts              # Upstash rate limiter
supabase/
  migrations/               # SQL migrations (0001_init.sql is hand-authored)
  seed.ts                   # seed script
```

## What works

- Home page, database, A-Z, compound detail, leaderboard, compare, match, protocols
- Dark mode, theme toggle, medical disclaimer banner
- Supabase client factories (server / browser / admin)
- Middleware: session refresh + `/admin` and `/chat` route gating
- Admin dashboard: compound CRUD, scores, reviews, suggestions, subscribers, audit log
- API routes: chat (streaming), subscribe, suggest
- AI recommender: system prompt + tool definitions
- Drizzle schema (20 tables) + typed query layer
- SQL migration: schema + RLS policies + triggers + tsvector + `is_admin()` helper
- Seed data: 8 compounds with scores across 14 use cases
- SEO: sitemap, robots.txt, RSS feed, JSON-LD
- Rate limiting on public API routes
- Input validation (Zod schemas)
- Error, loading, and not-found pages

## What's pending

- Wire database/leaderboard/compare/match to Supabase instead of seed data
- Profile creation + `/u/[handle]` profile pages
- Review submission (public-facing)
- Bookmarks
- Newsletter subscribe flow end-to-end (Resend)
- Playwright E2E tests
- Expand seed data (8 → 20+ compounds)

## Scripts

| Command            | Purpose                                    |
| ------------------ | ------------------------------------------ |
| `bun dev`          | Dev server (Turbopack)                     |
| `bun run build`    | Production build                           |
| `bun start`        | Run the production build                   |
| `bun typecheck`    | `tsc --noEmit`                             |
| `bun test`         | Vitest                                     |
| `bun test:e2e`     | Playwright                                 |
| `bun db:generate`  | Generate SQL migration from Drizzle schema |
| `bun db:push`      | Apply Drizzle migrations                   |
| `bun db:studio`    | Open Drizzle Studio                        |
| `bun db:seed`      | Run the seed script                        |
