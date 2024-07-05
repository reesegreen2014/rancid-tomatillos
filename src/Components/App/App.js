import './App.css';
import movieData from '../../MovieData'; 
import Main from '../Main/Main';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useState } from 'react';
import React from 'react';

function App() {
  const [movies, setMovies] = useState(movieData.movies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <main className="movies">
      <h1>Rancid Tomatillos</h1>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBackClick={handleBackClick} />
      ) : (
        <Main movies={movies} onMovieClick={handleMovieClick} />
      )}
    </main>
  );
}

export default App;