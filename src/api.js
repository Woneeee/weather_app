import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "edac8cc8da810053eb34612a3dcbfe05",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ queryKey }) => {
  console.log(queryKey);
  const [weather, lat, lon] = queryKey;

  return instance
    .get(`${weather}?lat=${lat}&lon=${lon}`)
    .then((res) => res.data);
};
