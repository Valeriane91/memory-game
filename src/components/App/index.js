// == Import npm
// import React from 'react';
import React, { useState } from 'react';
// composant Route : permet de faire un affichage conditionnel en fonction de l'URL de
// la barre d'adresse.
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';
import Memory from 'src/components/Memory';
import Option from 'src/components/Option';
import Result from 'src/components/Result';
import HeaderMem from 'src/components/HeaderMem';

// CSS pour les composants fournis par semantic-ui-react
import 'semantic-ui-css/semantic.min.css';

// == Composant

const App = () => {
  const [radioState, setRadioState] = useState(false);

  const handleChange = () => {
    setRadioState(!radioState);
  };

  return (

    <div className="app">
      <HeaderMem />
      <Route path="/" exact>
        <Option
    // checked={this.state.selectedOption === 'value'}
          checked={radioState}
          onChange={handleChange}
        />
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
