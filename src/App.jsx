import { NavLink, Outlet } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import SelectedCities from './pages/SelectedCities';

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="" className={'navLink'}>Home</NavLink>
          <br />
          <NavLink to="select" className={'navLink'}>Selected cities</NavLink>
        </nav>
      </header>
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
