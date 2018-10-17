//React Components:

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './Landing';
import Library from './Library';
import Album from './Album';

//Material Design Components:

import {
  Menu,
  MenuItem,
  Button
} from '@material-ui/core';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <span className="ion-md-menu"></span>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><Link to='/'>Landing</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/library'>Library</Link></MenuItem>
        </Menu>
      </div>

    );
  }
}

export default SimpleMenu;
