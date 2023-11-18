import useAPI from '../hooks/useAPI'
import ChangeTempColor from './ChangeTempColor'

const ActualLocalWeather = ({ latitude, longitude }) => {
  const { weatherData, texto } = useAPI({ url: 'https://api.openweathermap.org/data/2.5/weather?', latitude, longitude })

  let sunRise;
  weatherData ?  sunRise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5) : 'No se pudo obtener la información'
  
  let sunSet;
  weatherData ?  sunSet = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().slice(0, 5) : 'No se pudo obtener la información'

  let today;
  weatherData ?  today = new Date(weatherData.dt * 1000).toLocaleTimeString() : 'No se pudo obtener la información'
  return (
    <div className='mainPage'>
      {weatherData ?
        <>
        
         <ChangeTempColor weather={weatherData.weather[0].main} />
         <h2>{weatherData.sys.country}: {weatherData.name}</h2>
         <div className="extra-data">
          <p>{Math.round(weatherData.main.temp)}C</p>
          <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
          <p>Amanece: {sunRise}</p>
          <p>Atardecer: {sunSet}</p>
          <p>Humedad: {weatherData.main.humidity}</p>
          </div>
        </>
        :
        <p className='loadingText'>{texto}</p>}
    </div>
  )
}

export default ActualLocalWeather
