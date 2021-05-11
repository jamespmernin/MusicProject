import React, { /*useState*/ } from 'react';
import { Link } from 'react-router-dom';

function Albums(props) {
  return (
    <div>
      {/* <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input> */}
      <div className="map">
        {Object.values(props)[1].slice(1).map((album, i) => /* Checking data.imgURL not equal to test avoids an error with displaying a bad album */
          <Link key={i} to={`/${i}`} >
            {/* eslint-disable-next-line*/}
            <div className="album" key={i} className="mappedAlbums">
              <img key={i} src={album.artworkUrl100} alt={album.collectionName} />
              <h2 key={album.collectionId}>{album.collectionName}</h2>
              <h3 key={album.releaseDate}>{album.releaseDate}</h3>
            </div>
          </Link>
        )
        }
      </div>
    </div>
  )
}

export default Albums;