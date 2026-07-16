---
name: release
description: Run the Vesper store release procedure end-to-end — preflight gate, version bump, EAS production builds, per-locale store metadata, submission, and rejection handling. Use when the user says release, submit, ship to stores, new version, bump version, or mentions App Store / Play submission.
---

# Release — store submission runbook

Full checklist source: `docs/PROJECT.md` §20 (launch checklist) and BACKLOG Epic 10. This skill is the operational sequence. NEVER run builds or submissions without explicit confirmation — they consume EAS credits and store review cycles.

## 0) Preflight gate (all must pass before anything else)
- [ ] `pnpm typecheck` + `pnpm test` green — including astro-core goldens and `sirius_0337.spec.ts`
- [ ] `/review` on the pending diff: zero [MUST] findings
- [ ] `docs/SESSION.md` blockers list is empty or explicitly accepted by the user
- [ ] All 4 locales complete for any new strings (spot-check newest keys)
- [ ] No secrets/PII in the diff; `.env` untouched by commits

## 1) Version bump
- Semver in `apps/mobile/app.json` (`version`): user-facing changes → minor; fixes → patch.
- iOS `buildNumber` / Android `versionCode`: managed by EAS auto-increment — do not hand-edit.
- Add a dated entry to `CHANGELOG.md` (create it on first release) — 3 bullets max, user language.

## 2) Build (ask first)
- `eas build --profile production --platform all`
- While building: verify store listing drafts vs PROJECT.md §20 ASO seeds for pt-PT, pt-BR, en, es.
- Character limits vary by store and change — verify current limits in each console before pasting copy.

## 3) Internal verification
- Install iOS build via TestFlight internal + Android via internal testing track.
- Smoke: fresh install → onboarding → Tonight renders → one test push arrives → paywall opens → restore works.
- Screenshots: regenerate ONLY if UI changed since last set (scripted captures, all locales).

## 4) Submit (ask first)
- `eas submit --platform ios` / `--platform android`
- Reviewer notes template (fill and paste into App Store Connect):
  > Demo location: Lisbon, Portugal (or use the in-app city picker — no account needed).
  > The app sends astronomy notifications (ISS passes, aurora, eclipse reminders); all are user-configurable in Settings → Notifications.
  > No login exists; no UGC. Purchases: Pro yearly/lifetime via in-app purchase, restorable in Settings.
- Confirm in-app products are attached to the submission (ASC requires linking IAPs to the version).

## 5) Aftercare
- Tag the release: `git tag v<version>` + push tags; add a line to `docs/SESSION.md` session log.
- On approval: sanity-test the production EAS Update channel with a trivial OTA.
- Respond to every store review in the first weeks (rating protection).

## Rejection playbook (don't panic — respond same day)
1. Read the exact guideline number cited; reply in Resolution Center addressing ONLY that.
2. Common causes and fixes:
   - Permission strings too vague → rewrite NSLocationWhenInUseUsageDescription etc. to say exactly why, resubmit.
   - IAP not linked / not reviewable → attach products to the version, verify sandbox purchase.
   - Metadata mismatch (screenshots show features not present) → align screenshots to the build.
   - "Minimum functionality" style pushback → reply demonstrating notifications + eclipse + tonight value; offer a demo video.
3. Log the rejection + resolution in `docs/DECISIONS.md` if it changes policy, else in SESSION.md.
