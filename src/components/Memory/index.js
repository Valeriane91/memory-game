// == Import npm
import React from 'react';
// ==Import
import './memory.scss';
import Card from 'src/components/Card';
import Footer from 'src/components/Footer';
// import { Card, Button, Icon, Grid } from 'semantic-ui-react';
// == Composant

class Memory extends React.Component {
  constructor(props) {
    super(props);

    const colors = ['yellow', 'red', 'black',
      'green', 'grey', 'blue',
      'brown', 'orange', 'purple',
      'pink', 'white', 'cyan'];

    // On shuffle (mélange) les cartes
    /**
    concat() combine le texte de plusieurs chaînes avec la chaîne appelante et renvoie
    la nouvelle chaîne ainsi formée.
   const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = array1.concat(array2);
    console.log(array3);
    expected output: Array ["a", "b", "c", "d", "e", "f"]

La méthode sort() trie les éléments d'un tableau dans ce même tableau, et renvoie le tableau.
 const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
expected output: Array ["Dec", "Feb", "Jan", "March"]
*/

    const board = colors.concat(colors).sort(() => Math.random() - 0.8)
      .map((color) => ({
        memo: color,
        deface: false,
      }));
    // console.log(board);

    this.state = {
      board: board,
      carte1: null,

    };

    this.retourNer = this.retourNer.bind(this);
  }

  pairCard(cardId) {
    this.setState({
      board: this.state.board.map((color, id) => {
        if (id === cardId) {
          return {
            memo: color.memo,
            deface: !color.deface, }
        } else {
        return color;
      }
    })
  })
  }

  retourNer(cardId) {
    // console.log(this.state.board);
    // this.setState({ deface: !this.state.deface });
    if (this.state.carte1 === null) {
      this.setState({ carte1: cardId });
    }
    else {
      const idCarte1 = this.state.board[this.state.carte1].memo;
      const idCarte2 = this.state.board[cardId].memo;
      if (idCarte1 === idCarte2) {
        this.setState({ carte1: null });
      }
      else {
        setTimeout(() => {
          this.pairCard(this.state.carte1, false);
          this.pairCard(cardId, false);
          this.setState({ carte1: null });
        }, 1000);
      }
    }

    this.pairCard(cardId, !this.state.board[cardId].deface);
  }

  render() {
    return (
      <div>
        {this.state.board.map((color, id) => (
          <div className="board">
            <Card
              memo={color.memo}
              retourNer={() => {
                this.retourNer(id);
              }}
              deface={color.deface}
            />
          </div>
        ))}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

// == Export
export default Memory;
