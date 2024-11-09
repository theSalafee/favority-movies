import { useParams } from 'react-router-dom';
import moviesData from '../data/moviesData';
import './MovieDetailPage.scss';

function MovieDetailPage() {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found!</p>;
  }

  return (
    <div>
      <h2>{movie.title} ({movie.year})</h2>
      <img src={movie.imageUrl} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieDetailPage;
