import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography, TextField
} from '@material-ui/core';
import { toFirstCharUppercase } from '../../constants';
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';
import useStyles from './index'
import styled from 'styled-components'

export const pokemonCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* position: absolute;
  background-color: #ddf3f5;
  border-radius: 100px;
  width: 160px;
  height: 160px; */
`

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
    setFilter(e.target.value.toLowerCase());
  };

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[`${pokemonId}`]
    console.log(pokemonData[pokemonId]);
    return (
      <>
        <Grid item key={pokemonId}>
          <Card className={classes.cardContainer} onClick={() => history.push(`/${pokemonId}`)}>
            <Typography className={classes.pokeId}>
              {`00${id}`}
            </Typography>
            <div className={classes.pokemonMedia}>
              <div
                style={{
                  position: 'absolute',
                  // backgroundColor: '#ecf4f3',
                  // backgroundColor: '#a6dcef',
                  backgroundColor: '#e0ece4',
                  boxShadow: '0 2.8px 2.2px rgb(28, 116, 151, 0.034), 0 6.7px 5.3px rgb(28, 116, 151, 0.048), 0 12.5px 10px rgb(28, 116, 151, 0.06), 0 22.3px 17.9px rgb(28, 116, 151, 0.072), 0 41.8px 33.4px rgb(28, 116, 151, 0.086), 0 100px 80px rgb(28, 116, 151, 0.12), inset 0 0 100px 100px rgb(28, 116, 151, 0.12)',
                  borderRadius: '50px',
                  width: '130px',
                  height: '130px',
                }}
              />
              <CardMedia
                className={classes.cardMedia}
                image={sprite}
              />
            </div>
            <CardContent className={classes.cardContent}>
              <Typography>{`${toFirstCharUppercase(name)}`}</Typography>
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
          <div className={classes.searchBarContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Pokémon"
              variant="standard"
            />
          </div>
        </Toolbar>
        <Typography
          style={{
            padding: '1rem',
            margin: '2px auto',
          }}>
          All 807 Pokémons registered
            </Typography>
      </AppBar>
      {pokemonData ? (
        <>
          <div className="main">
            <Grid
              container
              xs={12}
              sm={4}
              md={6}
              className={classes.pokedexContainer}
            >
              {Object.keys(pokemonData).map((pokemonId) =>
                pokemonData[pokemonId].name.includes(filter) &&
                getPokemonCard(pokemonId)
              )}
            </Grid>
          </div>
        </>
      ) : (CircularProgress)}
    </>
  )
}
