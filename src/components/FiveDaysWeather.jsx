import useAPI from '../hooks/useAPI'
import planeta from '../assets/foto-default.png'

const FiveDaysWeather = ({ latitude, longitude }) => {

  const { weatherData, texto } = useAPI({ url: 'http://api.openweathermap.org/data/2.5/forecast?', latitude, longitude })

  return (
    <>
      {weatherData ?
        <>
          <h1 className='forecastTitle'>{weatherData.city.name}</h1>
          <div className='fiveDaysContainer'>
            {weatherData.list.map(day => (
              <div key={day.dt} className='singleContainer'>
                <p>{new Date(day.dt_txt).toLocaleDateString('es-ES', { weekday: 'long' })}</p>
                <img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
                <p>{day.dt_txt.split(' ')[1].substring(0, 2)}</p>
                <p>{Math.round(day.main.temp)}C</p>
              </div>
            ))
            }
          </div>
          <img src={planeta} alt="Planeta Tierra" className='forecastImg' />
        </>
        : <p>{texto}</p>
      }
    </>
  )
}

export default FiveDaysWeather
