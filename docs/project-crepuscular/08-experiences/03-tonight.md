# Tonight

**Status:** Draft for review  
**Version:** 0.1

## Purpose

Tonight is Vesper's main daily experience.

It should answer:

> What is worth looking at from my location tonight?

The answer must remain useful to a beginner while exposing credible detail for serious observers.

## Core Principle

> Recommendation first. Conditions second. Detail on demand.

## Entry State

On open, Tonight should immediately establish:

- active location
- current date
- whether astronomical night occurs
- data freshness
- offline or stale state where applicable

The screen should not begin with a generic greeting that pushes the answer below the fold.

## Primary Composition

Recommended order:

1. compact context header
2. theatrical Planet or Object Carousel
3. tonight summary and visibility score
4. Top 3 observations
5. Night Ruler
6. sky conditions
7. secondary events and passes
8. lower-priority learning or news bridge

## Planet or Object Carousel

The carousel is the emotional focal point.

It may be more theatrical than the rest of Tonight.

Required:

- one focused object
- visible neighboring object previews
- swipe navigation
- ranking or visibility status
- best time
- concise direction or altitude
- one detail action

Rules:

- no auto-advance
- no infinite loop
- no oversized copy covering the object
- dramatic imagery cannot hide whether the object is visible
- cards remain useful without animation

## Tonight Summary

The summary should state the decision plainly.

Examples:

- Céu limpo a partir das 22:30. Júpiter é a melhor aposta.
- Hoje o céu não colabora. A próxima janela abre quinta-feira.
- Sem noite astronómica completa, mas Vénus estará visível ao anoitecer.

The summary is template-based, not generated at runtime.

## Visibility Score

The score must include:

- numerical score
- plain-language interpretation
- dominant reasons
- weather freshness
- path to full explanation

Do not imply precision beyond the underlying data.

## Top 3

Top 3 ranks the strongest observation opportunities.

Each item shows:

- rank
- object or event
- best time
- equipment tier
- main reason
- concise condition
- detail action

When fewer than three worthwhile targets exist, show fewer.

Do not fill the list with weak recommendations merely to preserve the number three.

## Equipment Filter

Options:

- Naked eye
- Binoculars
- Telescope

Rules:

- persists between sessions
- updates carousel and Top 3
- remains free
- explains why an object disappears when necessary
- switches to a menu or stacked control at large text sizes

## Night Ruler

The compact Night Ruler should show:

- dusk
- darkness window
- dawn
- current time
- the selected object's visibility
- best observation window

It must remain understandable without horizontal interaction.

## Sky Conditions

Show only the conditions that affect the current decision.

Default:

- cloud cover
- Moon impact
- darkness window
- light pollution when available

Pro may expand to:

- seeing
- transparency
- dew
- seven-night outlook

The free summary remains complete.

## Offline

Tonight is offline-first.

Without a network:

- local ephemeris remains available
- cached weather is shown with timestamp
- cached passes remain available
- stale values are labeled
- the main layout remains intact
- no full-screen failure appears

## Empty and Difficult Nights

Poor conditions are a valid result.

Use:

- honest language
- next useful window
- one educational or planning action
- no fake target recommendation
- no pressure to browse unrelated content

## Primary Actions

Possible actions:

- View object
- Show direction
- Set alert
- Change equipment
- View tonight's timeline

Avoid placing several equal CTAs beneath the hero.

## Red Night Mode

Tonight must become an operational observing surface.

- decorative imagery is dimmed or replaced
- no white flashes
- no glass
- carousel remains legible
- current direction and timing receive priority
- gold and violet are replaced by red hierarchy
- background motion stops

## Accessibility

- carousel supports buttons and screen-reader navigation
- score has a verbal explanation
- charts and ruler have text alternatives
- ranking does not depend on color
- all times include context
- large text preserves the recommendation above decorative imagery

## Success

Tonight succeeds when the user can close the app and answer:

- what to look for
- when to look
- where to look
- whether conditions are worth it

## Anti-Patterns

Do not:

- open with a content feed
- force exactly three targets
- hide poor conditions
- make the carousel auto-play
- use the score without explanation
- place every metric above the fold
- block the experience behind an account or paywall
