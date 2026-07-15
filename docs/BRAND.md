# BRAND.md — Vesper identity (v1)

# Soul (canonical, merged 2026-07-15)

Seven questions, answered once. Every screen, notification, and store listing answers to this section.

**1 · Special because** — it makes the sky a shared daily discovery. First-time stargazers gain knowledge and trust; serious observers gain precision; everyone gains something worth pointing at. It earns daily use the honest way — the sky changes every day — and it respects two rare things equally: the night and your attention. Discovery, and sharing the unknown: that's what space is about.

**2 · First open** — sparkle. Wonder and excitement, the universe at a touch, something in the eyes. Day one is cinematic (the intro is allowed to amaze); day thirty is calm anticipation — "Jupiter at 22:40, and the sky will be clear." The intro dazzles; the ritual soothes.

**3 · The 22:00 feeling** — awe with no noise. Stars being born and dying overhead; your problems shrinking to their true size; the quiet click when a dot becomes *that's Jupiter*. Peace, orientation, the exhale.

**4 · The place** — a rooftop at dusk, kept by a lighthouse, with a spacecraft's horizon. The rooftop is where you stand: democratic, one flight above ordinary life, no gear required. The lighthouse is the alert engine: someone kept watch so you don't have to. The spacecraft is the feed: your mind carried into the vast unknown. Never a planetarium — we point at the real sky.

**5 · The person** — an old sailor from the age of celestial navigation fused with an astronaut adrift in the dark: the past and future of wayfinding in one voice. Speaks little, points a lot. Explains with realistic drawings, glyphs, and quick texts. Scientific and straight to the point; slightly poetic at the ends. Quiet, patient, funny in very small doses. Honest about clouds.

**6 · Vesper never...**
- ...charges you for what's above your head. Free is complete, forever, for everyone — with or without knowledge.
- ...shouts twice. (The 03:37 vow — encoded in `sirius_0337.spec.ts`.)
- ...guesses. Measured, not guessed.
- ...begs — for reviews, upgrades, or one more minute.
- ...spends your attention without paying it back in sky.

**7 · On closing** — ready. Ready to look up; ready to be the one who explains the sky to whoever is standing beside them; quietly hungry to come back. Being closed is Vesper succeeding — and every user who leaves ready to teach is the growth loop working.

---

## Voice rules (operational — derived from §5, apply to ALL copy)
1. Point, don't lecture: lead with the glyph, diagram, or direction; text is short and secondary.
2. Structure: scientific body first → at most one poetic closing line. Never open with poetry.
3. Humor: rare, dry, one line, never in alerts.
4. Honest about conditions: clouds win sometimes — say it plainly ("hoje o céu não colabora").
5. Two registers: onboarding and eclipse moments may sparkle; daily surfaces stay quiet.
6. Write so the user can retell it in one sentence — sharing is the endgame.

## Quotable assets (use in store listings, paywall, press)
- "Vesper never charges you for what's above your head." / PT: "O Vesper nunca te cobra pelo que está por cima da tua cabeça."
- "Measured, not guessed." / "O céu, medido."
- "See the evening first." / "O céu, à hora certa."


Status: name **Vesper** pending trademark gauntlet (BACKLOG T0.4). Icon direction pending — see Open decisions.
Story in one line: *Vesper is the evening star — the first light that tells you the sky is opening. The app is that signal, delivered.*

## Palette (approved — do not change without a DECISIONS entry)
| Token | Hex | Usage ~% | Role |
|---|---|---|---|
| Void | #0B0E20 | 60 | backgrounds |
| Deep Indigo | #1C2350 | 25 | surfaces, cards |
| Starlight | #F5F2FF | 8 | text, icons, strokes |
| Twilight Violet | #8B7CF6 | 4 | secondary accent, hairlines, chart grids |
| Venus Gold | #FFC46B | 2 | THE accent: stars, primary CTAs — scarce by rule |
| Horizon Ember | #FF9E64 | 1 | horizon glow, warnings, "predicted" markers |

Rules: gold stays scarce (scarcity is what keeps it special). Red night mode is a separate token set for dark adaptation, not part of brand colors. Dusk gradient (Void → Deep Indigo → violet, ember only near horizons) — never generic flat black.

## Type
- Display / wordmark / numerals: **Space Grotesk** (OFL; static TTFs at github.com/floriankarsten/space-grotesk → fonts/ttf/static/)
- Interface text: **Inter** (OFL)
- Live data (Kp, times, coords): a mono — **Space Mono** or **JetBrains Mono** (OFL)

## Signature elements
1) **The Venus star** — 4-point, vertically elongated. Center-origin SVG path (scale to size):
```
M 0 -130 Q 13 -13 96 0 Q 13 13 0 130 Q -13 13 -96 0 Q -13 -13 0 -130 Z
```
Fill: vertical gradient #FFF8EC → #FFD79A. Bloom behind it: radial #FFC46B at 0.35 → transparent.
2) **The Night Ruler** — graduated 18:00→06:00 timeline, darkness window shaded (indigo→violet), events as gold star ticks, moon/other as ember ticks, hour labels in mono. Brand element that ships as UI: Tonight header, widgets, share cards, paywall.

## Voice
- EN: "See the evening first." · "The sky, on time." · "Know before you look." · "Measured, not guessed."
- PT: "O céu, à hora certa." · "Sabe antes de olhares." · "O céu, medido."
- Tone: calm, precise, a little poetic. Honest about cloudy nights — silence and "hoje o céu não colabora" build more trust than hype.

## Asset inventory (place files in `docs/brand/`)
- Direction 1 "First Light" (atmospheric): vesper-brand-sheet.{png,svg}, vesper-icon-a.{png,svg} (star over limb), vesper-icon-b.{png,svg} (V cradling star), vesper-wordmark.{png,svg}
- Direction 2 "The Instrument" (cartographic): vesper-brand-sheet-2.{png,svg}, vesper-icon-c.{png,svg} (crosshair fix), vesper-icon-d.{png,svg} (plotted ephemeris: past/now/predicted), vesper-wordmark-v2.{png,svg}
- All SVGs are editable sources. App icons ship as full-bleed 1024 squares; stores apply their own masks.

## Hard rules
- Never mimic the competitor's black + red identity.
- Imagery: NASA (public domain, still credit) and ESA/Hubble (CC BY 4.0, credit) only. Never other apps' assets. `image_credit` is mandatory in product (DB-enforced).
- Icon must stay legible at 96 px and 48 px — test before committing changes.

## Open decisions
- [ ] Trademark/store/domain gauntlet for "Vesper" → confirm or fall back (Vela, Mira shortlisted)
- [ ] Icon direction A/B/C/D → record as D-011 in `docs/DECISIONS.md`. Current lean: **icon D as system mark + Direction-2 mono data language in UI + Direction-1 atmosphere reserved for splash/empty states.**

> Setup note: add this line to CLAUDE.md's docs list → `docs/BRAND.md` — palette/type/voice for any UI, icon, or share-card work.


