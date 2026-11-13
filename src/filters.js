export function filterRooms(rooms, { attendees = 0, equipment = [] }) {
  return rooms.filter(r =>
    r.capacity >= attendees &&                          // F1
    equipment.every(item => r.equipment.includes(item)) // F2
  );
}