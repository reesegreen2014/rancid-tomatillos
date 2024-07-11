import React, { useState } from 'react';
import './MovieCards.css';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`movie-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="movie-card-inner">
        <div className="movie-card-front">
          <Link to={`/movies/${movie.id}`} className="movie-card-link">
            <img src={movie.poster_path} alt={`${movie.title} poster`} className="movie-poster" />
            <div className="movie-details">
              <h2>{movie.title}</h2>
            </div>
          </Link>
        </div>
        <div className="movie-card-back">
          <div className="movie-rating">
            <h2>Rating: {movie.average_rating}</h2>
            <h2>{movie.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;