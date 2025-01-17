import Container from "../ui/Container/Container";
import styles from "./SearchBar.module.css";
import Input from "../ui/Input/Input";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContexts from "../../contexts/app-contexts";

const SearchBar = () => {
  const ctx = useContext(AppContexts);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchResults = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/search?query=${query}&number=30&apiKey=58b794d21aef49a1924adbbc5aef7cc5`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const dataObj = data.searchResults.filter(
        (obj) => obj.name === "Menu Items"
      );
      ctx.setSearchResult(dataObj[0].results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (query.length != 0) {
      const fetchTimer = setTimeout(fetchResults, 2500);
      return () => clearTimeout(fetchTimer);
    }
  }, [query]);

  const closeSearchField = () => ctx.setSearchFieldVisibilityState(false);
  const clearInput = () => setQuery("");

  return (
    ctx.searchFieldIsOpen && (
      <>
        <Container className={styles.search__container}>
          <div>
            <Input
              type="search"
              label="Search"
              value={query}
              onChange={(event) => {
                setIsLoading(true);
                setQuery(event.target.value);
              }}
            >
              <div className={styles.actions}>
                {query.length != 0 && (
                  <>
                    <button onClick={clearInput}>
                      <AiOutlineCloseCircle />
                    </button>
                    <span></span>
                  </>
                )}
                <Link
                  style={{ pointerEvents: query.length == 0 && "none" }}
                  to={`/search-results/${query}`}
                  onClick={query.length != 0 && closeSearchField}
                >
                  <HiOutlineSearch />
                </Link>
              </div>
            </Input>
            <button>
              <TfiClose onClick={closeSearchField} />
            </button>
          </div>
          {
            <div className={styles.searchResults}>
              {query.length != 0 && isLoading && <p>Loading...</p>}
              {query.length != 0 && !isLoading && error && <p>{error}</p>}
              {query.length != 0 &&
                !isLoading &&
                !error &&
                (ctx.searchResult.length != 0 ? (
                  ctx.searchResult.map((result, i) => (
                    <Link
                      key={i}
                      to={`/menu/${query}/${result.id}`}
                      onClick={closeSearchField}
                    >
                      <img src={result.image} alt="" /> <p>{result.name}</p>
                    </Link>
                  ))
                ) : (
                  <p>No Products Found</p>
                ))}
            </div>
          }
        </Container>
        <div className={"overlay"} onClick={closeSearchField}></div>
      </>
    )
  );
};

export default SearchBar;
