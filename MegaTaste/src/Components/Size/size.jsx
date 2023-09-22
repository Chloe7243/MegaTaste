import { useState } from "react";
import styles from "./size.module.css";

const Size = () => {
  const [active, setActive] = useState(0);
  const makeActive = (event) => {
    const target = event.target.textContent;
    setActive(target === "Large" ? 0 : target === "Medium" ? 1 : 2);
  };

  return (
    <div className={styles.size}>
      <p>Size</p>
      <button onClick={makeActive} className={active === 0 && styles.active}>
        Large
      </button>
      <button onClick={makeActive} className={active === 1 && styles.active}>
        Medium
      </button>
      <button onClick={makeActive} className={active === 2 && styles.active}>
        Small
      </button>
    </div>
  );
};

export default Size;
