const NumResults = ({ movies }) => {
  if (!movies.length) {
    return (
      <p className="num-results">
        <strong>Начните поиск !!!</strong>
      </p>
    );
  }

  return (
    <p className="num-results">
      <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
