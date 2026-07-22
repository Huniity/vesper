/**
 * Public API of `@vesper/astro-core`.
 *
 * Everything consumers (apps/mobile, apps/worker) may import lives behind this
 * barrel — nothing reaches into `src/*` directly. See `.claude/rules/astro-core.md`.
 */

export * from "./config.js";

// TODO(T2.2–T2.9): re-export ephemeris, eclipse, passes, visibility,
// conjunctions and tiers here as each module lands.
