---
paths:
  - "apps/mobile/**"
---
# mobile (Expo) rules
- expo-router file-based routing. Screens stay thin; logic lives in `features/*`.
- i18n: every visible string is a key via i18next. Adding a key = update pt-PT, pt-BR, en, es locale files in the same commit. Fallback chain pt-BR → pt-PT → en.
- Style via design tokens/theme only — no raw hex in components. Everything must render correctly in red night mode.
- Accessibility is non-negotiable: interactive elements get accessibilityLabel + role; layouts survive Dynamic Type and 320 pt width.
- Offline-first: Tonight + tonight's passes render from the cached snapshot with a stale banner. Every screen has designed loading / empty / error states — no infinite spinners.
- Ephemeris is computed on-device with astro-core. Never fetch from the server what astro-core can compute.
- Push targets: every notification type has a working `app://` deep link route. Adding a push type ⇒ verify the route exists.
- Monetization: gate Pro features only through the `useIsPro()` hook. No scattered entitlement checks. Never gate eclipse-safety content.
- We use EAS development builds (expo-notifications, react-native-purchases). Expo Go is unsupported — don't suggest it.
