import React, { useEffect, useState } from 'react'
import useAPI from '../hooks/useAPI'

const SelectLoc = () => {
  const [city, setCity] = useState('Madrid')
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    const getCityLocation = async () => {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric`)
      const data = await response.json()
      console.log(data)
      setLatitude(data[0].lat)
      setLongitude(data[0].lon)
    }
    getCityLocation()
  }, [city])

  const handleSelect = (event) => {
    setCity(event.target.value)
  }

  return (
    <>
      <select name="City" onChange={handleSelect}>
        <option value="Madrid">Madrid</option>
        <option value="Paris">París</option>
        <option value="Berlin">Berlín</option>
        <option value="London">Londres</option>
      </select>
    </>
  )
}

export default SelectLoc


// seleccionas Madrid, la url va a ponerlo en esta url
//http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric
// esa url retorna un objeto y hay que recuperar la latitud y longitud
//esa latitud y longitud se va a pasar a los componentes como en HomePage

