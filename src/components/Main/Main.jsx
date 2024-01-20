import ListBox from "../ListBox/ListBox";
import WatchedBox from "../WatchedList/WatchedList";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Main = () => {
  // const [movies, setMovies] = useState(tempMovieData);
  // const [isOpen1, setIsOpen1] = useState(true);

  // // const [watched, setWatched] = useState(tempWatchedData);
  // const [isOpen2, setIsOpen2] = useState(true);

  // const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  // const avgUserRating = average(watched.map((movie) => movie.userRating));
  // const avgRuntime = average(watched.map((movie) => movie.runtime));

  // // const [isOpen2, setIsOpen2] = useState(true);

  return (
    <main className="main">
      <ListBox />
      <WatchedBox />
      {/* <div className="box">
        <Button onClick={() => setIsOpen1((open) => !open)}>
          {isOpen1 ? "–" : "+"}
        </Button>
        {isOpen1 && (
          <ul className="list">
            {movies?.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div> */}

      {/* <div className="box">
        <div className="summary">
          <h2>Movies you watched</h2>
          <div>
            <p>
              <span>#️⃣</span>
              <span>{watched.length} movies</span>
            </p>
            <p>
              <span>⭐️</span>
              <span>{avgImdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{avgUserRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{avgRuntime} min</span>
            </p>
          </div>
        </div>
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
      </div> */}
    </main>
  );
};

export default Main;
