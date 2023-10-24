import React from 'react'

const ActualWeather = ({ weatherData }) => {
  return (
    <div className='mainPage'>
      {weatherData ?
        <div>
          <h1>{Math.round(weatherData.main.temp)}ºC</h1>
          <h2>{weatherData.sys.country}: {weatherData.name}
            <span><img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} /></span>
          </h2>
        </div>
        :
        <p>Necesitamos cargar tu localización para funcionar</p>}
      <button onClick={getLocation}>Obtener información</button>
    </div>
  )
}

export default ActualWeather