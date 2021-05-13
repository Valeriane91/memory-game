// == Import npm
import React from 'react';

// composant Route : permet de faire un affichage conditionnel en fonction de l'URL de
// la barre d'adresse.
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';
import Memory from 'src/components/Memory';
import Option from 'src/components/Option';
import Result from 'src/components/Result';
import Header from 'src/components/Header';
// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Route path="/" exact>
      <Option />
    </Route>
    <Route path="/memory">
      <Memory />
    </Route>
    <Route path="/result">
      <Result />
    </Route>
  </div>
);

// == Export
export default App;
