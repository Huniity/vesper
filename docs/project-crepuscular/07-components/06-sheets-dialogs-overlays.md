# Sheets, Dialogs, and Overlays

**Status:** Approved  
**Version:** 1.0

## Purpose

Temporary surfaces should interrupt only as much as the decision requires.

## Bottom Sheets

Use for:

- filters
- location selection
- event details
- observation controls
- compact planning tasks

### Rules

- support content-driven height
- remain above the home indicator
- use a clear drag affordance when draggable
- preserve underlying context
- provide explicit close when dismissal is not obvious
- avoid stacking more than one sheet

## Full-Screen Sheet

Use when:

- the task requires substantial reading
- several controls must remain visible
- navigation depth is temporary
- the user should return to the original context afterward

## Dialog

Use for:

- destructive confirmation
- safety acknowledgement
- small blocking choice
- permission explanation

Dialogs should not host long reading or complex settings.

## Menu

Use for a short contextual choice.

Menus must:

- anchor clearly
- avoid covering the selected object when possible
- close after selection
- remain keyboard and screen-reader accessible

## Tooltip

Use sparingly for unfamiliar scientific terms or icons.

Tooltips are supplemental. They cannot contain required instructions.

## Scrim and Dismissal

- tapping outside dismisses only when safe
- back gesture and system back behave predictably
- destructive dialogs require an explicit action
- focus is trapped while a modal is active
- focus returns to the invoking element on close

## Accessibility

- modal role is announced
- title is first in reading order
- dismissal action is discoverable
- sheet height does not trap large text
- keyboard does not obscure required controls
- reduced motion uses simple appearance

## Anti-Patterns

Do not:

- use dialogs as article pages
- open a sheet from another sheet
- hide essential dismissal
- use glass for safety dialogs
- place multiple primary actions in one small dialog
- animate overlays dramatically
