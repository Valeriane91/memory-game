// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// react-router-dom: bibliothèque qui permet d'interagir avec la barre d'adresse du navigateur
// mais sans recharger la page. Elle utilise l'API history du navigateur

// BrowserRouter doit englober toute notre application pour que le react-router-dom
// puisse gérer l'affichage en fonction de l'URL
// on importe un composant qui s'appel BrowserRouter mais on le renomme Router
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import App from 'src/components/App';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Router>
    <App />
  </Router>

);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
