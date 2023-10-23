import React, { useEffect, useState } from 'react'

const GetCoordinates = () => {
  const API_KEY = '5a8c226189094d71c9d4cdd8e366f881';

  const [localUrl, setLocalUrl] = useState('');
  const [weatherData, setWeatherData] = useState(null)


  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocalUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    });
  };

  useEffect(() => {
    fetch(localUrl)
      .then((response) => response.json())
      .then(localData => setWeatherData(localData))
    console.log(weatherData)
    // console.log(weatherData.weather[0].icon)
  }, [localUrl])


  return (
    <>
      {weatherData ?
        <div>
          <h1>{Math.round(weatherData.main.temp)}ºC</h1>
          <img src={weatherData.weather[0].icon} alt={weatherData.weather[0].description} />
          <h2>{weatherData.sys.country}: {weatherData.name}</h2>
        </div>
        :
        <p>cargando datos...</p>}

      <button onClick={getLocation}>get data</button>
    </>
  )
}

export default GetCoordinates


//  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?${latitude}&${longitude}&appid=${API_KEY}&units=metric`

