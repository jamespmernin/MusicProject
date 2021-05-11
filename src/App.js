import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios';
import Albums from './components/Albums'
import AlbumsDetail from './components/AlbumsDetail'
import './App.css'

function App() {
  const [albums, setAlbums] = useState([]); // Easier to change albums using a state
  useEffect(() => {
    const getAlbums = async () => {
      const apiUrl = 'https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/';
      const res = await axios(apiUrl);
      setAlbums(res.data);
    }
    getAlbums();
  }, []);

  return (
    <div className="app">
      <nav>AlbumsApp</nav>
      <Route exact path="/">
        <Albums albums={albums} />
      </Route>
      <AlbumsDetail albums={albums} />
    </div>
  )
}

export default App