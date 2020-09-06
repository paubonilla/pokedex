import React from 'react';
import Pokemon from './components/Pokemon';
import Pokedex from './components/Pokedex';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact render={(props) => <Pokedex {...props} />} />
      <Route exact path='/:pokemonId' render={(props) => <Pokemon {...props} />} />
    </Switch>
  );
}

export default App;
