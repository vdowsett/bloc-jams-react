import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: 0.5,
      isPlaying: false,
      isHovered: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.audioElement.volume = this.state.volume;
    }

    componentDidMount() {
      this.eventListeners = {
        timeupdate: e => {
          this.setState({ currentTime: this.audioElement.currentTime });
        },
        durationchange: e => {
          this.setState({ duration: this.audioElement.duration });
        },
        onvolumechange: e => {
          this.setState({ volume: this.audioElement.volume });
        }
      };
      this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
      this.audioElement.addEventListener('onvolumechange', this.eventListeners.onvolumechange);

    }

    componentWillUnmount() {
      this.audioElement.src = null;
      this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
      this.audioElement.removeEventListener('onvolumechange', this.eventListeners.onvolumechange);
    }


    play() {
      this.audioElement.play();
      this.setState({ isPlaying: true });
    }

    pause() {
      this.audioElement.pause();
      this.setState({ isPlaying: false });
    }

    setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

    handleSongClick(song) {
      const isSameSong = this.state.currentSong === song;
      if (this.state.isPlaying && isSameSong) {
        this.pause();
      } else {
        if (!isSameSong) { this.setSong(song); }
        this.play();
      }
    }

    handlePrevClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    handleNextClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex + 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    handleMouseEnter(index) {
      this.setState({ isHovered: index });
    }

    handleMouseLeave(index) {
      this.setState({ isHovered: false });
    }

    handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
    }

    handleVolumeChange(e) {
    this.audioElement.volume = e.target.value;
    this.setState({ volume: this.audioElement.volume });
    }

    formatTime(time) {
      let minutes = parseInt(time / 60);
      let seconds = parseInt(time % 60);
      const formatTime = (minutes + ":" + seconds);
      return formatTime;
    }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>

         <section id="song-list-table">
           <table id="song-list">
             <colgroup>
               <col id="song-number-column" />
               <col id="song-title-column" />
               <col id="song-duration-column" />
             </colgroup>
             <tbody>
               <tr>
                  <th className="song-table-header">Number</th>
                  <th className="song-table-header">Title</th>
                  <th className="song-table-header">Duration</th>
               </tr>
               {
                 this.state.album.songs.map( ( song, index ) =>
                   <tr className="song" key={index}
                     onClick={() => this.handleSongClick(song)}

                       onMouseEnter={() => this.handleMouseEnter(index)}
                       onMouseLeave={() => this.handleMouseLeave(index)}
                      >
                     <td className="song-table-details">
                       <button
                         key={index}
                         id="icon"
                        >
                         {
                           (this.state.currentSong === song) ?
                           <span className={
                               (this.state.isPlaying) ? "ion-md-pause" : "ion-md-play" }>
                           </span> :
                           (this.state.isHovered === index) ?
                           <span className="ion-md-play"> </span> :
                           <span className="song-number"> {index+1} </span>
                         }
                       </button>
                     </td>
                     <td className="song-table-details"> {song.title} </td>
                     <td className="song-table-details"> {song.duration} </td>
                   </tr>
                 )}
             </tbody>
           </table>
         </section>

         <section id="player-bar">
           <PlayerBar
             isPlaying={this.state.isPlaying}
             currentSong={this.state.currentSong}
             currentTime={this.audioElement.currentTime}
             duration={this.audioElement.duration}
             volume={this.state.volume}
             handleSongClick={ () => this.handleSongClick(this.state.currentSong)}
             handlePrevClick={ () => this.handlePrevClick()}
             handleNextClick={ () => this.handleNextClick()}
             handleTimeChange={ (e) => this.handleTimeChange(e)}
             handleVolumeChange={ (e) => this.handleVolumeChange(e)}
             formatTime={ (time) => this.formatTime(time)}
            />
         </section>


      </section>
    )
  }
}

export default Album;
