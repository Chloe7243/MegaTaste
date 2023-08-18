import Form from "../UI/Form/Form";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [inputsValidity, setInputsValidity] = useState({
    email: true,
    password: true,
  });

  const [disabled, setDisabled] = useState(true);

  const [user, setUser] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(null);
  console.log(
    inputValues.email,
    inputsValidity.email,
    inputValues.password,
    inputsValidity.password
  );

  useEffect(() => {
    setDisabled(
      !(
        inputValues.email &&
        inputsValidity.email &&
        inputValues.password &&
        inputsValidity.password
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
    if (event.target.name === "email" || event.target.name === "password") {
      setInputsValidity((prevState) => {
        return {
          ...prevState,
          [event.target.name]: validInput,
        };
      });
    }
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
    const response = await fetch(
      "https://megataste-a6d27-default-rtdb.firebaseio.com/users.json"
    );
    const data = await response.json();
    for (const id in data) {
      if (
        data[id].email === inputValues.email &&
        data[id].password === inputValues.password
      ) {
        setUser(id);
        setInputValues({
          email: "",
          password: "",
        });
        event.target.reset();
        break;
      } else if (
        data[id].email === inputValues.email &&
        data[id].password != inputValues.password
      ) {
        setIncorrectPassword(false);
        break;
      }
      console.log(data[id].email);
    }
    setUser(null);
  };

  console.log(disabled);
  console.log(user);

  return (
    <Form onSubmit={formSubmitHandler}>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" "
          onChange={inputFormHandler}
          onBlur={inputFormHandler}
        />
        <label htmlFor="email">Email</label>
        {!inputsValidity.email && (
          <p>Email must include '@' and a valid domain after the '@'</p>
        )}
        {inputValues.email && user === null && incorrectPassword != false && (
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
          onBlur={inputFormHandler}
        />
        <label htmlFor="password">Password</label>
        {!inputsValidity.password && (
          <p>Password must contain at least 8 characters</p>
        )}
        {incorrectPassword === false && <p>Incorret Password</p>}
      </div>
      <a href="">Forgot Your Password</a>
      <Button
        disabled={disabled}
        containerStyle={{ borderColor: "var(--primary-color)" }}
        buttonStyle={{ backgroundColor: "var(--primary-color)" }}
      >
        Login
      </Button>
      <a href="">Create Your Account</a>
    </Form>
  );
};

export default Login;
