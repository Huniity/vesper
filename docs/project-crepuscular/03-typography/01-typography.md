# Typography

**Status:** Approved  
**Version:** 1.0  
**Scope:** Mobile product, marketing continuity, and implementation tokens

## Purpose

Typography gives Vesper two complementary voices:

- **Space Grotesk** carries wonder, identity, orientation, and large numerical moments.
- **Inter** carries daily reading, controls, explanations, and dependable interface work.
- **Space Mono** carries measured astronomical data where alignment and technical distinction matter.

The system must feel astronomical without resembling science-fiction display type. It should remain clear at low brightness, in four launch languages, and during brief outdoor use.

## Core Principle

> Display the sky with character. Explain it with clarity. Measure it with precision.

Typography should establish hierarchy before color, cards, glow, or imagery are added.

## Font Families

### Space Grotesk — Display and Identity

Use Space Grotesk for:

- screen titles
- hero statements
- major celestial-object names
- large scores and countdowns
- section headings
- prominent times when they are part of the experience
- selected marketing lines

Space Grotesk should provide personality without becoming decorative.

Do not use it for:

- long article bodies
- dense settings screens
- small metadata
- legal text
- compact tables
- multi-line technical explanations

### Inter — Interface and Reading

Use Inter for:

- body copy
- labels
- buttons
- navigation
- settings
- cards
- notifications
- article text
- safety content
- form inputs
- accessibility-critical instructions

Inter is the default family whenever the content must disappear behind understanding.

### Space Mono — Live and Scientific Data

Use Space Mono for:

- RA and DEC
- altitude and azimuth
- Kp and Bz values
- UTC timestamps
- observation IDs
- satellite identifiers
- compact scientific units
- live telemetry and aligned data rows

Do not use monospace simply to make a screen feel technical. It is reserved for data that benefits from fixed-width rhythm, comparison, or instrument character.

## Brand and Product Separation

The Vesper wordmark is a brand asset. It must not be recreated by typing `VESPER` in a product heading and treating that as the logo.

The product may use Space Grotesk with restrained tracking to echo the brand, but the official wordmark remains a controlled asset.

## Mobile Type Scale

Values are starting tokens for React Native. Optical adjustment is allowed after physical-device testing, but arbitrary one-off sizes are not.

| Token | Family | Size | Line height | Weight | Tracking | Typical use |
|---|---|---:|---:|---:|---:|---|
| `type.displayHero` | Space Grotesk | 44 | 48 | 500 | `-0.02em` | Ceremonial hero or eclipse moment |
| `type.displayLarge` | Space Grotesk | 36 | 41 | 500 | `-0.02em` | Main Tonight statement |
| `type.displayMedium` | Space Grotesk | 30 | 36 | 500 | `-0.015em` | Screen title or major object |
| `type.heading1` | Space Grotesk | 26 | 32 | 600 | `-0.01em` | Primary section heading |
| `type.heading2` | Space Grotesk | 22 | 28 | 600 | `-0.005em` | Module heading |
| `type.heading3` | Space Grotesk | 19 | 24 | 600 | `0` | Card or subsection heading |
| `type.bodyLarge` | Inter | 18 | 27 | 400 | `0` | Important explanation |
| `type.body` | Inter | 16 | 24 | 400 | `0` | Standard body copy |
| `type.bodySmall` | Inter | 14 | 20 | 400 | `0` | Secondary explanation |
| `type.labelLarge` | Inter | 15 | 20 | 600 | `0.005em` | Primary buttons and tabs |
| `type.label` | Inter | 13 | 18 | 600 | `0.01em` | Controls and compact labels |
| `type.caption` | Inter | 12 | 16 | 500 | `0.01em` | Metadata and attribution |
| `type.dataLarge` | Space Mono | 28 | 34 | 500 | `-0.02em` | Major live value |
| `type.data` | Space Mono | 15 | 21 | 400 | `0` | Coordinates and measurements |
| `type.dataSmall` | Space Mono | 12 | 17 | 400 | `0.01em` | Compact technical metadata |

### Ceremonial Exception

`displayHero` is permitted only in ceremonial contexts such as:

- the introduction
- onboarding's main promise
- the eclipse countdown
- a rare event takeover
- a shareable astronomical result

Daily Instrument Mode should normally begin at `displayLarge` or below.

## Weight System

Use a restrained set of weights:

| Weight | Role |
|---:|---|
| 400 | Reading and supporting information |
| 500 | Large display values, calm emphasis, data |
| 600 | Headings, selected controls, important labels |
| 700 | Rare urgent or safety-critical emphasis only |

Avoid mixing several weights inside one small component. Hierarchy should come first from size, spacing, and placement.

## Numerals

Astronomy is time- and measurement-heavy. Numerals must be treated as first-class content.

### Tabular Numerals

Use tabular numerals for:

- countdowns
- live clocks
- score changes
- chart axes
- tables
- values that update in place
- aligned rise and set times

This prevents layout movement and improves scanning.

### Proportional Numerals

Use proportional numerals in prose and isolated editorial statements where alignment is unnecessary.

### Time Formatting

- Follow the user's locale and 12/24-hour preference.
- Keep hours and minutes visually attached.
- Use a colon, not a period, between hours and minutes.
- Do not add decorative leading zeroes unless the locale or data context expects them.
- State the timezone when ambiguity could affect observation.

### Units

- Place a non-breaking space between a value and most units: `48°`, `500 km/s`, `−8 nT` according to accepted scientific convention.
- Keep signs and values together.
- Use the true minus sign `−`, not a hyphen `-`, in polished UI.
- Avoid unexplained abbreviations on beginner-facing surfaces.

## Hierarchy Rules

A typical daily screen should contain:

1. one clear screen title
2. one dominant value, object, or recommendation
3. a small number of section headings
4. quiet supporting text
5. technical detail only where useful

Do not create several competing display-sized elements on the same viewport.

### One Dominant Reading Point

Every viewport should have one obvious first reading point.

Examples:

- `Tonight looks promising.`
- `Jupiter`
- `78 / 100`
- `Totality begins in 02:14:36`

If two elements compete for dominance, reduce one.

## Line Length and Paragraphs

### Mobile Interface

- Aim for roughly 28–45 characters per line in cards and summaries.
- Avoid paragraphs longer than four lines on routine surfaces.
- Break technical explanations into meaningful groups.
- Use progressive disclosure for longer content.

### Articles and Learning Content

- Use a comfortable reading width rather than full-screen edge-to-edge text on tablets.
- Body copy uses `body` or `bodyLarge`.
- Paragraph spacing should be visible without becoming editorially luxurious.
- Scientific names, units, and source lines must remain scannable.

## Alignment

### Left Alignment

Left-align most interface and reading text. It creates dependable scanning across English, Portuguese, and Spanish.

### Center Alignment

Reserve centered text for:

- short ceremonial statements
- empty states
- compact confirmations
- a single hero value

Do not center long explanations, lists, or settings content.

### Right Alignment

Use right alignment mainly for comparable values in rows, tables, or compact data panels.

## Capitalization

Use sentence case by default.

Preferred:

- `Tonight's best window`
- `Sky conditions`
- `Add location`

Avoid routine all caps. Uppercase may be used sparingly for:

- short scientific abbreviations
- coordinate labels such as `RA` and `DEC`
- source identifiers
- compact instrument labels

Do not use letter-spaced uppercase as a generic premium effect.

## Tracking

- Large Space Grotesk headings may use slightly negative tracking.
- Body copy remains at natural tracking.
- Small labels may use a tiny positive value for clarity.
- The brand wordmark's wide spacing does not become a rule for all headings.

## Color and Type

Typography must remain readable without relying on glow or shadow.

- Primary text uses `text.primary`.
- Supporting text uses `text.secondary`.
- Metadata uses `text.tertiary` only when size and contrast remain comfortable.
- Gold is not a paragraph color.
- Violet is not used for long reading text.
- Ember is limited to solar meaning or caution.

A highlighted word may use an accent only when that word carries the semantic meaning.

## Typography in Daily and Ceremonial Modes

### Daily Instrument Mode

- Prefer compact hierarchy.
- Limit display typography to one main statement or value.
- Keep body copy direct and short.
- Avoid oversized editorial composition in routine flows.
- Use motion and glow less than typography and spacing.

### Ceremonial Mode

- Display scale may expand.
- Tracking and line breaks may become more expressive.
- Copy remains short.
- The composition may pause before revealing supporting information.
- Readability and accessibility still override atmosphere.

## Localization

Vesper launches in `pt-PT`, `pt-BR`, `en`, and `es`. Typography must survive translation without redesign.

Rules:

- Design controls for expansion of at least 30% beyond the English source string.
- Avoid fixed-width buttons for translated labels.
- Do not reduce font size to force a translation into one line.
- Allow headings to wrap naturally.
- Keep manual line breaks out of localized strings unless each locale owns its break.
- Test accented characters, punctuation, ordinal forms, and date formats.
- Use locale-aware number and date formatting.

Portuguese and Spanish copy often becomes longer than English. The layout must absorb this through width, wrapping, and spacing—not smaller unreadable text.

## Dynamic Type and Accessibility

Typography must work with operating-system text scaling.

### Required Behavior

- Body, labels, settings, safety content, and article text scale with user preferences.
- Critical information must not be clipped at large accessibility sizes.
- Navigation may adapt layout rather than shrinking text.
- Dense horizontal cards may become vertical stacks.
- The planet carousel may preserve imagery while moving metadata below it.
- Truncation must not hide the action, time, direction, or safety instruction.

### Minimums

- Do not render essential interface text below 12 pt-equivalent.
- Touch labels must remain legible at reduced brightness.
- Body text should normally remain at 16 pt-equivalent.
- Safety content may use stronger weight but must not rely on all caps.

## Truncation and Wrapping

### Never Truncate

- event times
- safety instructions
- primary action labels
- the active location when ambiguity would result
- essential coordinates
- error recovery instructions

### May Truncate Carefully

- long article headlines in a feed
- source names
- nonessential object descriptions
- secondary location labels

Use a meaningful maximum line count and provide a route to the full content.

## Data Typography Patterns

### Major Score

```text
78
/100
```

- `78`: `dataLarge` or a display numeral style
- `/100`: `bodySmall` or `dataSmall`
- Do not make the denominator compete with the score.

### Coordinates

```text
RA   15h 48m 38s
DEC  +03° 39′ 12″
```

- Use Space Mono.
- Align labels and values.
- Preserve signs and symbols.
- Provide beginner explanation outside the data row when needed.

### Observation Window

```text
21:30–00:45
Best visibility
```

- Time is the dominant value.
- The interpretation is secondary.
- Avoid putting multiple competing colors inside the time range.

## Content Density

Typography should make the daily app feel calm even when the underlying data is complex.

A module should not show all available data merely because it exists.

Use three levels:

1. **Glance:** object, time, recommendation
2. **Understand:** conditions and short explanation
3. **Inspect:** coordinates, charts, sources, technical detail

The type hierarchy must visibly separate these levels.

## Do

- use Space Grotesk for identity and orientation
- use Inter for reading and interaction
- use Space Mono only where data benefits from it
- use sentence case
- treat times and measurements as primary content
- allow translations to wrap
- support Dynamic Type through adaptive layout
- create hierarchy with size and space before color
- keep daily typography calm

## Do Not

- use futuristic display fonts
- use monospace across whole screens
- reproduce the wordmark with ordinary text
- overuse uppercase or wide tracking
- shrink translations to preserve a fixed layout
- place long body text in Space Grotesk
- use gold for whole paragraphs
- hide essential information behind truncation
- use several display-sized elements in one viewport
- depend on glow to make text readable

## Engineering Notes

Initial implementation tokens should live in:

```text
apps/mobile/src/theme/typography.ts
```

Recommended token shape:

```ts
export const typography = {
  displayHero: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 44,
    lineHeight: 48,
    letterSpacing: -0.88,
  },
  body: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  data: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0,
    fontVariant: ['tabular-nums'],
  },
} as const;
```

Implementation must use named tokens. One-off font sizes require a documented reason and design review.

## Review Checklist

- Is there one obvious first reading point?
- Is Space Grotesk used for identity rather than long reading?
- Is Inter carrying routine comprehension?
- Is monospace limited to data that benefits from alignment or technical distinction?
- Are times, units, and numerals formatted consistently?
- Does the hierarchy work without accent color or glow?
- Can Portuguese and Spanish expand without shrinking?
- Does the layout survive Dynamic Type?
- Is any essential information truncated?
- Is the typography restrained enough for repeated daily use?
