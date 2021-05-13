// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// ==Import
import './option.scss';

// == Composant

const Option = () => (
  <div className="option">
    <div>MEMORIZ</div>
    <div>VOIR LES CARTES</div>
    <div>NOMBRE DE CARTES</div>
    <div>VITESSE DES CARTES</div>
    <nav>
      <Link
        to="/memory"
      >
        <button className="option-btn" type="button">JOUER</button>
      </Link>

    </nav>
  </div>
);

// == Export
export default Option;
