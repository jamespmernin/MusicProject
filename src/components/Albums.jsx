import React, { /*useState*/ } from 'react';
// import { Link } from 'react-router-dom';

function Albums(props) {
  if (props.albums.results) {
  console.log(props.albums.results.slice(1));
  return (
    <div className="map">
      {props.albums.results.slice(1).map((album, i) => /* Checking data.imgURL not equal to test avoids an error with displaying a bad painting */
          <div key={i} className="mappedAlbums">
            <img src={album.artworkUrl100} alt={album.collectionName} />
            <h2>{album.collectionName}</h2>
            <h3>{album.artistName} ({album.releaseDate.substring(5,7)}/{album.releaseDate.substring(8,10)}/{album.releaseDate.substring(0,4)})</h3>
          </div>
        )
        }
      </div>
  )
  } else {
    return null;
  }
}

export default Albums;