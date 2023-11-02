import React, { useState } from 'react'
import useAPI from '../hooks/useAPI'

const SelectLoc = () => {
  const [city, setCity] = useState(null)

  const handleSelect = (event) => {
    setCity(event.target.value)
    console.log(city)
  }

  return (
    <>
      <select name="City" defaultValue={null} onChange={handleSelect}>
        <option value={null}>-</option>
        <option value="Madrid">Madrid</option>
        <option value="Paris">París</option>
        <option value="Berlin">Berlín</option>
        <option value="London">Londres</option>
      </select>
    </>
  )
}

export default SelectLoc



