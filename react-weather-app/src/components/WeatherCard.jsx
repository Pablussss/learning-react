import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";

export function WeatherCard() {
  const { weather } = useContext(WeatherContext);

  console.log(weather);
  return <div></div>;
}
