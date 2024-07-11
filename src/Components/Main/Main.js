import React from 'react';
import MovieCard from '../MovieCards/MoviesCards';
import './Main.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Main.propTypes = {
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

export default Main;