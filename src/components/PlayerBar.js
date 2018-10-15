import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';


class PlayerBar extends Component {
  render () {
    return (
      <section className="player-bar">
        <section id="Buttons">
           < Button variant="contained" color="primary"
             id="previous"
             onClick={ this.props.handlePrevClick}
             >
             <span className="ion-md-skip-backward"></span>
           </Button>

           < Button variant="contained" color="primary"
             id="play-pause"
             onClick={ this.props.handleSongClick}
             >
             <i className="material-icons"> { this.props.isPlaying ? 'pause' : 'play_arrow' } </i>
           </Button>

           < Button variant="contained" color="primary"
             id="next"
             onClick={ this.props.handleNextClick}
             >
             <span className="ion-md-skip-forward"></span>
           </Button>
         </section>

         <section id="time-control">
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
         </section>

         <section id="volume-control">

           < Button variant="contained" color="primary"
             id="decrease"
             onClick={ this.props.handleVolumeDecreaseClick }>
             <span className="icon ion-md-volume-low" ></span>
           </Button>

           <input
             type="range"
             className="seek-bar"
             value={ this.props.volume }
             max="1"
             min="0"
             step="0.1"
             onChange={ this.props.handleVolumeChange }
             />

           < Button variant="contained" color="primary"
             id="increase"
             onClick={ this.props.handleVolumeIncreaseClick }>
             <span className="icon ion-md-volume-high" ></span>
           </Button>

         </section>
      </section>
    );
  }
}

export default PlayerBar;
