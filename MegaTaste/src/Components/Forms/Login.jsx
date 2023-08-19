import Form from "../UI/Form/Form";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [inputValues, setInputValues] = useState({});
  const [inputsValidity, setInputsValidity] = useState({});
  const [incorrectPassword, setIncorrectPassword] = useState(null);

  useEffect(() => {
    setDisabled(
      !(
        inputValues?.email &&
        inputsValidity?.email &&
        inputValues?.password &&
        inputsValidity?.password
      )
    );
    setUser("");
    setIncorrectPassword(null);
  }, [inputValues, inputsValidity]);

  const checkValidity = (value, type) => {
    if (type === "email" && value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      return true;
    else if (type === "password" && value.length > 7) return true;
    return false;
  };

  const inputFormHandler = (event) => {
    const validInput = checkValidity(event.target.value, event.target.name);
    setInputsValidity((prevState) => {
      return {
        ...prevState,
        [event.target.name]: validInput,
      };
    });

    if (!validInput) return;
    setInputValues((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={formSubmitHandler} key={1}>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" "
          onChange={inputFormHandler}
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        {inputsValidity.email === false && (
          <p>Email must include '@' and a valid domain after the '@'</p>
        )}
        {inputValues?.email && user === null && incorrectPassword != false && (
          <p>Invalid Email Adress</p>
        )}
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder=" "
          onChange={inputFormHandler}
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        {inputsValidity?.password === false && (
          <p>Password must contain at least 8 characters</p>
        )}
        {incorrectPassword === false && <p>Incorrect Password</p>}
      </div>
      <a href="">Forgot Your Password</a>
      <Button disabled={disabled} color={"var(--primary-color)"}>
        Login
      </Button>
      <a href="">Create Your Account</a>
    </Form>
  );
};

export default Login;
