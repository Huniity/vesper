import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.expo/**",
      // apps/mobile is scaffolded by create-expo-app in T1.2; it brings its own
      // React Native lint setup. Remove this ignore once that lands.
      "apps/mobile/**",
    ],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  // Rule 3 (CLAUDE.md): no `any` without a `// why:` comment — silence this rule
  // per-line with eslint-disable-next-line plus that comment, never globally.
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  // Must stay last: turns off formatting rules that fight Prettier.
  prettier,
);
