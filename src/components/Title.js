import React from 'react';
import '../assets/styles/components/Title.scss';

export const Title = ({ title = 'title', subtitle = 'subtitle' }) => {
  return (
    <h2 className="title">
      <span className="title__bold">{title} </span> 
      <span className="title__thin">{subtitle}</span>
    </h2>
  )
}
