import { useState } from 'react'
import ActualLocalWeather from '../components/ActualLocalWeather';
import FiveDaysWeather from '../components/FiveDaysWeather';
import Select from '../components/Select';
import useSelectLocation from '../hooks/useSelectLocation';

const SelectedCities = () => {
  const [city, setCity] = useState('Madrid')
  const { latitude, longitude } = useSelectLocation({ city })
  return (
    <>
      <Select setCity={setCity} />
      {latitude && longitude ?
        <>
          <ActualLocalWeather latitude={latitude} longitude={longitude} />
        </> :
        <p>Cargando información...</p>}
    </>
  )
}

export default SelectedCities