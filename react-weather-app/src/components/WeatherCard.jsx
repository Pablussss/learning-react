export function WeatherCard({ dayWeather }) {
  return (
    <div className="bg-gray-800 text-white justify-between mb-6 rounded-lg p-6 shadow-md sm:flex sm:justify-start">
      <div className=" w-full rounded-lg sm:w-40 ">
        <h3 className="text-center">{dayWeather.date}</h3>
        <img src={dayWeather.day.condition.icon} className=""></img>
        <p>{dayWeather.day.condition.text}</p>
      </div>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5  sm:mt-0">
          <div className="mt-1 mb-1 text-lg">
            <p>Amanecer 🌅 {dayWeather.astro.sunrise}</p>
            <p>Anochecer 🌑{dayWeather.astro.sunset}</p>
          </div>
          <div className="mt-1 mb-1  text-lg">
            <p>Temperatura media {dayWeather.day.avgtemp_c}º</p>
            <p>Temperatura minima {dayWeather.day.mintemp_c}º</p>
            <p>Temperatura máxima {dayWeather.day.maxtemp_c}º</p>
          </div>
          <div className="mt-1 mb-1 text-lg">
            <p>Humedad {dayWeather.day.avghumidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
