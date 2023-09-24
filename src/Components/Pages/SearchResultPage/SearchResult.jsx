import { useContext } from "react";
import Banner from "../../Banner/Banner";
import Product from "../../Product/Product";
import Container from "../../UI/Container/Container";
import AppContexts from "../../../contexts/app-contexts";

import styles from "./SearchResult.module.css";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const ctx = useContext(AppContexts);
  const products = ctx.searchResult;
  return (
    <>
      <Banner pageName={"Search Results"} />
      <Container className={styles["search-result__container"]}>
        <div className={styles.sort}>
          <p>Sort by:</p>
          <select name="sort" id="">
            <option value="">Relevance</option>
            <option value="l_asc">Alphabetically, A - Z</option>
            <option value="l_desc">Alphabetically, Z - A</option>
          </select>
          <p>
            {products.length} Product{products.length == 1 ? "" : "s"}
          </p>
        </div>
        <div className={styles.products}>
          {products.length > 0 ? (
            products.map((productDetails, idx) => (
              <Product product={productDetails} key={idx} query={useParams().name} />
            ))
          ) : (
            <p>No products found!</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default SearchResult;
