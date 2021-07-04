// import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCity } from '../../actions/cities'
const Config = ({ cities, setCity, isVisible, ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    e.target[0].value = ''
  }

  // useEffect(() => {
  //   console.log(cities)
  // }, [cities])

  return (
    <div className={`bg-white absolute p-5 top-0 duration-700 ${isVisible ? 'right-0 opacity-100' : '-right-full opacity-0'}`}>
      <h3>Settings</h3>
      <ul>
        {cities && cities.map((city, index) =>
          <li key={index}>
            {city.name}
          </li>
        )}
      </ul>
      <form action="post" onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Enter city name" type="text"/>
        <button type="submit">Add city</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cities: state.cities.cities
})

const mapDispatchToProps = {
  setCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
