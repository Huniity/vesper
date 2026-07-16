# Experience System

**Status:** Draft for review  
**Version:** 0.1

## Purpose

An experience is a complete user journey, not merely a screen.

Experiences combine:

- information architecture
- hierarchy
- components
- copy
- motion
- state handling
- accessibility
- data freshness
- offline behavior

## Core Principle

> Every experience should move from orientation to action, then get out of the way.

## Standard Experience Arc

Most Vesper experiences follow five stages.

### 1. Orient

Answer:

- Where am I?
- Which location is active?
- Which date or time applies?
- Is the data current?

### 2. Reveal

Show the single most useful answer first.

Examples:

- Jupiter is tonight's best target.
- The sky will remain cloudy.
- The eclipse begins at 18:42.
- The next strong ISS pass is tomorrow.

### 3. Explain

Show enough evidence to build trust.

Examples:

- cloud cover
- altitude
- Moon impact
- source
- forecast freshness
- visibility window

### 4. Act

Offer one clear next action.

Examples:

- Set an alert
- View direction
- Add to calendar
- Save observation
- Change location

### 5. Release

Allow the user to leave with confidence.

Vesper should not invent another task merely to extend the session.

## Daily Instrument and Ceremonial Experiences

### Daily Instrument

Daily experiences prioritize:

- speed
- continuity
- clear decisions
- calm repetition
- predictable navigation
- compact explanations

### Ceremonial

Ceremonial experiences may prioritize:

- anticipation
- scale
- emotional memory
- stronger spatial composition
- richer imagery

Ceremonial treatment is reserved for:

- first launch
- eclipse milestones
- genuinely rare events
- meaningful share results

## Screen Identity

Every primary screen should expose:

- screen name or clear purpose
- active location
- active date where relevant
- freshness or offline state when relevant
- one dominant reading point

## State Model

Every experience must define:

- loading
- ready
- stale
- partial
- offline
- empty
- error
- permission denied
- Pro locked where applicable
- red night mode
- Reduced Motion
- large text

## Offline Standard

Offline behavior is part of the experience, not a banner added later.

A screen must state:

- which values are calculated locally
- which values are cached
- when the cache was last updated
- which features require a connection
- whether the user can still complete the main task

## Progressive Disclosure

Show the answer before the full data model.

Daily screens should normally expose:

1. recommendation
2. reason
3. action
4. deeper technical detail on demand

Do not force beginners to understand every metric before acting.

Serious observers must still be able to reach precise data quickly.

## Cross-Experience Continuity

The same object, event, location, and time should remain recognizable across experiences.

Examples:

- a planet selected in Tonight remains selected in Object Detail
- an eclipse time shown in a card matches the countdown and share card
- an alert deep-links to the same canonical event
- the active location remains stable across tabs
- red night mode persists during observation journeys

## Success

Success is not always conversion or continued navigation.

Examples:

- the user closes Tonight knowing where to look
- the user silences alerts they do not need
- the user learns the eclipse safety rule
- the user reads one article and can retell it
- the user records an observation in seconds

## Review Checklist

- Is the first useful answer visible quickly?
- Does the experience explain why the answer is trustworthy?
- Is there one clear next action?
- Can the user complete the main task without unnecessary navigation?
- Are offline, stale, and uncertain states honest?
- Does the experience end cleanly?
- Does it respect Daily Instrument or Ceremonial mode?
- Can a beginner use it without blocking an expert?
