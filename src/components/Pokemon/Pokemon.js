import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { toFirstCharUppercase } from '../../constants';
import { PokemonInner, PokemonContainer, PokemonImage, PokemonInfoContainer, ButtonContainer } from '../Pokemon/index'
import useStyles from './index'
import axios from 'axios';

export default function Pokemon(props) {
  const classes = useStyles();
  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <Grid container>
        <PokemonContainer>
          <Typography className={classes.pokemonName} variant="h5">
            {`00${id}`} {toFirstCharUppercase(name)}
            <img src={front_default} alt="pokemon icon" />
          </Typography>
          <PokemonImage src={fullImageUrl} alt="pokemon" />
          <PokemonInfoContainer>
            <Typography
              className={classes.pokemonInfo}
              variant="h6"
            >Pokemon Info</Typography>
            <Typography
              className={classes.pokemonInfo}
              variant="subtitle1"
            >
              Species:
              <Typography variant="caption"> {toFirstCharUppercase(species.name)}</Typography>
            </Typography>
            <Typography
              className={classes.pokemonInfo}
              variant="subtitle1"
            >
              Height:
              <Typography variant="caption"> {height}</Typography>
            </Typography>
            <Typography
              className={classes.pokemonInfo}
              variant="subtitle1"
            >
              Weight:
              <Typography variant="caption"> {weight}</Typography>
            </Typography>
            <Typography
              className={classes.pokemonInfo}
              variant="subtitle1"
            > Types: </Typography>
            {types.map((typeInfo) => {
              const { type } = typeInfo;
              const { name } = type;
              return <Typography key={name}><Typography variant="caption"> {`${name}`}</Typography></Typography>
            })}
          </PokemonInfoContainer>
        </PokemonContainer>
      </Grid>
    )
  }

  return (
    <PokemonInner>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <ButtonContainer>
          <Button className={classes.bttn} variant="contained" onClick={() => history.push("/")}>
            back to pokedex
          </Button>
        </ButtonContainer>
      )}
    </PokemonInner>
  )
}
