# Feedback and States

**Status:** Approved  
**Version:** 1.0

## Purpose

Feedback tells the truth about what Vesper knows, what it is doing, and what the user can do next.

## Loading

Preferred order:

1. cached usable data
2. stale data with label
3. local skeleton
4. compact progress
5. full-screen loading only when unavoidable

## Empty State

An empty state explains:

- what is absent
- whether that is normal
- what the user can do
- when useful information may return

Example:

> Hoje o céu não colabora. A próxima janela clara começa quinta-feira às 22:10.

## Offline State

Offline is not an error by default.

Show:

- cached timestamp
- which data remains reliable
- what cannot update
- retry when useful

## Stale State

Stale data must be labeled without panic.

Examples:

- Weather updated 3 h ago
- ISS data from yesterday
- Waiting for a newer solar-wind reading

## Error State

Errors should be:

- specific
- calm
- recoverable where possible
- free of internal codes
- attached to the failed area

## Success

Success confirms completion without demanding celebration.

Use:

- concise copy
- subtle haptic
- short state change
- no confetti
- no review request attached to success

## Warning

Warnings communicate a condition that affects the result.

Examples:

- cloud forecast uncertain
- location approximate
- eclipse safety requirement
- stale orbital data

## Critical State

Critical states are rare.

Use for:

- eye safety
- destructive action
- severe data integrity issue
- time-sensitive exceptional alert

Critical treatment must remain readable in standard and red night modes.

## Toast and Snackbar

Use for short, non-blocking confirmation.

Examples:

- Observation saved
- Location updated
- Alert preference changed

Do not use a toast for information the user must remember or act on.

## Banner

Use for persistent contextual status.

Examples:

- offline
- stale weather
- approximate location
- temporary service outage

## Accessibility

- status is announced once
- alerts do not repeatedly interrupt screen readers
- retry is reachable
- color is not the only warning signal
- loading does not trap focus
- cached and stale meaning is explicit

## Anti-Patterns

Do not:

- use endless spinners
- hide stale data
- treat offline as failure
- attach upgrade prompts to errors
- celebrate routine actions excessively
- display generic “Something went wrong” when more is known
