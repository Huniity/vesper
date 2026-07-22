---
description: Scaffold a new worker ingestor following the four-beat pattern
argument-hint: <name> <source-url> <cadence>
---
Create a new ingestor for: $ARGUMENTS
1. Read one existing ingestor (e.g. `apps/worker/src/ingestors/swpc.ts`) and `.claude/rules/worker.md` for the pattern.
2. Generate: zod schema for the payload, fetch with timeout+retry, idempotent upsert, heartbeat ping, Sentry capture on failure.
3. Register it in the cron registry (`src/index.ts`) at the given cadence. Add the source to PROJECT.md §11 table.
4. Add an integration test with a recorded fixture: happy path + malformed payload (must skip gracefully, loop survives — prove it in the test).                
