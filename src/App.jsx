import { useState } from 'react';
import './App.css'
import GetCoordinates from './components/GetCoordinates';
import FiveCities from './components/FiveCities';



function App() {

  return (
    <>
      <GetCoordinates />
      <FiveCities />
    </>
  )
}

export default App



//1 carga la pagina hay un mensaje de que se necesita usar la ubicación para funcionar
//2 el estado de la ubicación se guarda en el useContext porque lo utilizara mainPage y localFiveDays
//3 componente buscar ciudad tiene un input que busca zonas por nombre
// 4 componente select que muestra el clima de 5 ciudades
// 5 componente que muestra cinco dias a futuro de nuestra ubicacion

//Objetivos:
//1 Al cargar la pagina se obtiene la longitud y latidud para mostrar el clima local
//2 Se muestra el clima de 5 ciudades que yo escoja
//3 se muestra el clima de los proximos 5 dias
//4 se puede ver como sera el clima en intervalos de 3 horas de los proximos 5 dias
//5 se ve un icono de soleado, nublado, lluvioso...
//6 Se puede buscar por ciudad
//7 se carga un loader "cargando..." mientras se descargan los datos de la api
//8 si no das permiso se muestra un mensaje que es necesario activiar la geolocalizacion para que funcione el app

