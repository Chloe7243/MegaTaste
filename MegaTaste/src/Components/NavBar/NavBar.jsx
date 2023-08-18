import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import logoName from "../../assets/logo_name.png";
import Container from "../UI/Container/Container";
const NavBar = () => {
  return (
    <Container className={styles.navbar__container}>
      <nav className={styles.navbar}>
        <div className={styles["navbar__mobile"]}></div>
        <div className={styles["navbar-logo"]}>
          <img src={logo} alt="" />
          <span className={styles.bar}></span>
          <img src={logoName} alt="" />
        </div>
        <div className={styles["navbar-links"]}></div>
        <div className={styles["navbar-icons"]}>
          <div>
            <span>
              <a>Reserve a Table</a>
            </span>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
