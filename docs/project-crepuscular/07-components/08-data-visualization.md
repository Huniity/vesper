# Data Visualization

**Status:** Approved  
**Version:** 1.0

## Purpose

Charts and scales turn measurement into decisions.

Vesper visualizations must answer:

- What is happening?
- Is it good or bad for observation?
- When does it matter?
- What should I do?

## Principles

- prioritize interpretation over decoration
- use direct labels
- minimize legends
- show units
- show time zone context
- preserve scientific honesty
- communicate uncertainty
- support screen-reader summaries

## Color

- Twilight Violet: routine series or selected range
- Venus Gold: significant opportunity or threshold
- Horizon Ember: solar and eclipse context
- semantic utility colors: warnings and failures
- never rely on color alone

## Lines

- standard line width: `2 pt`
- selected or primary line: `3 pt`
- grid lines remain subtle
- avoid smoothing that invents false data
- gaps remain visible when readings are missing

## Axes

- label only useful intervals
- avoid unnecessary chart frames
- include units
- localize dates and times
- explain non-obvious scientific scales

## Tooltips

Tooltips show:

- exact time
- exact value
- unit
- interpretation when useful

They must remain accessible without precise motor control.

## Thresholds

Thresholds should:

- be labeled
- explain why they matter
- avoid alarmist styling
- show uncertainty where appropriate

## Charts

### Time Series

Used for:

- Kp
- Bz
- solar-wind speed
- cloud cover
- visibility score

### Arc and Radial Displays

Used for:

- altitude
- rise/set
- Moon illumination
- compass direction

Use a radial form only when spatial relationship is essential.

### Bars

Used for discrete comparison:

- nights
- object scores
- equipment fit
- cloud intervals

## Accessibility

Every chart needs:

- accessible title
- concise summary
- data-table or navigable-value alternative when practical
- non-color differentiation
- sufficient touch targets
- reduced-motion behavior

## Anti-Patterns

Do not:

- use 3D charts
- use decorative area fills that obscure values
- smooth volatile measurements excessively
- omit units
- animate every update
- use gauges where a number and threshold are clearer
- present scientific data without interpretation
