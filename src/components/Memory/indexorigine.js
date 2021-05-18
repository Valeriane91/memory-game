import React from 'react';
import { Link } from 'react-router-dom';
// ==Import
import { Button } from 'semantic-ui-react';
// bibliothèque qui permet d'assembler conditionnement des classes CSS
import Card from 'src/components/Card';
// La méthode includes() permet de déterminer si un tableau
// contient une valeur et renvoie true si c'est le cas, false sinon.

// == Composant

const Memory = ({
  list,
  visibleCards,
  setVisibleCards,
  finishedCards,
  checkCards,
}) => (

  <div>
    <div className="board">
      {list.map((item, index) => (
        <Card
          key={item.id}
          className={`col-3 card ${
            [visibleCards].includes(index) ? 'card-show' : ''
          } ${
            [finishedCards].includes(index)
              ? 'card-show card-finished'
              : ''
          }`}
          onClick={() => {
            if (![finishedCards].includes(index)) {
              switch ([visibleCards].length) {
                case 0:
                  setVisibleCards([index]);
                  break;
                case 1:
                  if ([visibleCards][0] !== index) {
                    setVisibleCards([visibleCards].concat([index]));
                    checkCards(visibleCards[0], [index]);
                  }
                  break;
                case 2:
                  setVisibleCards([index]);
                  break;
                default:
                  setVisibleCards([]);
              }
            }
          }}
          imgSource={item.url}
          imgDesc={item.description}
        />
      ))}
    </div>

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
  </div>
);

// == Export
export default Memory;
