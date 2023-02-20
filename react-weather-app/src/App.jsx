import { WeatherCard } from "./components/WeatherCard";
import { WeatherForm } from "./components/WeatherForm";

export function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm />
      <WeatherCard />
    </div>
  );
}
