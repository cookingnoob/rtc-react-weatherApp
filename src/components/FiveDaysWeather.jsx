import React, { useEffect, useState } from 'react'

const FiveDaysWeather = () => {
  const [localWeatherData, setLocalWeatherData] = useState(null);
  const [texto, setTexto] = useState('Obteniendo tu ubicación');

  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';

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
        <div className='fiveDaysContainer'>
          {localWeatherData.list.map(day => (
            <div key={day.dt} className='singleContainer'>
              <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
              <p>{day.dt_txt.split(' ')[1].substring(0, 2)}</p>
              <p>{Math.round(day.main.temp)}ºC</p>
            </div>
          ))
          }</div>
        : <p>{texto}</p>
      }
    </>
  )
}

export default FiveDaysWeather


// la estructura de datos es asi 0{....}, 1{...} *20
// y lo quiero cambiar a esto Lunes{ {bloque1}, {bloque2}, }, Martes { {}, {}, {} }, Miercoles...
// por cada array se crea una tira








{/* <p>Fecha UTC: {date.toUTCString()}</p> */ }

//dato original: 2023-10-25 21:00:00
// separar entre dia y hora con split(' ')
//a la fecha convertirla a dia de la semana
// tendriamos 5 dias diferentes
//si es igual empujar a un array, si es diferente crear uno nuevo
//por cada array crear un contenedor
//el nombre de la semana es el titulo, tiene 9 casillas para mostrar la info de cada 3 horas
//a la hora quitarle los ultimos 3 digitos 

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


