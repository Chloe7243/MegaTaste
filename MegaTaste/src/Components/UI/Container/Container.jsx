import styles from "./Container.module.css";

const Container = ({ className, children, style }) => {
  return (
    <div className={`${styles.mainContainer} ${className || ''}`} style={style}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Container;
