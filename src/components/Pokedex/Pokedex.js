import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography, TextField
} from '@material-ui/core';
import { toFirstCharUppercase } from '../../constants';
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';
import useStyles from './index'

export default function Pokedex(props) {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
              }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[`${pokemonId}`]
    console.log(pokemonData[pokemonId]);
    return (
      <>
        <Grid item xs={12} sm={4} key={pokemonId}>
          <Card className={classes.cardContainer} onClick={() => history.push(`/${pokemonId}`)}>
            <CardMedia
              className={classes.cardMedia}
              image={sprite}
            />
            <CardContent className={classes.cardContent}>
              <Typography>{`${id} ${toFirstCharUppercase(name)}`}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </>
    )
  }

  return (
    <>
      <AppBar className={classes.appBarContainer}>
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Pokemon"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={4} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) =>
            pokemonData[pokemonId].name.includes(filter) &&
            getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (CircularProgress)}
    </>
  )
}
