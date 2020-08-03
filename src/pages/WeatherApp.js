import React, { useEffect, useState } from 'react';
import '../assets/styles/pages/WeatherApp.scss';

import { CurrentWeather } from '../containers/CurrentWeather';
import { NextWeather } from '../containers/NextWeather';
import { PlaceToVisit } from '../containers/PlaceToVisit';

export const WeatherApp = () => {

  const [weather, setWeather] = useState({});

  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=4.61&lon=-74.08&exclude=hourly&appid=5d96aee95530c282c262bdf38d259718';

  useEffect(() => {
    fetch(url)
      .then( response => response.json())
      .then( data => setWeather(data) );
  }, []);

  const nextDays = []; 

  // I extract the next 3 days to show it
  if (weather.current) {
    for (let i = 1; i <= 3; i++) {
      // operation to create a date
      const fecha = new Date(Math.floor(weather.daily[i].dt * 1000));

      nextDays.push({
        id: weather.daily[i].dt,
        day: fecha.getDay(),
        subtitle: weather.daily[i].weather[0].main,
        max: weather.daily[i].temp.max,
        min:  weather.daily[i].temp.min,
        image: weather.daily[i].weather[0].icon
      });

    }
  };

  return (
    <>
      {
        (!weather.current) ? <p>LOADING...</p> : (<div>
          <CurrentWeather temperature={weather.current.temp} image={weather.current.weather[0].icon} />
          <section className="complement">
            <NextWeather nextDays={nextDays} />
            <PlaceToVisit />
          </section>
        </div>)
      }
    </>
  )
}
