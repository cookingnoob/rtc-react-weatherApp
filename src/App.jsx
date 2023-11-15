import { NavLink, Outlet } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <nav>
        <NavLink to="" className={'navLink'}>Home</NavLink>
        <br />
        <NavLink to="forecast" className={'navLink'}>Local Forecast</NavLink>
        <br />
        <NavLink to="select" className={'navLink'}>Select City</NavLink>
        <br />
        <NavLink to="select-forecast" className={'navLink'}>Select Forecast</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
