import React, { useState, useEffect } from 'react'
import { WeatherDay } from './WeatherDay'

export const City = ({city}) => {

  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},fr&appid=5d96aee95530c282c262bdf38d259718`;

  useEffect(() => {
    fetch(url)
      .then( response => response.json())
      .then( data => setWeather(data) );
  }, []);

  return (
    <>
      {
        (!weather.main) 
          ? <p>LOADING...</p> 
          : ( <WeatherDay 
            title={city}
            subtitle={weather.weather[0].main}
            image={weather.weather[0].icon}
            temperature={weather.main.temp}
          /> )
      }
    </>  
  )
}
