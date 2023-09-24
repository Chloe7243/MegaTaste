import { FaStar, FaQuoteLeft } from "react-icons/fa";

import Container from "../../UI/Container/Container";
import Banner from "../../Banner/Banner";
import styles from "./AboutPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import service1 from "../../../assets/step1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feedback1 from "../../../assets/feedback-1.jpeg";
import feedback2 from "../../../assets/feedback-2.jpeg";
import feedback3 from "../../../assets/feedback-3.jpeg";
import tea from "../../../assets/tea.svg";
import truck from "../../../assets/truck.svg";
import cocktail from "../../../assets/cocktail.svg";
import food from "../../../assets/step2.png";
import history1 from "../../../assets/history-1.jpeg";
import history2 from "../../../assets/history-2.jpeg";
import history3 from "../../../assets/history-3.jpeg";
import history4 from "../../../assets/history-4.jpeg";

const AboutPage = () => {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    speed: 1000,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplaySpeed: 5000,
    dotsClass: `slick-dots ${styles["about-dots"]}`,
  };
  return (
    <>
      <Banner pageName={"About us"} />
      <Container className={styles.about__container}>
        <h2>about</h2>
        <p>
          Welcome to our charming restaurant, where delectable flavors and
          inviting ambiance intertwine. Indulge in a gastronomic journey as our
          skilled chefs craft culinary delights that tantalize the senses.
          Whether it's a romantic evening or a casual get-together, our
          restaurant offers a perfect setting with impeccable service.
          Experience a symphony of taste that lingers long after your visit,
          making every moment memorable. Join us and discover a world of
          culinary excellence that's simply unforgettable.
        </p>
        <div className={styles.service}>
          <div>
            <p>Restaurant</p>
            <div className={styles["hover-content"]}>
              <h3>Restaurant</h3>
              <p>
                Savor the art of culinary craftsmanship in every exquisite dish
                at this restaurant.
              </p>
              <a href="/menu">View Menu</a>
            </div>
          </div>
          <div>
            <p>Cocktail</p>
            <div className={styles["hover-content"]}>
              <h3>Cocktail</h3>
              <p>
                Sip on pure delight as this cocktail weaves together a symphony
                of flavors that dance on your palate.
              </p>
              <a href="/menu/cocktails">View Cocktails</a>
            </div>
          </div>
          <div>
            <p>Private Dining</p>
            <div className={styles["hover-content"]}>
              <h3>Private Dining</h3>
              <p>
                Experience the epitome of personalized luxury and intimacy in
                our exclusive private dining spaces.
              </p>
              <a onClick={() => navigate("/")} href="#reservations">
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h2>Restaurant History</h2>
        <div className={styles.histories}>
          <div className={styles.history}>
            <div>
              <img src={history1} alt="" />
              <div>2010</div>
            </div>
            <div className={styles.details}>
              <h4>Founded Idea</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, libero adipisci suscipit rem dignissimos
                praesentium.
              </p>
            </div>
          </div>
          <div className={styles.history}>
            <div>
              <img src={history2} alt="" />
              <div>2012</div>
            </div>
            <div className={styles.details}>
              <h4>Established Restaurant</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, libero adipisci suscipit rem dignissimos
                praesentium.
              </p>
            </div>
          </div>
          <div className={styles.history}>
            <div>

            <img src={history3} alt="" />
            <div>2014</div>
            </div>
            <div className={styles.details}>
              <h4>Integrated Technology</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, libero adipisci suscipit rem dignissimos
                praesentium.
              </p>
            </div>
          </div>
          <div className={styles.history}>
            <div>
              <img src={history4} alt="" />
              <div>2017</div>
            </div>
            <div className={styles.details}>
              <h4>Established Branches</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, libero adipisci suscipit rem dignissimos
                praesentium.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container style={{ padding: "10rem 2rem" }}>
        <h2>We Provide best services</h2>
        <div className={styles.services}>
          <div className={styles.a_service}>
            <div>
              <img src={tea} alt="" />
            </div>
            <h4>Afternoon Tea</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              doloremque?
            </p>
          </div>
          <div className={styles.a_service}>
            <div>
              <img src={truck} alt="" />
            </div>
            <h4>Takeaway & Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              doloremque?
            </p>
          </div>
          <div className={styles.a_service}>
            <div>
              <img src={cocktail} alt="" />
            </div>
            <h4>Wine & Cocktails</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              doloremque?
            </p>
          </div>
          <div className={styles.a_service}>
            <div>
              <img src={food} alt="" />
            </div>
            <h4>Alfresco Dining</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              doloremque?
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <h2>Our Customer Feedbacks</h2>
        <div className={styles.feedbacks}>
          <Slider {...settings}>
            <div className={styles.feedback}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam fugit qui mollitia debitis earum vel officiis cum
                vitae. Autem eos quibusdam consequuntur iste praesentium
                assumenda, odio molestias officia cumque ducimus.
              </p>
              <div className={styles.ratings}>
                <h4>Bratlee Haminat</h4>
                <span>
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                </span>
              </div>
            </div>
            <div className={styles.feedback}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam fugit qui mollitia debitis earum vel officiis cum
                vitae. Autem eos quibusdam consequuntur iste praesentium
                assumenda, odio molestias officia cumque ducimus.
              </p>
              <div className={styles.ratings}>
                <h4>Bratlee Haminat</h4>
                <span>
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                </span>
              </div>
            </div>
            <div className={styles.feedback}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam fugit qui mollitia debitis earum vel officiis cum
                vitae. Autem eos quibusdam consequuntur iste praesentium
                assumenda, odio molestias officia cumque ducimus.
              </p>
              <div className={styles.ratings}>
                <h4>Bratlee Haminat</h4>
                <span>
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                  <FaStar className={styles.star} />
                </span>
              </div>
            </div>
          </Slider>
          <div className={styles["feedback-images"]}>
            <img src={feedback1} alt="" />
            <img src={feedback2} alt="" />
            <img src={feedback3} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutPage;
