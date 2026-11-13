# Task 01: Codebase analysis

## Repository map (initial version)
- initial/index.html: whole app in one file (HTML form + script)
  - toMin(): converts "HH:MM" to minutes
  - check(): reads the form, validates time, checks blocked/overlap, shows the message
  - room: one hardcoded room object with its bookings

## Maintainability risks
1. check() in initial/index.html mixes four responsibilities: reading the DOM, validating time, applying availability rules and rendering the result.
2. Room data and bookings are hardcoded in the same script as the logic, and there is only one room, so adding rooms would require editing check().
3. The 120-minute limit and the overlap rule are inline inside check(), so they cannot be tested without a browser. The initial version had 0 tests.

## Prioritized improvement plan
1. Record the baseline: the initial version has 0 automated tests.
2. Extract data into src/rooms.js (room catalog).
3. Extract rules into src/availability.js (validateTime, overlaps, checkAvailability).
4. Add src/filters.js for capacity and equipment filtering.
5. Keep the UI in src/ui.js, calling only the modules above.
6. Add tests for AC1-AC5 and F1-F5, then run them.

## AI suggestion I rejected or modified
The AI gave me the file layout, but my first attempt pasted the new interface code into initial/index.html instead of a new index.html in the project root, which overwrote the initial version. I noticed the file was marked "M" (modified) in Git, restored it with `git checkout -- initial/index.html`, and created a separate root index.html. The initial version is now untouched.