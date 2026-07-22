import { describe, expect, it } from "vitest";

import { CONFIG } from "../src/index.js";

describe("astro-core public API", () => {
  it("exposes tunables through the package barrel rather than per-module imports", () => {
    expect(CONFIG).toBeDefined();
  });
});
