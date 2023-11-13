import React, { useEffect, useState } from 'react'
import ActualLocalWeather from '../components/ActualLocalWeather'
import FiveDaysWeather from '../components/FiveDaysWeather'


const Home = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [texto, setTexto] = useState('cargando tu ubicación...');

  useEffect(() => {
    const success = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    };

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
      {latitude && longitude ?
        <>
        <section>
          <ActualLocalWeather latitude={latitude} longitude={longitude} />
          </section> 
        <section className='forecast'>
          <FiveDaysWeather latitude={latitude} longitude={longitude} />
          </section>
        </> :
        <p>{texto}</p>}
    </>
  )
}

export default Home