import { useEffect, useState } from 'react'

const useAPI = ({ latitude, longitude, url }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [texto, setTexto] = useState('Obteniendo tu ubicación');

  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        const data = await response.json()
        console.log(data)
        setWeatherData(data)
      } catch (error) {
        console.log(error)
        setTexto('No se pudo obtener información del clima')
      }
    }
    fetchData()
  }, [latitude, longitude])

  return (
    { weatherData, texto }
  )
}

export default useAPI

