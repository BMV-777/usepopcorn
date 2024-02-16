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
  const [query, setQuery] = useState("sport");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectId, setSelectId] = useState("tt0816692");
  // const temp = "sport";
  const tempQuery = "interstellar";

  const KEY = "e94e1bf8";

  function handelDeleteMovies(imdbID) {
    setMovies((movies) => movies.filter((moves) => moves.imdbID !== imdbID));
    console.log(imdbID);
  }

  function handelSelectMovie(id) {
    setSelectId((selectId) => (id === selectId ? null : id));
  }

  function handelCloseMovie() {
    setSelectId(null);
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          console.log(data.Search);
        } catch (error) {
          setError(error.message);
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
              onDelete={handelDeleteMovies}
              onSelectMovie={handelSelectMovie}
            />
          )}
          {error && <ErrorMessages message={error} />}
          {/* {isLoading ? (
            <Loader />
          ) : (
            <MoveList movies={movies} onDelete={handelDeleteMovies} />
          )} */}
        </Box>
        <Box>
          {selectId ? (
            <MoveDetails selectId={selectId} onClosedMovie={handelCloseMovie} />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoveList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
// 11/151
function MoveDetails({ selectId, onClosedMovie }) {
  const KEY = "e94e1bf8";

  const [movie, setMovies] = useState({});

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  console.log(title, year);

  useEffect(function () {
    async function getMovieDetails() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectId}`
      );

      const data = await res.json();

      console.log(data);
      setMovies(data);
    }
    getMovieDetails();
  }, []);

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onClosedMovie}>
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${movie} movie`} />

        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span>
            {imdbRating} IMBb rating
          </p>
        </div>
      </header>
      <section>
        <div>
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
        </div>
      </section>
      {selectId}
    </div>
  );
}
