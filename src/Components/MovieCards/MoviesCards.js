import React from 'react';
import './MovieCards.css';

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.poster_path} alt={`${movie.title} poster`} className="movie-poster" />
      <div className="movie-details">
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
}

export default MovieCard;