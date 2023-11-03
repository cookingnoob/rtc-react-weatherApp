import './App.css'
import SelectLoc from './components/SelectLoc';
import Home from './pages/Home';
import SelectedCities from './pages/SelectedCities';


function App() {
  return (
    <>
      <div className="home">
        {/* <Home /> */}
        <SelectedCities />
      </div>
    </>
  )
}

export default App

//conseguir la informacion de la api
//render del la api del clima actual
//render de la api de 5 dias de distancia
