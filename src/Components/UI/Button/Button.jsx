import styles from "./Button.module.css";

const Button = ({ children, disabled, color, onClick }) => {
  return (
    <div className={styles.button__container}>
      <div
        className={styles.button__outline}
        style={{ borderColor: color }}
      ></div>
      <button
        disabled={disabled}
        className={styles.button}
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
