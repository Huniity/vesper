# Alerts and Notifications

**Status:** Draft for review  
**Version:** 0.1

## Purpose

Alerts are the lighthouse: Vesper keeps watch so the user does not have to.

Trust is the primary design objective.

## Core Principle

> Every notification spends attention. It must pay the user back in sky.

## Notification Standard

Every push answers:

- What is happening?
- When?
- Is it visible from my location?
- What should I do?
- Why did Vesper interrupt me?

## Defaults

Default notification behavior should remain high-signal.

- Eclipse: enabled for key milestones
- ISS: enabled only for strong passes
- Aurora: enabled at location-appropriate thresholds
- Conjunctions: morning-of
- Tonight's Top 3: one golden-hour push only when the score is worthwhile
- News: off
- Launches: off

## The 03:37 Vow

Vesper never shouts twice.

Rules:

- deduplicate
- cap routine frequency
- respect quiet hours
- avoid repeated updates without new action
- escalate only when the situation materially changes

## Push Structure

Recommended:

**Title:** Event and urgency  
**Body:** Location-aware action and time

Example:

> ISS em 10 minutos  
> Olha a noroeste às 22:14. Passagem alta, 67°, céu limpo.

Avoid:

- vague excitement
- emoji overload
- repeated exclamation marks
- unexplained measurements
- generic “Open Vesper to learn more”

## Deep Link

The destination must answer:

> So what do I do?

It should show:

- event status
- exact time
- direction or action
- conditions
- alert preference
- source or freshness where relevant

## In-App Alert Center

The alert center is a history and control surface, not an inbox designed to accumulate unread pressure.

Show:

- active or upcoming alerts
- recent meaningful alerts
- expired state
- category controls
- no artificial unread count

## Preferences

Users can control:

- topic
- threshold where supported
- location
- quiet behavior
- clear-sky-only Pro rule where applicable

Defaults remain understandable without configuration.

## Permission Denied

The app remains useful.

Show:

- current permission status
- calm explanation
- route to system settings
- no repeated nagging
- no blocking modal on every launch

## Copy

Alerts are:

- literal
- concise
- actionable
- never humorous
- never poetic
- honest about uncertainty

## Critical Safety

Eclipse safety may interrupt more strongly than routine alerts.

Even then:

- no flashing
- no fear-based exaggeration
- exact action is visible
- acknowledgement is clear

## Accessibility

- time and direction are spoken clearly
- notification actions have meaningful labels
- in-app alerts do not repeatedly announce
- urgency is not color-only
- settings expose current state and consequence

## Anti-Patterns

Do not:

- send duplicates
- use push to drive generic engagement
- enable news by default
- notify weak ISS passes
- create unread anxiety
- send an alert before its destination exists
- joke in an alert
- hide how to disable a category
