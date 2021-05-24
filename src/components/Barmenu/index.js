// création d'un composant carte comme modèle de carte

import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Button, Icon, Menu, Sidebar,
} from 'semantic-ui-react';

// == Composant

const Barmenu = ({ restartGame, setNiveau, isPaused, isActive }) => (
  <div>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="wide"
    >
      <Menu.Item as="a">
        <Icon name="repeat" />
        <Button
          color="blue"
          size="massive"
          className="resetBtn"
          onClick={() => restartGame()}
          isPaused={isPaused}
          isActive={isActive}
        >
          RECOMMENCER
        </Button>
      </Menu.Item>
      <Menu.Item as="a">
        CHOIX DU NOMBRE DE CARTES
      </Menu.Item>

      <Menu.Item as="a">
        <Button color="olive" size="massive" onClick={() => setNiveau(3)}>6 CARTES</Button>
      </Menu.Item>
      <Menu.Item as="a">
        <Button color="pink" size="massive" onClick={() => setNiveau(6)}>12 CARTES</Button>
      </Menu.Item>
      <Menu.Item as="a">
        <Button color="purple" size="massive" onClick={() => setNiveau(9)}>18 CARTES</Button>
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="add" />
      </Menu.Item>
      <Menu.Item as="a">
        <Button color="red" size="massive">IMAGES/ MOTS</Button>
      </Menu.Item>
    </Sidebar>
  </div>
);

// == Export
export default Barmenu;
