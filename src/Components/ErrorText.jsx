const ErrorText = ({ errorMsg, condition }) => {
  return (
    <p
      style={{
        color: condition ? "black" : "transparent",
      }}
    >
      {errorMsg}
    </p>
  );
};

export default ErrorText;
