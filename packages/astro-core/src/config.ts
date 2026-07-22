/**
 * Tunable astronomical constants for `@vesper/astro-core`.
 *
 * Iron rule 5 (CLAUDE.md): every threshold, weight and magnitude limit used by
 * this package is declared here. No magic numbers in the algorithm modules.
 * Values are filled in per task (score weights T2.6, tier magnitudes T2.7, …).
 */
export const CONFIG = {} as const;

export type Config = typeof CONFIG;
