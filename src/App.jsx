import { useEffect, useState } from 'react';
import './App.css'

import FiveDaysWeather from './components/FiveDaysWeather';
import ActualLocalWeather from './components/ActualLocalWeather';
import SelectLoc from './components/SelectLoc';


function App() {




  return (
    <>
      <div className="home">
        {/* <ActualLocalWeather />
        <FiveDaysWeather /> */}
        <SelectLoc />
      </div>
    </>
  )
}

export default App

//conseguir la informacion de la api
//render del la api del clima actual
//render de la api de 5 dias de distancia
