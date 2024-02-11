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
import ErrorMessages from "./components/ErrorMessages/ErrorMessages";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const query = "sport";

  const KEY = "e94e1bf8";

  function handelDeleteMovies(imdbID) {
    setMovies((movies) => movies.filter((moves) => moves.imdbID !== imdbID));
    console.log(imdbID);
  }

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        console.log(data.Search);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
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
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoveList movies={movies} onDelete={handelDeleteMovies} />
          )}
          {error && <ErrorMessages message={error} />}
          {/* {isLoading ? (
            <Loader />
          ) : (
            <MoveList movies={movies} onDelete={handelDeleteMovies} />
          )} */}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoveList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
// 11/147
