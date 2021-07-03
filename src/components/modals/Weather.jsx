import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../actions/weather'

const Weather = ({ weather, getWeather, ...props }) => {
  useEffect(() => {
    getWeather('Moscow')
    console.log(weather)
  }, [])

  return (
    <div className="weather-card">

    </div>
  )
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    cities: state.cities
  }
}

const mapDispatchToProps = {
  getWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
