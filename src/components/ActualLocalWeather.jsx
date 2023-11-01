import React from 'react'
import useAPI from '../hooks/useAPI'

const ActualLocalWeather = () => {
  const { weatherData, texto } = useAPI({ url: 'https://api.openweathermap.org/data/2.5/weather?' })

  return (
    <div className='mainPage'>
      {weatherData ?
        <div>
          <h1>{Math.round(weatherData.main.temp)}ºC</h1>
          <h2>{weatherData.sys.country}: {weatherData.name}
            <span><img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} /></span>
            <span><p>{weatherData.weather[0].description}</p></span>
          </h2>
        </div>
        :
        <p>{texto}</p>}
    </div>
  )
}

export default ActualLocalWeather