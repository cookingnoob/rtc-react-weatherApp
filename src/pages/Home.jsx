import React, { useEffect, useState } from 'react'
import ActualLocalWeather from '../components/ActualLocalWeather'
import FiveDaysWeather from '../components/FiveDaysWeather'
import useLocation from '../hooks/useLocation'



const Home = () => {
  const { latitude, longitude, texto } = useLocation()

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