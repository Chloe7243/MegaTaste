import styles from "./Form.module.css";
const Form = ({ children, onSubmit, action, method }) => {
  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
