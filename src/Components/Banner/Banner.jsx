import styles from "./Banner.module.css";
import { AiFillHome } from "react-icons/ai";

import bannerImage1 from "../../assets/steak.png";
import bannerImage2 from "../../assets/cocktail.png";

import Container from "../UI/Container/Container";

const Banner = ({ pageName, children }) => {
  return (
    <>
      <Container className={styles.banner__container}>
        <div>
          <h2>{pageName.replaceAll("-", " ")}</h2>
          <div className={styles.breadcrumb}>
            <span>
              <AiFillHome />
              Home
            </span>
            - <span>{pageName.replaceAll("-", " ")}</span>
          </div>
        </div>
      </Container>
      {children}
    </>
  );
};

export default Banner;
