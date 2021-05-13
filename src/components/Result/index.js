// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// ==Import
import './result.scss';

// == Composant

const Result = () => (
  <div className="result">
    <h1 className="bravo">BRAVO !</h1>
    <h2 className="div">
      <div>Nombre de cartes: xx</div>
      <div>Memory résusi en: xx cps</div>
      <div>Temps</div>
    </h2>
    <nav>
      <Link
        to="/"
      >
        <button className="result-btn" type="button">MENU</button>
      </Link>

      <Link
        to="/memory"
      >
        <button className="result-btn" type="button">REJOUER</button>
      </Link>
    </nav>
  </div>
);

// == Export
export default Result;
