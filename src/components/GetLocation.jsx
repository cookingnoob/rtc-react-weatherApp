import React, { useEffect, useState } from 'react'
import ActualWeather from './ActualWeather';


const GetLocation = () => {

  const [localWeatherData, setLocalWeatherData] = useState(null);
  const [texto, setTexto] = useState('');
  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';

  useEffect(() => {

    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        const data = await response.json()
        setLocalWeatherData(data)
      } catch {
        setTexto('No se pudo obtener información del clima')
      }


    }

    function error() {
      setTexto('No se pudo obtener tu ubicación')
    }

    if (!navigator.geolocation) {
      setTexto('Tu navegador no tiene soporte para la geolocalización')
    } else {
      setTexto('Obteniendo tu ubicación...')
      navigator.geolocation.getCurrentPosition(success, error);
    }

  }, [])
  return (
    <>
      <div className='mainPage'>
        {localWeatherData ?
          <div>
            <h1>{Math.round(localWeatherData.main.temp)}ºC</h1>
            <h2>{localWeatherData.sys.country}: {localWeatherData.name}
              <span><img src={`http://openweathermap.org/img/w/${localWeatherData.weather[0].icon}.png`} alt={localWeatherData.weather[0].description} /></span>
            </h2>
          </div>
          :
          <p>{texto}</p>}
      </div>
    </>
  )
}

export default GetLocation


