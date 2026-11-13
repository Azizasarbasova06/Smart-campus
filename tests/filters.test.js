import test from "node:test";
import assert from "node:assert";
import { filterRooms } from "../src/filters.js";
import { ROOMS } from "../src/rooms.js";

test("F1 exact capacity passes", () =>
  assert.ok(filterRooms(ROOMS, { attendees: 12 }).some(r => r.id === "R102")));
test("F1 insufficient capacity fails", () =>
  assert.ok(!filterRooms(ROOMS, { attendees: 13 }).some(r => r.id === "R102")));
test("F2 requires ALL equipment", () => {
  const ids = filterRooms(ROOMS, { equipment: ["projector", "pc"] }).map(r => r.id);
  assert.deepEqual(ids, ["R101"]);
});
test("F4 no match gives empty list", () =>
  assert.equal(filterRooms(ROOMS, { attendees: 1000 }).length, 0));