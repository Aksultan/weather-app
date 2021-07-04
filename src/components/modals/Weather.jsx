import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../actions/weather'
// import cloudy from '../../../public/weather-svg/cloudy-day-1.svg'
const Weather = ({ weather, getWeather, ...props }) => {
  useEffect(() => {
    getWeather('Токио')
    console.log(weather)
  }, [])
  return (
    <>
      {weather &&
        <div className="weather-card rounded-xl bg-black-800 w-64">
          <img alt={'/weather-svg/cloudy-day-1.svg'} src={'/weather-svg/cloudy-day-1.svg'} />
        </div>}
    </>
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
