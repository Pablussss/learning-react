import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export function WeatherForm() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setCity("");
    setCountry("");
  }
  return (
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
  );
}
