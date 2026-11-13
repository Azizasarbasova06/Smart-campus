# AI reflection

I gave the AI assistant a short repository map, the acceptance criteria AC1-AC6
and the constraints (no login, payments, APIs or database). I asked for a
step-by-step plan instead of a full rewrite and built one module at a time.

Useful suggestions: splitting the code into data, rules, filters and UI modules;
storing time as minutes since midnight; and the boundary cases for tests (120 vs
121 minutes, touching vs overlapping intervals, exact capacity). One thing went
wrong: the instruction about where to put the new index.html was unclear, and I
pasted new code into initial/index.html, overwriting the original version. I
caught it because Git showed the file as modified and restored it.

What I verified myself: I ran `npm test` and read every result (14 of 14
passing), opened the app in the browser and tried filtering, an empty result and
room switching, and checked with Git that the initial version stayed unchanged.

Tests influenced my decisions: writing boundary tests forced me to decide that
touching intervals are allowed and that capacity uses >= instead of >. The
integration test showed that availability must use the selected room's own
bookings. I also noticed the first set of tests did not cover AC5 and F3 explicitly,
so I added two more.

Next I would store bookings outside the code, let users add bookings, and add an
automated browser test for the interface.