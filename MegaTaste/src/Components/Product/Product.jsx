import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { BiShoppingBag } from "react-icons/bi";

const Product = ({ product }) => {
  const openModalDetails = () => {
    
  }
  return (
    <Link to={product.id} className={styles.product}>
      <img src={product.image} alt="Soup" className={styles["product-image"]} />
      <div className={styles["product-details"]}>
        <p>{product.title}</p>
        <button onClick={openModalDetails}>
          <BiShoppingBag />
        </button>
      </div>
    </Link>
  );
};

export default Product;
