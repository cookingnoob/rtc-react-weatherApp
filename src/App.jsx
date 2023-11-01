import { useEffect, useState } from 'react';
import './App.css'
import ActualLocalWeather from './components/ActualLocalWeather';
import FiveDaysWeather from './components/FiveDaysWeather';


function App() {
  // const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';

  // function success(position) {
  //   const response = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`)
  //     .then(response => response.json())
  //   console.log(response)
  // }

  // function error() {
  //   console.log('no funciono')
  // }

  // const options = {
  //   timeout: 5000,
  // }

  // navigator.geolocation.getCurrentPosition(success, error, options);


  return (
    <>
      <div className="home">
        <ActualLocalWeather />
        <FiveDaysWeather />
      </div>
    </>
  )
}

export default App

//conseguir la informacion de la api
//render del la api del clima actual
//render de la api de 5 dias de distancia
