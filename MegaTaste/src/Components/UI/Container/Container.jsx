import styles from "./Container.module.css";

const Container = ({ className, children }) => {
  return (
    <div className={`${styles.mainContainer} ${className || ''}`}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Container;
