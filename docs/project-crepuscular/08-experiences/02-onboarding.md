# Onboarding

**Status:** Draft for review  
**Version:** 0.1

## Purpose

Onboarding establishes wonder, trust, notification expectations, and location context without creating an account wall.

## Core Principle

> Amaze once. Explain clearly. Finish quickly.

## Length

Maximum:

- cinematic introduction
- three functional onboarding steps

The introduction may be skipped.

The functional onboarding must remain skippable where platform requirements allow.

## Flow

### Intro — The Evening Star

Purpose:

- establish Vesper's world
- transition from darkness to horizon light
- reveal the brand
- create first-open sparkle

Rules:

- cinematic treatment is allowed
- a skip path appears quickly
- audio is not required
- reduced motion uses a short static or crossfade version
- the final frame transitions naturally into the first functional step

### Step 1 — Value

Answer:

> What will Vesper do for me?

Suggested structure:

- one visual
- one sentence
- one supporting line
- one action

Message direction:

> Know what is visible tonight, and hear about the moments worth looking up for.

Do not present a feature grid.

### Step 2 — Notifications

Purpose:

Explain the value before requesting system permission.

Required ideas:

- Vesper alerts only when it matters
- cloudy nights may remain silent
- preferences can be changed later
- news and launches are not enabled by default

Only after the explanation should the operating-system permission appear.

If permission is denied:

- continue onboarding
- do not shame the user
- show how to enable it later
- preserve a useful app without push access

### Step 3 — Location

Offer:

- approximate device location
- manual city search
- continue with limited experience where practical

Explain why:

> The sky changes with your location. Approximate location is enough.

Do not request continuous location.

## Account

No account is required.

Do not:

- ask for name
- ask for phone number
- require email
- show a paywall
- offer a trial
- request a review

## Completion

The final action opens Tonight directly.

The first Tonight state should already use the selected location and current local time.

Avoid a separate success screen that delays the product.

## Motion

- Intro: Ceremonial Mode
- Functional steps: Daily Instrument Mode
- transitions remain short
- progress is visible
- no long staggered copy
- no forced waiting

## Accessibility

- skip action is immediately reachable
- all visuals have meaningful alternatives
- location and notification reasons are readable by screen readers
- large text may turn horizontal layouts into vertical layouts
- the intro never blocks access under Reduced Motion
- permission denial remains fully usable

## Analytics

Track:

- intro completed or skipped
- notification explainer viewed
- system permission result
- location method
- onboarding completion

Analytics should improve the flow, not punish skipped steps.

## Anti-Patterns

Do not:

- show more than three functional steps
- ask for permissions without context
- use a paywall in onboarding
- force account creation
- make the user choose every alert category
- make cinematic motion mandatory
- repeat onboarding after completion
