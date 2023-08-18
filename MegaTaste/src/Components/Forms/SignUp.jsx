import Form from "../UI/Form/Form";
import Button from "../UI/Button/Button";

const SignUp = () => {
  const formSubmitHandler = () => {};
  return (
    <Form onSubmit={formSubmitHandler}>
      <h2>Create account</h2>
      <div>
        <input type="text" id="firstname" name="email" placeholder=" " />
        <label htmlFor="firstname">First name</label>
      </div>
      <div>
        <input type="text" id="lastname" name="email" placeholder=" " />
        <label htmlFor="lastname">Last name</label>
      </div>
      <div>
        <input type="email" name="email" id="email" placeholder=" " />
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input type="password" name="password" id="password" placeholder=" " />
        <label htmlFor="password">Password</label>
      </div>
      <Button
        containerStyle={{ borderColor: "var(--primary-color)" }}
        buttonStyle={{ backgroundColor: "var(--primary-color)" }}
      >
        Create
      </Button>
      <a href="">Login</a>
    </Form>
  );
};

export default SignUp;
