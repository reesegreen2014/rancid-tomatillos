import React from 'react';
import MovieCard from '../MovieCards/MoviesCards';
import './Main.css';
import { Link } from 'react-router-dom';

function Main({ movies }) {
  return (
    <div className="movies-grid">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default Main;
