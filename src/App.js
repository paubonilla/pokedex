import React from 'react';
import Pokedex from './components/Pokedex/Pokedex';
import Pokemon from './components/Pokemon/Pokemon';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import THEME from './theme/theme'
import './App.scss';

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <Switch>
        <Route path='/' exact render={(props) => <Pokedex {...props} />} />
        <Route exact path='/:pokemonId' render={(props) => <Pokemon {...props} />} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
