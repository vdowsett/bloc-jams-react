import React, { Component } from 'react';

class PlayerBar extends Component {
  render () {
    return (
      <section className="player-bar">
        <section id="buttons">
           <button
             id="previous"
             onClick={ this.props.handlePrevClick}
             >
             <span className="ion-md-skip-backward"></span>
           </button>

           <button
             id="play-pause"
             onClick={ this.props.handleSongClick}
             >
             <span className={ this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play' }></span>
           </button>

           <button
             id="next"
             onClick={ this.props.handleNextClick}
             >
             <span className="ion-md-skip-forward"></span>
           </button>
         </section>

         <section id="time-control">
           <div className="current-time" > { this.props.formatTime(this.props.currentTime) } </div>
           <input
             type="range"
             className="seek-bar mdl-slider mdl-js-slider"
             value={ ( this.props.currentTime / this.props.duration ) || 0 }
             max="1"
             min="0"
             step="0.01"
             onChange={ this.props.handleTimeChange }
             />
           <div className="total-time"> { this.props.formatTime(this.props.duration) } </div>
         </section>

         <section id="volume-control">

           <button
             id="decrease"
             onClick={ this.props.handleVolumeDecreaseClick }>
             <span className="icon ion-md-volume-low" ></span>
           </button>

           <input
             type="range"
             className="seek-bar mdl-slider mdl-js-slider"
             value={ this.props.volume }
             max="1"
             min="0"
             step="0.1"
             onChange={ this.props.handleVolumeChange }
             />

           <button
             id="increase"
             onClick={ this.props.handleVolumeIncreaseClick }>
             <span className="icon ion-md-volume-high" ></span>
           </button>

         </section>
      </section>
    );
  }
}

export default PlayerBar;
