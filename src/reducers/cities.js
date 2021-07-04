import { GET_CITIES, SET_CITY, DELETE_CITY } from '../types'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CITIES:
      return state
    case SET_CITY:
      return { cities: [...(state.cities || []), action.city] }
    case DELETE_CITY:
      return { cities: [...state.cities.filter((city, index) => index !== action.id)] }
    default:
      return state
  }
}
