import styles from "./Container.module.css";

const Container = ({ className, children, style, id, onClick }) => {
  return (
    <div className={`${styles.mainContainer} ${className || ''}`} style={style} id={id} onClick={onClick}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Container;
