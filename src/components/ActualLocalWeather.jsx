import React from 'react'
import useAPI from '../hooks/useAPI'
import ChangeTempColor from './ChangeTempColor'
import lluvia from '../assets/dia-lluvio.png'

const ActualLocalWeather = ({ latitude, longitude }) => {
  const { weatherData, texto } = useAPI({ url: 'https://api.openweathermap.org/data/2.5/weather?', latitude, longitude })


  return (
    <div className='mainPage'>
      {weatherData ?
        <div>
          <ChangeTempColor weather={weatherData.weather[0].main} />
          <h1>{Math.round(weatherData.main.temp)}</h1>
          <h2>{weatherData.sys.country}: {weatherData.name}</h2>
          {/* <img src={lluvia}></img> */}
          {/* <p>{weatherData.weather[0].main}</p> */}
          {/* <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} /> */}
        </div>
        :
        <p>{texto}</p>}
    </div>
  )
}

export default ActualLocalWeather

//este elemento le pasa a ChangeTempColor si esta soleado, lloviendo, nublado, nieve...
//aqui necesito el render de la zona y la temperatura