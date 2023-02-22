import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export function WeatherForm() {
  const [city, setCity] = useState("");
  const [days, setDays] = useState(0);

  const { fetchWeather } = useContext(WeatherContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (city === "") {
      alert("Indique una ciudad");
    } else {
      fetchWeather(city, days);
      setCity("");
    }
  }

  return (
    <div className=" bg-blue-800 mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-between">
          <label className="text-2xl text-left mr-3 text-white">Ciudad</label>
          <input
            className="bg-slate-300 p-1 rounded-lg max-w-max"
            placeholder="Introduzca la ciudad "
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
            autoFocus
          ></input>
        </div>
        <div className="mb-6 flex justify-between">
          <label className="text-2xl text-left mr-3 text-white">
            {" "}
            Numero de dias{" "}
          </label>
          <select
            className="rounded-lg text-lg px-2"
            onChange={(e) => {
              setDays(Number(e.target.value) + 1);
            }}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 ">
          Obtener
        </button>
      </form>
    </div>
  );
}
