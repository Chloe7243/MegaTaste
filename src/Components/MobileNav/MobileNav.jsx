import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

import styles from "./MobileNav.module.css";
import AppContexts from "../../contexts/app-contexts";

const MobileNav = () => {
  const ctx = useContext(AppContexts);
  const closeMobileNav = () => ctx.setShowMobileNavbar(false);
  return (
    ctx.showMobileNavbar && (
      <>
        <div className={styles["mobile-nav"]}>
          <nav className={styles["mobile-links"]}>
            <NavLink
              to=""
              className={({ isActive }) => isActive && styles.active}
              onClick={closeMobileNav}
            >
              Home
            </NavLink>
            <NavLink
              to="menu"
              className={({ isActive }) => isActive && styles.active}
              onClick={closeMobileNav}
            >
              Menus
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) => isActive && styles.active}
              onClick={closeMobileNav}
            >
              About
            </NavLink>
            <NavLink
              to="news"
              className={({ isActive }) => isActive && styles.active}
              onClick={closeMobileNav}
            >
              News
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) => isActive && styles.active}
              onClick={closeMobileNav}
            >
              Contact
            </NavLink>
          </nav>
          <div>
            <p className={styles.auth}>
              <Link to="login" onClick={closeMobileNav}>
                Login
              </Link>
              /
              <Link to="register" onClick={closeMobileNav}>
                Register
              </Link>
            </p>
            <p className={styles["social-media"]}>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaFacebook />
              </span>
            </p>
          </div>
        </div>
        <div className="overlay" onClick={closeMobileNav}></div>
      </>
    )
  );
};

export default MobileNav;
