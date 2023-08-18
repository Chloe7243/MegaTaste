import styles from "./Button.module.css"

const Button = ({ children, containerStyle, buttonStyle }) => {
  return (
    <div className={styles.button__container} style={{...containerStyle}}>
      <button className={styles.button} style={buttonStyle}>{children}</button>
    </div>
  );
};

export default Button;
