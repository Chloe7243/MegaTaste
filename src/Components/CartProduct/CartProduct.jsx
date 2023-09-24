/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Quantity from "../Quantity/Quantity";
import styles from "./CartProduct.module.css";
import { useContext } from "react";
import AppContexts from "../../contexts/app-contexts";

const CartProduct = ({ details }) => {
  const ctx = useContext(AppContexts);
  const [quantity, setQuantity] = useState(details.productQuantity);
  const getQuantity = (q) => setQuantity(q);

  useEffect(() => {
    if (quantity != details.productQuantity) {
      const product = details;
      product.productQuantity = quantity;
      ctx.deleteCartProduct(details.productId);
      ctx.setCartProducts((prev) => [product, ...prev]);
    }
  }, [quantity]);

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
          <p>Price per item: {"\u20A6 " + details.productPrice}</p>
          <p>Size: {details.productSize}</p>
        </span>
        <span className={styles.quantity}>
          <Quantity cartQuantity={quantity} getQuantity={getQuantity} />
          <button
            className={styles.delete}
            onClick={() => ctx.deleteCartProduct(details.productId)}
          >
            <MdDelete />
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartProduct;
