import { useEffect, useState } from "react";
import styles from "./Quantity.module.css";

const Quantity = ({ getQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    getQuantity && getQuantity(quantity);
  }, [quantity]);
  const changeQuantity = (event) => {
    event.target.className === "add"
      ? setQuantity((prev) => (prev += 1))
      : setQuantity((prev) => (prev -= 1));
  };
  return (
    <span className={styles.quantity}>
      <button onClick={changeQuantity} disabled={quantity === 1}>
        -
      </button>
      {quantity}
      <button className="add" onClick={changeQuantity}>
        +
      </button>
    </span>
  );
};

export default Quantity;
