import { data, getData } from "../api/weather";
import { useEffect, useState, createContext, useContext } from "react";

export const WeatherContext = createContext();

export function WeatherContextProvider(props) {
  const [weather, setWeather] = useState("");
  console.log(getData("ES", "Leon"));
  return (
    <WeatherContext.Provider
      value={{
        weather: data,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
