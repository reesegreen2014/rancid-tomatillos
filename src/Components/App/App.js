import './App.css';
import Main from '../Main/Main';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  function getMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies(data.movies))
    .catch(error => setError('Whoops! Looks like the movies are taking a siesta. Try again later, when they\'re feeling more cooperative.'))
  }

  useEffect(() => {
    getMovies()
  }, [])

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
      {error && <p>{error}</p>}
    </main>
  );
}

App.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  })
)
};

export default App;


