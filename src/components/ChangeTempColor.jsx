import React from 'react'

const ChangeTempColor = ({ temp }) => {
  console.log(temp)
  if (temp < 5) {
    console.log('helado')
  } else if (temp > 28) {
    console.log('caliente')
  } else if (temp > 20) {
    console.log('templado')
  }
  else if (temp > 10) {
    console.log('frio')
  }

  return (
    <div></div>
  )
}

export default ChangeTempColor