import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { BiShoppingBag } from "react-icons/bi";

const Product = ({ product, query }) => {
  const openModalDetails = () => {};

  return (
    <Link
      to={query ? `/menu/${query}/${product.id}` : `${product.id}`}
      className={styles.product}
    >
      <div className={styles["product-image"]}>
        <img src={product.image} alt={product.title || product.name} />
      </div>
      <div className={styles["product-details"]}>
        <div>
          <p className={styles.title}>{product.title || product.name}</p>
          <p className={styles.price}>
            {"\u20A6 " + Math.round(product.id / 100)}
          </p>
        </div>
        <button className={styles.showModal} onClick={openModalDetails}>
          <BiShoppingBag />
        </button>
      </div>
    </Link>
  );
};

export default Product;
