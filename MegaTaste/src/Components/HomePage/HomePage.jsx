import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomePage.module.css";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const HomePage = () => {
  var settings = {
    dots: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplaySpeed: 5000,
    prevArrow: <LiaAngleLeftSolid />,
    nextArrow: <LiaAngleRightSolid />,
    dotsClass: styles["carousel-dots"],
  };
  return (
    <>
      <div className={styles.carousel__container}>
        <Slider {...settings} className={styles.carousel}>
          <Container className={`${styles.hero_1} ${styles.hero}`}>
            <div>
              <h2>The perfect place to enjoy fantastic food</h2>
              <p>
                Festive dining at Farthing where we are strong believers in
                using the very best produce
              </p>
            </div>
          </Container>
          <Container className={`${styles.hero_2} ${styles.hero}`}>
            <div>
              <h2>
                Grilled Cheese <span>Burger</span>
              </h2>
              <p>Limited Time Offer</p>
            </div>
          </Container>
          <Container className={`${styles.hero_3} ${styles.hero}`}>
            <div>
              <h2>
                Delicious <span>Hot Pizza</span>
              </h2>
              <p>Dont Miss this deal</p>
            </div>
          </Container>
          <Container className={`${styles.hero_4} ${styles.hero}`}>
            <div>
              <h2>
                For the sweet tooths <span>Dessert</span>
              </h2>
              <p>We only bring you best</p>
            </div>
          </Container>
          <Container className={`${styles.hero_5} ${styles.hero}`}>
            <div>
              <h2>
                summer Drink <span>Cocktail</span>
              </h2>
              <p>Limited Time Offer</p>
            </div>
          </Container>
        </Slider>
        <div className={styles.button}>
          <Button color="var(--secondary-color)">
            <Link to="menu">View Our Menu</Link>
          </Button>
        </div>
        <div className={styles.controls}>
          <span>
            <LiaAngleLeftSolid />
          </span>
          <span>
            <LiaAngleRightSolid />
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
