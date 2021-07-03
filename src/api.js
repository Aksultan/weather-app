import axios from 'axios'
import { API_KEY } from './config'
const BASE_URL = 'api.openweathermap.org/data/2.5/weather'

export default {
  weather: {
    getWeather: (cityName) => {
      axios
        .get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=en`)
        .then((res) => {
          if (res && res.data) return res.data
        })
        .catch((err) => console.error(err))
    }
  }
}
