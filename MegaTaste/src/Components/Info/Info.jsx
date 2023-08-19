import { Link } from "react-router-dom";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { LuMailOpen, LuSmartphone } from "react-icons/lu";

import styles from "./Info.module.css";
import Container from "../UI/Container/Container";

const Info = () => {
  return (
    <Container className={styles.info}>
      <div className={styles["info__contact"]}>
        <span>
          <LuSmartphone /> Phone:+234 5454 5445
        </span>
        <span>
          <LuMailOpen /> Email: megataste@mail.com
        </span>
      </div>
      <div className={styles["info__social-media"]}>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
        <a href="">Facebook</a>
      </div>
      <div className={styles["info__account"]}>
        <PiUserCirclePlusLight />
        <span>
          <Link to="/login">Login</Link>/<Link to="/register">Register</Link>
        </span>
      </div>
    </Container>
  );
};

export default Info;
