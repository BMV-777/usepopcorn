import { useState } from "react";

import tempMovieData from "../../tempMovieData";

import Movie from "../Movie/Movie";

const MoveList = ({ movies, onDelete, onSelectMovie }) => {
  // const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          onDelete={onDelete}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
};

export default MoveList;
