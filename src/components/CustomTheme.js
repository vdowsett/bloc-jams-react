//Material Design Components:
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00BCD4', //cyan
      light: '#B2EBF2',
      dark: '#00838F',
      contrastText: '#FCE4EC',
    },

    secondary: {
      main: '#EC407A', //pink
      light: '#F8BBD0',
      dark: '#AD1457',
      contrastText: '#E1F5FE',
    }
  },

  overrides: {
    MuiTypography: { // Name of the component ⚛️ / style sheet
      root: {
        // Some CSS
      },
      h3: {
        // Some CSS
        color: "white",
        textAlign: 'left',
      },
      overline: {
        // Some CSS
        color: "white",
        textAlign: 'left',
      },
      subtitle2: {
        // Some CSS
        color: "white",
        textAlign: 'left',
      },
    },
    MuiTable: { // Name of the component ⚛️ / style sheet
      root: {
        // Some CSS
        background: '#ffffff',
        borderRadius: 3,
        border: 0,
        color: 'black',
        padding: '30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
    MuiCard: { // Name of the component ⚛️ / style sheet
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
    MuiButton: {
      root: {
        backgroundColor: 'purple',
        '&:hover': {
          backgroundColor: 'purple'
        },
      },
      contained: {
        backgroundColor: 'purple',
        '&:hover': {
          backgroundColor: 'purple'
        },
      },
      fab: {
        width: '65px',
        height: '65px',
        backgroundColor: 'white',
        border: '1px solid white',
        boxShadow: '0',
        '&:hover': {
          backgroundColor: 'purple'
        },
      },
    },
    MuiIconButton: {
      root: {
        width: '45px',
        height: '45px',
        border: '1px solid white',
        color: 'white',
        fontSize: '0.85em',
        '&:hover': {
          backgroundColor: 'purple'
        },
      },
    },

  },

});

export default theme;
