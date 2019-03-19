import React from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core'

import { Star, StarBorder } from '@material-ui/icons'
import ReactStars from 'react-stars'

const ratingChanged = (newRating) => {
  console.log(newRating)
}
export const ArtistCard = (props) => {
  const { artist, deleteArtist } = props;
  console.log(artist.cardImage)
  return (
    <Card className="artist-card">
      <div className="image-container">
        <img src={artist.cardImage} alt={artist.name} />
      </div>
      <CardContent>
        <h3>{artist.name}</h3>
        <p>{artist.listeners} listeners.</p>
        <p>

        </p>

      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
      </Button>
        <Button size="small" color="secondary" onClick={() => deleteArtist(artist)}>
          Delete
      </Button>
      </CardActions>
    </Card>
  )
}