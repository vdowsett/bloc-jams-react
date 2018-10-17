//React Components:

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import TopBar from './components/TopBar';
import theme from './components/CustomTheme';

//Material Design Components:

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends Component {

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>

        <Grid className="App" container wrap="nowrap" spacing={24} grid="6" justify="center">

          <Grid item xs={12}>
            <TopBar position="static" color="default" />

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
