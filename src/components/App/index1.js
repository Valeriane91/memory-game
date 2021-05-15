// == Import npm
import React from 'react';

// composant Route : permet de faire un affichage conditionnel en fonction de l'URL de
// la barre d'adresse.
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';
import Memory from 'src/components/Memory';
import Option from 'src/components/Option';
import Result from 'src/components/Result';
import HeaderMem from 'src/components/HeaderMem';

// CSS pour les composants fournis par semantic-ui-react
import 'semantic-ui-css/semantic.min.css';

// == Composant

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      selected: false,
    };
    // this.onValueChange = this.onValueChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /** onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  } */

  onChange = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    return (
      <div className="app">
        <HeaderMem />
        <Route path="/" exact>
          <Option
            // checked={this.state.selectedOption === 'value'}
            checked={this.state.selected}
            onChange={this.onChange}
          />
        </Route>
        <Route path="/memory">
          <Memory />
        </Route>
        <Route path="/result">
          <Result />
        </Route>

      </div>
    );
  }
}
// == Export
export default App;
