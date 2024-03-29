import Product from "../../Product/Product";
import styles from "./CategoryPage.module.css";
import Container from "../../UI/Container/Container";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Banner from "../../Banner/Banner";
import Input from "../../UI/Input/Input";
import { PiCaretDownBold } from "react-icons/pi";
const CategoryPage = () => {
  const [sort, sortBy] = useState(null);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilterForm, setShowFilterForm] = useState(false);

  const sortProducts = (event) => {
    const sortMethod = event.target.value;
    sortBy(sortMethod);
  };

  const categoryName = useParams().name;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/menuItems/search?query=${categoryName}&number=100&cuisine=american&apiKey=58b794d21aef49a1924adbbc5aef7cc5`
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setProducts(data.menuItems);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    })();
  }, []);

  const toggleForm = () => {
    setShowFilterForm((prev) => !prev);
  };

  return (
    <>
      <Banner pageName={categoryName} />
      <Container className={styles["category-products"]} key={1}>
        <div className={styles.filters}>
          <div className={styles["filter-sort"]}></div>
          <div className={styles.filter}>
            <p>Filter:</p>
            <button onClick={toggleForm}>
              Price
              <PiCaretDownBold
                style={{ transform: showFilterForm && "rotate(180deg)" }}
              />
            </button>
            {showFilterForm && (
              <form className={styles.dropdown}>
                <div>
                  <p>The highest price is {}</p>
                  <button type="reset">Reset</button>
                </div>
                <div>
                  <span>
                    <p>{"\u20A6"}</p>
                    <Input type="number" label="From" />
                  </span>
                  <span>
                    <p>{"\u20A6"}</p>
                    <Input type="number" label="To" />
                  </span>
                </div>
              </form>
            )}
          </div>
          <div className={styles.sort}>
            <p>Sort by:</p>
            <select name="sort" id="" onChange={sortProducts}>
              <option value="">Best Selling</option>
              <option value="l_asc">Alphabetically, A - Z</option>
              <option value="l_desc">Alphabetically, Z - A</option>
              <option value="p_asc">Price, high to low</option>
              <option value="p_desc">Price, low to high</option>
            </select>
          </div>
          <div>
            <p>
              {products.length} Product{products.length == 1 ? "" : "s"}
            </p>
          </div>
        </div>
        <div className={styles.products}>
          {!isLoading &&
            products.length > 0 &&
            products.map((productDetails, idx) => (
              <Product product={productDetails} key={idx} />
            ))}
          {!isLoading && !error && products.length === 0 && (
            <p>No products found!</p>
          )}
          {!isLoading && error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
        </div>
      </Container>
    </>
  );
};

export default CategoryPage;
