# Inputs and Controls

**Status:** Approved  
**Version:** 1.0

## Purpose

Inputs should feel familiar, precise, and easy to use outdoors.

## Text Input

Use for:

- location search
- observation notes
- equipment naming
- account or support forms

### Anatomy

- label
- field
- optional leading icon
- optional clear action
- supporting text
- error text

Placeholder text never replaces a persistent label for important data.

## Search Field

Search should:

- focus quickly
- show clear state
- support local and remote results
- preserve recent useful choices where appropriate
- explain offline limitations
- allow clearing with one action

## Segmented Control

Use for two to four mutually exclusive compact options.

Examples:

- Naked eye / Binoculars / Telescope
- Day / Week
- Standard / Red night mode

When labels do not fit, use a menu or stacked radio group.

## Filter Chips

Use for optional, non-exclusive filters.

Rules:

- chips wrap
- selection is clear beyond color
- counts are used only when useful
- no horizontal chip maze for essential controls

## Switch

Use for immediate binary settings.

Examples:

- ISS alerts
- Moon phase notifications
- Red night mode

Do not use a switch when the setting requires confirmation or additional configuration before activation.

## Checkbox

Use for multiple independent choices in forms.

## Radio Group

Use for one choice among several when all options should remain visible.

## Slider

Use only when continuous adjustment is meaningful.

Good:

- minimum ISS elevation
- alert threshold
- image brightness in observation mode

Avoid sliders for small fixed sets where segmented or radio choices are clearer.

## Date and Time

Prefer platform pickers where possible.

Astronomical time controls must show:

- local date
- time zone context when ambiguity exists
- 12-hour or 24-hour formatting based on locale
- event boundaries clearly

## Validation

Validation is:

- local when possible
- immediate after meaningful interaction
- plainspoken
- attached to the field
- never expressed through color alone

## Accessibility

- labels remain visible
- touch targets meet requirements
- values are announced
- sliders expose increments
- error text is associated with the field
- controls remain usable at large text sizes
- focus order follows the form

## Anti-Patterns

Do not:

- place labels only inside fields
- use sliders for arbitrary discrete choices
- hide required settings behind unlabeled icons
- make toggles trigger destructive or expensive actions
- show technical validation codes to users
- use a custom picker when the native control is clearer
