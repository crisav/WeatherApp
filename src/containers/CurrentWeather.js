import React from 'react';
import '../assets/styles/containers/CurrentWeather.scss';

export const CurrentWeather = ({ temperature = 300.15, image }) => {

  const KELVIN_TO_CELCIUS = 273.15;

  return (
    <section className="currentweather">

      <div className="currentweather__img">
        <h2><i className="fas fa-map-marker-alt"></i> Bogotá </h2>
      </div>

      <div className="currentweather__data">

        <div className="currentweather__data--temperature">
          <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} />
        </div>
        <h3>{temperature - KELVIN_TO_CELCIUS}° C</h3>

      </div>
      
    </section>
  )
}
