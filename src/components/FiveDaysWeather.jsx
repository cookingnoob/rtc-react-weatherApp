import React, { useEffect, useState } from 'react'

const FiveDaysWeather = () => {
  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';
  const [localWeatherData, setLocalWeatherData] = useState(null);
  const [texto, setTexto] = useState('Obteniendo tu ubicación');


  useEffect(() => {

    async function success(position) {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`);
        const data = await response.json()
        setLocalWeatherData(data)
        console.log(data)
      } catch {
        setTexto('No se pudo obtener información del clima')
      }
    }

    function error() {
      setTexto('No se pudo obtener tu ubicación')
    }

    if (!navigator.geolocation) {
      setTexto('Tu navegador no tiene soporte para la geolocalización')
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    // const whatDayIsIt = new Date('2023-10-25').toLocaleDateString('es-ES', { weekday: 'long' })
    // console.log(whatDayIsIt)
  }, [])
  return (
    <>
      {localWeatherData ?
        localWeatherData.list.map(day => (
          <div key={day.dt}>
            <p>{day.main.temp}ºC, {day.weather[0].description} <span><img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].description} /></span></p>
            <p>{day.dt_txt}</p>
          </div>
        ))
        : <p>cargando elementos || {texto}</p>
      }
    </>
  )
}

export default FiveDaysWeather


//datos para el mock:
//data.city
//sunrise : 1698150841
// sunset : 1698192465
// timezone : -21600
//data.list
//dt : 1698202800
//dt_txt : "2023-10-25 03:00:00"
//main
//temp : 20.32
//weather[0]
//description : "light rain"
//icon : "10n"
//id : 500
//main : "Rain"
//dt_txt : "2023-10-26 03:00:00"
//data.list.dt_text dt_txt: "2023-10-27 15:00:00"
//dt_txt : "2023-10-28 03:00:00"


