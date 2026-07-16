# Calendar

**Status:** Draft for review  
**Version:** 0.1

## Purpose

Calendar helps users plan beyond tonight without becoming an overwhelming astronomical database.

## Core Principle

> Show the next meaningful opportunity, then allow deeper planning.

## Views

V1 may begin with:

- day-by-day agenda
- compact date strip
- selected-day detail

Future views may add:

- week
- month
- observing plan

Do not launch with several redundant calendar modes.

## Day Agenda

Each day may contain:

- Moon phase
- visible planets
- conjunctions
- meteor showers
- eclipse milestones
- ISS passes
- notable events
- equipment tier

Events are ordered by usefulness and time.

## Date Navigation

- Today remains easy to return to
- selected date is explicit
- local date and time zone are respected
- horizontal date navigation has accessible alternatives
- far-future browsing does not trigger unnecessary network calls

## Event Row

Show:

- time
- event identity
- visibility or quality
- equipment
- location relevance
- alert state

Use cards only for featured events. Routine events belong in a scan-friendly list.

## Filters

Initial filters:

- Naked eye
- Binoculars
- Telescope
- Event type

Filters persist when useful.

Do not hide important safety or eclipse content because of equipment filters.

## Empty Day

An empty day is not failure.

Show:

- honest explanation
- nearest worthwhile event
- option to change equipment or location
- no filler event

## Add to Device Calendar

When supported:

- preserve local time
- include location context
- include a direct Vesper link
- avoid duplicate creation
- explain calendar permission

## Offline

The calendar should retain:

- bundled static events
- locally computed planetary data
- cached event data
- selected filters

Remote content is labeled when stale or unavailable.

## Accessibility

- dates are announced fully
- list order is chronological
- event quality is not color-only
- date navigation works without swipe
- large text converts dense rows into taller layouts

## Anti-Patterns

Do not:

- imitate a generic productivity calendar
- show dozens of weak events
- rely on tiny colored dots
- hide time zone context
- fill empty days with news
- require horizontal swipe as the only date control
