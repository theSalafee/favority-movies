import { Link } from 'react-router-dom';

function Movie({ movie, toggleFavorite }) {
  const { id, title, year, isFavorite } = movie;

  return (
    <div className="movie">
      <h3>{title} ({year})</h3>
      <button onClick={() => toggleFavorite(id)}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
      <Link to={`/movies/${id}`}>View Details</Link>
    </div>
  );
}

export default Movie;
