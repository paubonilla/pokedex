import { makeStyles } from '@material-ui/core/styles';
// import styled from 'styled-components'

const useStyles = makeStyles(() => ({
  appBarContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    backgroundColor: '#db092c',
    width: '100%'
  },
  searchBarContainer: {
    display: "flex",
    backgroundColor: '#ccfffd',
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
    color: '#2c2c2c'
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
  pokedexContainer: {
    fontSize: '2rem',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '60vw',
  },
  cardContainer: {
    cursor: 'pointer',
    width: '300px',
    height: '400px',
    margin: '1rem',
  },
  cardMedia: {
    margin: '0 auto',
    width: '200px',
    height: '200px',
  },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Press Start 2P'
  }
}));

export default useStyles