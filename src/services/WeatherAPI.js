import axios from 'axios';

class WeatherAPI {
  constructor() {
    this.url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.VUE_APP_WEATHER_API_KEY}`
  }
  refreshWeatherData() {
    return new Promise((resolve, reject) => {
      axios.get(this.url).then((resp) => {
        resolve(resp.data);
      }).catch((error) => {
        reject(error);
      });
    })
  }
}

export default WeatherAPI;