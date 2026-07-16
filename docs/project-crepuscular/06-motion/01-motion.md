# Motion

**Status:** Approved  
**Version:** 1.0  
**Scope:** Mobile motion, transitions, gestures, feedback, reduced motion, and implementation guidance

## Purpose

Motion gives Vesper continuity, orientation, and life.

It should help the user understand:

- what changed
- where something came from
- what is selected
- what is currently visible
- what requires attention
- how one moment relates to the next

Motion is not used to make routine screens feel cinematic.

> The intro dazzles; the ritual soothes.

## Core Principle

> Motion explains before it impresses.

Every animation must justify itself through at least one function:

- continuity
- orientation
- hierarchy
- state change
- progress
- confirmation
- spatial relationship
- astronomical meaning

If an animation serves none of these, remove it.

## Motion Modes

### Daily Instrument Mode

Used for:

- Tonight
- Calendar
- News
- Settings
- routine object details
- standard alerts
- observation planning

Daily motion is:

- short
- calm
- responsive
- interruptible
- physically coherent
- nearly invisible after repeated use

Daily motion should never delay access to information.

### Ceremonial Mode

Used for:

- the introduction
- first-run onboarding
- eclipse milestones
- rare-event takeovers
- major discovery or sharing moments

Ceremonial motion may be:

- slower
- more atmospheric
- more spatial
- more cinematic
- more layered

Ceremonial motion must still:

- preserve legibility
- respect reduced-motion settings
- provide a skip path when appropriate
- avoid blocking urgent information
- return cleanly to Daily Instrument Mode

## Motion Hierarchy

Motion intensity follows product importance.

| Level | Meaning | Examples |
|---|---|---|
| 0 — Static | Reading and stable state | Articles, settings, long-form data |
| 1 — Feedback | Immediate response | Press, toggle, selection |
| 2 — Transition | Local state or navigation change | Sheet, tab, card expansion |
| 3 — Spatial | Movement through a meaningful model | Planet carousel, Night Ruler, orbit path |
| 4 — Ceremonial | Rare emotional moment | Intro, eclipse maximum, first discovery |

Most daily interactions remain at levels 0–2.

## Timing System

Vesper uses a compact duration scale.

| Token | Duration | Typical use |
|---|---:|---|
| `motion.instant` | 80 ms | Tap feedback, icon response |
| `motion.fast` | 140 ms | Small state change |
| `motion.standard` | 220 ms | Routine component transition |
| `motion.slow` | 320 ms | Sheet, card expansion, spatial movement |
| `motion.deliberate` | 480 ms | Major daily transition |
| `motion.ceremonial` | 700–1200 ms | Rare cinematic sequence |

### Timing Rules

- Tap feedback begins within `80 ms`.
- Routine navigation should visually settle within `300 ms`.
- A daily transition should not exceed `480 ms` unless the user directly controls it.
- Ceremonial sequences may exceed `1200 ms` only when skippable or non-blocking.
- Staggering is limited to short groups and must not delay the last item excessively.
- Repeated list items should not cascade one by one on every visit.

## Easing

Vesper prefers soft, controlled curves.

### Easing Tokens

```ts
export const easing = {
  standard: [0.22, 1, 0.36, 1],
  enter: [0.16, 1, 0.30, 1],
  exit: [0.40, 0, 1, 1],
  linear: [0, 0, 1, 1],
} as const;
```

### Usage

- `standard` — general movement and resizing
- `enter` — content arriving or expanding
- `exit` — content leaving quickly and cleanly
- `linear` — measured timelines, continuous progress, astronomical position

Avoid:

- bouncy easing for routine scientific UI
- exaggerated overshoot
- elastic motion
- playful spring chains
- sudden hard stops

## Springs

Springs are allowed for direct manipulation and snapping.

Suggested starting values:

```ts
export const springs = {
  gentle: {
    damping: 24,
    stiffness: 180,
    mass: 1,
  },
  snap: {
    damping: 28,
    stiffness: 260,
    mass: 0.9,
  },
  sheet: {
    damping: 30,
    stiffness: 220,
    mass: 1,
  },
} as const;
```

Use springs for:

- carousel snapping
- bottom-sheet settling
- dragged controls
- direct object manipulation

Do not use springs for:

- article entry
- alert text
- loading states
- every button press
- critical safety content

## Continuity

Elements should transform when they represent the same thing across states.

Examples:

- a planet card expands into the object detail view
- a compact Night Ruler becomes a planning timeline
- an event marker becomes the event header
- a selected date moves into the day-detail state

Prefer transformation over disappearance followed by unrelated reappearance.

When shared-element transitions are unreliable or expensive, preserve continuity through:

- matching position
- matching scale
- matching color
- matching image crop
- immediate content recognition

## Screen Navigation

### Primary Tabs

Tab changes are routine.

Use:

- immediate state response
- subtle crossfade or horizontal continuity
- no large camera movement
- no page curl
- no cinematic zoom
- no delayed content reveal

Recommended duration: `140–220 ms`.

### Stack Navigation

For drill-down navigation:

- new content enters from the direction implied by platform convention
- previous context remains spatially understandable
- transition is interruptible
- back gesture remains native and predictable

Recommended duration: `220–320 ms`.

### Modal and Sheet Entry

Bottom sheets:

- rise from the bottom edge
- follow the user's gesture when dragged
- settle with a gentle spring
- dim underlying content progressively

Dialogs:

- use a short fade and slight scale
- never appear through dramatic zoom
- prioritize focus over spectacle

## Planet and Object Carousel

The celestial carousel is permitted to be more theatrical than surrounding daily UI.

Its motion should communicate scale, focus, and adjacency while remaining fully user-controlled.

### Interaction

- horizontal swipe
- one-card snap
- no automatic advance
- no infinite looping
- velocity influences destination only within predictable limits
- edge resistance communicates the beginning and end

### Focus Treatment

Suggested interpolation:

| Property | Focused card | Neighbor card |
|---|---:|---:|
| Scale | `1.00` | `0.90–0.94` |
| Opacity | `1.00` | `0.62–0.78` |
| Vertical offset | `0` | `8–16 pt` |
| Image luminosity | Full | Slightly reduced |
| Information density | Full | Reduced preview |

### Planet Motion

Permitted:

- very slow rotational drift when scientifically and visually appropriate
- light responding subtly to swipe position
- ring or atmosphere parallax
- background depth shift tied directly to gesture

Not permitted:

- autonomous fast spinning
- looping orbital animation during reading
- constant pulsing
- motion that implies inaccurate rotation or orbit
- movement that competes with timing and visibility data

### Settling

Use the `snap` spring.

The focused card must settle quickly enough that timing and status text can be read without waiting.

## Night Ruler Motion

The Night Ruler is measured, not theatrical.

### Permitted Motion

- current-time marker advances linearly
- selected interval expands smoothly
- labels reposition to avoid collision
- detailed view follows horizontal drag
- rise, transit, and set markers enter in sequence on first reveal

### Rules

- time progression uses linear motion
- the current marker does not pulse continuously
- future events may brighten as they approach, but not flash
- a selected observation window may use a restrained gold transition
- reduced motion replaces animated drawing with an immediate final state

## Celestial Geometry Motion

Arcs, trajectories, and orbital paths may draw or reveal when doing so teaches direction or sequence.

Examples:

- ISS path draws from entry direction toward exit
- a rise/set arc reveals from rise to set
- eclipse contacts appear in chronological order
- a conjunction closes visually as the event approaches

Rules:

- reveal direction follows real time or travel direction
- geometry must remain scientifically honest
- no decorative orbit loops
- no repeated redraw every time a user returns to the same screen
- labels appear as soon as required for understanding

## Cards and Content

### Card Entry

Routine cards should not individually fly into place.

Preferred:

- immediate layout with a short opacity transition
- slight vertical movement of `4–8 pt`
- grouped reveal when the whole section loads

Recommended duration: `180–240 ms`.

### Card Expansion

When a card reveals more information:

- preserve the card's position
- animate height only when performance remains stable
- keep the primary value anchored
- reveal supporting content with a short fade
- avoid pushing the user's reading target off-screen

### Lists

- do not stagger every row
- insert and remove rows with local motion
- preserve scroll position
- animate reordering only when the ordering change matters

## Controls

### Press

Press feedback should be immediate and quiet.

Use one or two of:

- luminance shift
- `0.98–0.99` scale
- subtle haptic
- short opacity change

Duration: `80–140 ms`.

Do not:

- bounce standard buttons
- emit particles
- create a glow burst
- animate the entire card for a small action

### Toggle

A toggle communicates a binary state.

- thumb movement follows platform convention
- color change occurs with the movement
- state settles within `220 ms`
- haptic feedback is optional and restrained

### Segmented Control

- selection indicator moves directly to the chosen segment
- label state changes simultaneously
- no sliding overshoot
- large-text fallback may switch immediately to a menu or list

### Pull to Refresh

Use platform behavior with a restrained Vesper indicator.

Do not create a large astronomical animation for routine refresh.

## Loading

Loading should preserve confidence and layout.

### Preferred Order

1. show cached data
2. show stale state clearly
3. use local skeletons
4. use a compact progress indicator
5. use a full-screen loader only when no usable structure exists

### Skeleton Motion

- low contrast
- slow
- no bright shimmer
- no white sweep
- disabled under Reduce Motion
- should resemble final layout

### Astronomical Calculation

For calculations that complete quickly:

- keep the interface stable
- update values in place
- avoid fake progress percentages

For longer operations:

- state what is being calculated
- show determinate progress only when real
- allow cancellation when practical

## Alerts and Notifications

Motion in alerts is functional.

### In-App Alert

- enters once
- remains readable
- does not pulse repeatedly
- clearly identifies action and urgency
- dismisses predictably

### Critical or Rare Event

A rare event may use:

- one restrained light sweep
- a horizon brightening
- a single haptic pattern
- a clear directional reveal

It must not:

- flash
- shake repeatedly
- use gaming-style warning animation
- repeat after acknowledgement without new information

## Data Changes

When data updates:

- preserve the old value long enough to compare when useful
- animate only the changed value or marker
- use color and motion together, not motion alone
- avoid rolling-number animations for routine measurements
- do not dramatize small fluctuations

Examples:

- cloud cover updates through a short crossfade
- visibility score moves along its scale
- Bz or Kp chart extends from the newest edge
- countdown updates without reanimating the whole component

## Haptics

Haptics support certainty and direct manipulation.

### Approved Uses

- carousel snap
- toggle confirmation
- observation logged
- countdown milestone
- important alert acknowledgement
- destructive confirmation

### Haptic Intensity

- light for selection
- medium for completion
- strong only for exceptional warnings or milestones

Do not use haptics:

- on every tab change
- during passive scrolling
- for decorative animation
- repeatedly during a countdown
- when the operating system has haptics disabled

## Background Motion

Daily backgrounds are static or nearly static.

Permitted:

- subtle parallax tied to device or scroll movement
- extremely slow atmospheric drift
- a barely perceptible horizon change tied to real time
- stars moving only when the motion teaches orientation

Limits:

- no continuous obvious starfield movement during reading
- no looping particle systems on routine screens
- no battery-heavy gyroscope effect by default
- no motion behind long text
- no autonomous background animation in red night mode

## Ceremonial Sequences

Ceremonial motion follows a simple arc:

1. establish darkness
2. reveal a real source of light
3. create scale
4. identify the celestial subject
5. settle into usable information

The sequence should move from emotion into precision.

It must not remain cinematic after the user needs to act.

## Reduced Motion

Reduced Motion is a first-class mode, not an afterthought.

When enabled:

- shared-element travel becomes crossfade
- parallax is removed
- path drawing appears complete
- scale transitions are reduced or removed
- background drift stops
- carousel remains swipeable but minimizes depth interpolation
- ceremonial sequences shorten or offer immediate skip
- pulsing and continuous movement stop
- information order and hierarchy remain unchanged

Reduced Motion must never remove:

- state feedback
- focus indication
- progress information
- event timing
- navigation clarity

## Accessibility

- Motion cannot be the only signal of change.
- Time-sensitive content remains readable without waiting for animation.
- Flashing is prohibited.
- No element flashes more than three times per second.
- Large moving backgrounds must not sit behind reading content.
- Focus is moved logically after navigation and modal entry.
- Screen readers receive state changes without duplicate announcements.
- Gesture-only interactions have visible and accessible alternatives.
- Animation does not trap users or block the back gesture.

## Performance

Vesper targets smooth motion on mid-range Android and iOS devices.

### Requirements

- prefer transform and opacity animation
- avoid layout animation across large complex trees
- avoid animating blur radius continuously
- avoid multiple independent particle systems
- profile the planet carousel with production imagery
- profile sheets over image-heavy screens
- keep JS-thread work out of gesture-critical animation
- use native-driven or UI-thread animation where available
- stop off-screen animations
- pause nonessential motion when the app is backgrounded
- avoid motion that increases cold-start time

A dropped-frame animation is worse than no animation.

## React Native Guidance

Recommended implementation:

- React Native Reanimated for gesture-linked and shared motion
- Gesture Handler for direct manipulation
- platform-native navigation transitions where they remain consistent with Vesper
- reduced-motion state derived from the operating system
- centralized tokens rather than ad hoc durations

Suggested tokens:

```ts
export const motion = {
  duration: {
    instant: 80,
    fast: 140,
    standard: 220,
    slow: 320,
    deliberate: 480,
    ceremonial: 900,
  },
  easing: {
    standard: [0.22, 1, 0.36, 1],
    enter: [0.16, 1, 0.30, 1],
    exit: [0.40, 0, 1, 1],
    linear: [0, 0, 1, 1],
  },
  spring: {
    gentle: {
      damping: 24,
      stiffness: 180,
      mass: 1,
    },
    snap: {
      damping: 28,
      stiffness: 260,
      mass: 0.9,
    },
    sheet: {
      damping: 30,
      stiffness: 220,
      mass: 1,
    },
  },
} as const;
```

## Anti-Patterns

Do not:

- animate because the screen feels empty
- replay entrance animations on every return
- use bounce as the default personality
- auto-advance celestial carousels
- keep stars or particles moving behind reading content
- animate routine tab changes cinematically
- use motion that implies false astronomical behavior
- pulse alerts continuously
- stagger long lists
- delay data for dramatic reveal
- use fake progress
- animate every numerical update
- depend on motion alone for selection or status
- ignore reduced-motion settings
- sacrifice responsiveness for atmosphere

## Review Checklist

- What does this motion explain?
- Does it improve continuity, orientation, hierarchy, or state understanding?
- Is it appropriate for Daily Instrument Mode or Ceremonial Mode?
- Does it begin immediately after user input?
- Does it settle quickly enough for repeated daily use?
- Is it interruptible?
- Is astronomical direction or timing represented honestly?
- Does it remain understandable with motion disabled?
- Does it preserve native navigation and accessibility expectations?
- Does it run smoothly on mid-range hardware?
- Could the duration, distance, or number of moving elements be reduced?
