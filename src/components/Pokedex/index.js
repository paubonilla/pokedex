import { makeStyles } from '@material-ui/core/styles';

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
    height: '420px',
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // backgroundColor: '#a6dcef',
    backgroundColor: '#e0ece4',
    transition: '0.6s ease-out',
    "&:hover": {
      backgroundColor: '#e4f9ff',
      // backgroundColor: '#70adb5',
      boxShadow: '0 2.8px 2.2px rgb(16, 66, 86, 0.034), 0 6.7px 5.3px rgb(16, 66, 86, 0.048), 0 12.5px 10px rgb(16, 66, 86, 0.06), 0 22.3px 17.9px rgb(16, 66, 86, 0.072), 0 41.8px 33.4px rgb(16, 66, 86, 0.086), 0 100px 80px rgb(16, 66, 86, 0.12), inset 0 0 100px 100px rgb(16, 66, 86, 0.12)',
      transition: '0.4s ease-out',
    }
  },
  pokemonMedia: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // overflow: 'hidden'
  },
  cardMedia: {
    margin: '30px auto',
    width: '220px',
    height: '220px',
    zIndex: '10000',
    "&:hover": {
      // width: '260px',
      // height: '260px',
    }
  },
  cardContent: {
    textAlign: 'center',
  },
  pokeId: {
    backgroundColor: '#2d4059',
    transition: '0.6s ease-out',
    "&:hover": {
      backgroundColor: '#3c5577',
      transition: '0.4s ease-out',
    },
    color: '#f1f3f8',
    padding: '1.5rem',
    fontSize: '20px'
  }
}));

export default useStyles