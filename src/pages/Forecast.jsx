
import FiveDaysWeather from '../components/FiveDaysWeather'
import useLocation from '../hooks/useLocation'

const Forecast = () => {
  const { latitude, longitude, texto } = useLocation()
  return (
    <>
      {latitude && longitude ?
        <section className='forecast'>
          <FiveDaysWeather latitude={latitude} longitude={longitude} />
        </section>
        :
        <>
        <p className='loadingText'>{texto}</p>
        <div className="loader"></div>
        </>
        }
    </>
  )
}

export default Forecast