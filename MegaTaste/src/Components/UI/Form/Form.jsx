import Container from "../Container/Container";
import styles from "./Form.module.css";
const Form = ({
  containerClasname,
  children,
  onSubmit,
  action,
  method,
  style,
  id,
}) => {
  return (
    <Container className={containerClasname} style={style} id={id}>
      {id && <h2>Reserve a table</h2>}
      <form
        className={styles.form}
        action={action}
        method={method}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </Container>
  );
};

export default Form;
