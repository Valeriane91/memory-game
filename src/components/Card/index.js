// création d'un composant carte comme modèle de carte

import React from 'react';
import ReactCardFlip from 'react-card-flip';

import './card.scss';

// == Composant
const Card = ({ card }) => (

  <div>
    <ReactCardFlip
      isFlipped={card.selected || card.matched}
      flipDirection="vertical"
    >
      <div className="backCard" />
      <img src="./color/vert.jpg" alt="color" className="frontCard" />
    </ReactCardFlip>

  </div>
);

// == Export
export default Card;

// == Composant
/** const Card = ({ card }) => (
  <div>
    <ReactCardFlip isFlipped={card.selected || card.matched} flipDirection="horizontal">
      <div className="backCard" />
      <img src="/public/color/vert.png" alt="color" className="frontCard" />
    </ReactCardFlip>
  </div>
); */
// == Export
// export default Card;

/**

const Card = ({ card }) => (
  <div
    className={`card ${card.selected || card.matched ? 'deface' : ''}`}
  />
);

 == Export
export default Card;
 const Card = ({card}) =>  {
  constructor(props) {
    super(props);
    this.state = {

      card: props.card,
    };
  }

  render() {
    return (

      <div
        className={`card ${this.props.card.selected || this.props.card.selected ? 'deface' : ''}`}
      />
    );
  }
}

// == Export
export default Card; */
