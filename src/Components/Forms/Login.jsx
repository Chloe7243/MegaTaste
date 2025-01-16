import Form from "../Form";
import Button from "../ui/Button/Button";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import ErrorText from "../ErrorText";

const Login = () => {
  const [user, setUser] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [inputValues, setInputValues] = useState({});
  const [inputsValidity, setInputsValidity] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
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
    // useNavigate("/")
  };

  return (
    <>
      <Banner pageName="Login" />
      <Form
        onSubmit={formSubmitHandler}
        key={1}
        style={{ padding: "10rem 2rem" }}
      >
        <h2>Login</h2>

        <div className="inputs">
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
            {/* <ErrorText
              condition={
                inputValues?.email &&
                user === null &&
                incorrectPassword != false
              }
              errorMsg={"Invalid Email Address"}
            /> */}
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
              className="eye"
              onClick={() => setPasswordShown((prev) => !prev)}
            >
              {!passwordShown ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
            <label htmlFor="password">Password</label>
            <ErrorText
              condition={inputsValidity?.password === false}
              errorMsg={"Password must contain at least 8 characters"}
            />
            {/* <ErrorText
              condition={incorrectPassword === false}
              errorMsg={"Incorrect Password"}
            /> */}
          </div>
          <div>
            <a href="">Forgot Your Password ?</a>
          </div>
        </div>

        <Button disabled={disabled} color={"var(--primary-color)"}>
          Login
        </Button>
        <Link to="/register">Create Your Account</Link>
      </Form>
    </>
  );
};

export default Login;
