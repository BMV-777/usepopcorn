import { React, useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import StarRating from "../../StarRating";

const MoveDetails = ({ selectId, onCloseMovie, onAddWatched, watched }) => {
  const KEY = "e94e1bf8";

  const [movie, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((watch) => watch.imdbID).includes(selectId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectId
  )?.userRating;
  // console.log(isWatched);

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

  function handelAdd() {
    const newWatchedMovie = {
      imdbID: selectId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },

    [title]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          // setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectId}`
          );

          const data = await res.json();

          // console.log(data);
          setMovies(data);
        } catch (error) {
          // setError(error.message);
        } finally {
          setIsLoading(false);
          // setError("");
        }
      }
      getMovieDetails();
    },
    [selectId]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
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
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    color="red"
                    onRatings={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handelAdd}>
                      + Add Movie
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MoveDetails;
