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

  function getMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => setMovies(data.movies))
      .catch(error => setError('Whoops! Looks like the movies are taking a siesta. Try again later, when they\'re feeling more cooperative.'));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="movies">
      <Header />
      <Routes>
        <Route path="/" element={<Main movies={movies}/>}/>
        <Route path="/movies/:id" element={<MovieDetails />}/>
      </Routes>
      <Footer />
      {error && <p>{error}</p>}
    </main>
  );
}

export default App;