import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllWeather } from '../../actions/weather'

const Weather = ({ data, getAllWeather, cities, ...props }) => {
  useEffect(() => {
    getAllWeather(cities)
    console.log(data)
  }, [cities])
  return (
    <>
      {data.list &&
        data.list.map((city, index) =>
          <div className={`weather-card rounded-xl w-auto p-5 h-fit-content ${city.weather[0]?.icon.slice(-1) === 'd' ? 'bg-white' : 'bg-black text-white'}`} key={index}>
            <div className="flex flex-col justify-center">
              <h3 className="text-center font-bold text-xl mb-5 min-w-1/4">{city.name}, {city.sys?.country}</h3>
            </div>
            <div className="flex justify-center flex-row-reverse items-center gap-5 font-medium">
              <div className="flex flex-col">
                <h5>Humidity: {city.main?.humidity}%</h5>
                <h5>Wind: {city.wind?.speed} km/h</h5>
                <h5>Feels: {Math.round(city.main?.feels_like)}&#8451;</h5>
              </div>
              <h2 className="font-semi text-5xl text-center">{Math.round(city.main?.temp)}&#8451;</h2>
            </div>
            <div className="weather flex wrap justify-center p-3">
              {city.weather &&
                city.weather.map((weatherState, index) =>
                  <div className="rounded-md p-2" key={index}>
                    <h4 className="title text-center font-medium">{weatherState.main}</h4>
                    <img alt={weatherState.description} src={`/weather-svg/${weatherState.icon}.svg`} />
                  </div>)}
            </div>
          </div>)
}

    </>
  )
}

const mapStateToProps = state => {
  return {
    // weather.weather seemed confusing, so I renamed it as data
    data: state.weather,
    cities: state.cities.cities
  }
}

const mapDispatchToProps = {
  getAllWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
