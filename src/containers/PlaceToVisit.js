import React from 'react';
import '../assets/styles/containers/PlaceToVisit.scss';

import { Title } from '../components/Title';
import { City } from '../components/City';

export const PlaceToVisit = () => {

  const CITIES = ['París', 'Lyon'];

  return (
    <div className="place">
      <Title  title="Place to" subtitle="Visit" />
      <div className="place__container">
        <div className="place__container--img">
          <p><i className="fas fa-map-marker-alt"></i> Torre Eiffel, Francia </p>
        </div>
        <div className="place__container--cities">
          {
            CITIES.map( (item, index) => (
              <City
                key={index}
                city={item}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
