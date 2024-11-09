import Movie from './Movie';
import './MovieList.scss';

function MovieList({ movies, toggleFavorite }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default MovieList;
