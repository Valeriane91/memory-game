// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// ==Import
import './memory.scss';
import Card from 'src/components/Card';
import { Button } from 'semantic-ui-react';
// import { Card, Button, Icon, Grid } from 'semantic-ui-react';
// == Composant

const Memory = () => {
  const colors = ['yellow', 'red', 'black',
    'green', 'grey', 'blue',
    'brown', 'orange', 'purple',
    'pink', 'white', 'cyan'];

  return (
      colors.map((color) => (
      <div className="board">
        <Card memo={color} />
        <Card memo={color} />
      </div>)
      ))
     <nav>
        <div>
          <Link
            to="/result"
          >
            <Button
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
            color="purple"
            size="massive"
            floated="left"
            content="NOUVELLE PARTIE"
          />
          </div>
          </nav>
  
  );
};
// == Export
export default Memory;
