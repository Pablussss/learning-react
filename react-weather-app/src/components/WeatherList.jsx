import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";
import { WeatherCard } from "./WeatherCard";

export function WeatherList() {
  const { weather } = useContext(WeatherContext);

  if (weather) {
    return (
      <div className="rounded-lg w-auto">
        {weather.forecast.forecastday.map((day) => (
          <WeatherCard dayWeather={day} key={day.length + 1} />
        ))}
      </div>
    );
  }
}
