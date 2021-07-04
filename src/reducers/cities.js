import { GET_CITIES, SET_CITY } from '../types'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CITIES:
      return state
    case SET_CITY:
      return { cities: [...(state.cities || []), action.city] }
    default:
      return state
  }
}
