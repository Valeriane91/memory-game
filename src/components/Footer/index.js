import React from 'react';
import { Link } from 'react-router-dom';
// ==Import
import { Button } from 'semantic-ui-react';
// bibliothèque qui permet d'assembler conditionnement des classes CSS
import Card from 'src/components/Card';
// La méthode includes() permet de déterminer si un tableau
// contient une valeur et renvoie true si c'est le cas, false sinon.

// == Composant

const Footer = () => (
  <nav>
    <div>
      <Link
        to="/result"
      >
        <Button
          className="btn"
          labelPosition="right"
          icon="right chevron"
          color="grey"
          size="massive"
          floated="right"
          content="SORTIE"
        />
      </Link>
    </div>
    <div>

      <Button
        className="btn"
        color="purple"
        size="massive"
        floated="left"
        content="NOUVELLE PARTIE"
      />
    </div>
  </nav>

);

// == Export
export default Footer;
