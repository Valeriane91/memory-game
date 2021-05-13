// == Import npm
import React from 'react';

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
    <button className="result-btn" type="button">MENU</button>
    <button className="result-btn" type="button">REJOUER</button>
  </div>
);

// == Export
export default Result;
