import React, { /*useState*/ } from 'react';
import { Link } from 'react-router-dom';

function Albums(props) {
  /*let albums = JSON.stringify(props.albums);*/
  console.log('albums: ' + JSON.stringify(props.albums));
  // const [search, setSearch] = useState('');
  return (
    <div>
      {/* <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input> */}
      <div className="map">
        {
        props.albums.map((album, i) => /* Checking data.imgURL not equal to test avoids an error with displaying a bad painting */
          <Link key={i} to={`/${i}`} >
            {/* eslint-disable-next-line*/}
            <div className="album" key={i} className="mappedAlbums">
              <img key={i} src={album.imgURL} alt={album.name} />
              <h2 key={album._id}>{album.name}</h2>
              <h3 key={album.price}>${album.price}</h3>
            </div>
          </Link>
        )
        }
      </div>
    </div>
  )
}

export default Albums;