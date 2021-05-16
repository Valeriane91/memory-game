// == Import npm
// import React from 'react';
import React, { useState, useEffect } from 'react';
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

const axios = require('axios');
// == Composant

const App = () => {
  const [radioState, setRadioState] = useState(false);

  const handleChange = () => {
    setRadioState(!radioState);
  };

  const [newGame, setNewGame] = useState(false);
  const [list, setList] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [finishedCards, setFinishedCards] = useState([]);
  

  const checkCards = (firstIndex, secondIndex) => {
    if (
      firstIndex !== secondIndex
      && list[firstIndex].url === list[secondIndex].url
    ) {
      setFinishedCards([...finishedCards, firstIndex, secondIndex]);
    }
    else {
      setTimeout(() => {
        setVisibleCards([]);
      }, 600);
    }
  };

  useEffect(
    () => {
      axios
      // exemple API
        .get(
          'https://api.unsplash.com/search/photos/?client_id=c0c103ae0af5122685dec516d4275b6471e81c388d2ce0791c61bb8f47285d5d&query=flower&per_page=6',
        )
        .then((res) => {
          const newList = res.data.results.map((item) => ({
            id: item.id,
            url: item.urls.thumb,
            description: item.alt_description,
          }));
          setList(
            newList
              .concat(
                newList.map((item) => ({
                  ...item,
                  id: `${item.id}1`,
                })),
              )
              .sort(() => 0.5 - Math.random()),
          );
        });
    },
   [newGame],
  );

  return (

    <div className="app">
      <HeaderMem />
      <Route path="/" exact>
        <Option
    // checked={this.state.selectedOption === 'value'}
         // value={radioState}
          // onChange={(e) => {setDropdown(e.target.value)}}>
          checked={radioState}
          onChange={handleChange}

        />
      </Route>
      <Route path="/memory">
        <Memory
          list={list}
          visibleCardss={visibleCards}
          setVisibleCards={setVisibleCards}
          finishedCards={finishedCards}
          checkICards={checkCards}
        />
      </Route>
      <Route path="/result">
        <Result />
      </Route>

    </div>
  );
};

// == Export
export default App;
