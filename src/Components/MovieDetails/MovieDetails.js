import React from 'react';
import './MovieDetails.css';
import PropTypes from 'prop-types';

function MovieDetails({ movie, onBackClick }) {
  return (
    <div className="movie-details-page">
      <button onClick={onBackClick}>Back to list</button>
      <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} className="movie-backdrop" />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p><strong>Average Rating:</strong> {movie.average_rating.toFixed(1)}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  })
};
