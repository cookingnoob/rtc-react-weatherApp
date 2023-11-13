import React, { useEffect, useState } from 'react'
import '../App.css'
import planeta from '../assets/foto-default.png'
import soleado from '../assets/dia-soleado.png'
import lluvia from '../assets/dia-lluvio.png'
import nublado from '../assets/dia-nublado.png'
import tormenta from '../assets/tormenta.png'
import neblina from '../assets/neblina.png'
import nieve from '../assets/nieve.png'


const ChangeTempColor = ({ weather }) => {
  const [image, setImage] = useState();

  useEffect(() => {
  if(weather == 'Clear'){
    setImage(soleado)
  } else if(weather.includes('Rain')){
    setImage(lluvia)
  } else if(weather.includes('Clouds')){
    setImage(nublado)
  } else if(weather == 'Thunderstorm'){
    setImage(tormenta)
  } else if(weather == 'Mist'){
    setImage(neblina)
  } else if (weather == 'Snow'){
    setImage(nieve)
  } else {
    console.log('no funciono, el clima es:', weather)
    setImage(planeta)
  }
}, [weather]);

  return <img className='main-image' src={image}></img>

};

export default ChangeTempColor