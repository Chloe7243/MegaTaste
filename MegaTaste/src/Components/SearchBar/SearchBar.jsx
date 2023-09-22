import Container from "../UI/Container/Container";
import styles from "./SearchBar.module.css";
import Input from "../UI/Input/Input";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { RxDividerVertical } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import AppContexts from "../../contexts/app-contexts";

const SearchBar = () => {
  const ctx = useContext(AppContexts);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (query.length != 0) {
      (async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            "https://api.spoonacular.com/food/search?query=apple&number=2&apiKey=abd8629f34ba4258ae77c41d30f0e1ae"
          );
          console.log(response);
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
      })();
    }
  }, [query]);

  const closeSearchField = () => ctx.setSearchFieldVisibilityState(false);
  const clearInput = () => setQuery("");
  const displaySearchResult = () => {};
  const getFunc = (event) => {
    console.log(event.target);
  };
  return (
    ctx.searchFieldIsOpen && (
      <>
        <Container className={styles.search__container}>
          <div>
            <Input
              type="search"
              label="Search"
              maxLength={80}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
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

                <button
                  className={styles.search__button}
                  onClick={displaySearchResult}
                >
                  <HiOutlineSearch />
                </button>
              </div>
            </Input>
            <button>
              <TfiClose onClick={closeSearchField} />
            </button>
          </div>
          {
            <div className={styles.searchResults}>
              {query.length != 0 && isLoading && <p>Loading...</p>}
              {query.length != 0 && !isLoading && <p>{error}</p>}
            </div>
          }
        </Container>
        <div className={"overlay"} onClick={closeSearchField}></div>
      </>
    )
  );
};

export default SearchBar;
