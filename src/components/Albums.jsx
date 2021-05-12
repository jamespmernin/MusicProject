// This is what produces each album as its own component on the page.
import React, { /*useState*/ } from 'react';

function Albums(props) {
  if (props.albums.results) { // this condition is required to access the data from the API call
  return (
    <div className="map">
      {props.albums.results.slice(1).map((album, i) => // the first result contains artist information, and must be excluded from this loop using slice
          <a target="_blank" rel="noopener noreferrer" href={album.collectionViewUrl}> {/* This anchor tag redirects to the album page on Apple music */}
            <div key={i} className="mappedAlbums">
              <img src={album.artworkUrl100} alt={album.collectionName} /> {/* The album cover art, or the name of the album if the image fails to load */}
              <h2>{album.collectionName}</h2> {/* The name of the album */}
              <h3>{album.artistName} ({album.releaseDate.substring(5,7)}/{album.releaseDate.substring(8,10)}/{album.releaseDate.substring(0,4)})</h3> {/* The artist and date of album release */}
            </div>
          </a>
        )
      }
    </div>
  )
  } else {
    return null; // Avoids an error where not all conditions returned a value
  }
}

export default Albums;