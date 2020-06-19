import { createMuiTheme } from '@material-ui/core/styles';

const black = '#00010D';
const blue = '#1C2540';
const slate = '#2B2B2B';
const lightBlue = '#94CEF2';
const white = '#EBEBEB';
const gray = '#666E73';

const bebasFont = 'Bebas Neue, sans-serif';
const nanumFont = 'Nanum Brush Script, cursive';
const comfortaaFont = 'Comfortaa, cursive';
const exoFont = 'Exo, sans-serif';
const hindFont = 'Hind Vadodara, sans-serif';
const inriaFont = 'Inria Sans, sans-serif';
const lexendFont = 'Lexend Giga, sans-serif';
const merriweatherFont = 'Merriweather Sans, sans-serif';
const overpassFont = 'Overpass, sans-serif';

export default createMuiTheme({
  palette: {
    common: {
      black: black,
      blue: blue,
      lightBlue: lightBlue,
      slate: slate,
      gray: gray,
      white: white,
    },
    primary: {
      main: blue, // by only specifying a main color material-ui will auto generate light and dark versions to use
    },
    secondary: {
      main: lightBlue, // by only specifying a main color material-ui will auto generate light and dark versions to use
    },
  },
  typography: {
        h1: {
      letterSpacing: 5,
      fontSize: '5.6rem',
      lineHeight: 1.2,
      textAlign: 'center',
    },
    h2: {
      fontSize: '5.6rem',
      lineHeight: 1.4,
      textAlign: 'center',
    },

    h3: {},
    h4: {},
    h5: {
        color: lightBlue,
      fontSize: '4rem',
    },
    h6: {
      fontSize: '1.6rem',
    },
    subtitle1: {
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontSize: '8rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontSize: '1.4rem',
    },
    caption: {
      fontSize: '.9rem',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: '1rem',
        '&$focused': {
          // increase the specificity for the pseudo class
        },
      },
    },
    MuiInput: {
      root: {
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid`,
        },
      },
    },
  },
});
