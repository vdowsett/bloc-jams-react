//React Components:

import React, { Component } from 'react';

//Material Design Components:
import {
  Typography,
  Button,
  Grid,
} from '@material-ui/core';

import Slider from '@material-ui/lab/Slider';


const currentTime = {
  float: 'left',
  color: '#ffffff',
  borderRadius: '45%',
  padding: '12px 12px 6px 0',
  lineHeight: '1em',
  margin: '0 15px',
};

const totalTime = {
    float: 'right',
    color: '#ffffff',
    borderRadius: '45%',
    padding: '12px 0 6px 12px',
    lineHeight: '1em',
    margin: '0 15px',
};

const volumeUp = {
    float: 'right',
    margin: '15px',
};

const volumeDown = {
    float: 'left',
    margin: '15px',
};

class PlayerBar extends Component {

  render () {
    return (
      <div className="playerBarContainer">
        <Grid container spacing={32}>
          <Grid item xs={12}>
            <Button variant="fab" mini
              id="previous"
              onClick={ this.props.handlePrevClick }
              >
              <i className="material-icons">skip_previous</i>
            </Button>

            <Button variant="fab"
              id="playPause"
              onClick={ this.props.handleSongClick}
              >
              <i className="material-icons"> { this.props.isPlaying ? 'pause' : 'play_arrow' } </i>
            </Button>

            <Button variant="fab" mini
              id="next"
              onClick={ this.props.handleNextClick}
              >
              <i className="material-icons">skip_next</i>
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Slider
              type="range"
              className="seek-bar"
              value={ ( this.props.currentTime / this.props.duration ) || 0 }
              max="1"
              min="0"
              step="0.01"
              onChange={ this.props.handleTimeChange }
              />
            <span id="currentTime" style={currentTime}> { this.props.formatTime(this.props.currentTime) } </span>
            <span id="totalTime" style={totalTime}> { this.props.formatTime(this.props.duration) } </span>
          </Grid>

          <Grid item xs={12}>

            <Slider
              type="range"
              className="seek-bar"
              value={ this.props.volume }
              max="1"
              min="0"
              step="0.1"
              onChange={ this.props.handleVolumeChange }
              />

            <Button variant="fab" mini
              id="decrease"
              onClick={ this.props.handleVolumeDecreaseClick }
              style={volumeDown}
              >
              <i className="material-icons">volume_down</i>
            </Button>

            <Button variant="fab" mini
              id="increase"
              onClick={ this.props.handleVolumeIncreaseClick }
              style={volumeUp}
              >
              <i className="material-icons">volume_up</i>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PlayerBar;
