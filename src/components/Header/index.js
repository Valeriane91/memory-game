// == Import npm
import React from 'react';

// composant Link: permet de représenter un lien (balise a) vers une autre page,
// un clic sur ce lien placera la valeur de la prop "to" dans la barre d'adresse,

// La comparaison qui est faite est "qui commence par": si URL "/memory" alors le lien de l'accueil
// est sélectionné aussi, car "/memory" commence par son URl "/"
// Pour avoir une comparaison exacte de l'URL, on ajoute la prop "exact"

import { Link } from 'react-router-dom';

import './header.scss';

// == Composant

const Header = () => (
  <header className="header">
    <nav>
      <Link
        className="header-link header-link--selected"
        to="/"
        exact
      >
        Accueil
      </Link>
      <Link
        className="header-link"
        to="/memory"
      >
        Memory
      </Link>
      <Link
        className="header-link"
        to="/result"
      >
        Resultat
      </Link>
    </nav>
    <h1 className="title">MEMORIZ</h1>
    <h2 className="slogan">Memory des couleurs en anglais</h2>
  </header>
);

// == Export
export default Header;
