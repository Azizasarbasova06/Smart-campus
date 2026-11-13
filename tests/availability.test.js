import test from "node:test";
import assert from "node:assert";
import { checkAvailability, validateTime } from "../src/availability.js";

const free   = { blocked: false, bookings: [] };
const booked = { blocked: false, bookings: [{ start: 600, end: 660 }] };

test("AC1 valid time is accepted", () => assert.equal(validateTime(540, 600), null));
test("AC1 end before start is rejected", () => assert.notEqual(validateTime(600, 540), null));
test("AC2 exactly 120 minutes is allowed", () => assert.equal(checkAvailability(free, 480, 600).ok, true));
test("AC2 121 minutes is rejected", () => assert.equal(checkAvailability(free, 480, 601).ok, false));
test("AC3 blocked room is not available", () =>
  assert.equal(checkAvailability({ blocked: true, bookings: [] }, 540, 600).ok, false));
test("AC4 overlapping booking is rejected", () => assert.equal(checkAvailability(booked, 630, 690).ok, false));
test("AC4 touching interval is allowed", () => assert.equal(checkAvailability(booked, 660, 720).ok, true));