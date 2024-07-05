import React from 'react';
import './MovieDetails.css';

function MovieDetails({ movie, onBackClick }) {
  return (
    <div className="movie-details-page">
      <button onClick={onBackClick}>Back to list</button>
      <img src={movie.poster_path} alt={`${movie.title} backdrop`} className="movie-backdrop" />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p><strong>Average Rating:</strong> {movie.average_rating.toFixed(1)}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Movie ID: {movie.id}</strong></p>
      </div>
    </div>
  );
}

export default MovieDetails;
