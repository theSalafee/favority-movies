import React, { useState } from 'react';
import Movie from './Movie';
import moviesData from '../data/moviesData';

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const toggleFavorite = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    );
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          year={movie.year}
          isFavorite={movie.isFavorite}
          toggleFavorite={() => toggleFavorite(movie.id)}
        />
      ))}
    </div>
  );
}

export default MovieList;
