import ActualLocalWeather from '../components/ActualLocalWeather'
import useLocation from '../hooks/useLocation'

const Home = () => {
  const { latitude, longitude, texto } = useLocation()

  return (
    <>
      {latitude && longitude ?
        <section>
          <ActualLocalWeather latitude={latitude} longitude={longitude} />
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

export default Home