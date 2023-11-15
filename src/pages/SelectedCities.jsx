import { useEffect, useState } from 'react'
import ActualLocalWeather from '../components/ActualLocalWeather';
import FiveDaysWeather from '../components/FiveDaysWeather';
import Select from '../components/Select';

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
      <Select setCity={setCity} />

      {latitude && longitude ?
        <>
          <ActualLocalWeather latitude={latitude} longitude={longitude} />
          <FiveDaysWeather latitude={latitude} longitude={longitude} />
        </> :
        <p>Cargando información...</p>}
    </>
  )
}

export default SelectedCities