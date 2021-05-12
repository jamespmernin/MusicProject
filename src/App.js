import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios';
import Albums from './components/Albums'
// import AlbumsDetail from './components/AlbumsDetail'
import './App.css'

function App() {
  const [albums, setAlbums] = useState([]); // Easier to change albums using a state
  useEffect(() => {
    const getAlbums = async () => {
      const apiUrl = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=136975&entity=album';
      const res = await axios(apiUrl);
      setAlbums(res.data);
    }
    getAlbums();
  }, []);

  return (
    <div className="app">
      <nav>Discography Project</nav>
      <h1>Featuring my favorite band: The Beatles</h1>
      <h1>James Mernin</h1>
      <Route exact path="/">
        <Albums albums={albums} />
      </Route>
    </div>
  )
}

export default App