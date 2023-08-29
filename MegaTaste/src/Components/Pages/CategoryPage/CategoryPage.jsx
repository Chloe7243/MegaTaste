import Product from "../../Product/Product";
import styles from "./CategoryPage.module.css";
import Container from "../../UI/Container/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../../Banner/Banner";
import Input from "../../UI/Input/Input";
import { PiCaretDownBold } from "react-icons/pi";
const CategoryPage = () => {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilterForm, setShowFilterForm] = useState(false);

  const categoryName = useParams().name;
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/menuItems/search?query=${categoryName}&number=100&cuisine=american&apiKey=abd8629f34ba4258ae77c41d30f0e1ae`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data.menuItems);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    })();
  }, []);

  function imageExists(image_url) {
    var http = new XMLHttpRequest();

    http.open("HEAD", image_url, false);
    http.send();

    return http.status != 404;
  }

  const toggleForm = () => {
    setShowFilterForm((prev)=> !prev)
  };

  return (
    <>
      <Banner pageName={categoryName} />
      <Container className={styles["category-products"]} key={1}>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <p>Filter:</p>
            <button onClick={toggleForm}>
              Price <PiCaretDownBold />
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
            <select name="" id="">
              <option value="">Best Selling</option>
              <option value="">Alphabetically, A - Z</option>
              <option value="">Alphabetically, Z - A</option>
              <option value="">Price, high to low</option>
              <option value="">Price, low to high</option>
            </select>

            <p>
              {products.length} Product{products.length == 1 ? "" : "s"}
            </p>
          </div>
        </div>
        <div className={styles.products}>
          {!isLoading &&
            products.length > 0 &&
            products
              .filter((details) => imageExists(details.img) != false)
              .map((productDetails, idx) => (
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
