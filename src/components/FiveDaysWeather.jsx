import React, { useEffect, useState } from 'react'

const FiveDaysWeather = () => {
  const [localWeatherData, setLocalWeatherData] = useState(null);
  const [texto, setTexto] = useState('Obteniendo tu ubicación');
  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';

  useEffect(() => {

    async function success(position) {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`);
        const data = await response.json()
        setLocalWeatherData(data)
        console.log(data)
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
      navigator.geolocation.getCurrentPosition(success, error);
    }

  }, [])
  return (
    <>
      <h1>{texto}</h1>
    </>
  )
}

export default FiveDaysWeather


//datos para el mock:
//sunrise : 1698150841
// sunset : 1698192465
// timezone : -21600