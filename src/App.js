import { useState } from "react";

import tempMovieData from "./tempMovieData";
import tempWatchedData from "./tempWatchedData";

import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import NumResults from "./components/NumResults/NumResults";
import Box from "./components/Box/Box";
import MoveList from "./components/MoveList/MoveList";
import WatchedSummary from "./components/WatchedSummary/WatchedSummary";
import WatchedMoveList from "./components/WatchedMoveList/WatchedMoveList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  function handelDeleteMovies(imdbID) {
    setMovies((movies) => movies.filter((moves) => moves.imdbID !== imdbID));
    console.log(imdbID);
  }

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MoveList movies={movies} onDelete={handelDeleteMovies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoveList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
// 10/113
