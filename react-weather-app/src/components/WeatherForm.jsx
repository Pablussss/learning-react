import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export function WeatherForm() {
  const [city, setCity] = useState("");

  const { fetchWeather } = useContext(WeatherContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (city === "") {
      alert("Indique una ciudad");
    } else {
      fetchWeather(city);
      setCity("");
    }
  }

  return (
    <section className="max-w-4xl mx-auto overflow-hidden rounded-lg mb-5">
      <div className="flex items-center justify-center pb-6 md:py-0">
        <form onSubmit={handleSubmit} className="">
          <div className="p-1.5 overflow-hidden border rounded-lg bg-gray-800 border-gray-600 lg:flex-row ">
            <input
              className="px-6 py-2 text-white outline-none bg-gray-800 placeholder-gray-200 "
              placeholder="Ciudad a consultar"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
              autoFocus
            ></input>

            <button className="px-4 py-3 text-sm font-medium tracking-wider text-white uppercase bg-gray-700 rounded-md ">
              Obtener
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
