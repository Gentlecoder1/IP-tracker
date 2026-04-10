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

const apikey = "at_ItmlV6nok7Dmq65ETScPBUha4QQt1";
const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apikey}`;

const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const ipValue = document.getElementById("ip-value");
const locationValue = document.getElementById("location-value");
const timezoneValue = document.getElementById("timezone-value");
const ispValue = document.getElementById("isp-value");

const getIPData = async (queryValue) => {
  try {
    const response = await fetch(
      `${apiUrl}&ipAddress=${queryValue}&domain=${queryValue}`,
    );
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = searchInput.value;
  getIPData(value);

  console.log(value);
});

