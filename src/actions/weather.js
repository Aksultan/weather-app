import api from '../api'

export const getWeather = (cityName) => (dispatch) => {
  return api.weather.getWeather(cityName).then((res) => res)
}
