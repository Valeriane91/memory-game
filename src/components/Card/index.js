// création d'un composant carte comme modèle de carte

// Import =>
import React from 'react';
import './card.scss';

const Card = ({
  imgSource,
  imgDesc,
  onClick,
  className,
}) => (

  <div className={`card ${className}`} onClick={onClick}>
    <img
      className="img-thumbnail img-fluid card-img"
      src={imgSource}
      alt={imgDesc}
    />
  </div>
);

export default Card;
