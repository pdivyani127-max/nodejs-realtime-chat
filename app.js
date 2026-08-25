const citySelect = document.getElementById("city");
const loadBtn = document.getElementById("loadBtn");
const weather = document.getElementById("weather");
const status = document.getElementById("status");

async function fetchWeather() {
  const [latitude, longitude, city] = citySelect.value.split(",");
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;

  status.textContent = `Fetching weather for ${city}...`;
  weather.innerHTML = "";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    const current = data.current;
    const units = data.current_units;

    weather.innerHTML = `
      <article class="weather-card">
        <span>Location</span>
        <strong>${city}</strong>
      </article>
      <article class="weather-card">
        <span>Temperature</span>
        <strong>${current.temperature_2m} ${units.temperature_2m}</strong>
      </article>
      <article class="weather-card">
        <span>Humidity</span>
        <strong>${current.relative_humidity_2m} ${units.relative_humidity_2m}</strong>
      </article>
      <article class="weather-card">
        <span>Wind Speed</span>
        <strong>${current.wind_speed_10m} ${units.wind_speed_10m}</strong>
      </article>
    `;

    status.textContent = "API response received successfully.";
  } catch (error) {
    status.textContent = "Unable to fetch weather data. Please try again.";
    console.error(error);
  }
}

loadBtn.addEventListener("click", fetchWeather);
fetchWeather();
