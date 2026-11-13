export function toMinutes(text) {
  const [h, m] = text.split(":");
  return Number(h) * 60 + Number(m);
}

export function validateTime(start, end) {
  if (!Number.isFinite(start) || !Number.isFinite(end)) return "Invalid time";
  if (end <= start) return "End must be after start";
  if (end - start > 120) return "Maximum 120 minutes";
  return null; // ошибок нет
}

// касание (конец = начало другой брони) НЕ считается пересечением
export function overlaps(a, b) {
  return a.start < b.end && a.end > b.start;
}

export function checkAvailability(room, start, end) {
  const error = validateTime(start, end);
  if (error) return { ok: false, reason: error };
  if (room.blocked) return { ok: false, reason: "Room is blocked" };
  const clash = room.bookings.some(b => overlaps({ start, end }, b));
  return clash
    ? { ok: false, reason: "Time overlaps a booking" }
    : { ok: true, reason: "Available" };
}