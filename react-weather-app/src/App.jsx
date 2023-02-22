import { WeatherList } from "./components/WeatherList";
import { WeatherForm } from "./components/WeatherForm";

export function App() {
  return (
    <main className=" bg-blue-400 antialiased min-h-screen ">
      <h1 className="text-3xl mb-10 text-center font-bold text-white">
        Weather App
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <WeatherList />

        <WeatherForm />
      </div>
    </main>
  );
}
