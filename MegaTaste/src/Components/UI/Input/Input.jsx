import styles from "./Input.module.css";

const Input = ({ type, label, children, maxLength, value, onChange }) => {
  return (
    <div className={styles.input}>
      <input
        type={type}
        placeholder=" "
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      <label htmlFor="">{label}</label>
      {children}
    </div>
  );
};

export default Input;
