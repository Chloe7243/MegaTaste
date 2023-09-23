import styles from "./Cart.module.css";
import Button from "../UI/Button/Button";
import { TfiClose } from "react-icons/tfi";
import { PiCaretUpLight, PiCaretDownLight } from "react-icons/pi";
import CartProduct from "../CartProduct/CartProduct";
import { useState, useContext, useEffect } from "react";
import AppContexts from "../../contexts/app-contexts";
import emptyBag from "../../assets/emptyBag.svg"

const Cart = () => {
  const ctx = useContext(AppContexts);
  const [displayForm, setDisplayForm] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const toggleForm = () => setDisplayForm((prev) => !prev);
  const closeCart = () => ctx.setCartVisibilityState(false);

  return (
    ctx.cartIsOpen && (
      <>
        <div className={styles.cart}>
          <header>
            <h2>{ctx.cartProducts.length ? "Your Cart" : ""}</h2>
            <button onClick={closeCart} style={{ fontSize: "2rem" }}>
              <TfiClose />
            </button>
          </header>
          {ctx.cartProducts.length ? (
            <div className={styles["cart-items"]}>
              <header>
                <h4>Product</h4>
                <h4>Total</h4>
              </header>
              <div className={styles["cart-body"]}>
                {ctx.cartProducts.map((productDetails, i) => (
                  <CartProduct details={productDetails} key={i} />
                ))}
              </div>
              <footer>
                <div className={styles.instructions}>
                  <span>
                    Order special Instructions
                    <button onClick={toggleForm}>
                      {(displayForm && <PiCaretUpLight />) || (
                        <PiCaretDownLight />
                      )}
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
                  <div>
                    <span>
                      <p>Subtotal:</p> <p>{"\u20A6 " + subtotal}</p>
                    </span>
                    <p>Taxes and shipping are calulated at checkout</p>
                  </div>
                  <Button
                    color="var( --secondary-color)"
                    className={styles.checkout}
                  >
                    Check out
                  </Button>
                </div>
              </footer>
            </div>
          ) : (
              <div className={styles["empty-cart"]}>
                <img src={emptyBag} alt="" />
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
        <div className="overlay" onClick={closeCart}></div>
      </>
    )
  );
};

export default Cart;
