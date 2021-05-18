// == Import npm
import React from 'react';
// import { Link } from 'semantic-ui-css';
// ==Import
import './option.scss';
import {
  Checkbox, Table, Form,
} from 'semantic-ui-react';

// == Composant

class Option extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      value: 'non',
    };
  }

handleChange = (e) => {
  this.setState({ value: e.target.value });
}

render() {
  const { value } = this.state;
  return (
    <div className="column">
      <div className="row1">
        <Form>
          <Table color="blue" inverted collapsing>
            <Table.Header collapsing>
              Je souhaite voir les cartes avant de jouer
            </Table.Header>
            <Table.Body className="seecard">
              <Table.Row>
                <Table.Cell collapsing>
                  <Form.Field>
                    <Checkbox
                      toggle
                      value="non"
                      checked={value === 'non'}
                      onChange={this.handleChange}
                    />
                    NON
                  </Form.Field>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Form.Field>
                    <Checkbox
                      toggle
                      value="oui"
                      checked={value === 'oui'}
                      onChange={this.handleChange}
                    />
                    OUI
                  </Form.Field>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Header className="header-table">
              Chronométrer le visionnage
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  <Form.Field>
                    <Checkbox
                      toggle
                      type="radio"
                      value="tempsc"
                      checked={value === 'tempsc'}
                      onChange={this.handleChange}
                    />
                    Temps court
                  </Form.Field>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Form.Field>
                    <Checkbox
                      toggle
                      value="tempsm"
                      checked={value === 'tempsm'}
                      onChange={this.handleChange}
                    />
                    Temps moyen
                  </Form.Field>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Form.Field>
                    <Checkbox
                      toggle
                      value="tempsl"
                      checked={value === 'tempsl'}
                      onChange={this.handleChange}
                    />
                    Temps long
                  </Form.Field>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Form.Field>
                    <Checkbox
                      toggle
                      value="boutton"
                      checked={value === 'boutton'}
                      onChange={this.handleChange}
                    />
                    Boutton
                  </Form.Field>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Form>
      </div>

      <div>
        <Form>
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
                  <Form.Field>
                    <Checkbox
                      toggle
                      value="lent"
                      checked={this.state.selectedOption === 'lent'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Table.Cell>
                <Table.Cell>Lent</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Form.Field>
                    <Checkbox
                      toggle
                      value="normal"
                      checked={this.state.selectedOption === 'normal'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Table.Cell>
                <Table.Cell>Normal</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Form.Field>
                    <Checkbox
                      toggle
                      value="rapide"
                      checked={this.state.selectedOption === 'rapide'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Table.Cell>
                <Table.Cell>Rapide</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Form>
      </div>
    </div>
  );
}
}

// == Export
export default Option;
