import styles from "./Logo.module.css";

const Logo = ({ logo, logoName, color }) => {
  return (
    <div className={styles["app-logo"]}>
      <img src={logo} alt="" />
      <span className={styles.bar} style={{ backgroundColor: color }}></span>
      <img src={logoName} alt="" />
    </div>
  );
};

export default Logo;
