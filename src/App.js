//React Components:

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import TopBar from './components/TopBar';
import theme from './components/CustomTheme';

//Material Design Components:

import {
  MuiThemeProvider,
  CssBaseline,
  Paper,
  Grid,
} from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>

        <Grid className="App" container wrap="nowrap" spacing={24} justify="center">

          <Grid item xs={12} sm={9}>

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
