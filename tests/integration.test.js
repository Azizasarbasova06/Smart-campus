import test from "node:test";
import assert from "node:assert";
import { ROOMS } from "../src/rooms.js";
import { checkAvailability } from "../src/availability.js";

test("F5 availability uses the chosen room's own bookings", () => {
  const a = ROOMS.find(r => r.id === "R101");
  const b = ROOMS.find(r => r.id === "R102");
  assert.equal(checkAvailability(a, 540, 600).ok, false);
  assert.equal(checkAvailability(b, 540, 600).ok, true);
});