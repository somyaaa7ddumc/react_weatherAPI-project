import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function searchWeather() {
  const API_KEY = "1cdcabada59cab496c9511929335382d";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();

  setWeather({
    city: data.name,
    temp: data.main.temp,
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  });
}

  return (
    <>
      <div className="container">

        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={searchWeather}>
          Search
        </button>

        {weather && (
          <div className="weather-card">

            <h2>{weather.city}</h2>

            <p>{weather.condition}</p>

            <h1>{weather.temp}°C</h1>

            <p>Humidity: {weather.humidity}%</p>

            <p>Wind: {weather.wind} km/h</p>

          </div>
        )}

      </div>
    </>
  );
}

export default App;