// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// ==Import
import './option.scss';

import { Container, Button } from 'semantic-ui-react';
// == Composant

// const Option = () => (

export default function Option(props) {
  
  const { value, onRadioClick } = props;
  // const {nnnnn} = props;

  function onRadioClicked(e) {
    onRadioClick(e.target.value);
  }

  return (
    <div>
      <Container className="voircard">
        <h3> Je souhaite voir les cartes avant de jouer</h3>
        <form>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
            onClick={onRadioClicked}
            checked={value === 'choix_1'}
          />
          OUI
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_2"
            onClick={onRadioClicked}
            checked={value === 'choix_2'}
          />
          NON
        </label>
        </form>
        <form>
        <h3>Chronométrer le visionnage</h3>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_3"
            onClick={onRadioClicked}
            checked={value === 'choix_3'}
          />
          Temps court
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_4"
            onClick={onRadioClicked}
            checked={value === 'choix_4'}
          />
          Temps moyen
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_5"
            onClick={onRadioClicked}
            checked={value === 'choix_5'}
          />
          Temps long
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_6"
            onClick={onRadioClicked}
            checked={value === 'choix_6'}
          />
          Boutton
        </label>
        </form>
      </Container>

      <Container className="speedcard">
        <h3> Vitesse des cartes</h3>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
            onClick={onRadioClicked}
            checked={value === 'choix_1'}
          />
          Lent
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_2"
            onClick={onRadioClicked}
            checked={value === 'choix_2'}
          />
          Normal
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_3"
            onClick={onRadioClicked}
            checked={value === 'choix_3'}
          />
          Rapide
        </label>
      </Container>

      <Container className="choicecard">
        <h3>Choix du nombre de cartes</h3>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_3"
            onClick={onRadioClicked}
            checked={value === 'choix_3'}
          />
          6 cartes
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
            onClick={onRadioClicked}
            checked={value === 'choix_1'}
          />
          9 cartes
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
          />
          12 cartes
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
          />
          18 cartes
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
          />
          24 cartes
        </label>
      </Container>

      <Container className="memcard">
        <h3> Choix du memory</h3>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
          />
          Images/ Mots
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
          />
          Mots/Mots
        </label>
        <label className="label">
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
          />
          Images/ Images
        </label>
      </Container>

      <Link to="/memory">
        <Button
          className="button-game"
          color="purple"
          size="massive"
        > JOUER
        </Button>
      </Link>
    </div>
  );
}
// == Exportexport default Option;
