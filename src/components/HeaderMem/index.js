// == Import npm
import React from 'react';
import { Header } from 'semantic-ui-react';
// composant Link: permet de représenter un lien (balise a) vers une autre page,
// un clic sur ce lien placera la valeur de la prop "to" dans la barre d'adresse,

// La comparaison qui est faite est "qui commence par": si URL "/memory" alors le lien de l'accueil
// est sélectionné aussi, car "/memory" commence par son URl "/"
// Pour avoir une comparaison exacte de l'URL, on ajoute la prop "exact"

import './header.scss';

// == Composant

const HeaderMem = () => (
  <Header color="red" as='h1'> MEMORY DES COULEURS EN ANGLAIS</Header>
);

// == Export
export default HeaderMem;
