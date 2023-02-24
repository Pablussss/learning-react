import { createContext, useState, useEffect } from "react";
import { getWeather } from "../api/weather";

export const WeatherContext = createContext();

export function WeatherContextProvider(props) {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather(city) {
    const data = await getWeather(city);
    console.log(data);
    if (!data.error) setWeather(data);
  }

  return (
    <WeatherContext.Provider
      value={{
        weather,
        fetchWeather,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
