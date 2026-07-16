# Astronomy Components

**Status:** Approved  
**Version:** 1.0

## Purpose

These components make Vesper specific to real sky observation.

They are not generic cards with space imagery.

## Planet Carousel

### Purpose

Show visible celestial objects as a swipeable, high-impact daily focal point.

### Required Content

- object name
- visual representation
- visibility status
- best time or remaining visibility
- direction or altitude when useful
- ranking where applicable
- path to detail

### Rules

- one focused object
- partial neighbors visible
- no auto-advance
- no infinite loop
- imagery may be theatrical
- information remains calm
- ranking is not communicated by color alone

## Night Ruler

### Purpose

Show the evening as a measured time interval.

### Required Content

- twilight boundaries
- darkness window
- current time
- observation window
- meaningful object or event markers

### Rules

- compact version works without interaction
- detailed version may scroll horizontally
- gold marks the strongest opportunity, not every event
- labels collapse intelligently
- time remains local and explicit

## Visibility Score

### Purpose

Summarize whether an object or the overall sky is worth observing.

### Required Content

- score
- plain-language interpretation
- main contributing factors
- freshness of weather data
- path to detail

### Rules

- never present score without explanation
- avoid fake precision
- stale weather is labeled
- color is secondary to number and language
- poor conditions are stated plainly

## Sky Conditions

### Purpose

Explain the conditions affecting observation.

May include:

- cloud cover
- Moon illumination and altitude
- darkness window
- light pollution
- seeing
- transparency
- dew risk

### Rules

- prioritize the factors that change the decision
- do not show every metric by default
- explain specialist terms
- provide Pro detail without weakening the free summary

## Rise/Set Arc

### Purpose

Show when and how an object moves through the visible sky.

### Required Content

- rise
- transit
- set
- altitude
- current position where useful

### Rules

- geometry follows actual time and direction
- use linear text fallback
- support objects that never rise or set
- avoid decorative arcs unrelated to data

## Event Card

### Purpose

Present a conjunction, shower, eclipse, phase, or other event.

### Required Content

- event name
- exact date and time
- location relevance
- visibility conditions
- equipment requirement
- what to do
- safety note where applicable

## ISS Pass Card

### Required Content

- start time
- duration
- maximum elevation
- direction of travel
- sky-condition confidence
- alert status

### Rules

- direction must be immediately understandable
- do not dramatize weak passes
- default emphasis belongs to high-value passes
- stale TLE data is labeled

## Eclipse Countdown

### Purpose

Make the 12 August 2026 eclipse locally actionable.

### Required Content

- countdown
- partial start
- maximum
- partial end
- obscuration
- Sun altitude
- cloud outlook
- eye-safety action

### Rules

- safety is always visible and free
- timing is local
- ceremonial treatment is allowed
- critical numbers remain readable without animation
- share card uses the same canonical data

## Observation Window

### Purpose

Recommend the best interval for seeing or photographing an object.

### Required Content

- start and end
- confidence
- conditions
- object altitude
- Moon impact
- equipment fit

### Rules

- recommendation explains why
- uncertainty is visible
- gold is permitted for the best meaningful window
- no recommendation is better than a dishonest recommendation

## Celestial Compass

### Purpose

Help users physically orient toward an object.

### Required Content

- cardinal direction
- azimuth
- altitude
- device-orientation status
- calibration guidance when required

### Rules

- never imply precision the device cannot provide
- provide text fallback
- avoid fictional radar styling
- motion follows real orientation
- reduced motion preserves values without animated sweep

## Observation Log Entry

### Required Content

- object
- date and time
- location
- note
- optional photo
- optional equipment
- conditions snapshot

### Rules

- logging remains free
- quick log is possible in seconds
- detailed fields are optional
- no forced sharing
- successful save remains quiet

## Review Checklist

- Is this component specific to a real observation task?
- Does it present enough context to act?
- Is the astronomical geometry honest?
- Does it work without imagery?
- Does it explain uncertainty and stale data?
- Is it useful offline where promised?
- Does it remain understandable in red night mode?
- Can a beginner retell the result in one sentence?
