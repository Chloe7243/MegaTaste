import Form from "../UI/Form/Form";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);
  const [inputValues, setInputValues] = useState({});
  const [inputsValidity, setInputsValidity] = useState({});

  useEffect(() => {
    setDisabled(
      !(
        inputValues?.email &&
        inputsValidity?.email &&
        inputValues?.firstname &&
        inputValues?.lastname &&
        inputValues?.password &&
        inputsValidity?.password
      )
    );
  }, [inputValues, inputsValidity]);

  const checkValidity = (value, type) => {
    if (type === "email" && value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      return true;
    else if (type === "password" && value.length > 7) return true;
    else if (type === "firstname" || type === "lastname") return true;
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
    const response = await fetch(
      "https://megataste-a6d27-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(inputValues),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setInputValues({});
    event.target.reset();
  };

  return (
    <Form onSubmit={formSubmitHandler} key={0}>
      <h2>Create account</h2>
      <div>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder=" "
          onChange={inputFormHandler}
          autoComplete="off"
        />
        <label htmlFor="firstname">First name</label>
      </div>
      <div>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder=" "
          onChange={inputFormHandler}
          autoComplete="off"
        />
        <label htmlFor="lastname">Last name</label>
      </div>
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
        {inputsValidity?.email === false && (
          <p>Email must include '@' and a valid domain after the '@'</p>
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
      </div>
      <Button disabled={disabled} color={"var(--primary-color)"}>
        Create
      </Button>
      <a href="">Login</a>
    </Form>
  );
};

export default SignUp;
