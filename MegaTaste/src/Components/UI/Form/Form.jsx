import Container from "../Container/Container";
import styles from "./Form.module.css";
const Form = ({ children, onSubmit, action, method }) => {
  return (
    <Container>
    <form className={styles.form} action={action} method={method} onSubmit={onSubmit}>
      {children}
    </form>
    </Container>
  );
};

export default Form;
