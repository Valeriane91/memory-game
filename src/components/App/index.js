// == Import npm
import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// composant Route : permet de faire un affichage conditionnel en fonction de l'URL de
// la barre d'adresse.
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';
import Memory from 'src/components/Memory';
import Option from 'src/components/Option';
import Result from 'src/components/Result';
import Header from 'src/components/Header';

// CSS pour les composants fournis par semantic-ui-react
import 'semantic-ui-css/semantic.min.css';

// == Composant

const App = () => {
  const [value, setValue] = useState('');
// créer des state par radio button 
  function setNewValue(newValue) {
    setValue(newValue);
  }
  return (
    <div className="app">
      <Header />
      <Route path="/" exact>
        <Option value={value} onRadioClick={setNewValue} />
      </Route>
      <Route path="/memory">
        <Memory />
      </Route>
      <Route path="/result">
        <Result />
      </Route>

    </div>
  );
};

// == Export
export default App;
