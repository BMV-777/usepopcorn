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
import MoveDetails from "./components/MoveDetails/MoveDetails";

import ErrorMessages from "./components/ErrorMessages/ErrorMessages";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [query, setQuery] = useState("sport");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectId, setSelectId] = useState(null);
  // const temp = "sport";
  // const tempQuery = "interstellar";

  const KEY = "e94e1bf8";

  function handelDeleteMovies(imdbID) {
    setWatched((movies) => movies.filter((moves) => moves.imdbID !== imdbID));
  }

  function handelSelectMovie(id) {
    setSelectId((selectId) => (id === selectId ? null : id));
  }

  function handelCloseMovie() {
    setSelectId(null);
  }

  function handelAddWatched(movie) {
    setWatched((selectId) => [...selectId, movie]);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");
          // console.log(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
          // console.error(error);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoveList
              movies={movies}
              // onDelete={handelDeleteMovies}
              onSelectMovie={handelSelectMovie}
            />
          )}
          {error && <ErrorMessages message={error} />}
        </Box>
        <Box>
          {selectId ? (
            <MoveDetails
              selectId={selectId}
              onCloseMovie={handelCloseMovie}
              onAddWatched={handelAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoveList
                watched={watched}
                onDeleteMovie={handelDeleteMovies}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
// 11/151
