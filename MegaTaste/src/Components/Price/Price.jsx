import styles from "./Price.module.css";

const Price = ({ price }) => {
  return (
    <p className={styles.price}>
      <span>{price - 0.2 * price}</span>
      <span>{price}</span>
    </p>
  );
};

export default Price;
