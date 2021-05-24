// création d'un composant carte comme modèle de carte

import React from 'react';

import { Header, Container } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import Card from 'src/components/Card';
// == Composant

const Memory = ({
  game,
  handleOnclick,
  coups,
  timer,
  formatTime, 

}) => (
  <div>
    <Container>
      <Header textAlign="center" className="header" color="red" as="h1">
        MEMORY DES COULEURS
        <div>
          <span>COUPS: </span>
          {coups}
        </div>

      </Header>

      <div>
        {game.board.map((card, index) => (
          <span onClick={() => handleOnclick(card, index)}>
            <Card card={card} />
          </span>
        ))}
      </div>
    </Container>
    <Container>
      <h2 className="chrono">CHRONOMETRE : {formatTime(timer)}  </h2>
    </Container>

  </div>
);

// == Export
export default Memory;
