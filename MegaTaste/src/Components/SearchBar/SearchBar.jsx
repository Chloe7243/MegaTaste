import Container from "../UI/Container/Container";
import styles from "./SearchBar.module.css";
import Input from "../UI/Input/Input";
import { HiOutlineSearch } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

const SearchBar = () => {
  return (
      <div className={"overlay"}>
      <Container className={styles.search__container}>
        <Input type="search" label="Search">
          <button className={styles.search__button}>
            <HiOutlineSearch />
          </button>
        </Input>
        <button>
          <TfiClose />
        </button>
      </Container>
    </div>
  );
};

export default SearchBar;
