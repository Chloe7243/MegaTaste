import styles from "./Container.module.css";

const Container = ({ className, children, style, id }) => {
  return (
    <div className={`${styles.mainContainer} ${className || ''}`} style={style} id={id}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Container;
