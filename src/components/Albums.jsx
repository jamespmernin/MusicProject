import React, { /*useState*/ } from 'react';
import { Link } from 'react-router-dom';

function Albums(props) {
  if (props.albums.results) {
  console.log(props.albums.results.slice(1));
  return (
    <div className="map">
        {props.albums.results.slice(1).map((album, i) => /* Checking data.imgURL not equal to test avoids an error with displaying a bad painting */
          <Link key={i} to={`/${i}`} >
            {/* eslint-disable-next-line*/}
            <div className="album" key={i} className="mappedAlbums">
              <img key={i} src={album.artworkUrl100} alt={album.collectionName} />
              <h2 key={i}>{album.collectionName}</h2>
              <h3 key={i}>{album.artistName}</h3>
              <h3 key={i}>{album.releaseDate.substring(0, 4)}</h3>
            </div>
          </Link>
        )
        }
      </div>
  )
  } else {
    return null;
  }
}

export default Albums;