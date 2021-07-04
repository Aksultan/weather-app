import { GET_WEATHER, GET_ALL_WEATHER, SET_WEATHER } from '../types'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return action.payload
    case GET_WEATHER:
      return state
    case GET_ALL_WEATHER:
      return state
    default:
      return state
  }
}
