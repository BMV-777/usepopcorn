import { useEffect, useState } from "react";

// import tempMovieData from "./tempMovieData";
// import tempWatchedData from "./tempWatchedData";

import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import NumResults from "./components/NumResults/NumResults";
import Box from "./components/Box/Box";
import MoveList from "./components/MoveList/MoveList";
import WatchedSummary from "./components/WatchedSummary/WatchedSummary";
import WatchedMoveList from "./components/WatchedMoveList/WatchedMoveList";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = "porno";

  const KEY = "e94e1bf8";

  function handelDeleteMovies(imdbID) {
    setMovies((movies) => movies.filter((moves) => moves.imdbID !== imdbID));
    console.log(imdbID);
  }

  useEffect(function () {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <MoveList movies={movies} onDelete={handelDeleteMovies} />
          )}
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
