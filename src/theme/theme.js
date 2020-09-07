import { createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    fontFamily: `'Press Start 2P', cursive;`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    body1: { fontFamily: [`'Press Start 2P', cursive;`].join(',') },
    body2: { fontFamily: [`'Press Start 2P', cursive;`].join(','), fontSize: '0.75rem' },
    subtitle1: { fontSize: '1rem' },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      fontFamily: [`'Press Start 2P', cursive;`].join(','),
    },
    caption: { fontSize: '12px', fontWeight: 'lighter' },
    button: { fontSize: '0.75rem', fontWeight: 600 },
    overline: { fontSize: '0.625rem', fontWeight: 500 },
    h1: { fontSize: '5.625rem', fontWeight: 300 },
    h2: { fontSize: '3.75rem', fontWeight: 300 },
    h3: { fontSize: '3rem', fontWeight: 400 },
    h4: { fontSize: '2.25rem', fontWeight: 500 },
    h5: { fontSize: '1.5rem', fontWeight: 400 },
    h6: { fontSize: '1.125rem', fontWeight: 600 },
  }
});

export default THEME