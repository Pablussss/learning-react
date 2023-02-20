import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";

export function WeatherCard() {
  const { weather } = useContext(WeatherContext);

  console.log(weather);
  return (
    <div>
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
