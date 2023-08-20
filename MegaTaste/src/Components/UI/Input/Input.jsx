import styles from "./Input.module.css";

const Input = ({ type, label, children }) => {
  return (
    <div>
      <input type={type} placeholder=" " />
      <label htmlFor="">{label}</label>
      {children}
    </div>
  );
};

export default Input;
