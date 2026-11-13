export const ROOMS = [
  { id: "R101", name: "Lab A", capacity: 30, equipment: ["projector", "pc"],
    blocked: false, bookings: [{ start: 540, end: 600 }] },
  { id: "R102", name: "Seminar B", capacity: 12, equipment: ["whiteboard"],
    blocked: false, bookings: [] },
  { id: "R103", name: "Hall C", capacity: 100, equipment: ["projector", "microphone"],
    blocked: true, bookings: [] },
  { id: "R104", name: "Study D", capacity: 6, equipment: [],
    blocked: false, bookings: [{ start: 600, end: 660 }] },
];