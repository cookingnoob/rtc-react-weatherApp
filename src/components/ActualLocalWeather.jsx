import React from 'react'
import useAPI from '../hooks/useAPI'
import ChangeTempColor from './ChangeTempColor'

const ActualLocalWeather = ({ latitude, longitude }) => {
  const { weatherData, texto } = useAPI({ url: 'https://api.openweathermap.org/data/2.5/weather?', latitude, longitude })


  return (
    <div className='mainPage'>
      {weatherData ?
        <div>
          <ChangeTempColor temp={Math.round(weatherData.main.temp)} tag="h1" />
          <h2>{weatherData.sys.country}: {weatherData.name}
            <span><img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} /></span>
          </h2>

        </div>
        :
        <p>{texto}</p>}
    </div>
  )
}

export default ActualLocalWeather