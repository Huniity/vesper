# Vesper — CLAUDE.md

Astronomy app: tonight's sky + trustworthy alerts + space news. Expo/Supabase/Node monorepo.
Hard deadline: store submission **3 Aug 2026**, solar eclipse launch **12 Aug 2026**.

## Source-of-truth docs (read on demand — do NOT import)
- `docs/SESSION.md` — living state. **Read this first, every session.**
- `docs/BACKLOG.md` — epics/tasks/subtasks with acceptance criteria. Work is referenced by ID (e.g. E2.T5).
- `docs/PROJECT.md` — full spec: architecture §9, data sources §11, algorithms §12, DB schema §13, notifications §14.
- `docs/DECISIONS.md` — why we chose things. Append, never rewrite.

## Monorepo (greenfield — layout is prescribed, not yet built)
- `apps/mobile` — Expo + TypeScript + expo-router. UI only; math comes from astro-core.
- `apps/worker` — Node 20 + TS on Railway. Ingestors, alert engine, push dispatch.
- `packages/astro-core` — shared pure-TS ephemeris/score/pass logic. Runs on device AND server.

## Commands
- `pnpm install` · `pnpm test` · `pnpm typecheck` · `pnpm lint`
- Single package: `pnpm -F astro-core test`
- DB: `supabase migration new <name>` · `supabase db diff`
- Builds: `eas build --profile development --platform android|ios` (ask before running — uses build credits)

## Iron rules
1. Read `docs/SESSION.md` before anything else. End sessions with `/wrap`.
2. Non-trivial work: plan first, tie it to a BACKLOG task ID. Tick BACKLOG checkboxes only when acceptance criteria are **verified**, not when code is written.
3. TypeScript strict everywhere. No `any` without a `// why:` comment.
4. User-facing strings are i18next keys only — never hardcoded. New key ⇒ update all 4 locales (pt-PT, pt-BR, en, es) in the same change.
5. Tunable astro constants live in `packages/astro-core/src/config.ts`. No magic numbers.
6. Commit-before-push: a notification may only reference DB rows already committed with `status='published'`.
7. Every push has a `dedupe_key` and goes through budget → dedupe → dispatch. No exceptions.
8. Never edit an applied Supabase migration. New migration files only.
9. Secrets via env only. Never in code, logs, fixtures, or commits.
10. Golden tests in astro-core are sacred. If they fail, stop and report — never loosen tolerances to pass.
11. Conventional Commits (`feat(mobile): …`). One logical change per commit. Never `git push --force`.
12. Learned a durable project fact? Say so and put it in the right home: this file, a path rule, or `docs/DECISIONS.md`.

## Workflow loop
`/task <id>` → implement per path rules → `/review` → commit → `/wrap`.

## Context discipline
PROJECT.md and BACKLOG.md are long. Open the specific section you need; don't re-read whole files each turn.
