import React, { useEffect, useState } from 'react'

const useAPI = ({ url }) => {
  const [weatherData, setWeatherData] = useState(null);

  const [texto, setTexto] = useState('Obteniendo tu ubicación');


  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';

  useEffect(() => {

    const success = async (position) => {
      try {
        console.log(position)
        const response = await fetch(`${url}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`);

        const data = await response.json()

        setWeatherData(data)

      } catch (error) {
        console.log(error)
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
    { weatherData, texto }
  )
}

export default useAPI

// // http://api.openweathermap.org/geo/1.0/direct?q=Madrid&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric