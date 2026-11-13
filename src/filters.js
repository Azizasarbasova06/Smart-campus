export function filterRooms(rooms, { attendees = 0, equipment = [] }) {
  return rooms.filter(r =>
    r.capacity >= attendees &&                          
    equipment.every(item => r.equipment.includes(item)) 
  );
}