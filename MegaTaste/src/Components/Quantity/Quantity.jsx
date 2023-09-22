import { useEffect, useState } from "react";
import styles from "./Quantity.module.css";

const Quantity = ({ cartQuantity, getQuantity, children }) => {
  const [quantity, setQuantity] = useState(cartQuantity);

  useEffect(() => {
    getQuantity && getQuantity(quantity);
  }, [quantity]);

  const changeQuantity = (event) => {
    event.target.className === "add"
      ? setQuantity((prev) => (prev += 1))
      : setQuantity((prev) => (prev -= 1));
  };
  return (
    <div>
      {children}
      <span className={styles.quantity}>
        <button onClick={changeQuantity} disabled={quantity === 1}>
          -
        </button>
        {quantity}
        <button className="add" onClick={changeQuantity}>
          +
        </button>
      </span>
    </div>
  );
};

export default Quantity;
