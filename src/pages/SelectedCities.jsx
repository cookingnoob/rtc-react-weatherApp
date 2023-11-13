import React, { useEffect, useState } from 'react'
import ActualLocalWeather from '../components/ActualLocalWeather';
import FiveDaysWeather from '../components/FiveDaysWeather';


const SelectedCities = () => {
  const [city, setCity] = useState('Madrid')
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    const getCityLocation = async () => {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric&appid=5a8c226189094d71c9d4cdd8e366f881&units=metric`)
      const data = await response.json()
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
    <div className="selectContainer">
            <select name="City" onChange={handleSelect}>
              <option value="Madrid">Madrid</option>
              <option value="Paris">París</option>
              <option value="Berlin">Berlín</option>
              <option value="London">Londres</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Oaxaca">Oaxaca</option>
              <option value="Cairo">Cairo</option>
              <option value="Acapulco">Acapuclo</option>
            </select>
    </div>
      {latitude && longitude ?
        <>
        <section>
          <ActualLocalWeather latitude={latitude} longitude={longitude} />
          </section>
          <section className='forecast'>
          <FiveDaysWeather latitude={latitude} longitude={longitude} />
          </section>
        </> :
        <p>Cargando información...</p>}
    </>
  )
}

export default SelectedCities