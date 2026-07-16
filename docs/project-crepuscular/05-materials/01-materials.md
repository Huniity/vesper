# Materials

**Status:** Approved  
**Version:** 1.0  
**Scope:** Mobile surfaces, separation, translucency, borders, shadows, blur, glow, and overlays

## Purpose

Materials define how Vesper's interface occupies space.

They determine whether a surface feels embedded in the night, raised above it, focused for interaction, or temporarily placed over another experience.

Vesper does not imitate physical glass, metal, or a fictional spacecraft console. Its materials are quiet digital surfaces shaped by darkness, atmospheric light, and precise separation.

This chapter defines:

- surface hierarchy
- translucency
- glass usage
- borders and dividers
- shadows
- blur
- glow
- scrims and overlays
- pressed, selected, focused, and disabled states
- imagery beneath interface surfaces
- performance and accessibility requirements
- red night-mode materials
- implementation tokens

## Core Principle

> Materials clarify hierarchy before they create atmosphere.

A material treatment is successful when the user understands:

- what belongs together
- what is interactive
- what is selected
- what is temporary
- what deserves attention

Atmosphere is secondary.

## Material Philosophy

Vesper should feel deep, not glossy.

Depth is created first through:

1. luminance
2. spacing
3. overlap
4. scale
5. controlled transparency
6. blur
7. shadow

Use the earliest tool in this list that solves the problem. Do not add blur, shadow, or glow when a small luminance change or additional spacing is enough.

## Surface Hierarchy

Vesper uses a small number of dependable surface levels.

| Level | Semantic token | Base color | Purpose |
|---|---|---:|---|
| 0 | `material.canvas` | `#0B0E20` | Root night canvas |
| 1 | `material.inset` | `#10152D` | Grouped or recessed region |
| 2 | `material.surface` | `#151B3A` | Standard cards and controls |
| 3 | `material.raised` | `#1C2350` | Focused module, sheet, selected region |
| 4 | `material.overlay` | Contextual | Temporary surface above the current task |

These levels describe hierarchy rather than guaranteed solid fills. A component may use a translucent derivative when the background is controlled and readability remains stable.

### Level 0 — Canvas

Use for:

- root screen background
- full-screen reading surfaces
- immersive sky regions
- space surrounding major content

The canvas should remain visually quiet. It may contain a restrained horizon, sparse stars, or low-contrast imagery, but these are atmosphere—not additional surface levels.

### Level 1 — Inset

Use for:

- grouped metrics
- recessed charts
- secondary information bands
- timeline tracks
- non-interactive content regions

Inset surfaces should feel connected to their parent rather than floating above it.

### Level 2 — Standard Surface

Use for:

- everyday cards
- standard buttons
- list groups
- inputs
- compact observation modules

Standard surfaces are the default component material. They should be recognizable without requiring a bright border or visible shadow.

### Level 3 — Raised Surface

Use for:

- bottom sheets
- selected object panels
- focused planning modules
- temporarily elevated controls
- important contextual cards

Raised does not mean luminous. It means closer, more focused, or more interactive.

### Level 4 — Overlay

Use for:

- dialogs
- menus
- sheets above another sheet
- safety interruptions
- image and map controls
- ceremonial takeovers

Overlay surfaces must clearly separate from content beneath them and preserve an obvious dismissal path.

## Separation Order

When two regions need separation, attempt these methods in order:

1. spacing
2. luminance difference
3. grouping or alignment
4. subtle border
5. overlap
6. shadow
7. blur or translucency

Do not begin with a border around every container.

## Solid Surfaces

Solid surfaces are preferred for:

- text-heavy content
- settings
- forms
- long articles
- technical data
- high Dynamic Type sizes
- low-performance devices
- red night mode
- backgrounds with unpredictable imagery

Solid does not mean flat. Small luminance differences and restrained atmospheric falloff can preserve depth without sacrificing readability.

## Translucent Surfaces

Translucency is permitted when it reveals meaningful spatial continuity.

Good uses:

- a control placed over a stable celestial image
- bottom navigation over a controlled dark background
- a compact overlay that should remain connected to the sky beneath it
- a ceremonial panel above the horizon
- a temporary observation control over a map or trajectory

Poor uses:

- long-form reading
- every card on a screen
- settings and preference rows
- surfaces over bright or rapidly changing imagery
- text whose contrast changes while scrolling
- decoration added only to signal that the app is premium

### Translucency Ranges

Starting ranges:

| Material | Fill opacity | Intended use |
|---|---:|---|
| `translucent.subtle` | 72–84% | Controlled dark imagery |
| `translucent.standard` | 84–92% | Navigation and compact overlays |
| `translucent.dense` | 92–96% | Text-bearing raised surfaces |

These values are starting points. Contrast testing on the actual background determines the final choice.

## Glass

Glass is an exception, not the default Vesper material.

### Approved Glass

Glass may be used for:

- compact navigation
- a temporary observation toolbar
- an eclipse or ceremonial overlay
- controls above a live sky or image view
- a small floating selector

### Glass Requirements

An approved glass surface must have:

- a controlled background
- stable text contrast
- visible edge definition
- a reason to preserve context beneath it
- a solid fallback
- acceptable performance on mid-range Android hardware

### Glass Limits

- No more than one major glass region should dominate a daily screen.
- Do not nest glass inside glass.
- Do not place several unrelated translucent cards over a detailed background.
- Do not use glass to compensate for weak hierarchy.
- Do not combine heavy blur, bright borders, glow, and shadow on one surface.

## Blur

Blur represents atmospheric separation, not frosting for its own sake.

### Blur Tokens

| Token | Radius | Usage |
|---|---:|---|
| `blur.none` | 0 | Default |
| `blur.subtle` | 8 | Compact controlled overlays |
| `blur.standard` | 16 | Navigation and sheets |
| `blur.strong` | 24 | Rare ceremonial overlay |

Values refer to design intent. Platform implementations may require visually matched rather than numerically identical values.

### Blur Rules

- Daily reading surfaces should usually use no blur.
- Blur must not obscure essential celestial detail beneath an observation control.
- Strong blur is reserved for temporary or ceremonial layers.
- Blur should be reduced or removed under Reduce Transparency settings.
- Android fallbacks may use a denser solid fill when real-time blur is too expensive.
- Never animate a large full-screen blur continuously.

## Borders

Borders are quiet structural tools.

### Border Tokens

| Token | Value | Usage |
|---|---:|---|
| `border.subtle` | `rgba(245, 242, 255, 0.08)` | Gentle grouping |
| `border.default` | `rgba(245, 242, 255, 0.12)` | Standard surface edge |
| `border.strong` | `rgba(245, 242, 255, 0.20)` | Focused or temporary separation |
| `border.interactive` | `rgba(139, 124, 246, 0.48)` | Selected routine control |
| `border.significant` | `rgba(255, 196, 107, 0.56)` | Earned astronomical significance |

### Border Rules

- Default width: `1 pt`.
- Hairlines may use the platform's physical-pixel width.
- Borders should normally appear on only the edge that needs definition.
- A strong border must not surround every card in a list.
- Gold borders are reserved for meaningful astronomical focus.
- Selected states must not depend on a border color alone.

## Dividers

Dividers are used inside a coherent group, not between unrelated sections.

Use:

- a low-contrast hairline
- inset alignment matching the content
- adequate space above and below
- fewer dividers when spacing already communicates grouping

Avoid:

- edge-to-edge separators in soft card groups
- a divider after every short row
- bright white lines
- decorative dashed lines that resemble telemetry

## Shadows

Vesper uses shadows sparingly because the product is already dark.

Shadows communicate elevation only when overlap makes that elevation necessary.

### Shadow Tokens

| Token | Suggested treatment | Usage |
|---|---|---|
| `shadow.none` | None | Most daily surfaces |
| `shadow.low` | `0 4 16 rgba(0,0,0,0.20)` | Compact floating control |
| `shadow.medium` | `0 12 32 rgba(0,0,0,0.28)` | Sheet or menu |
| `shadow.high` | `0 20 56 rgba(0,0,0,0.36)` | Dialog or ceremonial overlay |

### Shadow Rules

- Use one shadow per elevated surface.
- Do not add a visible shadow to cards resting directly on the canvas unless overlap requires it.
- Avoid colored shadows for routine components.
- A sheet may use shadow, a top border, or luminance separation; it rarely needs all three.
- Platform shadows should be visually matched rather than numerically identical.

## Glow

Glow is a signal, not a material.

It communicates:

- visibility now
- astronomical significance
- active focus
- a real light source
- an earned completion moment

### Glow Tokens

| Token | Source | Intended use |
|---|---|---|
| `glow.violetSoft` | Twilight Violet | Routine focus or selection |
| `glow.goldSoft` | Venus Gold | Significant object or best window |
| `glow.emberSoft` | Horizon Ember | Solar or eclipse event |
| `glow.starlightSoft` | Starlight | Rare neutral luminosity |

### Glow Geometry

A glow should:

- originate from the meaningful object or boundary
- fade broadly without a hard outer edge
- remain lower contrast than the object producing it
- occupy less visual attention than primary text

### Glow Limits

For daily screens:

- one strong glow at most
- additional glows must be faint and subordinate
- text does not receive outer glow
- every button does not glow
- glow does not replace accessible selection treatment
- continuous pulsing is prohibited for routine states

## Horizon Light

Horizon light is a signature atmospheric material.

It may appear as:

- a narrow warm source at the base of a hero
- a subtle boundary between sky conditions and content
- a rise/set transition
- eclipse contact illumination
- an empty-state horizon

### Horizon Rules

- Keep the source distant.
- Preserve a dark majority of the screen.
- Avoid a repeated bright horizon on every tab.
- Warm light belongs to a real solar, twilight, or significant-event context.
- The horizon must not reduce navigation or text contrast.
- Daily horizons are static or nearly static.

## Scrims

Scrims reduce competition from content beneath an overlay.

### Scrim Tokens

| Token | Value | Usage |
|---|---:|---|
| `scrim.light` | `rgba(5, 7, 16, 0.40)` | Menu or compact overlay |
| `scrim.standard` | `rgba(5, 7, 16, 0.64)` | Sheet or modal |
| `scrim.strong` | `rgba(5, 7, 16, 0.78)` | Safety dialog or focused takeover |

### Scrim Rules

- The underlying screen should remain recognizable unless the interruption is safety-critical.
- Scrims do not blur by default.
- Tapping the scrim dismisses only when dismissal is safe and expected.
- Avoid transparent overlays that leave two competing reading planes.

## Image Protection

When interface content appears over imagery, apply protection in this order:

1. move text to a quieter region
2. adjust the crop
3. add a local gradient
4. add a dark overlay
5. use a solid or translucent surface

Do not recolor every astronomical image to fit the brand palette.

### Text Protection Gradient

A text-protection gradient should:

- begin transparent
- become dark only where the text needs support
- avoid visible banding
- preserve the object's recognizable color
- remain attached to the content region rather than covering the entire image unnecessarily

## Interaction States

Every material-bearing component must define its states.

### Rest

- stable surface
- no unnecessary glow
- normal border or no border
- complete text contrast

### Pressed

- brief luminance shift
- slight scale only when appropriate
- no dramatic ripple across large atmospheric regions
- platform feedback remains recognizable

Suggested daily treatment:

- reduce surface luminance by approximately `6–10%`, or
- apply a subtle Starlight overlay of `4–8%`

### Selected

Routine selection:

- Twilight Violet tint
- clear shape, icon, or weight change
- optional interactive border

Astronomically significant selection:

- Venus Gold may appear when the selected state represents a meaningful target or event

### Focused

Keyboard and accessibility focus uses the approved focus ring.

- minimum visual thickness: `2 pt`
- separated from component edge where possible
- remains visible in both standard and red night modes

### Disabled

Disabled materials:

- reduce contrast without becoming illegible
- remove glow and elevation
- preserve the control's structure
- include semantic accessibility state
- never rely only on low opacity for safety-critical controls

### Loading

Loading states should preserve layout.

Prefer:

- quiet skeletons on solid surfaces
- local progress inside the affected component
- no full-screen shimmer over star fields
- no white flashes
- no rapidly moving gradients

## Navigation Material

Bottom navigation belongs to the daily instrument.

Preferred treatment:

- dense translucent or solid raised surface
- stable contrast
- subtle top separation
- no large floating shadow
- no central glowing action without a true product need
- safe-area continuation in the same material

The bar may preserve a controlled view of the background, but readability takes priority.

## Card Material

The default Vesper card is not a glass tile.

Preferred order:

1. surface luminance
2. spacing
3. optional subtle border
4. optional atmospheric image
5. shadow only when overlapping

### Hero Object Card

A hero celestial card may use:

- edge-to-edge object imagery
- a controlled deep gradient
- one significant glow
- raised or translucent information treatment
- a partial horizon

It may be more theatrical than standard cards, but interaction text and timing remain calm and readable.

## Sheet Material

Bottom sheets should feel close and dependable.

Use:

- `material.raised`
- strong enough opacity for reading
- top-corner radius from Layout & Geometry
- one separation treatment: shadow, border, or luminance
- no decorative star texture beneath settings or form fields

## Dialog Material

Dialogs are the clearest elevated material.

Use:

- solid or near-solid fill
- clear focus
- strong scrim
- minimal atmosphere
- direct actions
- no imagery unless essential to the decision

Safety dialogs must prioritize legibility over brand expression.

## Ceremonial Materials

Ceremonial moments may use:

- broader atmospheric gradients
- stronger horizon light
- controlled glass
- deeper overlap
- richer imagery
- more visible glow
- larger transitions between material levels

Even ceremonially:

- text remains readable
- actions remain familiar
- no effect obscures safety or time-sensitive data
- the screen returns cleanly to daily instrument mode

## Red Night Mode

Red night mode uses solid, low-luminance materials.

### Rules

- canvas is pure black where supported
- surfaces are near-black red
- blur and glass are removed
- shadows are removed or nearly invisible
- borders use the approved red hierarchy
- imagery is dimmed, converted to red monochrome, or hidden
- all transient system surfaces must avoid white flashes
- glows are minimal and red only
- no violet, gold, ember, green, or blue interface accents remain

Night mode is an operational observing tool. Brand atmosphere is secondary.

## Accessibility

- Materials must preserve WCAG AA contrast for approved text sizes.
- Transparency is validated against the brightest and darkest permitted background beneath it.
- Reduce Transparency replaces glass with solid or denser surfaces.
- Reduce Motion removes animated material transitions and pulsing glow.
- Selected, focused, warning, and disabled states remain identifiable without color alone.
- Large text must not overflow a fixed translucent container.
- Outdoor use at reduced brightness must remain legible.
- OLED black smearing and low-brightness behavior must be tested on physical devices.

## Performance

Vesper targets mid-range Android as well as iOS.

### Requirements

- avoid multiple overlapping real-time blur regions
- avoid continuously animated full-screen gradients
- avoid large alpha layers that redraw during scrolling
- prefer static precomposed atmosphere where practical
- provide solid fallbacks for blur and transparency
- test list scrolling with production imagery
- profile the hero carousel, bottom navigation, and sheets on target hardware
- avoid material effects that delay cold start or screen readiness

A beautiful material that causes dropped frames fails review.

## Implementation Tokens

Suggested TypeScript structure:

```ts
export const materials = {
  canvas: {
    backgroundColor: "#0B0E20",
  },
  inset: {
    backgroundColor: "#10152D",
  },
  surface: {
    backgroundColor: "#151B3A",
  },
  raised: {
    backgroundColor: "#1C2350",
  },
  translucent: {
    subtle: "rgba(16, 21, 45, 0.80)",
    standard: "rgba(21, 27, 58, 0.88)",
    dense: "rgba(28, 35, 80, 0.94)",
  },
} as const;

export const borders = {
  subtle: "rgba(245, 242, 255, 0.08)",
  default: "rgba(245, 242, 255, 0.12)",
  strong: "rgba(245, 242, 255, 0.20)",
  interactive: "rgba(139, 124, 246, 0.48)",
  significant: "rgba(255, 196, 107, 0.56)",
} as const;

export const blur = {
  none: 0,
  subtle: 8,
  standard: 16,
  strong: 24,
} as const;

export const scrims = {
  light: "rgba(5, 7, 16, 0.40)",
  standard: "rgba(5, 7, 16, 0.64)",
  strong: "rgba(5, 7, 16, 0.78)",
} as const;
```

Platform shadow objects should be defined separately while preserving the shared semantic names.

## Anti-Patterns

Do not:

- place glass on every card
- use blur to make weak hierarchy appear premium
- combine strong blur, bright border, glow, and shadow on one component
- give routine controls colored shadows
- place low-contrast text over unpredictable imagery
- use gold as a general material edge
- make every surface appear elevated
- animate material effects continuously during reading
- use transparent settings or article surfaces
- reproduce a fictional spacecraft console
- sacrifice frame rate for atmosphere
- allow a material to change meaning from one screen to another

## Review Checklist

- Does the material clarify hierarchy before adding atmosphere?
- Could spacing or luminance solve the problem without another effect?
- Is each surface level understandable and consistent?
- Is glass being used because the background context matters?
- Does every glow communicate focus, state, significance, or a real light source?
- Does text retain stable contrast over every permitted background?
- Does the treatment remain calm after repeated daily use?
- Does it work with Reduce Transparency and Reduce Motion?
- Does red night mode replace the effect safely?
- Does it scroll and animate smoothly on mid-range hardware?
- Could one border, shadow, blur, or glow be removed without losing meaning?
