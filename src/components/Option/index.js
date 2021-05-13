// == Import npm
import React from 'react';

// ==Import
import './option.scss';

// == Composant

const Option = () => (
  <div className="option">
    <div>MEMORIZ</div>
    <div>VOIR LES CARTES</div>
    <div>NOMBRE DE CARTES</div>
    <div>VITESSE DES CARTES</div>
    <button className="option-btn" type="button">JOUER</button>
  </div>
);

// == Export
export default Option;
