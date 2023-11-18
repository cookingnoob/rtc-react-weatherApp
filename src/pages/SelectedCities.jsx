import { useState } from 'react'
import ActualLocalWeather from '../components/ActualLocalWeather';
import Select from '../components/Select';
import useSelectLocation from '../hooks/useSelectLocation';

const SelectedCities = () => {
  const [city, setCity] = useState('Madrid')
  const { latitude, longitude } = useSelectLocation({ city })
  return (
    <>
      
      {latitude && longitude ?
      <>
      <Select setCity={setCity} />
        <section>
          <ActualLocalWeather latitude={latitude} longitude={longitude} />
        </section> 
        </>
        :
        <>
        <p className='loadingText'>Texto pagina select, no es del hook</p>
        <div className="loader"></div>
        </>
        }
    </>
  )
}

export default SelectedCities