import { combineReducers } from 'redux'
import weather from './reducers/weather'
import cities from './reducers/cities'

export default combineReducers({
  weather,
  cities
})
