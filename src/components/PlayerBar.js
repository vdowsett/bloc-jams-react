//React Components:

import React, { Component } from 'react';

//Material Design Components:
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';

class PlayerBar extends Component {
  render () {
    return (
      <section className="player-bar">

        <CardActions id="Buttons">
           <IconButton
             id="previous"
             onClick={ this.props.handlePrevClick }
             >
             <span className="ion-md-skip-backward"></span>
           </IconButton>

           <Button variant="fab"
             id="play-pause"
             onClick={ this.props.handleSongClick}
             >
             <i className="material-icons"> { this.props.isPlaying ? 'pause' : 'play_arrow' } </i>
           </Button>

           <IconButton
             id="next"
             onClick={ this.props.handleNextClick}
             >
             <span className="ion-md-skip-forward"></span>
           </IconButton>
         </CardActions>

         <CardActions id="time-control">
           <div className="current-time" > { this.props.formatTime(this.props.currentTime) } </div>
           <input
             type="range"
             className="seek-bar"
             value={ ( this.props.currentTime / this.props.duration ) || 0 }
             max="1"
             min="0"
             step="0.01"
             onChange={ this.props.handleTimeChange }
             />
           <div className="total-time"> { this.props.formatTime(this.props.duration) } </div>
         </CardActions>

         <CardActions id="volume-control">

           <IconButton
             id="decrease"
             onClick={ this.props.handleVolumeDecreaseClick }>
             <span className="icon ion-md-volume-low" ></span>
           </IconButton>

           <input
             type="range"
             className="seek-bar"
             value={ this.props.volume }
             max="1"
             min="0"
             step="0.1"
             onChange={ this.props.handleVolumeChange }
             />

           <IconButton
             id="increase"
             onClick={ this.props.handleVolumeIncreaseClick }>
             <span className="icon ion-md-volume-high" ></span>
           </IconButton>

         </CardActions>
      </section>
    );
  }
}

export default PlayerBar;
