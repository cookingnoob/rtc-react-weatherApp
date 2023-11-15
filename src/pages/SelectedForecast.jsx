import { useState } from 'react'
import FiveDaysWeather from '../components/FiveDaysWeather';
import Select from '../components/Select';
import useSelectLocation from '../hooks/useSelectLocation';

const SelectedForecast = () => {
  const [city, setCity] = useState('Madrid')
  const { latitude, longitude } = useSelectLocation({ city })
  return (
    <>
      <Select setCity={setCity} />
      {latitude && longitude ?
        <section className='forecast'>
          <FiveDaysWeather latitude={latitude} longitude={longitude} />
        </section> :
        <p>Cargando información...</p>}
    </>
  )
}

export default SelectedForecast