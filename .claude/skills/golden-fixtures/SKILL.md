---
name: golden-fixtures
description: Create or update golden test fixtures for astro-core against authoritative sources (JPL Horizons, NASA/Espenak eclipse tables, Heavens-Above). Use when adding or changing astronomical functions, when golden tests need new cases, or when the user mentions fixtures, Horizons, reference values, or accuracy verification.
---

# Golden fixtures — testing against reality

astro-core's correctness is defined by external reality, not by our own math. Every astronomical function is validated against an authoritative source via fixtures in `packages/astro-core/test/golden/`. Fixture FIRST, implementation second (CLAUDE.md rule 10 + astro-core rules).

## Fixture format
One JSON file per topic+location: `<topic>.<location>.json` (e.g. `riseset.faro.json`, `eclipse.madrid.json`).

Use `fixture-template.json` in this skill's folder as the starting structure. Required fields:
- `source`: "JPL Horizons" | "NASA/Espenak" | "Heavens-Above"
- `source_url` and `retrieved` (ISO date)
- `source_config`: the EXACT settings used (reproducibility lives here, not in memory)
- `location`: { name, lat, lon, elevation_m, tz (IANA) }
- `cases[]`: inputs + expected values + per-case tolerance

## Tolerances (do not loosen — rule 10)
- Angular positions: ≤ 1 arcmin
- Rise/set/transit times: ± 60 s
- Eclipse contact times: ± 60 s
- Satellite pass AOS/TCA/LOS: ± 30 s (against the pinned TLE — see below)

## Procedure by source

### A) Positions & rise/set — JPL Horizons (https://ssd.jpl.nasa.gov/horizons/app.html)
1. Ephemeris Type: Observer Table. Target Body: the object under test.
2. Observer Location: "Specify coordinates" → exact lon/lat/elevation from the fixture's `location` block.
3. Time span: the test dates; step size fine enough for the quantity (1 min for rise/set validation).
4. Table settings: select apparent azimuth/elevation quantities; for rise/set cases enable the rise/transit/set output option.
5. Download CSV; transcribe values into `cases[]`; paste the full settings summary Horizons shows into `source_config`.
6. VERIFY in the UI that settings match what you recorded — do not trust memory of the form layout.

### B) Solar eclipse circumstances — NASA/Espenak
1. Use NASA GSFC eclipse pages / EclipseWise local-circumstances tables for the eclipse date.
2. Record per city: partial begin, maximum, partial end, obscuration/magnitude, sun altitude at max.
3. `source_config` = page title + table identifier. Cities for 2026-08-12: Faro, Lisboa, Madrid, A Coruña minimum.

### C) Satellite passes — Heavens-Above + pinned TLE
⚠️ Passes computed from LIVE TLEs drift as elements update — such a test rots in days.
1. Fetch the current ISS TLE (CelesTrak) and PIN both lines into the fixture (`tle_line1`, `tle_line2`).
2. On Heavens-Above, set the exact observer location; capture 2–3 upcoming visible passes (AOS/TCA/LOS, max elevation, direction) predicted from that same TLE epoch window.
3. The test propagates the PINNED TLE — deterministic forever, validates our SGP4 usage, not TLE freshness.

## Mandatory case coverage
- At least one Southern-Hemisphere location per rise/set topic (São Paulo) — sign bugs hide there.
- At least one DST-transition date per time-sensitive topic (Europe/Lisbon spring/autumn change).
- Edge cases where the object never rises or never sets, when applicable.

## Done checklist
- [ ] Fixture file follows template; `source_config` filled; tolerances stated per case
- [ ] Test reads the fixture and asserts within tolerance (no hardcoded expectations in test code)
- [ ] Southern-Hemisphere / DST cases present where applicable
- [ ] `pnpm -F astro-core test` green; fixture committed with the test in the same commit
