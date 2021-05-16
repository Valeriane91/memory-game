import React from 'react';
import { Link } from 'react-router-dom';

// ==Import
import './memory.scss';
import {
  Button, Icon, Grid,
} from 'semantic-ui-react';

import Card from 'src/components/Card';
// == Composant

const Memory = ({
  list,
  visibleCards,
  setVisibleCards,
  finishedCards,
  checkCards,
}) => (

  <div className="container">
    <div className="row">
      {list.map((item, index) => (
        <Card
          key={item.id}
          onClick={() => {
            if (!finishedCards.includes(index)) {
              switch (visibleCards.length) {
                case 0:
                  setVisibleCards([index]);
                  break;
                case 1:
                  if (visibleCards[0] !== index) {
                    setVisibleCards(visibleCards.concat(index));
                    checkCards(visibleCards[0], index);
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
    <Grid.Column className="btn-start" width={8}>
      <Button
        color="grey"
        labelPosition="right"
        icon
        size="massive"
      >
        <Link to="/result">
          Start
        </Link>
        <Icon name="right arrow" />
      </Button>
    </Grid.Column>
  </div>
);

/** Grid.defaultProps = {
  list: []
}; */

// == Export
export default Memory;
