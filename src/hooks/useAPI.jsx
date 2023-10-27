import React, { useEffect, useState } from 'react'

const useAPI = ({ url }) => {
  const [localWeatherData, setLocalWeatherData] = useState(null);
  const [texto, setTexto] = useState('Obteniendo tu ubicación');
  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';

  useEffect(() => {
    async function success(position) {
      let endPoint;
      if (url === 'https://api.openweathermap.org/data/2.5/weather?' || url === 'http://api.openweathermap.org/data/2.5/forecast?') {
        endPoint = `${url}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`
      }
      try {
        const response = await fetch(endPoint);
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
      navigator.geolocation.getCurrentPosition(success, error);
    }

  }, [])
  return (
    { localWeatherData, texto }
  )
}

export default useAPI