import styles from "./Input.module.css";

const Input = ({ type, label, children }) => {
  return (
    <>
      <input type={type} placeholder=" " />
      <label htmlFor="">{label}</label>
      {children}
    </>
  );
};

export default Input;
