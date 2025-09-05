import React from 'react'

const WeatherCard = ({city,weather}) => {
  return (
    <div>
        <h2>{city}</h2>
        <h2>{weather}</h2>
    </div>
  )
}

export default WeatherCard