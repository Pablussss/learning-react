export function WeatherCard({ dayWeather }) {
  function getDate() {
    const date = new Date(dayWeather.date);
    const weekDays = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];

    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const weekDay = weekDays[date.getDay()];
    const month = months[date.getMonth()];
    const diaMes = date.getDate();

    return `${weekDay}, ${diaMes} de ${month} `;
  }
  return (
    <div className="w-full px-2 py-4 m-3 mt-5 bg-gray-800 border rounded-lg border-gray-600  shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
      <h3 className="py-1 mb-1 text-2xl font-semibold  sm:text-xl text-white">
        {getDate()}
      </h3>
      <div className="flex-shrink-0">
        <h3 className="text-white text-2xl mb-2 font-bold">
          {dayWeather.day.avgtemp_c}
          {"º "}
        </h3>
        <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-gray-700 border  border-gray-500 rounded-md">
          <img src={dayWeather.day.condition.icon} className=""></img>
        </div>
        <p className="py-0.5 text-sm mb-3 font-semibold  sm:text-sm text-white">
          {dayWeather.day.condition.text}
        </p>
      </div>
      <div className="w-auto py-4 p-2 text-2xl bg-gray-700 border border-gray-500 rounded-xl m-2">
        <p className="text-blue-500 mr-4 inline font-bold">
          {dayWeather.day.mintemp_c}

          {"º "}
        </p>
        <p className="text-white ml-4 inline font-bold">
          {dayWeather.day.maxtemp_c}
          {"º "}
        </p>
      </div>
      <p className="text-white font-bold inline mr-2">{"Amanecer: "}</p>
      <p className="text-white inline ml-2">{dayWeather.astro.sunrise}</p>
      <br></br>
      <p className="text-white font-bold inline mr-2">{"Anochecer: "}</p>
      <p className="text-white inline ml-2">{dayWeather.astro.sunset}</p>
    </div>
  );
}
