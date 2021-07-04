import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../actions/weather'

const Weather = ({ data, getWeather, ...props }) => {
  useEffect(() => {
    getWeather('Nagoya')
  }, [])
  return (
    <>
      {data &&
        <div className={`weather-card rounded-xl w-full p-5 h-fit-content ${data.weather && data.weather[0].icon.slice(-1) === 'd' ? 'bg-white' : 'bg-black text-white'}`}>
          <h3 className="text-center font-bold font-xl mb-5">{data.name}, {data.sys && data.sys.country}</h3>
          <h2 className="font-semi text-5xl text-center">{data.main && Math.round(data.main.temp)}&#8451;</h2>
          <div className="weather flex wrap justify-center p-5">
            {data.weather && data.weather.map((weatherState, index) =>
              <div className="rounded-md p-2" key={index}>
                <h4 className="title text-center font-medium">{weatherState.main}</h4>
                <img alt={weatherState.description} src={`/weather-svg/${weatherState.icon}.svg`} />
              </div>)
            }
          </div>
        </div>}
    </>
  )
}

const mapStateToProps = state => {
  return {
    // weather.weather seemed confusing, so I renamed it as data
    data: state.weather,
    cities: state.cities
  }
}

const mapDispatchToProps = {
  getWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
