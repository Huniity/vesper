---
paths:
  - "packages/astro-core/**"
---
# astro-core rules
- Pure TypeScript. Zero imports of React, Expo, or DOM APIs — this package runs in Node (worker) and React Native identically.
- Public API only through `src/index.ts`. Every exported function gets JSDoc (future-you is a stranger).
- Accuracy invariants (golden tests in `test/golden/`): positions ≤ 1 arcmin vs JPL Horizons; rise/set times ±60 s; eclipse contacts ±60 s vs NASA/Espenak.
- New astronomical function ⇒ write the golden fixture FIRST, citing its source (Horizons / Espenak / Heavens-Above) in the fixture file.
- Any rise/set or altitude logic must have a Southern-Hemisphere fixture (São Paulo) — sign bugs hide there.
- All tunables in `src/config.ts` (score weights, tier magnitudes, thresholds). Never inline.
- Units at API boundaries: degrees, ISO dates, explicit IANA timezone strings. Never rely on machine locale/timezone.
- Catalog JSONs (`src/catalogs/`) are data: validate with zod at load, fail loudly.
