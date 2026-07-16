# Object Detail

**Status:** Draft for review  
**Version:** 0.1

## Purpose

Object Detail turns a selected celestial object into an actionable observation plan.

It should answer:

- Can I see it?
- When?
- Where?
- With what equipment?
- What am I looking at?

## Entry

The selected object should preserve continuity from Tonight, Calendar, search, or an alert.

Maintain:

- image or illustration
- name
- selected time
- location
- ranking context where relevant

## Structure

Recommended order:

1. object identity and current status
2. visibility and best window
3. direction and altitude
4. Night Ruler or rise/set arc
5. conditions
6. equipment guidance
7. short explanation
8. alert and observation actions
9. sources or data notes where relevant

## Identity

Show:

- common localized name
- scientific name where useful
- object type
- realistic image or illustration
- current visibility status

Avoid encyclopedic metadata before the observation answer.

## Visibility

Use direct language:

- Visible now
- Rises at 22:14
- Best between 23:10 and 00:25
- Below the horizon tonight
- Too close to the Sun to observe safely

## Direction

Provide:

- cardinal direction
- azimuth
- altitude
- orientation aid
- text fallback

Do not imply phone-compass precision beyond the device's reliability.

## Equipment

State the minimum useful tier:

- naked eye
- binoculars
- telescope

Offer practical guidance without turning the page into a purchasing guide.

## Explanation

Write so the user can retell the object in one sentence.

Structure:

1. scientific fact
2. why it is interesting tonight
3. optional poetic closing line

## Actions

Possible:

- Set alert
- Add to calendar
- Log observation
- Share
- Open compass

Only one action should dominate.

## Unavailable State

If the object cannot be observed:

- say why
- show the next opportunity
- preserve learning content
- do not disguise the result
- do not use urgent alert styling

## Accessibility

- imagery has useful descriptions
- arc and compass have text equivalents
- time and direction are announced clearly
- object names are not truncated unnecessarily
- technical terms are defined on demand

## Anti-Patterns

Do not:

- begin with an encyclopedia article
- hide visibility below a large image
- use fantasy imagery that changes object identity
- imply false compass precision
- show coordinates without interpretation for beginners
