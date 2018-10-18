import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Library from './Library';

import {
  Paper,
  Card,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
      backgroundColor: 'white',
      backgroundImage: 'none',
  },

  linearGradient: {
      backgroundColor: 'white',
      backgroundImage: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
      padding: '6px 12px',
      color: 'grey',
      display: 'flex',
  },

  section: {
      padding: '20px 15px',
      backgroundColor: '#fff',
      margin: '5px',
      height: '95%',
  },

  buttonGrid: {
      padding: '0',
  },
}

class Landing extends Component {

  render() {
    return (
      <Card id="album-info" className={this.props.classes.root}>

        <Typography variant="h2" gutterBottom id="album-title">Turn the music up!</Typography>

      <Grid container spacing={8}>
        <Paper className={this.props.classes.linearGradient}>

        <Grid item xs={12} sm={4}>
          <Paper className={this.props.classes.section}>
            <i className="material-icons">library_music</i>
            <h5 className="point-title">Choose your music</h5>
            <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
          </Paper>
          </Grid>

        <Grid item xs={12} sm={4} >
          <Paper className={this.props.classes.section}>
            <i className="material-icons">star</i>
            <h5 className="point-title">Unlimited, streaming, ad-free</h5>
            <p className="point-description">No arbitrary limits. No distractions.</p>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={this.props.classes.section}>
            <i className="material-icons">mobile_friendly</i>
            <h5 className="point-title">Mobile enabled</h5>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </Paper>
        </Grid>

        </Paper>
      </Grid>

      </Card>
    );
  }
}

export default withStyles(styles)(Landing);
