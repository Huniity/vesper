---
paths:
  - "supabase/**"
---
# supabase rules
- Migrations are append-only. Never modify an applied migration; `supabase migration new <name>`.
- Every new table enables RLS with its policy in the SAME migration. Public-read is allowed only for: sw_readings, articles (status='published'), sky_events, passes, cell_weather.
- Device-scoped tables key on device id. No PII columns exist by design (no name/email/phone) — see PROJECT.md §16.
- Localized jsonb columns use keys: pt-PT, pt-BR, en, es.
- PROJECT.md §13 is the schema's documentation. Schema change ⇒ update §13 in the same PR.
- Never run `db reset` against the linked remote. Local shadow DB for experiments.
