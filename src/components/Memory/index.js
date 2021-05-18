// == Import npm
import React from 'react';
// ==Import
import './memory.scss';
import Card from 'src/components/Card';
import Footer from 'src/components/Footer';
// import { Card, Button, Icon, Grid } from 'semantic-ui-react';
// == Composant

const Memory = () => {
  const colors = ['yellow', 'red', 'black',
    'green', 'grey', 'blue',
    'brown', 'orange', 'purple',
    'pink', 'white', 'cyan'];

  return (
    <div>
      {colors.map((color) => (
        <div className="board">
          <Card memo={color} />
          <Card memo={color} />

        </div>
      ))}
      <div>
        <Footer />
      </div>
    </div>
  );
};
// == Export
export default Memory;
