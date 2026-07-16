# Buttons and Actions

**Status:** Approved  
**Version:** 1.0

## Purpose

Buttons help users act without competing with astronomical content.

Vesper does not use gold as the default primary-button treatment.

## Hierarchy

### Primary Button

Use for the single most important action in a local context.

Examples:

- View tonight
- Enable alerts
- Save observation
- Continue

Default treatment:

- standard raised surface
- Starlight text
- Twilight Violet focus or selected treatment
- `48 pt` minimum height

### Significant Button

Use only when the action is tied to a meaningful astronomical moment.

Examples:

- View eclipse now
- Start observation window
- Open best viewing opportunity

Treatment may use Venus Gold.

This is not a general marketing CTA.

### Secondary Button

Use for supporting actions.

Examples:

- Change location
- View details
- Adjust filters

Treatment:

- subtle surface or border
- no strong glow
- clear pressed state

### Tertiary Button

Use for low-emphasis inline actions.

Examples:

- Learn more
- Dismiss
- Reset

Treatment:

- text or compact shape
- full accessible hit area

### Destructive Button

Use for:

- delete location
- delete observation
- reset app data

Destructive actions never use gold.

## Sizes

| Size | Height | Horizontal padding |
|---|---:|---:|
| Compact | 36 pt | 12–16 pt |
| Standard | 48 pt | 16–20 pt |
| Large | 56 pt | 20–24 pt |

Compact buttons are secondary and may not carry critical actions.

## Icon Buttons

- visible icon: `20–24 pt`
- hit area: `48 × 48 pt`
- label required for screen readers
- tooltip or visible label required when meaning is not universal
- selected state must not rely on color alone

## Anatomy

A button may contain:

- leading icon
- label
- trailing icon
- loading indicator

Avoid more than two visual elements inside a standard button.

## Loading

When loading:

- preserve button width
- replace or accompany the leading icon
- keep the action label when possible
- prevent duplicate submission
- announce progress to assistive technology
- do not use a bright shimmer

## Content

Use verbs.

Good:

- Save observation
- Show tonight
- Enable ISS alerts
- Change location

Avoid:

- Submit
- Okay
- Proceed
- Click here

## Motion

- feedback begins within `80 ms`
- use luminance shift or `0.98–0.99` scale
- optional light haptic
- no bounce
- no particle burst
- no repeated glow

## Accessibility

- minimum target `44 pt`; target `48 pt`
- labels remain legible at large text
- multi-line buttons are allowed when necessary
- destructive meaning is announced
- loading and disabled states are explicit
- focus ring remains visible in all themes

## Anti-Patterns

Do not:

- use gold for every primary action
- place two equal primary buttons side by side
- use icon-only controls for unfamiliar actions
- shrink text to preserve one-line labels
- disable a button without explaining why
- animate routine actions theatrically
