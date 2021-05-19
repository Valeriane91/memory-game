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
    this.setState({ deface: !this.state.deface });
    // console.log(`la carte est retournée ${this.state.deface}`);
  }

  render() {
    let memo;
    console.log(`coucou ${this.props.memo}`);
    if (this.state.deface) {
      memo = 'Pile';
    }
    else {
      memo = this.props.memo;
    }

    return (
      <div className="card" onClick={this.retourNer}> {memo}</div>
    );
  }
}

// == Export
export default Card;
