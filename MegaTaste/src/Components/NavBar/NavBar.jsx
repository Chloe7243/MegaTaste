import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";

import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import logo from "../../assets/logo.png";
import Button from "../UI/Button/Button";
import logoName from "../../assets/logo_name.png";
import Container from "../UI/Container/Container";

const NavBar = () => {
  return (
    <Container className={styles.navbar__container}>
      <header className={styles.navbar}>
        <div className={styles["navbar__mobile"]}></div>
        <Logo logo={logo} logoName={logoName} color="var(--primary-color)" />
        <nav className={styles["navbar-links"]}>
          <NavLink
            to=""
            className={({ isActive }) => isActive && styles.active}
          >
            Home
          </NavLink>
          <NavLink
            to="menu"
            className={({ isActive }) => isActive && styles.active}
          >
            Menus
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => isActive && styles.active}
          >
            About
          </NavLink>
          {/* <NavLink
            to="news"
            className={({ isActive }) => isActive && styles.active}
          >
            News
          </NavLink> */}
          <NavLink
            to="contact"
            className={({ isActive }) => isActive && styles.active}
          >
            Contact
          </NavLink>
        </nav>
        <div className={styles["navbar-icons"]}>
          <button>
            <HiOutlineSearch />
          </button>
          <button>
            <HiOutlineShoppingBag />
          </button>
          <Button color={"var(--secondary-color)"}>
            <Link to="/#reservations">Reserve A Table</Link>
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
