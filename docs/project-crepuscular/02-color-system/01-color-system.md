# Color System

**Status:** Approved  
**Version:** 1.0  
**Palette status:** Approved

## Purpose

Vesper's color system translates twilight, darkness, atmospheric light, and scientific significance into a usable interface.

Color must do one of four jobs:

1. create a calm observing environment
2. establish hierarchy and depth
3. communicate state or meaning
4. preserve the emotional identity of Vesper

Color is never added merely to make a screen feel more futuristic.

## Core Palette

The approved brand palette remains unchanged.

| Token | Name | Value | Primary role |
|---|---|---:|---|
| `brand.void` | Void | `#0B0E20` | Primary canvas and deepest background |
| `brand.indigo` | Deep Indigo | `#1C2350` | Surfaces, depth, elevated regions |
| `brand.violet` | Twilight Violet | `#8B7CF6` | Interaction, selection, informational emphasis |
| `brand.gold` | Venus Gold | `#FFC46B` | Astronomical significance and earned emphasis |
| `brand.ember` | Horizon Ember | `#FF9E64` | Solar events, warmth, caution, horizon transitions |
| `brand.starlight` | Starlight | `#F5F2FF` | Primary text, icons, high-contrast information |

## Distribution

Use the palette approximately in this ratio across the product:

| Color | Target share |
|---|---:|
| Void | 60% |
| Deep Indigo | 25% |
| Starlight | 8% |
| Twilight Violet | 4% |
| Venus Gold | 2% |
| Horizon Ember | 1% |

This ratio describes the overall visual impression, not a mathematical requirement for every screen.

The product should read as darkness first, information second, atmosphere third, and accent last.

## Core Rule: Gold Is Earned

Venus Gold is not Vesper's default action color.

Use gold for moments such as:

- the best observation window tonight
- an object currently worth looking at
- an active rare celestial event
- the evening star
- a confirmed discovery or meaningful milestone
- a selected item when that selection carries astronomical significance

Do not use gold for:

- every primary button
- routine navigation
- ordinary settings
- generic success states
- large background fills
- paragraph text
- decorative borders repeated across a screen

If everything is gold, nothing is important.

## Semantic Roles

### Canvas and Surfaces

| Semantic token | Value | Usage |
|---|---:|---|
| `background.canvas` | `#0B0E20` | Root screen background |
| `background.deep` | `#070A16` | Deep overlays and immersive regions |
| `surface.subtle` | `#10152D` | Low-separation content regions |
| `surface.default` | `#151B3A` | Standard controls and grouped content |
| `surface.raised` | `#1C2350` | Sheets, focused modules, selected surfaces |
| `overlay.scrim` | `rgba(5, 7, 16, 0.72)` | Modal and sheet scrim |

Surfaces should usually be separated by luminance, spacing, or atmosphere before borders are added.

### Text and Icons

Starlight is the source color for neutral text and icon hierarchy.

| Semantic token | Value | Usage |
|---|---:|---|
| `text.primary` | `#F5F2FF` | Titles, essential values, primary body text |
| `text.secondary` | `rgba(245, 242, 255, 0.72)` | Supporting information |
| `text.tertiary` | `rgba(245, 242, 255, 0.56)` | Metadata and secondary labels |
| `text.disabled` | `rgba(245, 242, 255, 0.40)` | Disabled controls only |
| `icon.primary` | `rgba(245, 242, 255, 0.88)` | Main icons |
| `icon.secondary` | `rgba(245, 242, 255, 0.56)` | Supporting icons |

Do not use low-opacity text for important information, times, safety instructions, coordinates, or compact body copy.

### Interaction

Twilight Violet is the default interactive color because gold must remain scarce.

| Semantic token | Value | Usage |
|---|---:|---|
| `action.primary` | `#8B7CF6` | Main routine actions, active tabs, selected filters |
| `action.primaryPressed` | `#7466E8` | Pressed state |
| `action.primarySoft` | `rgba(139, 124, 246, 0.16)` | Selection background and quiet emphasis |
| `focus.ring` | `#A99FFF` | Keyboard and accessibility focus |
| `link.default` | `#A99FFF` | Inline links and secondary navigation |

A routine action may use a Starlight treatment when violet would create too much visual activity.

### Astronomical Significance

| Semantic token | Value | Usage |
|---|---:|---|
| `signal.significant` | `#FFC46B` | Best target, visible-now opportunity, rare event |
| `signal.significantSoft` | `rgba(255, 196, 107, 0.16)` | Quiet highlight around significant content |
| `signal.solar` | `#FF9E64` | Sun, eclipse contact, solar activity, horizon warmth |
| `signal.solarSoft` | `rgba(255, 158, 100, 0.14)` | Solar and warm atmospheric emphasis |

Gold and ember should normally occupy a small area of the screen.

## Utility Status Colors

Functional state colors are not part of the brand palette. They are utility colors and must never become decorative themes.

| Semantic token | Value | Usage |
|---|---:|---|
| `status.info` | `#8B7CF6` | Informational state |
| `status.warning` | `#FF9E64` | Caution requiring attention |
| `status.critical` | `#FF6B7A` | Error, failure, destructive action |
| `status.success` | `#65D6B4` | Completed operation or healthy connection |

**Pending:** validate the critical and success utility colors across physical iOS and Android displays before locking them.

Never communicate a state using color alone. Pair it with at least one of:

- an icon
- a label
- a shape
- a pattern
- a position change

## Approved Gradient Families

Gradients are atmospheric tools, not default component fills.

### 1. Deep Sky

Used behind immersive hero regions and sparse astronomical imagery.

```text
#0B0E20 → #10152D → #1C2350
```

Keep transitions broad and low contrast.

### 2. Twilight Horizon

Used for a distant horizon, transition, or rare ceremonial moment.

```text
Void → Deep Indigo → restrained Twilight Violet → faint Venus Gold
```

Gold should appear as a narrow light source, not a large wash.

### 3. Solar Horizon

Reserved for sunrise, sunset, eclipse, and solar-event contexts.

```text
Void → restrained Horizon Ember → Venus Gold at the source
```

Do not use the solar gradient on unrelated cards or navigation surfaces.

## Image Overlays

Astronomical photography may contain colors outside the interface palette. That is allowed because imagery represents real celestial content.

To keep the interface coherent:

- preserve the object's recognizable natural color
- darken imagery beneath text
- use a Void or Deep Indigo overlay rather than recoloring every image purple
- avoid oversaturation
- prevent bright imagery from competing with primary information
- keep labels and controls outside complex image regions when possible

## Ceremonial and Daily Modes

### Ceremonial Mode

Applies to:

- the introduction
- onboarding highlights
- the eclipse experience
- rare celestial events
- major shareable moments

Ceremonial mode may use stronger horizon light, broader atmospheric color, and more visible gold or ember.

### Daily Instrument Mode

Applies to:

- Tonight
- Calendar
- News
- Settings
- routine alerts
- standard navigation

Daily mode should be dominated by Void, Deep Indigo, and Starlight. Violet supports interaction. Gold appears only when the sky has earned it.

## Red Night Mode

Red night mode is a separate operational theme, not a red-tinted version of the main brand.

### Provisional Night Tokens

| Semantic token | Value |
|---|---:|
| `night.background` | `#000000` |
| `night.surface` | `#120000` |
| `night.textPrimary` | `#FF5A52` |
| `night.textSecondary` | `#B83B36` |
| `night.textMuted` | `#762723` |
| `night.border` | `#3A0D0D` |
| `night.focus` | `#FF7A70` |

Night mode rules:

- remove violet, gold, ember, green, and blue interface accents
- render imagery as dim red monochrome or hide it when it is not operationally necessary
- avoid white flashes during navigation, loading, screenshots, or system handoffs
- use pure black for the canvas where supported
- prioritize readability and physical-device testing over brand expression

**Pending:** test the night palette outdoors on multiple OLED and LCD devices before approval.

## Accessibility Rules

- Primary body text uses Starlight or an approved high-contrast derivative.
- Twilight Violet may be used for text on Void, but not for small text on Deep Indigo without validation.
- Gold and Ember have strong contrast on dark surfaces, but should not become paragraph colors.
- Disabled appearance must not be the only indication that a control is unavailable.
- Charts must remain understandable without relying on hue alone.
- Color choices must survive reduced brightness and common color-vision differences.
- Every new token must be contrast-tested against every surface on which it is approved.

## Do

- let darkness dominate
- reserve gold for meaningful sky moments
- use violet for routine interaction
- use ember for solar or cautionary meaning
- preserve the natural color of planets and astronomical imagery
- pair state color with another signal
- use gradients broadly and subtly

## Do Not

- use gold as the universal primary button color
- place vivid gradients behind reading content
- tint every photograph violet
- use bright accents across every card
- use Horizon Ember as a generic brand flourish
- use utility red or green decoratively
- use low-contrast gray text for important information
- create multiple competing glows on one daily screen

## Review Checklist

- Does darkness remain the dominant visual material?
- Is each accent performing a defined job?
- Has gold been earned?
- Is violet carrying routine interaction instead of gold?
- Does ember relate to the Sun, horizon, warmth, or caution?
- Can every status still be understood without color?
- Is text comfortably readable at reduced brightness?
- Is the screen calm enough for repeated daily use?
- Does the palette support the content instead of competing with it?
