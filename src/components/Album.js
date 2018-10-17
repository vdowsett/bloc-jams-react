//React Components:
import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

//Material Design Components:

import {
  MuiThemeProvider,
  createMuiTheme,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      pageTitle: "Album",
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

    handleVolumeDecreaseClick(e) {
      const newVolume = this.audioElement.volume -= 0.1;
      const setVolume = Math.max( 0, newVolume );
      this.setState({ volume: setVolume });
      console.log(this.state.volume);
    }

    handleVolumeIncreaseClick(e) {
      const newVolume = this.audioElement.volume += 0.1;
      const setVolume = Math.min( 1, newVolume );
      this.setState({ volume: setVolume });
      console.log(this.state.volume);
    }

    formatTime(time) {
      let minutes = parseInt(time / 60);
      let seconds = parseInt(time % 60);
      const formatTime = (minutes + ":" + (seconds > 9 ? "" + seconds: "0" + seconds));
      return formatTime;
    }

  render() {
    return (
      <Paper className="album">

        <Card id="album-info">
          <CardContent className="album-details">
            <CardMedia
              style={{
                height: 150,
                width: 150,
                borderRadius: '50%',
                boxShadow: '0px 10px 20px -5px rgba(0,0,0,.8)',
                float: 'left',
                marginRight: '20px',
            }}
              id="album-cover-art"
              component="img"
              alt={this.state.album.title}
              height="150"
              image={this.state.album.albumCover}
              title="Contemplative Reptile"
            />
              <Typography variant="h3" gutterBottom id="album-title" color="colorPrimary">{this.state.album.title}</Typography>
              <Typography variant="overline" gutterBottom>{this.state.album.artist}</Typography>
              <Typography variant="subtitle2" gutterBottom>{this.state.album.releaseInfo}</Typography>
             </CardContent>

             <CardContent className="playerBar">
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
                 handleVolumeDecreaseClick={ (e) => this.handleVolumeDecreaseClick(e)}
                 handleVolumeIncreaseClick={ (e) => this.handleVolumeIncreaseClick(e)}
                 formatTime={ (time) => this.formatTime(time)}
                 />
             </CardContent>

             <CardContent className="songListCard">
               <Table id="song-list" margin="20px">
                 <colgroup>
                   <col id="song-number-column" />
                   <col id="song-title-column" />
                   <col id="song-duration-column" />
                 </colgroup>
                   <TableHead>
                     <TableRow>
                      <TableCell className="song-table-header">Number</TableCell>
                      <TableCell className="song-table-header">Title</TableCell>
                      <TableCell className="song-table-header">Duration</TableCell>
                   </TableRow>
                  </TableHead>
                  <TableBody>
                   { this.state.album.songs.map( ( song, index ) =>
                     <TableRow className="song" key={index}
                       onClick={() => this.handleSongClick(song)}
                       onMouseEnter={() => this.handleMouseEnter(index)}
                       onMouseLeave={() => this.handleMouseLeave(index)}>
                       <TableCell className="song-table-details">
                         <button key={index} id="icon">
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
                       </TableCell>
                       <TableCell className="song-table-details"> {song.title} </TableCell>
                       <TableCell className="song-table-details"> { this.formatTime( song.duration ) } </TableCell>
                     </TableRow>
                     )}
                   </TableBody>
                 </Table>
               </CardContent>
             </Card>
           </Paper>
         )
       }
     }

export default Album;
