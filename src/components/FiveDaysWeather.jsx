import React, { useEffect, useState } from 'react'
import useAPI from '../hooks/useAPI'

const FiveDaysWeather = () => {
  const { localWeatherData, texto } = useAPI({ url: 'http://api.openweathermap.org/data/2.5/forecast?' })
  return (
    <>
      {localWeatherData ?
        <div className='fiveDaysContainer'>
          {localWeatherData.list.map(day => (
            <div key={day.dt} className='singleContainer'>
              <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
              <p>{new Date(day.dt_txt).toLocaleDateString('es-ES', { weekday: 'long' })}</p>
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



//por cada fecha crear un numero de dia, si ese dia ya existe se agrupa




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


