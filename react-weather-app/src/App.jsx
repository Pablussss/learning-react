import { WeatherList } from "./components/WeatherList";
import { WeatherForm } from "./components/WeatherForm";

export function App() {
  return (
    <main className=" bg-blue-800 min-h-screen ">
      {/* <h1 className="text-3xl mb-10 text-center font-bold text-white">
        Weather App
      </h1> */}
      <div className="container mx-auto py-8 px-5 w-auto">
        <WeatherForm />
        <WeatherList />
      </div>
    </main>
  );
}
