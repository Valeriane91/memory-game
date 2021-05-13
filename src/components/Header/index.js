// == Import npm
import React from 'react';

// ==Import
import './header.scss';

// == Composant

const Header = () => (
  <header className="header">
    <nav>
      <a className="header-link header-link--selected" href="/">Accueil</a>
      <a className="menu-link" href="/memory">Memory</a>
      <a className="menu-link" href="/resultat">Resultat</a>
    </nav>
    <h1 className="title">MEMORIZ</h1>
    <h2 className="slogan">Memory des couleurs en anglais</h2>
  </header>
);

// == Export
export default Header;
