import React from 'react'
import useAPI from '../hooks/useAPI'

const ActualLocalWeather = () => {
  const { localWeatherData, texto } = useAPI({ url: 'https://api.openweathermap.org/data/2.5/weather?' })
  return (
    <div className='mainPage'>
      {localWeatherData ?
        <div>
          <h1>{Math.round(localWeatherData.main.temp)}ºC</h1>
          <h2>{localWeatherData.sys.country}: {localWeatherData.name}
            <span><img src={`http://openweathermap.org/img/w/${localWeatherData.weather[0].icon}.png`} alt={localWeatherData.weather[0].description} /></span>
            <span><p>{localWeatherData.weather[0].description}</p></span>
          </h2>
        </div>
        :
        <p>{texto}</p>}
    </div>
  )
}

export default ActualLocalWeather