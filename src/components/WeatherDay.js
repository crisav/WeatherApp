import React from 'react';
import '../assets/styles/components/WeatherDay.scss';;

export const WeatherDay = ({ 
  title = 'Friday',
  subtitle = 'Sun',
  temperature,
  max,
  min,
  image = '03d'
}) => {
  
  const KELVIN_TO_CELCIUS = 273.15;

  return (
    <div className="weatherday" >
      <div className="weatherday__day">
        <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} />
        <p>
          <span className="bold">{title}</span><br />
          <span className="thin">{subtitle}</span>
        </p>
      </div>
      <div className="weatherday__data">
        { (temperature) 
          ? <p>{ Math.floor(temperature - KELVIN_TO_CELCIUS) }°</p> 
          : <p>{ Math.floor(max - KELVIN_TO_CELCIUS) }° / { Math.floor(min - KELVIN_TO_CELCIUS) }°</p>
        }
      </div>
    </div>
  )
}
