// script.js

let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let cityName = document.getElementById("cityName");
let temperature = document.getElementById("temperature");
let condition = document.getElementById("condition");

// Open-Meteo weather codes -> simple text (no key/signup needed for this API)
let weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  51: "Light drizzle",
  61: "Rain",
  63: "Moderate rain",
  71: "Snow",
  80: "Rain showers",
  95: "Thunderstorm"
};

async function getWeather(city) {
  cityName.textContent = "Loading...";
  temperature.textContent = "";
  condition.textContent = "";

  try {
    // Step 1: convert city name -> latitude/longitude
    let geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
    );
    if (!geoResponse.ok) {
      throw new Error("Failed to search city");
    }
    let geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      cityName.textContent = "City not found. Try again.";
      return;
    }

    let place = geoData.results[0];
    let lat = place.latitude;
    let lon = place.longitude;

    // Step 2: fetch current weather for that location
    let weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    if (!weatherResponse.ok) {
      throw new Error("Failed to fetch weather");
    }
    let weatherData = await weatherResponse.json();
    let current = weatherData.current_weather;

    // Step 3: display it
    cityName.textContent = `${place.name}, ${place.country}`;
    temperature.textContent = `${current.temperature}°C`;
    condition.textContent = weatherCodes[current.weathercode] || "Unknown conditions";

  } catch (error) {
    cityName.textContent = "Couldn't load weather. Try again.";
    console.error(error);
  }
}

searchBtn.addEventListener("click", function () {
  let city = cityInput.value.trim();
  if (city === "") return;
  getWeather(city);
});

// Optional: allow pressing "Enter" to search
cityInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
