//React Components:

import React, { Component } from 'react';
import SimpleMenu from './Menu';

//Material Design Components:

import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

class TopBar extends Component {

  constructor() {
      super();
      this.state = {
          pageTitle: 'App Title'
      }
  }

  render() {
    return (
          <AppBar position="static" color="default">
            <Toolbar>
            <SimpleMenu />
            <Typography variant="title" color="inherit" component="h3"> {this.state.pageTitle} </Typography>
            </Toolbar>
          </AppBar>
    );
  }
}

export default TopBar;
