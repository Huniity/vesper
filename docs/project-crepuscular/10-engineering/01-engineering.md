# Engineering

**Status:** Approved  
**Version:** 1.0

## Purpose

Translate Project Crepuscular into production code without visual drift.

## Folder Structure

```text
src/
├── assets/
├── components/
├── features/
├── theme/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── radii.ts
│   ├── motion.ts
│   ├── materials.ts
│   └── index.ts
└── design-system/
```

## Token Rules

Everything comes from semantic tokens.

Never hardcode:

- colors
- spacing
- radii
- durations
- elevations
- typography

## Component Rules

- One component, one responsibility.
- Use composition over configuration.
- All states documented.
- Red Night Mode supported.
- Reduced Motion supported.

## Quality Gates

Before merge:

- Pixel review
- Accessibility review
- Performance review
- Dark mode
- Red Night Mode
- Localization
- Dynamic Type
- Offline state

## Definition of Done

A feature is complete only when:

- matches Project Crepuscular
- passes accessibility
- has tests
- uses design tokens
- documents new decisions
- contains no visual regressions
