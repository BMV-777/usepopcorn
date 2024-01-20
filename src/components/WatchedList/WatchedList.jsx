import { useState } from "react";

import tempWatchedData from "../../tempWatchedData";

import Button from "../Button/Button";
import Summary from "../Summary/Summary";

const WatchList = () => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <Summary watched={watched} />
      <Button onClick={() => setIsOpen2((open) => !open)}>
        {isOpen2 ? "–" : "+"}
      </Button>
      {isOpen2 && (
        <ul className="list">
          {watched.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>{movie.imdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{movie.userRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{movie.runtime} min</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WatchList;
