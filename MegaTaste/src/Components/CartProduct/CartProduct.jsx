/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Quantity from "../Quantity/Quantity";
import styles from "./CartProduct.module.css";

const CartProduct = ({ details }) => {
  const [quantity, setQuantity] = useState(details.productQuantity);
  const getQuantity = (q) => setQuantity(q);

  return (
    <div className={styles["product-details"]}>
      <img src={details.productImage} alt="" />
      <div className={styles.details}>
        <span>
          <span>
            <p>{details.productName}</p>
            <p className={styles["total-price"]}>
              {"\u20A6 " + quantity * details.productPrice}
            </p>
          </span>
          <p>{details.productPrice}</p>
          <p>{details.productSize}</p>
        </span>
        <span className={styles.quantity}>
          <Quantity quantity={quantity} getQuantity={getQuantity} />
          <button className={styles.delete}>
            <MdDelete />
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartProduct;
