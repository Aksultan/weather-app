import { connect } from 'react-redux'
import { setCity, deleteCity } from '../../actions/cities'
const Config = ({ cities, setCity, deleteCity, isVisible, ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    e.target[0].value = ''
  }
  const handleClick = (id) => {
    deleteCity(id)
  }
  return (
    <div className={`bg-white flex flex-col justify-between absolute p-5 top-0 z-10 duration-700 h-auto w-full ${isVisible ? 'right-0 opacity-100' : '-right-full opacity-0'}`}>
      <h3>Settings</h3>
      <ul>
        {cities && cities.map((city, index) =>
          <li className="relative my-5 pl-8" draggable="true" key={index}>
            <span className="absolute cursor-pointer top-0 left-0">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </span>
            {city.name}
            <span className="absolute cursor-pointer top-0 right-0" onClick={() => handleClick(index)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
              </svg>
            </span>
          </li>
        )}
      </ul>
      <form action="post" className="flex justify-center" onSubmit={(e) => handleSubmit(e)}>
        <input className="pr-2 focus:outline-none" placeholder="Enter city name" type="text"/>
        <button type="submit">Add city</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cities: state.cities.cities
})

const mapDispatchToProps = {
  setCity,
  deleteCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
