// == Import npm
import React from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
// https://material-ui.com/components/dialogs/
// yarn add @material-ui/core
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

// ==Import
import './result.scss';

// == Composant

const Result = ({
  restartGame,
  coups,
  showResult,
  timer,
  formatTime,
  isPaused,
  isActive,
}) => (
  <div>
    <Dialog
      open={showResult}
      isPaused={isPaused}
      disableBackdropClick
      disableEscapeKeyDown
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <h1 className="h1"> Bravo !!! Tu as fini le memory !</h1>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" >  
          <p> Memory réussi en: {coups} coups </p>
          <p> Temps : {formatTime(timer)} </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={restartGame} disable={!isActive}>
          REJOUER
        </Button>
      </DialogActions>
    </Dialog>
  </div>

);

// == Export
export default Result;
