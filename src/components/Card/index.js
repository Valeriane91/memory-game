// création d'un composant carte comme modèle de carte

import React from 'react';
// import { Link } from 'react-router-dom';
import './card.scss';

// = Import
class Card extends React.Component {
   constructor(props) {
   super(props);
     this.state = {

     //le retournement de cartes différentes se fait par rapport au board
     //je fais donc remonter les données de card dans Memory et je les passes en props à Card

     // deface: false,
    deface: props.deface,
   };
   } /**
  console.log(`hello ${props.deface}`);
  pour avoir accès au state de setState on bind la la fonction

   this.retourNer = this.retourNer.bind(this);

  Je fais remonter la méthode retourNer dans le board je l'enverrai en props a Card
   retourNer() {
    this.setState({ deface: !this.state.deface });
   console.log(`la carte est retournée ${this.state.deface}`);
  } */

  render() {
    let memo;
    // console.log(`coucou ${this.props.memo}`);
    if (this.props.deface) {
      memo = this.props.memo;
    }
    else {
      memo = 'Pile';
    }
    return (
      <div
        onClick={this.props.retourNer}
        className={`card ${this.props.deface ? 'deface' : ''}`}
      > {memo}
      </div>
    );
  }
}

// == Export
export default Card;
