import Button from "../../UI/Button/Button";
import Container from "../../UI/Container/Container";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomePage.module.css";
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

import food from "../../../assets/food.png";
import fchicken from "../../../assets/fried_chicken.png";
import bq_chicken from "../../../assets/bq_chicken.png";
import pv_dining from "../../../assets/private-dining-2.jpeg";
import pv_dining2 from "../../../assets/private-dining-3.jpeg";
import circ_text from "../../../assets/curved-text.png";

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
          <Link to="menu">
            <Button color="var(--secondary-color)">View Our Menu</Button>
          </Link>
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

      <Container className={styles.welcome__container}>
        <div>
          <img src={pv_dining} alt="" />
          <div className={styles["c-text"]}>
            <img src={circ_text} alt="" />
            <img src={bq_chicken} alt="" />
          </div>
        </div>
        <div>
          <h3>Welcome to MEgaTaste</h3>
          <h2>Feel the taste of foods</h2>
          <p>
            Discover a culinary haven where exceptional food meets exclusive
            private dining. Our restaurant offers a seamless fusion of
            delectable dishes prepared with precision, while providing intimate
            private dining spaces for any occasion. Immerse yourself in a
            symphony of flavors, surrounded by an ambiance that exudes warmth
            and comfort. Elevate your dining experience with us, where every
            bite and moment is designed to be truly unforgettable.{" "}
          </p>
        </div>
        <div>
          <img src={pv_dining2} alt="" />
          <div className={styles["c-text"]}>
            <img src={circ_text} alt="" />
            <img src={fchicken} alt="" />
          </div>
        </div>
      </Container>
      <Container className={styles.benefits__container}>
        <h2>Tasty Grilled Dishes & Good Restaurant</h2>
        <img src={food} alt="" />
        <ul>
          <li>Exclusivity with our private dining</li>
          <li>Healthy, expertly prepared dishes</li>
          <li>Farm-fresh Ingredients</li>
          <li>Award-winning Restaurant</li>
        </ul>
        {/* <Button color={"var(--secondary-color)"}>
            <Link to="/#reservations">Reserve A Table</Link>
          </Button> */}
      </Container>

      <Form
        id="reservations"
        containerClasname={styles.reservations__container}
      >
        <div>
          <Input type="text" label="Name" />
          <div>
            <Input type="date" label="Date" />
            <Input type="time" label="Time" />
          </div>
        </div>
        <div>
          <Input type="tel" label="Phone Number" />
          <div className={styles.people}>
            <select name="" id="">
              <option value="1">Only me</option>
              <option value="2">Couple</option>
              <option value="3-4">3-4</option>
              <option value="5-6">5-6</option>
              <option value="7-10">7-10</option>
              <option value="11+">11+</option>
            </select>
            <label htmlFor="">Number of people</label>
          </div>
        </div>
        <Button color={"var(--primary-color)"}>Reserve a Table</Button>
      </Form>
    </>
  );
};

export default HomePage;
