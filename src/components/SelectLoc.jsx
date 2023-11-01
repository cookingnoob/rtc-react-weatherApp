import React, { useState } from 'react'
import useAPI from '../hooks/useAPI'

const SelectLoc = () => {
  const [city, setCity] = useState('Madrid')
  const { localWeatherData, texto } = useAPI({ url: `http://api.openweathermap.org/geo/1.0/direct?q=Madrid&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric` })

  return (
    <>
      {/* <select name="City">
        <option value="Madrid">Madrid</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      {localWeatherData ?
        <div className='fiveDaysContainer'>
          {localWeatherData.list.map(day => (
            <div key={day.dt} className='singleContainer'>
              <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
              <p>{new Date(day.dt_txt).toLocaleDateString('es-ES', { weekday: 'long' })}</p>
              <p>{day.dt_txt.split(' ')[1].substring(0, 2)}</p>
              <p>{Math.round(day.main.temp)}ºC</p>
            </div>
          ))
          }</div>
        : <p>{texto}</p>
      } */}
    </>
  )
}

export default SelectLoc