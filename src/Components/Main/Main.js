import React from 'react';
import MovieCard from '../MovieGrid/MovieCards/MovieCards';
import './Main.css';

function Main({ movies }) {
  return (
    <div className="movies-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Main;

