import { WeatherCard } from "./components/WeatherCard";
import { WeatherForm } from "./components/WeatherForm";
import { getWeather } from "./api/weather";
import { useEffect, useState } from "react";

export function App() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("Madrid");
  const [country, setCountry] = useState("ES");

  useEffect(() => {
    async function fetchWeather() {
      const data = await getWeather(country, city);
      setWeather(data);
    }
    fetchWeather();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await getWeather(country, city);
    setWeather(data);
  }

  if (weather)
    return (
      <div>
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Introduzca la ciudad "
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
            autoFocus
          ></input>
          <input
            placeholder="Introduzca el pais"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            value={country}
          ></input>
          <button>Obtener</button>
        </form>

        <h2>El tiempo en {weather.name}</h2>
        <ul>
          <li>Temperatura actual {weather.main.temp}</li>
          <li>Temperatura minima {weather.main.temp_min}</li>
          <li>Temperatura máxima {weather.main.temp_max}</li>
          <li>Humedad {weather.main.humidity}</li>
          <li>Descripcion {weather.weather[0].description}</li>
        </ul>
      </div>
    );
}
