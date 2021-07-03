import { GET_WEATHER } from '../types'
export default (state = [], action = {}) => {
  switch (action.type) {
    case GET_WEATHER:
      return state.weather
    default:
      return state
  }
}
