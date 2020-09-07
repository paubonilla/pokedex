import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

export const PokemonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PokemonInner = styled.div`
  margin: 20px;
  /* width: 80%; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const PokemonInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  background: #e9e9e9;
  box-shadow: 0px 17px 50px rgba(0,119,182, 0.6);
  border: 2px solid #2c2c2c;
  border-radius: 7px;
`

export const PokemonImage = styled.img`
  width: 400px;
  height: 400px;
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`


const useStyles = makeStyles(() => ({
  pokemonName: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px'
  },
  pokemonInfo: {
    letterSpacing: '2px'
  },
  bttn: {
    width: '100%',
    padding: '8px 50px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#DE3D2B'
  }
}));

export default useStyles