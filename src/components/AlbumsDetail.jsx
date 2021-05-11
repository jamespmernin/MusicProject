import React from 'react';
import { Route } from 'react-router-dom'

function AlbumsDetail(props) {
  return (
    <div className="map">
      {
        Object.values(props).map((album, i) =>
          <Route key={i} exact path={`/${i}`} > {/* Forming the route conditionally allows for multiple route paths to be produced */}
          m<div key={i} className="mappedAlbums">
              <img className="mappedAlbumData" key={i} src={album.imgURL} alt={album.name} /> {/* Keys are needed to avoid warnings about children that are not unique */}
              <h1 className="mappedAlbumData" key={album._id}>{album.name}</h1>
              <h3 className="mappedAlbumData" key={album.price}>${album.price}</h3>
              <small className="mappedAlbumData" key={album.desc}>{album.description}</small> {/* Small makes the description easier to read */}
            </div>
          </Route>
        )
      }
    </div>
  )
}

export default AlbumsDetail; 