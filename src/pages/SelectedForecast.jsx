import { useState } from 'react'
import FiveDaysWeather from '../components/FiveDaysWeather';
import Select from '../components/Select';
import useSelectLocation from '../hooks/useSelectLocation';

const SelectedForecast = () => {
  const [city, setCity] = useState('Madrid')
  const { latitude, longitude } = useSelectLocation({ city })
  return (
    <>
     
      {latitude && longitude ?
      <>
       <Select setCity={setCity} />
        <section className='forecast'>
          <FiveDaysWeather latitude={latitude} longitude={longitude} />
        </section> 
        </>
        :
        <>
        <p className='loadingText'>Texto pagina select, no es del hook.</p>
        <div className="loader"></div>
        </>
        }
    </>
  )
}

export default SelectedForecast