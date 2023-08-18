import styles from "./Button.module.css"

const Button = ({ children, containerStyle, buttonStyle, disabled }) => {
  return (
    <div className={styles.button__container} style={{...containerStyle}}>
      <button disabled={disabled} className={styles.button} style={buttonStyle}>{children}</button>
    </div>
  );
};

export default Button;
