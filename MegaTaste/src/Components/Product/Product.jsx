import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <img
        src={product["images"][0].sm}
        alt=""
        className={styles["product-image"]}
      />
      <div className={styles["product-details"]}>
        <p>
          {product.name}
          <br />
          {"\u20A6 " + Math.round(product.price * 950)}
        </p>
        <button>Shop</button>
      </div>
    </div>
  );
};

export default Product;
