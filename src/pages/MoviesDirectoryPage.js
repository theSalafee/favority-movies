import { useState } from 'react';
import moviesData from '../data/moviesData';
import MovieList from '../components/MovieList';
import './MoviesDirectoryPage.scss';

function MoviesDirectoryPage() {
  const [movies, setMovies] = useState(moviesData);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    );
  };

  const filteredMovies = showFavorites
    ? movies.filter((movie) => movie.isFavorite)
    : movies;

  return (
    <div>
      <h2>Movies Directory</h2>
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? 'Show All Movies' : 'Show Favorites'}
      </button>
      <MovieList movies={filteredMovies} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default MoviesDirectoryPage;
