// TODO(T1.4): cron registry + /health endpoint.
// The import below is deliberate: it proves apps/worker resolves the shared
// astro-core package through the pnpm workspace. Keep a real import here.
import { CONFIG } from "@vesper/astro-core";

export const tunables = CONFIG;
