import { useState } from "react";

import tempMovieData from "../../tempMovieData";

import Movie from "../Movie/Movie";

const MoveList = () => {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MoveList;
