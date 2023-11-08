import React, { useEffect, useState } from 'react'
import useAPI from '../hooks/useAPI'
import ChangeTempColor from './ChangeTempColor'


const FiveDaysWeather = ({ latitude, longitude }) => {

  const { weatherData, texto } = useAPI({ url: 'http://api.openweathermap.org/data/2.5/forecast?', latitude, longitude })

  return (
    <>
      {weatherData ?
        <div className='fiveDaysContainer'>
          {weatherData.list.map(day => (
            <div key={day.dt} className='singleContainer'>
              <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
              <p>{new Date(day.dt_txt).toLocaleDateString('es-ES', { weekday: 'long' })}</p>
              {/* <p>{day.dt_txt.split(' ')[1].substring(0, 2)}</p> */}
              {/* <p>{Math.round(day.main.temp)}ºC</p> */}
              <ChangeTempColor temp={Math.round(day.main.temp)} />
            </div>
          ))
          }</div>
        : <p>{texto}</p>
      }
    </>
  )
}

export default FiveDaysWeather

