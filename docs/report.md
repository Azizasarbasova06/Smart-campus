# Refactoring and quality report

## Before / after structure
Before: initial/index.html -> one file: data + rules + UI mixed together.

After:
  src/rooms.js -> src/availability.js -> src/filters.js -> src/ui.js
  (data)          (time + overlap rules)   (capacity/equipment)  (DOM only)
  tests/ call the first three modules directly, without a browser.

## Design decisions
1. Time is stored as minutes since midnight: comparisons are plain numbers, which avoids string-comparison mistakes.
2. One validateTime() function instead of inline checks: the rule lives in one place and has direct boundary tests (120 vs 121 minutes).
3. The UI contains no business rules: it only calls filterRooms and checkAvailability, so the rules can be tested without a browser.

## Quality comparison
| Measure | Initial | Final | How measured |
|---|---|---|---|
| Automated tests passed / total | 0 / 0 | 14 / 14 | output of `npm test`, saved in docs/test-results.txt |
| Duplicated logic locations removed | 0 | 0 | I searched initial/index.html for repeated validation or conversion code and found none; the improvement was separation of responsibilities, not removal of duplicates |
| Structure | 1 file, 1 function with all duties | 4 modules, one responsibility each | file listing |

## Remaining limitation
Room data and bookings are stored in code; bookings cannot be added at runtime, and the UI itself has no automated test (only the logic modules do).