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
    borderRadius: '7px',
    padding: "10px 20px",
    margin: "20px 0",
  },
  searchIcon: {
    alignSelf: "flex-end",
    margin: "6px",
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
    maxWidth: '70%',
  },
  cardContainer: {
    cursor: 'pointer',
    width: '300px',
    height: '400px',
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#e4f9ff',
    transition: '0.9s ease-out',
    "&:hover": {
      backgroundColor: '#a6dcef',
      transition: '0.4s ease-out',
    }
  },
  cardMedia: {
    margin: '30px auto',
    width: '200px',
    height: '220px',
    zIndex: '10000'
  },
  cardContent: {
    textAlign: 'center',
  }
}));

export default useStyles