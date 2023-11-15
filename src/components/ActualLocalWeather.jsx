import useAPI from '../hooks/useAPI'
import ChangeTempColor from './ChangeTempColor'

const ActualLocalWeather = ({ latitude, longitude }) => {
  const { weatherData, texto } = useAPI({ url: 'https://api.openweathermap.org/data/2.5/weather?', latitude, longitude })

  return (
    <div className='mainPage'>
      {weatherData ?
        <>
          <h1>{Math.round(weatherData.main.temp)}</h1>
          <h2>{weatherData.sys.country}: {weatherData.name}</h2>
          <ChangeTempColor weather={weatherData.weather[0].main} />
        </>
        :
        <p className='loadingText'>{texto}</p>}
    </div>
  )
}

export default ActualLocalWeather
