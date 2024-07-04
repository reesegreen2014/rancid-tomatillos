import './App.css';
import movieData from '../../MovieData'; 
import Main from '../Main/Main';
import { useState } from 'react';
import React from 'react';

function App() {
  const [movies, setMovies] = useState(movieData.movies); 

  return (
    <main className="movies">
      <h1>Rancid Tomatillos</h1>
      <Main movies={movies} />
    </main>
  );
}

export default App;
