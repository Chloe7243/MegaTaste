import { useState } from "react";
import { MdDelete } from "react-icons/md";
import styles from "./CartProduct.module.css";

const CartProduct = ({ img }) => {
  const [quantity, setQuantity] = useState(1);
  const changeQuantity = (event) => {
    event.target.textContent === "+"
      ? setQuantity((prev) => (prev += 1))
      : setQuantity((prev) => (prev -= 1));
  };
  return (
    <div className={styles["product-details"]}>
      <img src={img} alt="" />
      <div className={styles.details}>
        <span>
          <span>
            <p>Item Name</p>
            <p className={styles["total-price"]}>
              {"\u20A6 " + quantity * 3500}
            </p>
          </span>
          <p>Item Price</p>
          <p>Item Size</p>
        </span>
        <span className={styles.quantity}>
          <span>
            <button onClick={changeQuantity} disabled={quantity === 1}>
              -
            </button>
            {quantity}
            <button onClick={changeQuantity}>+</button>
          </span>
          <button className={styles.delete}>
            <MdDelete />
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartProduct;
