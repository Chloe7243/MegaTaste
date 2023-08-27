import styles from "./Banner.module.css";
import { AiFillHome } from "react-icons/ai";

import bannerImage1 from "../../assets/banner1.png";
import bannerImage2 from "../../assets/banner2.png";

import Container from "../UI/Container/Container";

const Banner = ({ pageName, children }) => {
  return (
    <>
      <Container className={styles.banner__container}>
        <div>
          <h2>{pageName}</h2>
          <div className={styles.breadcrumb}>
            <span>
              <AiFillHome />
              Home
            </span>
            - <span>{pageName}</span>
          </div>
        </div>
        <div className={styles["banner-images"]}>
          <img src={bannerImage1} alt="" />
          <img src={bannerImage2} alt="" />
        </div>
      </Container>
      {children}
    </>
  );
};

export default Banner;
