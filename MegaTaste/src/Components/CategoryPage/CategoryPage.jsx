import Product from "../Product/Product";
import styles from "./CategoryPage.module.css";
import Container from "../UI/Container/Container";

const CategoryPage = ({ categoryName, products, isLoading, error }) => {
  return (
    <>
      <Container className={styles["category-header"]} key={0}>
        <div className={styles["category-name"]}>
          <h2>{categoryName}</h2>
          <div className={styles["back-to-home"]}></div>
        </div>
        <div className={styles["category-images"]}></div>
      </Container>
      <Container className={styles["category-products"]} key={1}>
        <div className={styles.filter}>
          <h3>Filter</h3>
        </div>
        <div className={styles.products}>
          {!isLoading &&
            products.length > 0 &&
            products.map((productDetails, idx) => (
              <Product product={productDetails} key={idx} />
            ))}
          {!isLoading && !error && products.length === 0 && <p>No products found!</p>}
          {!isLoading && error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
        </div>
      </Container>
    </>
  );
};

export default CategoryPage;
