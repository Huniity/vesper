# Component System

**Status:** Approved  
**Version:** 1.0

## Purpose

The component system prevents Vesper from becoming a collection of individually styled screens.

A component is approved only when its behavior is repeatable, its states are complete, and its meaning remains stable across the product.

## Core Principle

> Reuse structure. Preserve meaning. Allow atmosphere only where the experience earns it.

## Component Layers

### Primitives

Low-level building blocks:

- text
- icon
- surface
- divider
- stack
- row
- spacer
- pressable
- focus ring

Primitives are not branded experiences by themselves.

### Controls

Interactive reusable elements:

- button
- icon button
- segmented control
- switch
- checkbox
- radio
- input
- search field
- filter chip

### Containers

Structures that group content:

- card
- list row
- section
- bottom sheet
- dialog
- banner
- panel

### Domain Components

Astronomy-specific parts:

- Planet Carousel
- Night Ruler
- Visibility Score
- Rise/Set Arc
- Sky Conditions
- Event Timeline
- Observation Window
- Eclipse Countdown
- ISS Pass Card

### Experiences

Compositions of components:

- Tonight
- Calendar
- Object Detail
- News
- Alerts
- Eclipse
- Settings
- Paywall

Experience-level layouts do not redefine primitive styling.

## Naming

Use semantic names based on purpose.

Good:

- `PrimaryButton`
- `ObservationCard`
- `VisibilityScore`
- `NightRuler`
- `SkyConditionRow`

Avoid:

- `GoldButton`
- `FancyCard`
- `BigPlanetThing`
- `CardV2`
- `DarkPanel`

Color and size are variants, not component identity.

## Variant Rules

A variant is justified when it changes:

- hierarchy
- behavior
- information density
- interaction
- semantic meaning

A variant is not justified merely because one screen needs a slightly different padding value.

## Required States

Interactive components must document:

- default
- pressed
- focused
- selected
- disabled
- loading
- error where applicable
- success where applicable

Data components must also document:

- loading
- stale
- partial
- unavailable
- empty
- offline

## Composition

Prefer composition over highly configurable monoliths.

Good:

```tsx
<ObservationCard>
  <ObservationCard.Header />
  <ObservationCard.Body />
  <ObservationCard.Actions />
</ObservationCard>
```

Avoid components with dozens of unrelated booleans.

## Defaults

Defaults must be safe and quiet.

- no glow by default
- no animation by default unless it communicates state
- no destructive action as the primary default
- no truncation of core astronomical names
- no inaccessible color-only state
- no network dependency for basic layout

## Content Resilience

Components must survive:

- long Portuguese and Spanish text
- large Dynamic Type
- 12-hour and 24-hour time
- long city names
- missing imagery
- offline data
- stale data
- unknown values
- zero values
- very large and very small measurements

## Accessibility

Every component must provide:

- semantic role
- accessible name
- state announcement
- minimum touch target
- keyboard focus where relevant
- logical reading order
- sufficient contrast
- non-motion alternative
- non-color state indicator

## Red Night Mode

Every component must explicitly define night-mode behavior.

Do not assume automatic recoloring is enough.

At minimum:

- replace non-red accents
- remove bright imagery where necessary
- remove blur and glass
- preserve hierarchy at lower luminance
- avoid white flashes during state changes
- verify focus and disabled states

## Testing Matrix

Each component should be reviewed against:

- smallest supported phone width
- large phone
- tablet or foldable where relevant
- largest supported text size
- English
- Portuguese
- Spanish
- standard dark mode
- red night mode
- Reduced Motion
- Reduce Transparency
- offline state
- slow network
- screen reader

## Implementation Standard

Each component folder should contain:

```text
ComponentName/
├── ComponentName.tsx
├── ComponentName.types.ts
├── ComponentName.styles.ts
├── ComponentName.test.tsx
├── ComponentName.stories.tsx
└── index.ts
```

Story files may be replaced by the team's chosen component preview system, but every state must remain easy to inspect.

## Review Checklist

- Does this component solve one coherent problem?
- Is the name semantic?
- Are all states defined?
- Can it be composed without one-off overrides?
- Does it survive localization and large text?
- Is red night mode specified?
- Is the accessible behavior explicit?
- Does it use existing tokens?
- Does it remain calm in repeated use?
