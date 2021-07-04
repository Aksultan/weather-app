import { DELETE_CITY, SET_CITY } from '../types'

const getCityIdByName = async (cityName) => {
  return await fetch('./city.list.min.json').then(res => res.json()).then(json => {
    const index = json.findIndex(x => x.name === cityName)
    if (index >= 0) { return json[index].id } else return -1
  })
}

export const setCity = (cityName) => async (dispatch) => {
  let id = null
  await getCityIdByName(cityName).then(res => {
    if (res >= 0) id = res
  })
  if (!id || !cityName) return
  return await dispatch(({
    type: SET_CITY,
    city: { name: cityName, id }
  }))
}

export const deleteCity = (id) => ({
  type: DELETE_CITY,
  id
})
