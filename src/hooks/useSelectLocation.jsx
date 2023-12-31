import { useEffect, useState } from 'react'

const useSelectLocation = ({ city }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null)

  useEffect(() => {
    const getCityLocation = async () => {
      const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric`)
      const data = await response.json()
      setLatitude(data[0].lat)
      setLongitude(data[0].lon)
    }
    getCityLocation()
  }, [city])

  return (
    { latitude, longitude }
  )
}

export default useSelectLocation