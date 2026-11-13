import test from "node:test";
import assert from "node:assert";
import { ROOMS } from "../src/rooms.js";
import { checkAvailability } from "../src/availability.js";

test("AC5 checking availability does not change booking data", () => {
  const before = JSON.stringify(ROOMS);
  ROOMS.forEach(r => checkAvailability(r, 540, 600));
  assert.equal(JSON.stringify(ROOMS), before);
});

test("F3 blocked room is never reported available", () => {
  const blocked = ROOMS.find(r => r.blocked);
  assert.equal(checkAvailability(blocked, 540, 600).ok, false);
});