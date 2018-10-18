import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

import {
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

const buttonWrapper = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const buttonPosition = {
  position: 'absolute',
  right: 0,
  bottom: 0,
};


class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData };
  }

  render() {
    return (
      <div id="LibraryWrapper">{
        this.state.albums.map( ( album, index ) =>
        <Card className='library'>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Link to={`/album/${album.slug}`} key={index}>
                <CardMedia
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: '50%',
                    boxShadow: '0px 10px 20px -5px rgba(0,0,0,.8)',
                    float: 'left',
                    marginRight: '20px',
                }}
                  id="album-cover-art"
                  component="img"
                  alt={album.title}
                  height="150"
                  image={album.albumCover}
                  title="Contemplative Reptile"
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" id="album-title" color="colorPrimary">{album.title}</Typography>
              <Typography variant="overline">{album.artist}</Typography>
              <Typography variant="subtitle2" gutterBottom>{album.songs.length} songs</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div style={buttonWrapper}><div style={buttonPosition}>
                <Link to={`/album/${album.slug}`} key={index}>
                    <Button variant="fab" mini><span className="ion-md-play"></span></Button>
                </Link>
              </div></div>

            </Grid>
          </Grid>
        </Card>
        )
      }
    </div>


    )
  }
}

export default Library;
