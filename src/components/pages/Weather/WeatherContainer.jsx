import { useState } from 'react'
import Weather from '../../modals/Weather'
import Config from '../../modals/Config'
const WeatherContainer = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="container bg-indigo-400 w-2/12 p-8 mx-auto rounded-sm flex flex-wrap relative gap-3 overflow-hidden">
      <Weather />
      <div className="config cursor-pointer duration-1000 transform absolute top-2 right-2 z-10 hover:rotate-90" onClick={() => setIsVisible(!isVisible)}>
        <svg className="h-5 w-5" fill="#ccc" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" fillRule="evenodd" />
        </svg>
      </div>
      <Config isVisible={isVisible}/>
    </div>
  )
}

export default WeatherContainer
