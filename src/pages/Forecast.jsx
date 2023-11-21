
import FiveDaysWeather from '../components/FiveDaysWeather'
import useLocation from '../hooks/useLocation'

const Forecast = () => {
  const { latitude, longitude, error } = useLocation()
  return (
    <>
      {latitude && longitude ?
        <section className='forecast'>
          <FiveDaysWeather latitude={latitude} longitude={longitude} />
        </section>
        :
        <>
        <p className='loadingText'>{error}</p>
        <div className="loader"></div>
        </>
        }
    </>
  )
}

export default Forecast