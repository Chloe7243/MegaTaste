import styles from "./Cart.module.css";
import Button from "../UI/Button/Button";
import burger from "../../assets/fastfood-1.webp";
import { TfiClose } from "react-icons/tfi";
import { PiCaretUpLight, PiCaretDownLight } from "react-icons/pi";
import CartProduct from "../CartProduct/CartProduct";
import { useState } from "react";

const Cart = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const toggleForm = () => setDisplayForm((prev) => !prev);
  const closeCart = () => {};
  return (
    <div className="overlay">
      <div className={styles.cart}>
        <header>
          <h2>{(0 && "Your Cart") || ""}</h2>
          <button onClick={closeCart} style={{ fontSize: "2rem" }}>
            <TfiClose />
          </button>
        </header>
        <div className={styles["cart-items"]}>
          <div className={styles.table}>
            <header>
              <h4>Product</h4>
              <h4>Total</h4>
            </header>
            <div className={styles.body}>
              <CartProduct img={burger} />
              {/* <CartProduct img={burger} /> */}
            </div>
          </div>

          <footer>
            <div className={styles.instructions}>
              <span>
                Order special Instructions{" "}
                <button onClick={toggleForm}>
                  {(displayForm && <PiCaretUpLight />) || <PiCaretDownLight />}
                </button>
              </span>
              {displayForm && (
                <textarea
                  name="suggestions"
                  id="suggestions"
                  cols=""
                  rows="6"
                  maxlength="200"
                  wrap="hard"
                ></textarea>
              )}
            </div>
            <div className={styles.subtotal}>
              <span>
                <p>Subtotal:</p> <p>{"\u20A6 " + 5000}</p>
              </span>
              <p>Taxes and shipping are calulated at checkout</p>
              <Button
                color="var( --secondary-color)"
                className={styles.checkout}
              >
                Check out
              </Button>
            </div>
          </footer>
        </div>
        {/* <div className={styles["empty-cart"]}>
          <p>Your cart is empty</p>
          <Button color="var(--secondary-color)">Continue Shopping</Button>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
