// Composant TEST
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// ==Import
import './option.scss';
import { Checkbox, Table, Button } from 'semantic-ui-react';

// == Composant

const Option = ({ onChange, checked }) => (

  <div className="column">
    <div className="row1">
      <Table color="blue" inverted collapsing>
        <Table.Header collapsing>
          Je souhaite voir les cartes avant de jouer
        </Table.Header>
        <Table.Body className="seecard">
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
              />
              NON
            </Table.Cell>
            <Table.Cell collapsing>
              <Checkbox
                toggle
              />
              OUI
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Header className="header-table">
          Chronométrer le visionnage
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
              />
              Temps court
            </Table.Cell>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
              />
              Temps moyen
            </Table.Cell>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
              />
              Temps long
            </Table.Cell>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
              />
              Boutton
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

    <div>
      <Table className="row2" color="black" inverted collapsing>
        <Table.Header collapsing>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Vitesse des cartes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                value="lent"
                checked={checked}
                onChange={onChange}
              />
            </Table.Cell>
            <Table.Cell>Lent</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                value="normal"
                checked={checked}
                onChange={onChange}
              />
            </Table.Cell>
            <Table.Cell>Normal</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                value="rapide"
                checked={checked}
                onChange={onChange}
              />
            </Table.Cell>
            <Table.Cell>Rapide</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

    <div className="row3">
      <Link to="/memory">
        <Button
          className="btn-game"
          color="purple"
          size="massive"
        > JOUER
        </Button>
      </Link>
    </div>

    <div className="row4">
      <Table color="olive" inverted collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Choix du nombre de cartes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>6 cartes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>8 cartes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>12 cartes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>16 cartes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>20 cartes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>24 cartes</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

    <div className="row5">
      <Table color="red" inverted collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Choix du memory</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>Images/Mots</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>Images/Images</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                toggle
                name="checkboxRadioGroup"
                value="this"
                onChange
              />
            </Table.Cell>
            <Table.Cell>Mots/Mots</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </div>

);

// == Export
export default Option;
