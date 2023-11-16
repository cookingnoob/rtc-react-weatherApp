import useAPI from '../hooks/useAPI'
import ChangeTempColor from './ChangeTempColor'

const ActualLocalWeather = ({ latitude, longitude }) => {
  const { weatherData, texto } = useAPI({ url: 'https://api.openweathermap.org/data/2.5/weather?', latitude, longitude })

  let sunRise;
  weatherData ?  sunRise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5) : 'No se pudo obtener la información'
  
  let sunSet;
  weatherData ?  sunSet = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().slice(0, 5) : 'No se pudo obtener la información'
  return (
    <div className='mainPage'>
      {weatherData ?
        <>
          <h1>{Math.round(weatherData.main.temp)}</h1>
          <h2>{weatherData.sys.country}: {weatherData.name}</h2>
          <div className="extra-data">
            <p>Amanece: {sunRise}</p>
            <p>Atardecer: {sunSet}</p>
          </div>
          <ChangeTempColor weather={weatherData.weather[0].main} />
        </>
        :
        <p className='loadingText'>{texto}</p>}
    </div>
  )
}

export default ActualLocalWeather
