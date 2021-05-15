// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Header } from 'semantic-ui-react';
// ==Import
import './result.scss';

// == Composant

const Result = () => (
  <div className="result">
    <Header width={16} color="green" as="h1">
      BRAVO !
    </Header>

    <Header as="h2">Nombre de cartes: xx</Header>
    <Header as="h2">Memory réussi en: xx cps</Header>
    <Header as="h2">Temps</Header>

    <nav>
      <div>
        <Link
          to="/memory"
        >

          <Button
            className="btn"
            labelPosition="right"
            icon="right chevron"
            color="brown"
            size="massive"
            floated="right"
            content="REJOUER"
          />
        </Link>
      </div>
      <div>
        <Link
          to="/"
        >
          <Button
            className="btn"
            labelPosition="left"
            icon="left chevron"
            color="purple"
            size="massive"
            floated="left"
            content="MENU"
          />
        </Link>
      </div>

    </nav>
  </div>
);

// == Export
export default Result;
