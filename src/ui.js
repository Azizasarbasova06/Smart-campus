import { ROOMS } from "./rooms.js";
import { filterRooms } from "./filters.js";
import { checkAvailability, toMinutes } from "./availability.js";

const $ = id => document.getElementById(id);

function selectedEquipment() {
  return [...document.querySelectorAll(".eq input:checked")].map(i => i.value);
}

function refreshRooms() {
  const rooms = filterRooms(ROOMS, {
    attendees: Number($("attendees").value),
    equipment: selectedEquipment(),
  });
  $("room").innerHTML = rooms.map(r => `<option value="${r.id}">${r.name} (${r.capacity})</option>`).join("");
  $("empty").textContent = rooms.length ? "" : "No rooms match your requirements"; // F4
  showResult();
}

function showResult() {
  const room = ROOMS.find(r => r.id === $("room").value);
  const out = $("result");
  if (!room) { out.textContent = ""; return; }
  const res = checkAvailability(room, toMinutes($("start").value), toMinutes($("end").value));
  out.textContent = res.reason;
  out.className = res.ok ? "ok" : "bad";
}

$("attendees").addEventListener("input", refreshRooms);
document.querySelectorAll(".eq input").forEach(i => i.addEventListener("change", refreshRooms));
$("room").addEventListener("change", showResult);   
$("check").addEventListener("click", showResult);
refreshRooms();