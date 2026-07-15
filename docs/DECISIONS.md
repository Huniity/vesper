# DECISIONS — append-only ADR-lite (## D-xxx · date · title / Decision / Why / Revisit-if)

## D-001 · 2026-07-11 · Expo over bare RN / Flutter / PWA
**Decision** Expo + TypeScript + expo-router, EAS builds. **Why** React muscle memory; EAS = iOS without a Mac; OTA updates near eclipse deadline; PWA lacks reliable iOS push + store monetization. **Revisit if** a required native module fights config plugins for >1 day.

## D-002 · 2026-07-11 · Shared `astro-core` package
**Decision** One pure-TS package for all ephemeris/score/pass math, used by app and worker. **Why** Same math on device (offline) and server (alerts); one set of golden tests. **Revisit if** never.

## D-003 · 2026-07-11 · MET Norway for production weather
**Decision** MET Norway Locationforecast (attribution + User-Agent) in prod; Open-Meteo dev-only. **Why** Open-Meteo free tier is non-commercial. **Revisit if** forecast quality issues → Open-Meteo paid.

## D-004 · 2026-07-11 · Light pollution derived from VIIRS radiance
**Decision** Derive our own Bortle-ish layer from EOG VIIRS data. **Why** World Atlas 2015 is CC BY-NC-SA — incompatible with a paid app. **Revisit if** licensing of a better source changes.

## D-005 · 2026-07-11 · Geohash-4 cell fan-out
**Decision** All location-based compute per geohash-4 cell, fan out to devices. **Why** O(cells) not O(users); privacy (server never sees precise coords). **Revisit if** cell size causes wrong-pass complaints (→ geohash-5 for passes only).

## D-006 · 2026-07-11 · Notification discipline as product identity
**Decision** Budget ≤2/day non-aurora, quiet hours, dedupe_key = cell:norad:tca-rounded-5min, commit-before-push. **Why** Competitor's duplicate 03:37 pushes are our case study; trust is the differentiator. **Revisit if** never — loosen only per-topic with explicit opt-in.

## D-007 · 2026-07-11 · Freemium: yearly + lifetime only
**Decision** €14.99/yr, €39.99 lifetime, founder €19.99×500. No weekly/monthly/ads/credits. Free tier is complete. **Why** Anti-subscription-trap trust; PhotoPills precedent; clean position vs free competitor. **Revisit if** trial data says otherwise post-launch.

## D-008 · 2026-07-11 · 4 locales at launch, no French
**Decision** pt-PT, pt-BR, en, es. **Why** PT/ES are the wedge; French pokes the incumbent's home market for little gain. **Revisit if** organic FR demand appears.

## D-009 · 2026-07-11 · Anonymous-first, zero PII
**Decision** No account required; device UUID; no name/email/phone collected. **Why** GDPR posture + trust marketing vs competitor's identity-linked collection. **Revisit if** cross-device sync becomes a top request (→ optional account).

## D-010 · 2026-07-12 · No community features in v1–v2
**Decision** Photos/comments deferred to P3. **Why** Moderation burden, App Store UGC requirements, zero eclipse-launch value. **Revisit if** retention plateaus post-P2.
