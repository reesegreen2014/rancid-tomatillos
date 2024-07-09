import React from 'react';
import './MovieDetails.css';

function MovieDetails({ movie, onBackClick }) {
  return (
    <div className="movie-details-page">
      <button onClick={onBackClick}>Back to list</button>
      <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} className="movie-backdrop" />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <h3>{movie.tagline}</h3>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Average Rating:</strong> {movie.average_rating.toFixed(1)}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
        <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
      </div>
    </div>
  );
}

export default MovieDetails;

