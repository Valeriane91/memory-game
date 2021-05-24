// == Import npm
import React, { useState, useEffect, useRef } from 'react';

// ==Import
import './styles.scss';
import Result from 'src/components/Result';
import Memory from 'src/components/Memory';
import Barmenu from 'src/components/Barmenu';
import colorData from 'src/data/colors';

// == Composant
// == Composant

const App = () => {
  const state = {
    // niveau est le niveau débutant
    niveau: 3,
    // est le jeux de memory vide
    board: [],
    // selecte carte est le tableau vide en attente de carte à sélectionner
    selectCartes: [],
  };

  // on crée l'état initial du jeux qu'on va mettre à jour
  const [game, setGame] = useState(state);
  const [coups, setCoups] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // on crée le hook d'état qui va montrer le résultat quand toutes les cartes sont tournées
  const [isPaused, setIsPaused] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);

  /** On shuffle (mélange) les cartes

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
const board = colors.concat(colors).sort(() => Math.random() - 0.8)
.map((color) => ({
  memo: color,
  deface: false,
}));===> */
  // Maintenant on mélange les cartes du memory avec une shuffle fonction

  const shuffle = (tableau) => {
    for (let i = tableau.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const copied = tableau[i];
      tableau[i] = tableau[j];
      tableau[j] = copied;
    }
    return tableau;
  };

  /** const dialog = () => {
    if (Object.keys(card.selected).length === colorData.length) {
      setShowResult(true);
    }
  }; */

  // On crée createBoard une fonction qui va permettre de créer un nouveau tableau
  // la variable slice va permettre de toucher le moins possible au véritable tableau
  const createBoard = (niveau) => {
    const board = shuffle(colorData).slice(0, niveau);
    // on reutilise le shuffle et son paramètre va être un nouveau tableau qui va nous
    // permettre d'étaler le tableau  2 fois afin de pouvoir
    // avoir les éléments du tableau en double.
    const doubleBoard = shuffle([...board, ...board]);
    return doubleBoard;
  };

  // on crée une fonction qui va initialiser le state.
  // On va utiliser useEffect qui va nous permettre
  // d'incrémenter le jeux sans passer par didAmount et didUpdate.
  const initialGame = () => setGame((lastState) => ({
    ...state,
    niveau: lastState.niveau,
    board: createBoard(lastState.niveau),
  }
  ));

  // 2 onClick permet a la carte de se retourner elle prends deux paramètre carte et index
  // si une carte est sélectionnée ou qu'elle est apariée on sort de la fonction
  const handleOnclick = (card, index) => {
    setCoups((coups) => coups + 1);
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    if (card.selected || card.matched) {
      return;
    }
    // on copie le tableau board pour ne pas avoir a manipuler les données original
    const duplicateBoard = [...game.board];
    // maintenant on va utiliser l'index et faire les changement directement dans le tableau copié
    // on passe la carte sélectionnée en vraie et on setState encore
    // On s'assure que la carte sélectionnée est inclue dans le tableau de carte sélectionnée
    duplicateBoard[index] = { ...card, selected: true };
    setGame((lastState) => (
      {
        ...lastState,
        board: duplicateBoard,
        selectCartes: [...lastState.selectCartes, duplicateBoard[index]],
      }));
  };// (toutes les cartes se retournent)

  // fonction pour savoir si deux éléments délectionnées dans le tableau match entre eux
  // on verifie que 1- ils ne sont pas "null" et 2- matchent.
  const isSelectedCardMatch = (select) => select.length && select[0]?.name === select[1]?.name;

  // on crée un restart du jeux
  const restartGame = () => {
  // la première phase est de flip back les cartes puis:
    setGame((lastState) => ({
      ...lastState,
      board: lastState.board.map((card) => ({
        name: card.name,
        selected: false,
        matched: false,
      })),
    }));

    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    setCoups(0);
    setShowResult(false);
    setTimeout(initialGame, 300);
  };

  // les niveaux du jeux
  const setNiveau = (niveau) => {
    restartGame();
    setGame(((lastState) => ({ ...lastState, niveau })));
  };

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return ` ${getMinutes} : ${getSeconds}`;
  };

  // creation d'une fonction qui montre le résultat

  const bravo = () => {
    if (game.selectedCards.length === colorData.length) {
      setShowResult(true);
    }
  };

  // 1 useEffect ne prend que les fonction callback et les tableau
  useEffect(initialGame, []);

  useEffect(() => {
    // si une paire est sélectionnée
    if (game.selectCartes.length === 2) {
      // est-ce un match ?
      if (isSelectedCardMatch(game.selectCartes)) {
        setShowResult(true);
        setIsPaused(true);
        const duplicateBoard = [...game.board].map((card) => {
          if (game.selectCartes.map((color) => color.name).includes(card.name)) {
            return { name: card.name, selected: false, matched: true };
          }
          return card;
        });
        setGame((lastState) => ({ ...lastState, board: duplicateBoard, selectCartes: [] }));
      }
      else {
        // si les deux cartes ne matchent pas elles doivent se retourner avec un délai d'une scd
        setTimeout(() => {
          setGame((lastState) => (
            {
              ...lastState,
              board: game.board.map((card) => (
                { ...card, selected: false })),
              selectCartes: [],
            }));
        }, 1000);
      }
    }
  }, [game]);// changement sont basés sur le state de game

  return (
    <div>
      <Barmenu
        restartGame={restartGame}
        setNiveau={setNiveau}
        isPaused={isPaused}

      />
      <Memory
        handleOnclick={handleOnclick}
        coups={coups}
        game={game}
        time={timer}
        formatTime={formatTime}
        isActive={isActive}
      />
      <Result
        showResult={showResult}
        coups={coups}
        restartGame={restartGame}
        timer={timer}
        formatTime={formatTime}
        isPaused={isPaused}
      />
    </div>
  );
};

// == Export
export default App;
