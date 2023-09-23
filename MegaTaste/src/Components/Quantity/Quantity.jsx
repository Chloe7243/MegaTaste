import { useEffect, useState } from "react";
import styles from "./Quantity.module.css";

const Quantity = ({ cartQuantity, getQuantity, children }) => {
  const [quantity, setQuantity] = useState(cartQuantity? Number(cartQuantity) : 1);

  useEffect(() => {
    getQuantity && getQuantity(quantity);
    //eslint-disable-next-line
  }, [quantity]);

  const changeQuantity = (event) => {
    event.target.className === "add"
      ? setQuantity((prev) => (prev += 1))
      : setQuantity((prev) => (prev -= 1));
  };
  return (
    <div className={styles.q}>
      {children}
      <span className={styles.quantity}>
        <button onClick={changeQuantity} disabled={quantity === 1}>
          -
        </button>
        <p>{quantity}</p>
        <button className="add" onClick={changeQuantity}>
          +
        </button>
      </span>
    </div>
  );
};

export default Quantity;
