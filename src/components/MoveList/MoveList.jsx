import { useState } from "react";

import tempMovieData from "../../tempMovieData";

import Movie from "../Movie/Movie";

const MoveList = ({ movies, onDelete }) => {
  // const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} onDelete={onDelete} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MoveList;
