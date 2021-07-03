import { SET_CITY } from '../types'

export const setCity = (data) => ({
  type: SET_CITY,
  city: data.city
})
