import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SelectedCities from './pages/SelectedCities.jsx'
import Forecast from './pages/Forecast.jsx'
import SelectedForecast from './pages/SelectedForecast.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='forecast' element={<Forecast />} />
          <Route path='select' element={<SelectedCities />} />
          <Route path='select-forecast' element={<SelectedForecast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
