import { NavLink, Outlet } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import SelectedCities from './pages/SelectedCities';

function App() {
  return (
    <>
      <header>
        <h1>Aplicación del clima</h1>
      </header>
      <nav>
        <NavLink to="">Home</NavLink>
        <br />
        <NavLink to="select">Selected cities</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App

//conseguir la informacion de la api
//render del la api del clima actual
//render de la api de 5 dias de distancia
