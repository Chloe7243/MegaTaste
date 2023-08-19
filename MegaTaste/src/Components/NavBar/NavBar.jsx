import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";

import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import Button from "../UI/Button/Button";
import logoName from "../../assets/logo_name.png";
import Container from "../UI/Container/Container";

const NavBar = () => {
  return (
    <Container className={styles.navbar__container}>
      <header className={styles.navbar}>
        <div className={styles["navbar__mobile"]}></div>
        <div className={styles["navbar-logo"]}>
          <img src={logo} alt="" />
          <span className={styles.bar}></span>
          <img src={logoName} alt="" />
        </div>
        <nav className={styles["navbar-links"]}>
          <Link to={"/"}>Home</Link>
          <Link to={"/categories"}>Menus</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/news"}>News</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <div className={styles["navbar-icons"]}>
          <button>
            <HiOutlineShoppingBag />
          </button>
          <button>
            <HiOutlineSearch />
          </button>
          <Button color={"var(--secondary-color)"}>
            <a href="#reservations">Reserve A Table</a>{" "}
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
