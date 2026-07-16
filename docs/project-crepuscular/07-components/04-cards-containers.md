# Cards and Containers

**Status:** Approved  
**Version:** 1.0

## Purpose

Cards group related information. They are not the default answer to every layout problem.

## Card Hierarchy

### Standard Card

Use for one coherent daily idea.

Examples:

- sky conditions
- next ISS pass
- top event
- observation summary

### Hero Card

Use for one dominant celestial focus.

Examples:

- focused planet
- eclipse countdown
- tonight's best observation

Hero cards may use richer imagery and one strong atmospheric gesture.

### Compact Card

Use for:

- small status groups
- dashboard summaries
- quick comparisons

Compact cards should not become tiny boxes filled with unreadable data.

### Article Card

Contains:

- image or illustration
- source or category
- title
- short summary
- publication context

### Alert Card

Contains:

- event identity
- urgency
- exact action
- timing
- conditions
- dismissal or detail path

## Anatomy

A card should normally contain:

1. identity
2. primary value or object
3. supporting explanation
4. metadata
5. optional action

Do not include unrelated actions merely because space exists.

## Padding

- compact: `16 pt`
- standard: `20 pt`
- hero: `24 pt`

## Interaction

A card is either:

- static
- fully tappable
- partially interactive with clearly separated controls

Avoid cards where only an invisible portion is tappable.

## Selected Card

Selection uses:

- clear shape or border change
- label or check where appropriate
- Twilight Violet for routine selection
- Venus Gold only for meaningful astronomical selection

## Lists Versus Cards

Use a list when users need to:

- scan
- compare
- adjust several settings
- read repeated structures

Use cards when users need to:

- understand a grouped concept
- focus on one recommendation
- see imagery and data together

## Empty Cards

Do not preserve an empty framed card simply to maintain layout.

Replace it with:

- a designed empty state
- a smaller status row
- removal of the module
- a future-window message

## Accessibility

- fully tappable cards expose a clear role
- nested controls remain separately focusable
- reading order matches visual order
- selected state is announced
- image descriptions add meaning rather than repeating titles
- content expands for large text

## Anti-Patterns

Do not:

- use a card for every paragraph
- give every card the same visual importance
- place glass cards over busy star fields
- hide essential information behind tap
- use tiny metric cards that fail large text
- make a static card appear tappable
