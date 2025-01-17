import Form from "../Form";
import Button from "../ui/Button/Button";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import ErrorText from "../ErrorText";

const Register = () => {
  const [disabled, setDisabled] = useState(true);
  const [inputValues, setInputValues] = useState({});
  const [inputsValidity, setInputsValidity] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

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
    return !value ? true : false;
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
    setInputValues({});
    event.target.reset();
  };

  return (
    <>
      <Banner pageName="Create account" />
      <Form
        onSubmit={formSubmitHandler}
        key={0}
        style={{ padding: "10rem 2rem 0" }}
      >
        <h2>Create account</h2>
        <div className="inputs">
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
            <ErrorText
              condition={inputsValidity.email === false}
              errorMsg={
                "Email must include '@' and a valid domain after the '@'"
              }
            />
          </div>
          <div>
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              id="password"
              placeholder=" "
              onChange={inputFormHandler}
              autoComplete="off"
            />
            <span
              onClick={() => setPasswordShown((prev) => !prev)}
              className="eye"
            >
              {!passwordShown ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
            <label htmlFor="password">Password</label>
            <ErrorText
              condition={inputsValidity?.password === false}
              errorMsg={"Password must contain at least 8 characters"}
            />
          </div>
        </div>
        <Button disabled={disabled} color={"var(--primary-color)"}>
          Create
        </Button>
        <Link to="/login">Login</Link>
      </Form>
    </>
  );
};

export default Register;
