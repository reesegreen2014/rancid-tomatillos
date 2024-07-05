import React from 'react';
import MovieCard from '../MovieCards/MoviesCards';
import './Main.css';

function Main({ movies, onMovieClick }) {
  return (
    <div className="movies-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
      ))}
    </div>
  );
}

export default Main;
