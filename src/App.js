import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

//Material Design Components:

//CSS Baseline
import CssBaseline from '@material-ui/core/CssBaseline';

//Layout
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Theme and Colors
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
});

class App extends Component {

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>

        <Grid className="App" container wrap="nowrap" spacing={24} grid="6" justify="center">

        <Grid item xs={12}>
            <header>
              <section>
                <nav>
                  <Link to='/'>Landing</Link>
                  <Link to='/library'>Library</Link>
                </nav>
              </section>
            </header>
            <main>
              <Route exact path="/" component={Landing} />
              <Route path="/library" component={Library} />
              <Route path="/album/:slug" component={Album} />
            </main>
        </Grid>

      </Grid>

      </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
