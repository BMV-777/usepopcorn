const Movie = ({ movie, onSelectMovie }) => {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
      {/* <button className="btn-delete" onClick={() => onDelete(movie.imdbID)}>
        X
      </button> */}
    </li>
  );
};

export default Movie;
