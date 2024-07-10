import React from 'react';
import MovieCard from '../MovieCards/MoviesCards';
import './Main.css';
import { Link } from 'react-router-dom';

function Main({ movies }) {
  if (!movies || movies.length === 0) {
    return <div>No movies available... ain't that weird?</div>;
  }

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
