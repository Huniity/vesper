# Navigation

**Status:** Approved  
**Version:** 1.0

## Purpose

Navigation gives users stable orientation while keeping the sky—not the chrome—as the focus.

## Primary Navigation

Mobile Vesper uses a bottom navigation bar with at most five destinations.

Current direction:

- Tonight
- Calendar
- Eclipse or seasonal priority
- News
- Settings or profile access

A seasonal destination may change, but its replacement must not cause the entire navigation model to move unpredictably.

## Bottom Navigation

### Anatomy

Each item includes:

- icon
- short label
- selected treatment
- accessible state

### Rules

- preserve state within each tab
- selected state uses shape, weight, or value in addition to color
- no floating center button without a real primary action
- no notification dot without meaningful unseen content
- no cinematic transition between tabs
- safe-area inset continues the same material

## Top Bar

Use for:

- screen identity
- location
- date context
- back action
- one or two contextual actions

Avoid placing several unrelated actions in the top bar.

### Location Control

Location is a central context, not a decorative subtitle.

It must:

- show the active place
- be reachable
- communicate stale or denied location
- not expose precise coordinates unnecessarily

## Back Navigation

- follow platform expectations
- preserve native gesture navigation
- use a visible back control when required
- retain the user's previous scroll and filter state
- avoid ambiguous close and back actions on the same surface

## Tabs Within a Screen

Use local tabs only when:

- content remains within one coherent feature
- two to four modes need equal access
- switching does not imply a new navigation destination

Use segmented controls for compact local modes.

## Deep Links

Every notification must land on a screen that answers:

> What do I do now?

Deep-linked screens must include enough context to make sense without requiring the user to reconstruct the navigation path.

## Badges

Badges communicate:

- genuinely unseen relevant content
- an active condition
- a required action

Do not badge routine content merely to increase return frequency.

## Accessibility

- navigation order remains stable
- active tab is announced
- icons have labels
- local tabs expose selected state
- screen title changes are announced
- focus moves logically after deep-link navigation

## Anti-Patterns

Do not:

- hide primary navigation behind a menu
- use more than five bottom destinations
- change tab order seasonally
- use unexplained icons
- make the active tab glow strongly
- reset state every time a user switches tabs
- add badges for engagement pressure
