import './App.css';
import Main from '../Main/Main';
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import { useState, useEffect } from 'react';
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  function getMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
        setLoading(false);
      })
      .catch(() => {
        setError('Whoops! Looks like the movies are taking a siesta. Try again later, when they\'re feeling more cooperative.');
        setLoading(false);
      });
  }

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const showBackButton = location.pathname.startsWith('/movies/');

  return (
    <div className="app">
      <Header onBackClick={() => navigate('/')} showBackButton={showBackButton} />
      <main className="movies">
        <Routes>
          <Route path="/" element={<Main movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

App.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
};

export default App;
