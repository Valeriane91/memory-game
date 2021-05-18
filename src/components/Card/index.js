// création d'un composant carte comme modèle de carte

import React from 'react';
// import { Link } from 'react-router-dom';
import './card.scss';

// = Import
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deface: false,
    };

    // pour avoir accès au state de setState on bind la la fonction

    this.retourNer = this.retourNer.bind(this);
  }

  retourNer() {
    this.setState({
      deface: !this.state.deface });
    console.log(`la carte est retournée ${this.state.deface}`);
  }

  render() {
    return (
      <div className="card" onClick={this.retourNer}> Pile</div>
    );
  }
}

// == Export
export default Card;
