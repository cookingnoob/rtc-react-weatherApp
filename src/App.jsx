import './App.css'

function App() {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
  });





  return (
    <>
      <header>
        <nav>
          <div className="searchContainer">
            <input type="text" placeholder='Busca una ciudad' />
          </div>
          <div className="navButtons">
            <button>Días</button>
            <button>Ciudades</button>
            <button>Light Mode, dark mode</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="left">
          <h1 className='mainWeatherFont'>30 C</h1>
          <span>☀️</span>
          <h3 className='mainCityFont'>Ciudad de México</h3>
        </div>
        <div className='right'>
          <ul>
            <li>
              <p>Madrid</p>
              Lunes: 5C
            </li>
            <li>
              Martes 5C
            </li>
            <li>
              Miercoles 5C
            </li>
            <li>
              Juevs 5C
            </li>
            <li>
              Viernes 5C
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default App


//Objetivos:
//1 Al cargar la pagina se obtiene la longitud y latidud para mostrar el clima local
//2 Se muestra el clima de 5 ciudades que yo escoja
//3 se muestra el clima de los proximos 5 dias
//4 se puede ver como sera el clima en intervalos de 3 horas de los proximos 5 dias
//5 se ve un icono de soleado, nublado, lluvioso...
//6 Se puede buscar por ciudad
//7 se carga un loader "cargando..." mientras se descargan los datos de la api
//8 si no das permiso se muestra un mensaje que es necesario activiar la geolocalizacion para que funcione el app

//componentes


//API key: 5a8c226189094d71c9d4cdd8e366f881
