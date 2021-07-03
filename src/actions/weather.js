import api from '../api'
import { SET_WEATHER } from '../types'
// const getCityIdByName = async (cityName) => {
//   return await fetch('./city.list.min.json').then(res => res.json()).then(json => {
//     const index = json.findIndex(x => x.name === cityName)
//     if (index >= 0) { return json[index].id } else return -1
//   })
// }
export const setWeather = (data) => ({
  type: SET_WEATHER,
  payload: data
})

export const getWeather = (cityName) => (dispatch) => {
  // getCityIdByName(cityName).then(res => res >= 0 && res)
  return api.weather.getWeather(cityName).then((res) => {
    dispatch(setWeather(res))
  }).catch(err => err)
}
