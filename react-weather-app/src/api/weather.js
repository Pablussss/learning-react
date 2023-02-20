async function CallApi(url) {
  const res = await fetch(url).catch((e) => console.error(e));
  const data = await res.json();
  return data;
}

function setUrl(country = "ES", city = "Madrid") {
  const API_KEY = import.meta.env.VITE_API_KEY;
  return `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ES`;
}

export async function getData(country, city) {
  return await CallApi(setUrl(country, city));
}

export let data = await CallApi(setUrl("ES", "Madrid"));
