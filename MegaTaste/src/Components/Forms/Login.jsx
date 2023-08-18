import Form from "../UI/Form/Form";
import Button from "../UI/Button/Button";

const Login = () => {
  return (
    <Form>
      <h2>Login</h2>
      <div>
        <input type="email" name="email" id="email" placeholder=" " />
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input type="password" name="password" id="password" placeholder=" " />
        <label htmlFor="password">Password</label>
      </div>
      <a href="">Forgot Your Password</a>
      <Button
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
