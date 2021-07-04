import axios from 'axios'
import { API_KEY } from './config'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export default {
  weather: {
    getWeather: async (cityName) => {
      return await axios
        .get(`${BASE_URL}weather?q=${cityName}&appid=${API_KEY}&lang=en&units=metric`)
        .then((res) => {
          if (res && res.data) return res.data
        })
        .catch((err) => console.error(err))
    },
    getAllWeather: async (cityNames) => {
      return await axios
        .get(`${BASE_URL}group?id=${cityNames}&appid=${API_KEY}&lang=en&units=metric`)
        .then((res) => {
          if (res && res.data) return res.data
        })
        .catch((err) => console.error(err))
    }
  }
}
