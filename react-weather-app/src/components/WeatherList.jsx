import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";
import { WeatherCard } from "./WeatherCard";

export function WeatherList() {
  const { weather } = useContext(WeatherContext);
  return (
    weather && (
      <div>
        <h1 className="text-4xl text-white text-center p-2">
          El tiempo en {weather.location.name}, {weather.location.country}
        </h1>
        <div className="flex-wrap items-center justify-center text-center sm:flex ">
          {weather.forecast.forecastday.map((day) => (
            <WeatherCard dayWeather={day} />
          ))}
        </div>
      </div>
    )
  );
}
