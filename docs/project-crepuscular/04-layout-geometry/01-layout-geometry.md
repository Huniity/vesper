# Layout & Geometry

**Status:** Approved  
**Version:** 1.0  
**Scope:** Mobile application layout, spacing, responsive behavior, and geometric rules

## Purpose

Layout gives Vesper calm, orientation, and dependable rhythm.

The interface should feel spatial without becoming loose, decorative, or difficult to build. Every screen must remain usable on small phones, at larger text sizes, outdoors, and with one hand.

This chapter defines:

- the spacing system
- page margins and alignment
- vertical rhythm
- responsive behavior
- safe-area handling
- touch-target dimensions
- shape and radius rules
- celestial geometry
- carousels and edge disclosure
- bottom navigation
- content density
- implementation tokens

## Core Principle

> Space creates calm. Alignment creates trust. Geometry creates orientation.

Vesper should not fill every available area. It should use measured empty space to clarify what matters.

## Design Modes

### Daily Instrument Mode

Used for:

- Tonight
- Calendar
- News
- Settings
- routine alerts
- object details
- observation planning

Daily layouts prioritize:

- fast scanning
- repeatable structure
- comfortable density
- predictable navigation
- restrained atmosphere
- accessibility at large text sizes

### Ceremonial Mode

Used for:

- the introduction
- onboarding's opening moment
- eclipse countdowns
- rare-event takeovers
- shareable celestial results

Ceremonial layouts may use:

- larger open areas
- centered compositions
- stronger horizon geometry
- dramatic scale changes
- edge-to-edge imagery
- fewer visible controls

Ceremonial freedom does not remove accessibility or safe-area requirements.

## Base Grid

Vesper uses a **4-point base unit** with an **8-point primary rhythm**.

- Use multiples of `4` for fine alignment.
- Prefer multiples of `8` for component spacing and layout.
- Use `2` only for optical correction, hairline separation, or icon alignment.
- Avoid arbitrary values unless physical-device testing proves they are necessary.

### Spacing Tokens

| Token | Value | Typical use |
|---|---:|---|
| `space.0` | 0 | No spacing |
| `space.0_5` | 2 | Optical correction only |
| `space.1` | 4 | Tight icon or label spacing |
| `space.2` | 8 | Compact internal spacing |
| `space.3` | 12 | Related control spacing |
| `space.4` | 16 | Standard internal padding |
| `space.5` | 20 | Mobile page margin |
| `space.6` | 24 | Section and card padding |
| `space.8` | 32 | Standard section separation |
| `space.10` | 40 | Strong section separation |
| `space.12` | 48 | Major content break |
| `space.16` | 64 | Ceremonial or hero spacing |
| `space.20` | 80 | Rare large-screen interval |
| `space.24` | 96 | Intro and exceptional compositions |

Do not create aliases such as `space.7` or one-off values such as `18` without documenting why an existing token failed.

## Screen Frame

### Horizontal Margins

Use these starting values:

| Viewport width | Page margin |
|---|---:|
| `< 360 pt` | 16 pt |
| `360–429 pt` | 20 pt |
| `≥ 430 pt` | 24 pt |

The primary production target is `20 pt`.

Full-bleed imagery may reach the screen edge, but text and controls return to the page grid.

### Content Width

On phones, content uses the available width inside the page margins.

On larger devices:

- readable text should not stretch indefinitely
- article text should target a maximum width of approximately `680 pt`
- settings and forms should target `560–640 pt`
- dashboards and multi-column views may use more width when comparison benefits from it

Center constrained content within the available frame.

### Safe Areas

All interactive and readable content must respect:

- status-bar and sensor housing
- rounded display corners
- home indicator
- platform navigation regions
- keyboard insets

Background imagery, gradients, and atmospheric light may extend behind safe areas.

Primary controls may not.

## Alignment

### Primary Alignment

Left alignment is the default for:

- screen titles
- summaries
- cards
- lists
- settings
- article content
- data explanations

### Center Alignment

Use center alignment for:

- a single ceremonial statement
- a hero score
- an empty state
- a compact confirmation
- an eclipse or countdown focal moment

Do not center long reading content or routine settings.

### Optical Alignment

Celestial objects, icons, and circular gauges may require optical rather than mathematical centering.

Optical adjustment is permitted when:

- the visible mass is asymmetric
- a planet's rings extend beyond its sphere
- an icon has unequal negative space
- the mathematically centered result looks visibly wrong

Record repeated corrections in component tokens rather than adjusting each instance.

## Vertical Rhythm

A normal daily screen should follow this sequence:

1. safe-area entry
2. screen identity and location/context
3. primary recommendation or observation
4. supporting conditions
5. secondary modules
6. persistent navigation

### Standard Intervals

| Relationship | Spacing |
|---|---:|
| Icon to label | 4–8 pt |
| Label to value | 4–8 pt |
| Heading to related content | 12–16 pt |
| Card content groups | 16–24 pt |
| Between cards in a list | 12–16 pt |
| Between sections | 32–40 pt |
| Before a major new experience | 48–64 pt |

Spacing communicates relationship. Related content must sit closer together than unrelated content.

## Density

Vesper is calm, but calm does not mean wasteful.

### Daily Density

A typical phone viewport should show:

- one dominant recommendation or object
- one compact condition summary
- the beginning of the next useful section
- clear evidence that more content exists below or sideways

Avoid both extremes:

- too much information competing at once
- oversized hero areas that force routine information far below the fold

### Information Budget

Within a single card or module, aim for:

- one primary idea
- one primary action
- no more than three supporting values before progressive disclosure
- no more than two text hierarchy levels unless technical data requires a third

## Shape System

Vesper's geometry is celestial, but routine controls must remain familiar.

### Radius Tokens

| Token | Value | Typical use |
|---|---:|---|
| `radius.xs` | 6 | Small tags and compact controls |
| `radius.sm` | 10 | Inputs and small tiles |
| `radius.md` | 16 | Standard cards and buttons |
| `radius.lg` | 24 | Hero cards and sheets |
| `radius.xl` | 32 | Ceremonial panels |
| `radius.full` | 999 | Pills, circular controls, planets |

### Radius Rules

- Standard daily cards use `radius.md`.
- Large feature cards may use `radius.lg`.
- Do not mix several corner radii inside one small component.
- Nested surfaces should use a smaller radius than their parent.
- Full pills are appropriate for segmented controls, filters, and compact status badges.
- Avoid extreme rounding on large information panels when it reduces available content space.

## Celestial Geometry

Use celestial forms to support orientation and meaning.

### Approved Forms

- circles for bodies, scores, phases, and focal states
- arcs for visibility, rise/set, time windows, and progress
- orbital paths for temporal or positional relationships
- horizons for time transitions and atmospheric boundaries
- trajectories for passes and movement
- radial scales for direction and altitude

### Geometry Must Support

At least one of:

- observation
- navigation
- hierarchy
- status
- time
- spatial relationship
- restrained atmosphere

Geometry may contribute atmosphere, but it must not become the only reason a component exists.

### Avoid

- decorative orbit lines behind unrelated text
- circles used for every metric
- complex radial layouts when a linear scale is easier
- fake technical markings
- constellation patterns used as filler
- geometry that suggests inaccurate astronomical relationships

## The Night Ruler

The Night Ruler is Vesper's signature horizontal time component.

It represents the observable evening as a measured interval rather than a generic progress bar.

### Structure

The ruler may contain:

- civil, nautical, and astronomical twilight boundaries
- darkness window
- current-time marker
- object visibility intervals
- event markers
- selected observation window
- rise, transit, and set points

### Geometry

- baseline height: `1 pt`
- major tick: `8 pt`
- minor tick: `4 pt`
- interactive minimum height: `44 pt`
- highlighted observing band: `8–12 pt`
- current-time marker: visually distinct but not constantly animated

### Rules

- Labels must not overlap at narrow widths.
- Less important labels may collapse before data becomes illegible.
- Horizontal scrolling is acceptable for detailed planning views.
- The compact Tonight version must remain understandable without interaction.
- Gold marks the most meaningful event, not every tick or visible interval.

## Planet and Object Carousel

The primary celestial carousel may be more theatrical than surrounding daily UI because the object itself is the reason to open Vesper.

### Composition

- one dominant centered object card
- partial neighboring cards visible at both edges when available
- strong object imagery
- concise status and timing
- one clear path to details
- page indicator only when it adds orientation

### Sizing

Starting guidance for a standard phone:

- focused card width: `76–82%` of viewport
- neighboring card reveal: `32–56 pt`
- gap between cards: `12–16 pt`
- focused object image: approximately `55–68%` of card width
- minimum card touch area: entire visible card

### Interaction

- horizontal swipe
- snap to one object at a time
- preserve readable motion at reduced-motion settings
- avoid auto-advancing
- avoid infinite loops that hide the beginning or ranking
- support screen-reader navigation without requiring swipe gestures

### Ranking

When cards represent a Top 3:

- ranking remains visible
- the first item receives visual dominance
- lower-ranked items remain fully accessible
- ranking must not be communicated through color alone

## Cards and Containers

Detailed material behavior belongs to the Materials chapter. Layout establishes their structure.

### Standard Card Padding

- compact card: `16 pt`
- standard card: `20 pt`
- large or hero card: `24 pt`

### Card Width

- single-column cards fill the content frame
- two-column cards are permitted only when each card remains at least `156 pt` wide
- three-column layouts are not used on standard phone widths
- compact metrics may share one horizontal container when they form one coherent summary

### Internal Layout

A card should normally follow:

1. identity or label
2. primary value or object
3. supporting explanation
4. metadata or action

Do not place unrelated actions in opposite corners merely to fill space.

## Lists

Use lists when scanning and comparison matter more than atmosphere.

### List Row

- minimum height: `52 pt`
- comfortable default: `56–64 pt`
- leading icon or thumbnail: optional
- primary label: one or two lines
- supporting metadata: one line where possible
- trailing action or value: aligned consistently

Rows may expand with Dynamic Type. Never force a fixed height that clips text.

## Controls

### Touch Targets

Minimum interactive dimensions:

- iOS: `44 × 44 pt`
- Android implementation target: `48 × 48 dp`

Use `48` as the shared design target wherever practical.

Visible icons may be smaller while the hit area remains compliant.

### Buttons

Starting heights:

| Button | Height |
|---|---:|
| Compact | 36 pt, secondary use only |
| Standard | 48 pt |
| Large | 56 pt |
| Icon button hit area | 48 × 48 pt |

Button label and icon spacing: `8 pt`.

### Segmented Controls

- minimum height: `44 pt`
- internal horizontal padding: `12–16 pt`
- use two to four segments
- labels must remain understandable at large text sizes
- when labels no longer fit, replace the control with a menu or stacked option list

## Bottom Navigation

The primary mobile navigation should remain stable and reachable.

### Structure

Use four or five destinations at most.

Current product direction:

- Tonight
- Calendar
- Eclipse or seasonal priority
- News
- Settings or profile access

The final information architecture may change, but the component rules remain.

### Dimensions

- visual bar height: approximately `64–72 pt`, excluding safe-area inset
- item touch width: distribute evenly
- icon size: `22–26 pt`
- label uses the approved small-label token
- safe-area padding is added below, not taken from the touch target

### Behavior

- the selected destination must be visible through shape, value, or label treatment, not color alone
- no floating central action unless a genuine primary action emerges
- routine tab changes do not use cinematic transitions
- preserve state within each primary destination
- red night mode requires a dedicated navigation treatment

## Sheets, Dialogs, and Overlays

### Bottom Sheets

- use `radius.lg` at top corners
- begin below critical status content
- maintain a visible drag affordance when dismissal by gesture is supported
- content padding: `20–24 pt`
- primary actions remain reachable above the home indicator

### Dialogs

Use dialogs for:

- destructive confirmation
- safety acknowledgement
- small decisions that should interrupt the current task

Do not use a dialog for content that requires scrolling or exploration.

### Full-Screen Overlays

Reserve for:

- detailed event experiences
- maps
- sky planning
- image viewing
- eclipse or ceremonial moments

## Responsive Behavior

### Small Phones

At widths below `360 pt`:

- reduce page margin to `16 pt`
- preserve type size before reducing imagery
- collapse multi-metric rows into two rows
- allow cards to become taller
- reduce neighboring carousel reveal
- never reduce touch targets

### Large Phones

At widths `430 pt` and above:

- increase page margin to `24 pt`
- allow more generous object imagery
- keep text line lengths constrained
- do not automatically add extra columns

### Tablets and Foldables

- use centered maximum-width regions
- introduce columns only when they improve comparison or planning
- keep Tonight's primary recommendation visually dominant
- do not simply stretch phone cards
- support split views without hiding essential observation information

## Dynamic Type and Localization

Layout must survive:

- Portuguese expansion
- Spanish expansion
- English
- large accessibility text
- bold-text settings
- 12-hour and 24-hour time formats
- long city and object names

### Rules

- content determines height
- fixed heights are used only for controls with guaranteed label behavior
- text may wrap before it truncates
- primary astronomical names should not be truncated when a second line is possible
- horizontally arranged metrics must stack when text expansion creates collision
- test at `320 pt` width and at the largest supported accessibility size

## Scroll Behavior

### Vertical Scroll

- use one primary vertical scroll region per screen
- avoid nested vertical scrolling
- keep headers compact after the primary context is established
- sticky elements must earn their permanent space

### Horizontal Scroll

Permitted for:

- celestial object carousel
- detailed Night Ruler
- compact filter chips
- image comparison
- data tables that cannot responsibly collapse

Horizontal scroll must show edge disclosure or another clear cue.

## Empty Space

Empty space is an active layout element.

Use it to:

- separate unrelated ideas
- frame a celestial object
- establish a horizon
- slow a ceremonial moment
- prevent data fatigue

Do not use it to hide insufficient content or create unnecessary scrolling.

## Implementation Tokens

Suggested TypeScript structure:

```ts
export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
} as const;

export const radii = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  full: 999,
} as const;

export const layout = {
  pageMarginSmall: 16,
  pageMargin: 20,
  pageMarginLarge: 24,
  touchTarget: 48,
  buttonHeight: 48,
  buttonHeightLarge: 56,
  listRowMinHeight: 52,
  bottomNavigationHeight: 68,
  contentMaxArticle: 680,
  contentMaxForm: 600,
} as const;
```

Implementation may use platform-specific helpers, but semantic token names and relationships remain shared.

## Anti-Patterns

Do not:

- fill every gap with another card
- use arbitrary spacing values
- place multiple dominant hero elements in one viewport
- shrink type or touch targets to preserve a layout
- center routine reading content
- overuse circles because the product is astronomical
- stretch phone layouts across tablets
- hide required actions below decorative imagery
- use auto-playing carousels
- create nested vertical scroll regions
- use geometric decoration that implies false data
- let the bottom navigation overpower content

## Review Checklist

- Is there one obvious first reading point?
- Does spacing make relationships clear?
- Does the layout remain useful at `320 pt` width?
- Does it survive large text without clipping or collision?
- Are all touch targets at least `44 pt`, preferably `48 pt`?
- Does celestial geometry support observation, navigation, hierarchy, or time?
- Is the object carousel theatrical enough to create wonder but calm enough for daily use?
- Is important content visible without excessive scrolling?
- Does empty space create focus rather than waste?
- Can the layout be implemented with shared tokens instead of one-off values?
- Would the screen still feel coherent without background imagery?
