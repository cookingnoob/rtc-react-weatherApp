import React, { useState } from 'react'

const useLocation = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  function success(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }
  function error() {
    setTexto('No se pudo obtener tu ubicación')
  }

  if (!navigator.geolocation) {
    setTexto('Tu navegador no tiene soporte para la geolocalización')
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return { latitude, longitude };
}

export default useLocation;