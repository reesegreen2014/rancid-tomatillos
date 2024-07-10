import './App.css';
import Main from '../Main/Main';
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="app">
      <Header />
      <main className="movies">
        <Routes>
          <Route path="/" element={<Main movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
