---
description: Self-review the current diff against Vesper conventions before commit
---
Review `git diff` (unstaged + staged) against our rules and report violations with file:line refs.
Checklist:
- i18n: hardcoded user-facing strings? all 4 locales updated together?
- Secrets/PII: keys, tokens, precise coordinates, .env content in code, logs, or fixtures?
- Push safety: dedupe_key present? budget/quiet-hours path used? commit-before-push respected?
- DB: new tables have RLS in the same migration? no edits to applied migrations?
- astro-core: React/Expo imports? magic numbers that belong in config.ts? golden fixture for new math? Southern-Hemisphere case?
- Mobile: a11y labels, loading/empty/error states, tokens (no raw hex), night-mode safe?
- Tests: assert behavior; goldens and sirius_0337 still green?
Severity per finding: [MUST] / [SHOULD] / [NIT]. After the report, fix [MUST] items on my confirmation.
