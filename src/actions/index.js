import axios from 'axios';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=89bf6c081e536d6418f58de4bb30e8cd&units=metric';

export function fetchWeather(location) {
  let encodedLocation = encodeURIComponent(location);
  let url = `${ROOT_URL}&q=${encodedLocation}`;

  return axios.get(url).then(function (res) {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {
      return res.data.main.temp;
    }
  }, function() {
    throw new Error('Unable to fetch weather');
  });
}
