const ErrorMessages = ({ message }) => {
  return (
    <p className="error">
      <span>💥</span> {message}
    </p>
  );
};

export default ErrorMessages;
