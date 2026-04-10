// =========================================
//  UI: RESPONSIVE BACKGROUND IMAGE
// =========================================
const header = document.getElementById("header");

function updateHeaderBg() {
  const isMobile = window.innerWidth < 768;
  header.style.backgroundImage = isMobile
    ? "url('./images/pattern-bg-mobile.png')"
    : "url('./images/pattern-bg-desktop.png')";
}
updateHeaderBg();
window.addEventListener("resize", updateHeaderBg);

// =========================================
//  UI: LEAFLET MAP INITIALIZATION
// =========================================
const map = L.map("map", {
  zoomControl: true,
  scrollWheelZoom: true,
}).setView([43.7384, 7.4246], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Custom marker icon using the provided SVG
const locationIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
  popupAnchor: [0, -56],
});

// Demo marker so the map isn't empty
L.marker([43.7384, 7.4246], { icon: locationIcon }).addTo(map);

// Fix Leaflet map rendering after layout paint
setTimeout(() => map.invalidateSize(), 200);

// =========================================
//  TODO: YOUR CORE FUNCTIONALITY GOES BELOW
// =========================================

const apikey = "at_ItmlV6nok7Dmq65ETScPBUha4QQt1&ipAddress=8.8.8.8";
const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apikey}`;
