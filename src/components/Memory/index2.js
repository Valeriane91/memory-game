// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// ==Import
import './memory.scss';
import {
  Card, Button, Icon, Grid,
} from 'semantic-ui-react';
// == Composant

const src = 'https://i.goopics.net/kn9pe.jpg';

const Memory = () => (
  <div>
    <Card.Group itemsPerRow={4}>
      <Card color="red" image={src} />
      <Card color="orange" image={src} />
      <Card color="yellow" image={src} />
      <Card color="olive" image={src} />
      <Card color="green" image={src} />
      <Card color="teal" image={src} />
      <Card color="blue" image={src} />
      <Card color="violet" image={src} />
      <Card color="purple" image={src} />
      <Card color="pink" image={src} />
      <Card color="brown" image={src} />
      <Card color="grey" image={src} />
    </Card.Group>

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

// == Export
export default Memory;
