async function CallApi(url) {
  console.log(url);
  const res = await fetch(url).catch((e) => console.error(e));
  return await res.json();
}

function setUrl(city, days) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  return `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=es`;
}

export async function getWeather(city = "Madrid", days = 0) {
  return await CallApi(setUrl(city, days));
}
