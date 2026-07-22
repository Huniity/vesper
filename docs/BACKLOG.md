# VESPER — WORK BREAKDOWN: Day-0 Checklist + Epics
**v1.0 · 11 Jul 2026 · Companion to PROJECT.md** · Format: GitHub-flavored checkboxes — tick them directly in your repo.

**How to read this:** Epics (E0–E11) map to milestones M0–M5 in PROJECT.md §19. Each task has a plain-language *why* so you understand the decision, not just the instruction. Estimates assume your skill level (strong React/TS, new to RN). Total ≈ **95–105 h** over 4.5 weeks → **~20–22 h/week**. That is the honest number. The cut order exists because this number has zero slack.

---

# EPIC 0 — DAY-0 PRE-FLIGHT (before any code) · ~6 h active + waiting time · start TODAY

Some of these have multi-day waiting periods. Everything here is blocking; none of it is code.

## T0.1 — Apple Developer Program ⏰ LONGEST LEAD TIME — DO FIRST
*Why:* Individual enrollment includes identity verification that can take 24–48 h+, and you can't create the app record, TestFlight builds, or in-app products without it. The **Paid Apps Agreement** (separate step inside App Store Connect) is what actually unlocks selling — it needs your bank IBAN and tax forms, and pending agreements have blocked launches for weeks.
- [ ] Enroll as **Individual** (€99/yr) at developer.apple.com — use an Apple ID you fully control, with 2FA
- [ ] Once approved: App Store Connect → Business → accept **Paid Apps Agreement**
- [ ] Fill banking (your IBAN) and tax info (W-8BEN for Portugal residents — guided form)
- [ ] Create the app record placeholder once the name is chosen (T0.5)
- [ ] Store recovery codes for the Apple ID somewhere safe — losing this account = losing the app

## T0.2 — Google Play Console ⏰ HIDDEN LANDMINE INSIDE
*Why:* $25 one-time, identity verification can take days. **The landmine: new personal developer accounts must run a closed test with at least 12 testers continuously opted-in for 14 days before Google grants production (public) access.** Count backwards from Aug 3: your closed track must be live with 12 testers by **~Jul 18** — meaning a barely-functional shell build goes to testers at the end of Week 1, ready or not.
- [ ] Create personal developer account, complete identity verification
- [ ] Fill payments profile + tax info
- [ ] Recruit **12+ testers now**: Giulio, Diogo, Cristian, classmates, family — collect their Gmail addresses in a sheet
- [ ] Create the app + closed testing track the moment T1.2 produces any installable build
- [ ] Calendar reminder: verify "12 testers / 14 days" counter status on Jul 25

## T0.3 — Service accounts (1 evening, mechanical)
*Why:* Each is free-tier and takes minutes, but doing them mid-sprint breaks flow. Use one email alias pattern (e.g. adrien+ceu@…) and a password manager; enable 2FA on all.
- [ ] GitHub repo (private) — this is also where these checklists will live
- [ ] Expo account + install EAS CLI (`npm i -g eas-cli`)
- [ ] Supabase project (EU region — GDPR optics and latency)
- [ ] Railway account (worker hosting)
- [ ] RevenueCat account (products come later, T9.1)
- [ ] Sentry (two projects: mobile, worker) + PostHog (EU cloud)
- [ ] Anthropic API key for the news pipeline (set a hard monthly spend limit, e.g. €15)
- [ ] healthchecks.io (free dead-man switch for worker crons)
- [ ] EOG registration (VIIRS nighttime lights download — free, needed for light-pollution derivation, P2 but registration is instant)
- [ ] Buy domain (~€10) — needed for privacy/deletion pages before submission

## T0.4 — Name decision (by Jul 15, hard deadline)
*Why:* The bundle identifier (`com.yourbrand.appname`) is **immutable after first store upload**. The name gates the app record, domain, socials, and store listings. Don't perfection-spiral: pick from a shortlist of 3 using a checklist, move on.
- [ ] Shortlist 3 names (criteria: pronounceable in PT/ES/EN, ≤2 syllables ideal, no "Sirius", no existing astronomy app collision)
- [ ] For each: search App Store, Play Store, EUIPO trademark database (class 9/42), domain availability, Instagram/TikTok handle
- [ ] Decide. Register domain + socials same day
- [ ] Fix bundle ID: `com.<brand>.<app>` — write it in PROJECT.md, never change it

## T0.5 — Legal & money plumbing (Portugal)
*Why:* Store payouts arrive ~30–60 days after first sales — but receiving business income in Portugal means having **atividade aberta nas Finanças** (categoria B). Doing this after money arrives is the wrong order. Note: this is process description, not tax advice — a 30-min conversation with an accountant (or your school's support services) is worth it.
- [ ] Confirm/open atividade nas Finanças (CIRS cat. B; CAE for software) — or book accountant chat this week
- [ ] Privacy policy + data-deletion pages drafted (generator OK for v1) — hosted on your domain (T11.1 landing can wait; a bare page cannot)
- [ ] Support email alias (support@domain) — required field in both stores
- [ ] Decide founder-deal fine print (500 units, one per account) — one paragraph, on the landing page

## T0.6 — Hardware & dev environment
*Why:* Expo Go can't run RevenueCat or full notification behavior — you'll use **development builds** (custom native binaries via EAS) installed on real devices. Android you own locally; iOS arrives via TestFlight from EAS cloud builds — no Mac needed, but you need *an* iPhone in your hands regularly.
- [ ] Node 20 LTS + pnpm 9 installed; Android Studio (for emulator + USB debugging)
- [ ] Your Android phone in developer mode, connected, `adb devices` shows it
- [ ] **Borrow/secure an iPhone** you can access 2–3×/week through Aug 12 (TestFlight installs) — name the person, ask today
- [ ] VS Code + ESLint/Prettier extensions; a `.editorconfig` in repo

**Epic 0 acceptance:** both store accounts verified · Paid Apps agreement accepted · 12 Play testers listed · name + bundle ID frozen · domain live with privacy page · iPhone access confirmed.

---

# EPIC 1 — FOUNDATIONS (M0 · target Jul 13) · ~6 h

## T1.1 — Monorepo scaffold · 1.5 h
*Why:* One repo, three packages (`mobile`, `worker`, `astro-core`) sharing TypeScript. pnpm "workspaces" make `astro-core` importable by the other two as if it were an npm package — change the math once, both app and server get it. Same monorepo idea as your Django+React projects, but all-TS.
- [x] `pnpm init` root with `pnpm-workspace.yaml` (`apps/*`, `packages/*`)
- [x] Root `tsconfig.base.json` (strict: true) extended by each package
- [x] Shared ESLint + Prettier config at root
- [ ] Folder tree exactly as PROJECT.md §10 (empty files OK)
  - done: `apps/worker/**`, `packages/astro-core/**`, `apps/mobile` dirs + 4 locale files, `supabase/migrations`, `docs/runbooks`, `.github/workflows`
  - deliberately deferred to their owning tasks: `apps/mobile` expo files (T1.2), `supabase/seed.sql` (T1.3), `.github/workflows/ci.yml` (T1.5)

## T1.2 — Expo app init + first builds · 2 h
*Why:* `create-expo-app` with expo-router gives you file-based routing immediately. The critical early step is producing a **dev build** on both platforms in week 1 — build problems found on Jul 14 are annoying; found on Aug 1 they're fatal. This build is also what unblocks the Play 12-tester clock (T0.2).
- [ ] `pnpm create expo-app apps/mobile` (TS template) + expo-router
- [ ] `eas init`, configure `eas.json` (development / preview / production profiles)
- [ ] `eas build --profile development` for Android → install on your phone
- [ ] Same for iOS → TestFlight internal → install on borrowed iPhone
- [ ] Upload the same Android build to Play **closed testing** → invite the 12 testers

## T1.3 — Supabase: schema + RLS · 1.5 h
*Why:* Migration files (versioned SQL) instead of dashboard clicking = reproducible database, reviewable in git. RLS (row-level security) is Postgres enforcing "devices can only read their own rows" at the database layer — even a bug in app code can't leak another user's data.
- [ ] Supabase CLI linked; `supabase/migrations/0001_init.sql` = PROJECT.md §13 schema **+ add `cell_weather (geohash4 text, ts timestamptz, cloud real, primary key(geohash4, ts))`** (gap found during breakdown — the score needs stored forecasts)
- [ ] RLS policies: device-scoped tables keyed on device id; public read on `sw_readings, articles(published), sky_events, passes, cell_weather`
- [ ] `seed.sql`: one test device, Faro + Lisboa + Madrid locations
- [ ] Verify with anon key: can read published articles, cannot read other devices' prefs

## T1.4 — Worker scaffold + deploy · 1.5 h
*Why:* Deploying a hello-world worker to Railway on day 2 means "deployment" is never a risk again — from then on you only add features to something that already ships. The healthcheck endpoint is what Railway and healthchecks.io watch.
- [ ] `apps/worker`: Node 20 + TS + node-cron; `src/index.ts` registers jobs from a table
- [ ] `/health` endpoint; Dockerfile; deploy to Railway; env vars set (Supabase service key, etc.)
- [ ] One dummy cron (logs every 5 min) visible in Railway logs
- [ ] healthchecks.io ping wired to it

## T1.5 — CI + guardrails · 1 h
*Why:* A solo dev's code reviewer is the CI. Typecheck + lint + tests on every push to main catches the 2 a.m. mistake before it compounds.
- [ ] GitHub Actions: pnpm install → typecheck → lint → `pnpm test` (all workspaces)
- [ ] Branch protection on `main` (CI must pass)
- [ ] Sentry SDK in app + worker (release tagging via env); PostHog init with the 8 events from PROJECT.md §18 stubbed

**Epic 1 acceptance = M0:** dev build running on your Android + borrowed iPhone · Play closed track live with testers invited · CI green · worker deployed and heartbeating.

---

# EPIC 2 — ASTRO-CORE, the math heart (M1 · Jul 19) · ~10 h

*Why this epic exists:* every feature — Tonight, alerts, eclipse, calendar — is a thin UI over this package. It runs identically on the phone (instant, offline) and in the worker (deciding who to notify). Getting it right *and tested* first means every later bug is a UI bug, not a physics bug. Quick mental model you'll need: a sky object's position is stored as **RA/Dec** (fixed sky coordinates, like latitude/longitude on the celestial sphere); what an observer cares about is **altitude/azimuth** (how high, which compass direction) — which depends on *where you are* and *what time it is*. astronomy-engine does all conversions; your job is wrapping it with clean types.

## T2.1 — Package setup · 0.5 h
- [ ] `packages/astro-core`: deps `astronomy-engine`, `satellite.js`; zero React imports (must run in Node)
- [ ] Public API in `index.ts`; vitest configured

## T2.2 — ephemeris.ts · 2 h
*What:* for a location + date, return rise/set/transit times and current alt/az for Sun, Moon, planets.
- [ ] `makeObserver(lat, lon)` wrapper
- [ ] `riseSet(body, observer, date)` → {rise, set, transit} handling "never rises/sets" cases
- [ ] `positionOf(body, observer, when)` → {alt, az, magnitude, distanceAU}
- [ ] Types exported; JSDoc on every public fn (you in 3 weeks = a stranger)

## T2.3 — Moon phase & illumination · 0.5 h
- [ ] `moonPhase(date)` → {illumFraction, phaseName, isWaxing}; phase names localized later via keys, not strings

## T2.4 — Darkness windows · 1 h
*Why:* "tonight" formally = sun below −18° (astronomical night). The score and Top-3 evaluate inside this window.
- [ ] `twilights(observer, date)` → civil/nautical/astro dusk & dawn
- [ ] `darknessWindow(observer, date)` handling summer high-latitude "no full darkness"

## T2.5 — eclipse.ts · 1 h
- [ ] `localSolarEclipse(observer)` → {partialBegin, maxTime, partialEnd, obscuration, sunAltAtMax} via `SearchLocalSolarEclipse`
- [ ] Sanity print for Faro, Lisboa, Madrid, A Coruña — eyeball vs published tables (formal test in T2.11)

## T2.6 — visibility.ts (the score) · 1.5 h
- [ ] Implement §12.1 formula; all constants in `config.ts`
- [ ] `tonightScore(observer, date, cloudSeries, bortle)` = max over darkness window
- [ ] Unit tests: clear+no-moon ≈ 90s; 100% cloud → <10; full moon adjacent → visible penalty

## T2.7 — tiers.ts · 0.5 h
- [ ] `visibleWithTier(magnitude, tier)` (6.0 / 8.0 / 11.0); Pro formula `7.7 + 5·log10(cm)` stub for P2

## T2.8 — conjunctions.ts · 1 h
- [ ] Pairwise angular separation over evening window; threshold 3°, both alt >10° → event objects

## T2.9 — passes.ts · 1.5 h
*What:* the three-condition visibility test — observer in twilight/dark, satellite in sunlight, high enough to matter.
- [ ] TLE parse → propagate (satellite.js) at 30 s steps over 48 h → group into passes {aos, tca, los, maxElev, direction}
- [ ] `isSunlit` check via satellite position vs Earth shadow (astronomy-engine sun vector)
- [ ] Direction as compass octant ("NW→SE")

## T2.10 — catalogs · 1 h
- [ ] `showers.json`: 2026 IMO calendar hand-entered (name, peak date, ZHR, radiant, moon note) — content work, do while tired
- [ ] `messier.json` structure defined + 10 sample objects (full 110 in P2)
- [ ] `bright-stars.json`: the 5 conjunction stars + Pleiades

## T2.11 — Golden tests · 1.5 h — DO NOT SKIP
*Why:* this is how you trust everything above. Pull reference values once from JPL Horizons (web UI, CSV) and Espenak/NASA eclipse tables into fixtures; assert your outputs within tolerance. When a refactor breaks physics, these scream.
- [ ] 15+ fixtures: Moon/Jupiter rise-set for Faro & São Paulo (southern hemisphere catches sign bugs!), eclipse contacts for 3 Iberian cities, one ISS pass vs Heavens-Above
- [ ] Tolerances: positions ≤1′, times ±60 s, eclipse contacts ±60 s
- [ ] Runs in CI

**Epic 2 acceptance:** golden tests green in CI · a plain Node script prints tonight's sky for Faro correctly (your "it's alive" moment).

---

# EPIC 3 — APP SHELL & PLATFORM (M1 · Jul 19) · ~8 h

## T3.1 — Design tokens & theming · 1.5 h
*Why:* decide colors/spacing/type once as tokens; every screen composes them. **Red night mode** is table stakes for this audience: pure red-on-black preserves dark adaptation (rods are insensitive to deep red) — it's a second token set, not a redesign.
- [ ] `tokens.ts`: colors (dark default), spacing scale, type scale; night-mode token set
- [ ] ThemeProvider + `useTheme()`; night toggle persisted
- [ ] Contrast check both themes (AA) — your accessibility background, 10 minutes

## T3.2 — Navigation · 1 h
- [ ] Tabs: Tonight · Calendar · Eclipse · News (+ Settings via header)
- [ ] Stack routes: `article/[id]`, `paywall`, settings subpages
- [ ] Deep-link scheme registered (pushes will use `app://article/...`, `app://eclipse`)

## T3.3 — i18n · 1.5 h
*Why:* retrofitting i18n is misery; wiring it before the first real screen costs 30 minutes. Rule: **no string literal ever appears in a component** — keys only.
- [ ] i18next + expo-localization; `locales/{pt-PT,pt-BR,en,es}.json`
- [ ] Fallback chain pt-BR→pt-PT→en; date/number formatting via Intl with locale
- [ ] Lint rule or convention check for hardcoded strings

## T3.4 — Onboarding (≤3 screens) · 1.5 h
*Why:* the notification pre-permission screen matters commercially: explaining *what* you'll send **before** the OS dialog measurably raises opt-in — and push opt-in is this product's oxygen (KPI ≥70%).
- [ ] S1 value promise (one sentence, one image)
- [ ] S2 notification explainer → OS permission request
- [ ] S3 location: GPS (approximate) or city picker → done
- [ ] Skippable; never shown again; analytics events on each step

## T3.5 — Location feature · 1.5 h
- [ ] `expo-location` approximate mode; graceful denial → city picker
- [ ] City picker: bundled top-2000 world cities JSON (name, lat, lon, tz) with local search
- [ ] `geohash4(lat, lon)` util (encode only — 15 lines, no dep)
- [ ] Location store (zustand or context) + persistence; free tier = 1 location enforced here

## T3.6 — Device registration · 1 h
- [ ] First launch: create `devices` row (platform, locale), store returned id locally
- [ ] Push token: request → save to row; token-refresh listener
- [ ] Location saved → upsert `locations` with geohash4 (this feeds the worker's active-cell registry)

## T3.7 — Settings & legal · 1 h
- [ ] Settings: locations, notifications (topics list → E6), appearance (night mode), language override, About
- [ ] About: version, licenses, **MET Norway attribution**, privacy/deletion links
- [ ] "Delete my data" → confirm → cascade delete → local reset

**Epic 3 acceptance = M1 (with Epic 2):** fresh install → onboarding → Tonight shows real rise/set for chosen city, offline, in all 4 languages, on both platforms.

---

# EPIC 4 — TONIGHT MODULE (M1→M2) · ~10 h

## T4.1 — Tonight screen UI · 3 h
- [ ] Object carousel: Moon + visible planets, each with "until 01:54"-style time, image asset (NASA sources, credited in About)
- [ ] Layout survives small screens + Dynamic Type (test 320 pt width)
- [ ] Skeleton loading state

## T4.2 — Score card + NL summary · 2.5 h
*Why the summary is templates, not LLM:* runtime LLM = cost + latency + hallucination risk for zero benefit; 5 score buckets × 4 locales = 20 handwritten sentences with slots ("{clouds}% de nuvens…"). Charm at compile time.
- [ ] Fetch tonight's `cell_weather` for user's geohash via Supabase
- [ ] Compute score on device (astro-core) — server not required
- [ ] 20 template strings written (content task!) + Bortle line when known
- [ ] Stale/missing weather → score from astronomy only + "sem meteo" note

## T4.3 — Top-3 card · 1.5 h
- [ ] Rank objects by per-object score within darkness window; render ranked card with one-tap detail
- [ ] Empty state for hopeless nights ("hoje o céu não colabora — próxima janela: 5ª feira") — trust through honesty

## T4.4 — Tier filter · 1 h
- [ ] Eye/binoculars/telescope segmented control (their UI pattern, our implementation); persisted; filters carousel + Top-3 via `tiers.ts`

## T4.5 — Offline cache · 1.5 h
- [ ] On successful load: snapshot {tonight data, passes, weather} to storage with timestamp
- [ ] On open without network: render snapshot + subtle stale banner
- [ ] Verify: airplane mode at a "dark-sky site" (your garden) shows full Tonight

## T4.6 — Empty/error states · 0.5 h
- [ ] No location yet / weather pending / far-future date — each has a designed state, no spinners-forever

**Epic 4 acceptance:** Tonight is genuinely useful with the app *never having talked to your worker* (pure device + weather rows) — proof of the offline-first principle.

---

# EPIC 5 — WORKER: INGESTION (M2 · Jul 26) · ~8 h

*Mental model:* every ingestor is the same four-beat loop — fetch → validate → **upsert** (insert-or-update, so re-running never duplicates) → heartbeat. Idempotency is the whole game: any job can crash mid-run and simply run again.

## T5.1 — Ingestor framework · 1.5 h
- [ ] `defineIngestor({name, cadence, run})` pattern; registry in `index.ts`
- [ ] Shared: fetch with timeout+retry (3×, backoff), zod validation of external JSON, structured logs
- [ ] Per-ingestor healthchecks.io ping on success; Sentry capture on failure — **one feed dying never kills the loop**

## T5.2 — Space weather (SWPC ×3) · 1.5 h
- [ ] Kp 1-min, solar-wind mag (Bz), plasma (speed/density) → upsert `sw_readings` keyed on ts
- [ ] Cadence 5 min; tolerate SWPC's occasional nulls/gaps
- [ ] Retention job: delete >90 d (keeps table tiny)

## T5.3 — TLE ingestor · 1 h
- [ ] ISS from CelesTrak, cadence 24 h, ETag/If-Modified-Since politeness
- [ ] Insert new `tle_sets` row only when lines actually changed (epoch comparison)

## T5.4 — Weather ingestor · 2 h
- [ ] Active-cell list (T5.5) → MET Norway Locationforecast per cell center, hourly
- [ ] **Required:** identifying User-Agent header (`ceu-app/1.0 contact@domain`) — MET blocks anonymous clients
- [ ] Upsert `cell_weather(geohash4, ts, cloud)`; respect their caching guidance
- [ ] Budget check: cells × 24 calls/day stays trivial at launch scale

## T5.5 — Active-cell registry · 1 h
- [ ] Materialized view or job: distinct geohash4 from `locations` → drives weather + pass computation
- [ ] New cell appears → immediate first weather fetch (new user shouldn't wait an hour for a score)

## T5.6 — Ops polish · 1 h
- [ ] `/health` reports last-success per ingestor; Railway alarm if stale >3× cadence
- [ ] Runbook page: "feed X is down — what degrades, what to tell users" (stale banners, not lies)

**Epic 5 acceptance:** dashboards show fresh Kp/Bz/weather rows; kill one feed on purpose → app shows stale state gracefully, others unaffected.

---

# EPIC 6 — ALERT ENGINE & PUSH (M2 · Jul 26) · ~12 h · the product's soul

## T6.1 — Aurora engine · 2 h
*Approximation note (documented, refine P2):* true trigger latitude is **geomagnetic**, not geographic. v1: geographic latitude + a small published offset table per region — off by ≤1 Kp step at worst; custom thresholds are Pro anyway.
- [ ] Threshold fn per §12.2; evaluator on new `sw_readings`: cells crossing threshold → candidate alerts
- [ ] Pro early-warning rule (Bz ≤ −8 sustained 15 min AND speed ≥ 500) behind entitlement flag
- [ ] Escalation bypasses dedupe only on ≥2-step Kp jumps

## T6.2 — Pass computation · 2 h
- [ ] On TLE change + daily: per active cell compute 48 h passes (astro-core) → upsert `passes` with `dedupe_key = cell:norad:round(tca,5min)`
- [ ] **The 5-min rounding is the fix for Sirius's triple-notification bug**: a refreshed TLE shifting a pass by seconds still collides on the same key → no duplicate

## T6.3 — Notification scheduler · 2 h
*Why scan-at-send instead of schedule-at-compute:* prefs change, passes shift, devices die. A once-per-minute scan of "passes with aos in [now+9, now+11] not yet notified" reads current truth at send time.
- [ ] Minute cron: due passes → devices in cell with iss enabled + elevation pref satisfied (+ Pro `clear_sky_only` gate: skip if score <50)
- [ ] Eclipse scheduler: D-7 / D-1 / T−1h / T−10m per cell local time
- [ ] Conjunction morning-of + moonphase (opt-in) jobs

## T6.4 — budget.ts + dedupe.ts · 1.5 h
- [ ] Budget: ≤2 non-aurora pushes/device/day; quiet hours 00:30–07:00 local (aurora exempt only when user opted into night alerts)
- [ ] Dedupe: insert into `push_log(device, dedupe_key)` unique index **before** send; violation = skip silently
- [ ] Everything dropped is logged with reason (debuggability)

## T6.5 — Dispatcher · 1.5 h
- [ ] Expo Push batches of 100; store tickets/receipts in `push_log.receipt`
- [ ] Receipt sweep: `DeviceNotRegistered` → null the token (list hygiene = deliverability)
- [ ] Payloads carry deep links (`app://eclipse`, `app://tonight`)

## T6.6 — Prefs UI wiring · 1.5 h
- [ ] Notifications settings: per-topic toggles + params (ISS elevation presets 25/40/60; aurora threshold display; Pro custom fields gated)
- [ ] Writes `alert_prefs`; worker reads live
- [ ] Dev-only "send test push" per topic (saves hours of waiting for real events)

## T6.7 — The regression test · 1.5 h
- [ ] `sirius_0337.spec.ts`: fake clock + seeded cell/device → TLE refreshed 3× with jitter → assert **exactly one** ISS push; aurora spike wave → one alert + one escalation only; quiet-hours conjunction → deferred to 07:00
- [ ] Runs in CI; this test is the brand promise, executable

**Epic 6 acceptance = M2 core:** standing in your garden, phone buzzes T−10 for a real ISS pass with correct direction/elevation; duplicates impossible by construction.

---

# EPIC 7 — ECLIPSE MODULE (M2 · Jul 26) · ~8 h

## T7.1 — Eclipse screen · 2.5 h
- [ ] Countdown hero + local circumstances table (start/max/end local time, obscuration %, sun altitude)
- [ ] **Low-sun callout:** at ~19:30–20:30 the Sun sits low — "find a clear western horizon" is advice most apps will forget; we won't
- [ ] Location-aware: totality cities (northern Spain) get "TOTAL" treatment vs partial %

## T7.2 — Weather outlook · 1 h
- [ ] From Aug 5 (inside forecast range): cloud probability for eclipse hour per user cell, honest uncertainty copy before that

## T7.3 — Safety content · 1.5 h (content, 4 locales)
- [ ] Pages: why filters, ISO 12312-2 glasses, pinhole method, phone-camera warning, kids
- [ ] Reviewed by one more person (a teacher at ETIC?); ALWAYS free, linked from every eclipse surface

## T7.4 — Share card · 2 h
- [ ] Skia-rendered image: "Eclipse over {city} — {%} at {time}" + branding → native share sheet
- [ ] This is the growth loop for eclipse week; make it gorgeous, test on WhatsApp/IG story sizes

## T7.5 — Live Activity (STRETCH, timebox 4 h) · 
- [ ] expo-apple-targets spike; if config-plugin hell exceeds timebox → cut without guilt (pre-authorized by cut order)

**Epic 7 acceptance:** times match NASA/Espenak tables ±1 min for 5 test cities; safety pages read naturally in all locales; share card looks like something people *want* on their story.

---

# EPIC 8 — NEWS PIPELINE (M3 · Aug 2) · ~8 h

## T8.1 — Ingest + dedupe · 2 h
- [ ] Spaceflight News v4 + NASA/ESA RSS pull (30 min cadence); normalize to candidate rows
- [ ] pgvector extension on; embed titles+lede; skip if cosine ≥0.92 vs last 7 days (same story, different outlet)

## T8.2 — LLM rewrite · 2.5 h
- [ ] One structured call → zod-validated JSON: {title, summary≈90w, body as 3 Q&A pairs} × 4 locales, "smart friend" tone
- [ ] Guardrails: rewrite-only prompt; any number must exist in source text else omit; failed validation → retry once → drop with log
- [ ] Cost guard: daily article cap + monthly spend alarm

## T8.3 — Images + publish · 1.5 h
- [ ] NASA Image Library / ESA search by keywords; `image_credit` mandatory (UI renders it, DB constraint enforces it); fallback = branded gradient card
- [ ] `status: draft→published` transition **then** optional push (default OFF) — commit-before-push in action

## T8.4 — Feed + article UI · 1.5 h
- [ ] Feed cards (their card pattern, our design); article screen: Q&A template + "Fontes: {source}" line + share
- [ ] Likes P2; comments P3 (per non-goals)

## T8.5 — Editorial ops · 0.5 h
- [ ] Daily 10-min review checklist in runbooks; corrections page route; kill-switch env var to pause pipeline

**Epic 8 acceptance:** 20+ articles live in 4 locales; you'd honestly share any of them; zero verbatim sentences from sources (spot-check 5).

---

# EPIC 9 — MONETIZATION (M3 · Aug 2) · ~6 h

## T9.1 — Products · 1.5 h
- [ ] App Store Connect + Play Console: `pro_yearly` €14.99, `pro_lifetime` €39.99, `founder_lifetime` €19.99
- [ ] RevenueCat: entitlement `pro`, offering with the three packages; regional price review (BRL!)
- [ ] Apple Small Business Program + Play 15% equivalent enrolled

## T9.2 — SDK + gate · 1.5 h
- [ ] react-native-purchases configured (dev build required — you have it)
- [ ] `useIsPro()` hook from RevenueCat customer info; gates: locations>1, custom thresholds, clear-sky gate, (P2 features flagged)

## T9.3 — Paywall · 1.5 h
- [ ] Screen with PROJECT.md §6 copy — **free list rendered on the paywall** (the trust move)
- [ ] Entry points: Pro-feature taps only; never onboarding; founder counter ("{n}/500")
- [ ] Analytics: paywall_viewed → trial_started → purchase funnel

## T9.4 — Webhook + restore · 1.5 h
- [ ] Supabase Edge Function receives RevenueCat webhooks → `devices.is_pro` (worker reads this for Pro alert rules)
- [ ] Restore purchases button; sandbox matrix: buy / restore / expire / lifetime on both platforms

**Epic 9 acceptance:** sandbox purchase on both platforms flips `is_pro` end-to-end (UI + worker behavior) within a minute; restore works on a wiped install.

---

# EPIC 10 — RELEASE (M3–M4 · submit Aug 3) · ~10 h

## T10.1 — Brand assets · 2 h
- [ ] Icon (1024), adaptive Android icon, splash; night-sky restraint > clip-art planets
## T10.2 — Screenshots ×4 locales · 2 h
- [ ] 6.7" + 6.1" sets; scripted captures (fixed demo data), device frames; first shot = Tonight with score, second = eclipse
## T10.3 — Listings · 1.5 h
- [ ] Title/subtitle/description ×4 with ASO seeds (PROJECT.md §20); keywords field (iOS) per locale
## T10.4 — Beta waves · 1.5 h
- [ ] Play closed track already running since W1 (verify 12/14 rule satisfied ✅)
- [ ] TestFlight external (~20: classmates, r/astronomia_pt?, family) — feedback form link in build
## T10.5 — QA sweep · 2 h
- [ ] Detox smoke (onboard→tonight, prefs, paywall sandbox); a11y pass (VoiceOver on iPhone, TalkBack on Android); timezone matrix on device (set clock to Madrid/São Paulo); fresh-install test on lowest-end Android available
## T10.6 — Submit · 1 h
- [ ] Production builds via EAS; reviewer notes (demo location Lisbon, what pushes do, no UGC); submit both
- [ ] Rejection runbook ready: common causes (metadata, permissions strings, payments) with prepared answers
- [ ] EAS Update production channel tested with a trivial OTA before eclipse week

**Epic 10 acceptance = M4:** both stores "In Review" by Aug 3, OTA path proven.

---

# EPIC 11 — LAUNCH & GROWTH (M5 · Aug 12 + ongoing) · ~8 h + ops

## T11.1 — Landing page · 2 h (one evening of your Next.js muscle memory)
- [ ] Hero + store badges + founder-deal counter + privacy/deletion/corrections pages + MET/NASA attribution
## T11.2 — Press kit · 1.5 h
- [ ] Per-city eclipse times table (your astro-core, exported!) journalists can lift with credit; 3 screenshots; contact
- [ ] Pitch 6–8 PT/ES local outlets Aug 1–5 (service angle: "a que horas na tua cidade")
## T11.3 — Creator outreach · 2 h + follow-ups
- [ ] Shortlist 10 PT-BR/ES space creators (100k–1M subs) in a sheet: name, size, email/DM, angle
- [ ] 60-s demo video (screen recording, eclipse module + an alert arriving)
- [ ] DM template (PROJECT.md §21); send 5 before Aug 12 (eclipse = the hook), 5 after with traction numbers
## T11.4 — Eclipse-day war room · 1 h prep
- [ ] Checklist: deploy freeze from Aug 10 (hotfix-only) · dashboards open · scheduled pushes verified in staging Aug 11 · support inbox hourly · share-card flow re-tested morning-of
## T11.5 — Post-launch rhythm · ongoing
- [ ] Reply to every store review (rating protection); Sunday ritual (burn-down, risks, cuts); W+1 retro: funnel numbers vs KPIs → decide P2 order with data

---

# "AND WHAT ELSE?" — the non-obvious list

1. **Play's 12-testers/14-days rule is your most time-critical unknown-unknown.** Closed track live by ~Jul 18 or Android misses eclipse day. Recruit testers *this weekend*.
2. **Paid Apps Agreement + tax forms** block selling even after app approval — do inside T0.1, not later.
3. **Bundle ID is forever.** Name by Jul 15, then never touch it.
4. **An iPhone in hand** 2–3×/week — EAS builds iOS without a Mac, but TestFlight needs a physical device. Secure the loan today.
5. **Permission strings are review bait:** iOS requires human-readable location/notification usage descriptions — write honest ones early (they're localized too).
6. **Finanças/atividade before payouts arrive**, not after. One accountant conversation.
7. **2FA + recovery codes on Apple/Google/GitHub** — account loss is the only unrecoverable failure mode in this whole plan.
8. **Your classmates are an asset:** Giulio, Diogo, Cristian = first Play testers, beta feedback, and safety-content proofreading in exchange for founder codes.
9. **Energy math:** ~20 h/week for 4.5 weeks alongside the internship is a real cost. The cut order (news → conjunctions → Android polish) exists so a bad week costs scope, not the deadline. Protect one full rest day/week — August you will thank July you.

---
**Tracking suggestion:** paste each epic as a GitHub issue with these checkboxes (or use this file directly + GitHub Projects board: Backlog / This week / Done). One source of truth; no Notion sprawl.
