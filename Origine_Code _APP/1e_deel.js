import {
  pullFromCloud,
  saveTournamentToCloud,
  pushAllToCloud,
  clearCloudAll
} from "./cloud.js";

import {
  getToernooien,
  clearAll,
  writeCache,
  addTournament,
  updateTournament,
  deleteTournament,
  getTournamentById
} from "./store.js";

import {
  escapeHtml as esc,
  norm,
  toDisplayDate,
  todayMidnight,
  statusFromLegacyText,
  STATUS,
  statusLabel
} from "./model.js";


const APP_VERSION = "2026-05-03-v2";

console.log("=== APP START ===");

if (location.search.includes("reset")) {
  console.log("RESET gevonden in URL");

  localStorage.clear();

  console.log("localStorage gewist");
  alert("Cache gewist");
}

const savedVersion = localStorage.getItem("app_version");

console.log("Opgeslagen versie:", savedVersion);
console.log("Huidige versie:", APP_VERSION);

if (savedVersion !== APP_VERSION) {
  console.log("VERSIE VERSCHILT → CACHE RESET");

  localStorage.clear();

  localStorage.setItem("app_version", APP_VERSION);

  console.log("Nieuwe versie opgeslagen:", APP_VERSION);

  alert("App werd geüpdatet. Data opnieuw geladen.");
} else {
  console.log("Versie OK → geen reset nodig");
}