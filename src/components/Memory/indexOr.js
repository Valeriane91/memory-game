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

  const board = colors.concat(colors).sort(() => Math.random() - 0.8);
   console.log(board);
  

  return (
    <div>
      {board.map((color) => (
        <div className="board">
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
