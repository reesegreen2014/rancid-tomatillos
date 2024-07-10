import React from 'react';
import './MovieCards.css';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <img src={movie.poster_path} alt={`${movie.title} poster`} className="movie-poster" />
        <div className="movie-details">
          <h2>{movie.title}</h2>
        </div>
      </div>
    </Link>
  );
}
export default MovieCard;