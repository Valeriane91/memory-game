
// création d'un composant carte comme modèle de carte

// Import =>
import React from 'react';


const Card = ({ imgSource, imgDesc, onClick }) => (

  <div className="card" onClick={onClick}>
    <img
      className="card-img"
      src={imgSource}
      alt={imgDesc}
    />
  </div>
);

export default Card;
