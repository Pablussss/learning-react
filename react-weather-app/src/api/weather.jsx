async function CallApi(url) {
  const res = await fetch(url).catch((e) => console.error(e));
  return await res.json();
}

function setUrl(country, city) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  return `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ES`;
}

export async function getWeather(country = "ES", city = "Madrid") {
  return await CallApi(setUrl(country, city));
}
