import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  PiXThin,
  PiListLight,
  PiMagnifyingGlassLight,
  PiShoppingCartSimpleThin,
} from "react-icons/pi";

import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import logo from "../../assets/logo.png";
import Button from "../UI/Button/Button";
import logoName from "../../assets/logo_name.png";
import Container from "../UI/Container/Container";
import { useContext, useState } from "react";
import AppContexts from "../../contexts/app-contexts";

const NavBar = () => {
  const navigate = useNavigate();
  const ctx = useContext(AppContexts);
  const openCart = () => ctx.setCartVisibilityState(true);
  const toggleNavbar = () => ctx.setShowMobileNavbar(prev => !prev);
  const openSearchField = () => ctx.setSearchFieldVisibilityState(true);
  
  return (
    <Container className={styles.navbar__container}>
      <header className={styles.navbar}>
        <div className={styles["navbar__mobile"]}>
          <button onClick={toggleNavbar}>
            {ctx.showMobileNavbar ? <PiXThin/> : <PiListLight />}
          </button>
        </div>
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
          <NavLink
            to="news"
            className={({ isActive }) => isActive && styles.active}
          >
            News
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) => isActive && styles.active}
          >
            Contact
          </NavLink>
        </nav>
        <div className={styles["navbar-icons"]}>
          <button onClick={openSearchField}>
            <PiMagnifyingGlassLight />
          </button>
          <button onClick={openCart}>
            <PiShoppingCartSimpleThin />
            {ctx.cartProducts.length != 0 && (
              <p className={styles["number-of-items"]}>
                {ctx.cartProducts.length}
              </p>
            )}
          </button>
          <a
            onClick={() => navigate("/")}
            href="#reservations"
            className={styles.reserve}
          >
            <Button color={"var(--secondary-color)"}>Reserve A Table</Button>
          </a>
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
