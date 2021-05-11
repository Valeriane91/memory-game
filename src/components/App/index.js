// == Import npm
import React from 'react';

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
    <Option />
    <Memory />
    <Result />
  </div>
);

// == Export
export default App;
