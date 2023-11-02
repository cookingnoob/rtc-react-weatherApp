import { useEffect, useState } from 'react';
import './App.css'
import ActualLocalWeather from './components/ActualLocalWeather';
import FiveDaysWeather from './components/FiveDaysWeather';
import SelectLoc from './components/SelectLoc';
import Home from './pages/Home';


function App() {
  const [city, setCity] = useState(null)

  return (
    <>
      <div className="home">
        <Home />
      </div>
    </>
  )
}

export default App

//conseguir la informacion de la api
//render del la api del clima actual
//render de la api de 5 dias de distancia
