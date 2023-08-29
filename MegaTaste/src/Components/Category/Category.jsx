import { Link, NavLink } from "react-router-dom";
import styles from "./Category.module.css";
import { GoArrowRight } from "react-icons/go";

const Category = ({ img, name }) => {

return (
    <Link
      to={`/menu/${name.toLowerCase().replaceAll(" ", "-")}`}
      className={styles.category}
    >
      <img src={img} alt="" />
      <h4>
        {name} <GoArrowRight />
      </h4>
    </Link>
  );
};

export default Category;
