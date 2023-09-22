import Container from "../UI/Container/Container";
import styles from "./SearchBar.module.css";
import Input from "../UI/Input/Input";
import { HiOutlineSearch } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { useContext } from "react";
import AppContexts from "../../contexts/app-contexts";

const SearchBar = () => {
  const ctx = useContext(AppContexts);
  const closeSearchField = () => ctx.setSearchFieldVisibilityState(false);
  return (
    ctx.searchFieldIsOpen && (
      <>
        <Container className={styles.search__container}>
          <Input type="search" label="Search">
            <button className={styles.search__button}>
              <HiOutlineSearch />
            </button>
          </Input>
          <button>
            <TfiClose onClick={closeSearchField} />
          </button>
        </Container>
        <div className={"overlay"} onClick={closeSearchField}>
      </div>
      </>
    )
  );
};

export default SearchBar;
