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
          <div className={`weather-card rounded-xl w-full p-5 h-fit-content ${city.weather && city.weather[0].icon.slice(-1) === 'd' ? 'bg-white' : 'bg-black text-white'}`} key={index}>
            <h3 className="text-center font-bold font-xl mb-5">{city.name}, {city.sys && city.sys.country}</h3>
            <h2 className="font-semi text-5xl text-center">{city.main && Math.round(city.main.temp)}&#8451;</h2>
            <div className="weather flex wrap justify-center p-5">
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
