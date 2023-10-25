import React from 'react'

//este componente crea un render que muestra el clima actual de la informacion que se le pasa

//7 se carga un loader "cargando..." mientras se descargan los datos de la api
//5 se ve un icono de soleado, nublado, lluvioso...
//8 si no das permiso se muestra un mensaje que es necesario activiar la geolocalizacion para que funcione el app

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
        <p>Hubo un error...</p>}
    </div>
  )
}

export default ActualWeather