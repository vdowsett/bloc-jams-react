//Material Design Components:
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B86C5', //blue
    },

    secondary: {
      main: '#FF3CAC', //pink
    },
  },

  overrides: {
    MuiCard: { // Name of the component ⚛️ / style sheet
      root: {
        // Some CSS
        backgroundImage: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
        color: 'GREY',
        padding: '30px',
        borderRadius: 0,
      },
    },

    MuiTypography: { // Name of the component ⚛️ / style sheet
      root: {
        // Some CSS
      },
      h3: {
        // Some CSS
        color: "white",
        textAlign: 'left',
      },
      h4: {
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
        borderRadius: 6,
      },
    },

    MuiTableCell: { // Name of the component ⚛️ / style sheet
      root: {
        // Some CSS
        padding:'6px 12px',
      },
      head: {
        // Some CSS
        fontSize:'18px',
      },
    },

    MuiButton: {
      fab: {
        border: '1px solid #f9f9f9',
        color: '#f9f9f9',
        backgroundColor: 'transparent',
        margin: '0 15px',
        '&:hover': {
          border: '1px solid #FF3CAC',
          color: '#f9f9f9',
          backgroundColor: '#FF3CAC',
        },
      },
    },

    MuiIconButton: {
      root: {
        width: '25px',
        height: '25px',
        border: '1px solid grey',
        color: 'grey',
        backgroundColor: 'transparent',
        fontSize: '15px',
        '&:hover': {
          border: '1px solid #FF3CAC',
          color: '#f9f9f9',
          backgroundColor: '#FF3CAC',
        },
      },
    },

    MuiSlider: {
      container: {
        root: '80%',
        },
      track: {
        color: '#f9f9f9',
        backgroundColor: '#f9f9f9',
        },
      thumb: {
        backgroundColor: '#f9f9f9',
        },
      },
  },

});

export default theme;
