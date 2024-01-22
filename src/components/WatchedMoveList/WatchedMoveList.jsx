import Watched from "../Watched/Watched";

const WatchedMoveList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Watched movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMoveList;
