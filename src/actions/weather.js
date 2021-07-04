import api from '../api'
import { SET_WEATHER } from '../types'

export const setWeather = (data) => ({
  type: SET_WEATHER,
  payload: data
})

export const getAllWeather = (cityNames) => (dispatch) => {
  const cityNamesParsed = cityNames?.map(city => city.id).join(',') || 1850147
  console.log(cityNamesParsed)
  return api.weather.getAllWeather(cityNamesParsed).then(res => {
    dispatch(setWeather(res))
  }).catch(err => console.error(err))
}

export const getWeather = (cityName) => (dispatch) => {
  return api.weather.getWeather(cityName).then((res) => {
    dispatch(setWeather(res))
  }).catch(err => console.log(err))
}
