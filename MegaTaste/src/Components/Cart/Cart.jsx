import styles from "./Cart.module.css";
import Button from "../UI/Button/Button";
import burger from "../../assets/fastfood-1.webp";
import { TfiClose } from "react-icons/tfi";
import CartProduct from "../CartProduct/CartProduct";

const Cart = () => {
  const closeCart = () => {};
  return (
    <div className="overlay">
      <div className={styles.cart}>
        <header>
          <h2>{0 && "Your Cart" || ""}</h2>
          <button onClick={closeCart} style={{ fontSize: "2rem" }}>
            <TfiClose />
          </button>
        </header>
        {/* <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <CartProduct img={burger} />
              </tr>
              <tr>
                <CartProduct img={burger} />
              </tr>
            </tbody>
          </table>
          <article></article>
          <footer></footer>
        </> */}
        <div className={styles["empty-cart"]}>
          <p>Your cart is empty</p>
          <Button color="var(--secondary-color)">Continue Shopping</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
