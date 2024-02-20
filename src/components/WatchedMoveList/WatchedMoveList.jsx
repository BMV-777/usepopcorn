import Watched from "../Watched/Watched";

const WatchedMoveList = ({ watched, onDeleteMovie }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Watched
          movie={movie}
          key={movie.imdbID}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
};

export default WatchedMoveList;
