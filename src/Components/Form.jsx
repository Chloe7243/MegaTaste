import Container from "./ui/Container/Container";
const Form = ({
  containerClasname,
  children,
  onSubmit,
  action,
  method,
  style,
  formStyle,
  id,
}) => {
  return (
    <Container className={containerClasname} style={style} id={id}>
      {id && <h2>Reserve a table</h2>}
      <form
        className={"form"}
        action={action}
        method={method}
        onSubmit={onSubmit}
        style={formStyle}
      >
        {children}
      </form>
    </Container>
  );
};

export default Form;
