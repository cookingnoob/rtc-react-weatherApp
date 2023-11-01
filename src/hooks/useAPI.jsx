import React, { useEffect, useState } from 'react'
import useLocation from './useLocation';

const useAPI = ({ url }) => {
  const [localWeatherData, setLocalWeatherData] = useState(null);
  const [texto, setTexto] = useState('Obteniendo tu ubicación');
  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';
  const { longitude, latitude } = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        const data = await response.json()
        setLocalWeatherData(data)
        console.log(data[0].lat, data[0].lon)
      } catch {
        setTexto('No se pudo obtener información del clima')
      }
    }
    if (latitude && longitude) {
      fetchData();
    }
  }, [])
  return (
    { localWeatherData, texto }
  )
}

export default useAPI

// http://api.openweathermap.org/geo/1.0/direct?q=Madrid&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric