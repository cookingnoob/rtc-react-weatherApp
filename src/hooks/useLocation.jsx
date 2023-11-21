import { useEffect, useState } from 'react'

const useLocation = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [error, setError] = useState(null);

  useEffect(() => {
    const success = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    };

    function error() {
      setError('No se pudo obtener tu ubicación')
    }

    if (!navigator.geolocation) {
      setError('Tu navegador no tiene soporte para la geolocalización')
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [])

  return (
    { latitude, longitude, error }
  )
}

export default useLocation