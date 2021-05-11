import React, { /*useState*/ } from 'react';
import { Link } from 'react-router-dom';

function Albums(props) {
  return (
    <div>
      {/* <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input> */}
      <div className="map">
        {Object.keys(props).forEach((key) => /* Checking data.imgURL not equal to test avoids an error with displaying a bad album */
          <Link key={props[key]} to={`/${props[key]}`} >
            {/* eslint-disable-next-line*/}
            <div className="album" key={key} className="mappedAlbums">
              <img key={key} src={key.artworkUrl100} alt={key.collectionName} />
              <h2 key={props[key].collectionId}>{props[key].collectionName}</h2>
              <h3 key={props[key].releaseDate}>{props[key].releaseDate}</h3>
            </div>
          </Link>
        )
        }
      </div>
    </div>
  )
}

export default Albums;