---
paths:
  - "apps/worker/**"
---
# worker rules
- Every ingestor follows the four-beat loop: fetch (timeout + retry ×3 backoff) → zod-validate → idempotent UPSERT → heartbeat ping. Use the `defineIngestor` pattern.
- External JSON is untrusted input. Validate before it touches the DB. A failing feed logs to Sentry and skips — it NEVER crashes the cron loop.
- Cadences and endpoints: PROJECT.md §11 is the registry. Be polite to sources: ETag/If-Modified-Since on TLE fetches; MET Norway REQUIRES an identifying User-Agent header.
- Push pipeline order is law: candidate → budget (≤2/day non-aurora, quiet hours 00:30–07:00 local) → dedupe (unique insert on `push_log(device_id, dedupe_key)` BEFORE send) → dispatch (Expo batches of 100, store receipts, clean DeviceNotRegistered tokens).
- Notifications reference only rows with `status='published'` (commit-before-push).
- Compute per geohash-4 cell, then fan out to devices. Never write per-user loops.
- Never log push tokens, precise coordinates (geohash4 max), or secrets.
- Time: UTC in storage, always. Convert at the edges using the cell/device timezone.
- `sirius_0337.spec.ts` (no-duplicate-pushes regression) must stay green — it is the brand promise, executable.
