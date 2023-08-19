import styles from "./Button.module.css";

const Button = ({ children, disabled, color }) => {
  return (
    <div className={styles.button__container}>
      <div
        className={styles.button__outline}
        style={{ borderColor: color }}
      ></div>
      <button
        disabled={disabled}
        className={styles.button}
        style={{backgroundColor: color }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
