import React, { useEffect, useState } from 'react';
import './MovieDetails.css';
import { useNavigate, useParams } from 'react-router-dom';

function MovieDetails() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => setMovie(data.movie))
    .catch(error => setError('Whoops! Looks like the movie details are taking a siesta. Try again later, when they\'re feeling more cooperative.'))
  }, [id])

  if(error) {
    return <p>{error}</p>
  }

  if(!movie) {
    return <p><strong>Whoops! We can't fetch the details for that movie. Please try again later!</strong></p>
  }

  return (
    <div className="movie-details-page">
      <button onClick={() => navigate('/')}>Back to list</button>
      <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} className="movie-backdrop" />
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
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

