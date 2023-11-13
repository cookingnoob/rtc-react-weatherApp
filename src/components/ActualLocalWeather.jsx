import React from 'react'
import useAPI from '../hooks/useAPI'
import ChangeTempColor from './ChangeTempColor'
import lluvia from '../assets/dia-lluvio.png'

const ActualLocalWeather = ({ latitude, longitude }) => {
  const { weatherData, texto } = useAPI({ url: 'https://api.openweathermap.org/data/2.5/weather?', latitude, longitude })


  return (
    < >
      {weatherData ?
        <div className='mainPage'>
          <h1>{Math.round(weatherData.main.temp)}C</h1>
          <h2>{weatherData.sys.country}: {weatherData.name}</h2>
          <h2>{weatherData.weather[0].main}</h2>
          <ChangeTempColor weather={weatherData.weather[0].main} />
        </div>
        :
        <p>{texto}</p>}
    </>
  )
}

export default ActualLocalWeather

//este elemento le pasa a ChangeTempColor si esta soleado, lloviendo, nublado, nieve...
//aqui necesito el render de la zona y la temperatura
 {/* <img src={lluvia}></img> */}
          {/* <p>{weatherData.weather[0].main}</p> */}
          {/* <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} /> */}