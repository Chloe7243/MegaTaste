import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";

import Banner from "../Banner/Banner";
import Button from "../UI/Button/Button";
import Quantity from "../Quantity/Quantity";
import Container from "../UI/Container/Container";

import vid from "../../assets/mov_bbb.mp4";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.webp";
import styles from "./AllCategories.module.css";
import burger from "../../assets/fastfood-1.webp";

const AllCategories = () => {
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    if (playVideo == true) {
      setTimeout(() => {});
    }
  }, [playVideo]);
  return (
    <>
      <Banner pageName={"Categories"} />
      <Container className={styles.categories__container}>
        <h1>Choose a Category</h1>
        <div className={styles["all-categories"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className={styles.openings}>
            <h3>Opening Times</h3>
            <table>
              <tr>
                <th>Mon</th>
                <td>8am - 10pm</td>
              </tr>
              <tr>
                <th>Tue</th>
                <td>8am - 10pm</td>
              </tr>
              <tr>
                <th>Wed</th>
                <td>8am - 10pm</td>
              </tr>
              <tr>
                <th>Thu</th>
                <td>8am - 10pm</td>
              </tr>
              <tr>
                <th>Fri</th>
                <td>8am - 10pm</td>
              </tr>
              <tr>
                <th>Sat - Sun</th>
                <td>10am - 10pm</td>
              </tr>
            </table>
            <p>
              <b>Closed on Holidays!</b>
            </p>
            <span className={styles.contact}>
              <p>+234 5678 244 8907</p>
              <p>No 96, 3rd Avenue, Gwarimpa Abuja</p>
            </span>
          </div>
          <div></div>
        </div>
      </Container>
      <div className={styles.test}>
        <div className={styles.outer}></div>
        <Container className={styles["how-we-work"]}>
          <div>
            <h3>EASY ORDER IN 3 STEPS</h3>
            <h1>How We Work</h1>
            <div>
              <article>
                <div className={styles.step}>
                  <img src={step1} alt="" />
                </div>
                <h3>Explore Menu</h3>
                <p>
                  A range of powerful tools for viewing, querying and filtering
                  your data.
                </p>
              </article>
              <article>
                <div className={styles.step}>
                  <img src={step2} alt="" />
                </div>
                <h3>Choose a dish</h3>
                <p>
                  A range of powerful tools for viewing, querying and filtering
                  your data.
                </p>
              </article>
              <article>
                <div className={styles.step}>
                  <img src={step3} alt="" />
                </div>
                <h3>Place Order</h3>
                <p>
                  A range of powerful tools for viewing, querying and filtering
                  your data.
                </p>
              </article>
            </div>
          </div>
          {(playVideo && (
            <video
              autoPlay
              controls
              onEnded={() => {
                setTimeout(() => setPlayVideo(false), 2000);
              }}
              src={vid}
            />
          )) || (
            <div className={styles.video}>
              <button onClick={() => setPlayVideo(true)}>
                <FaPlay />
              </button>
            </div>
          )}
        </Container>
      </div>

      <Container className={styles.deal__container}>
        <h1>Deal of the Week</h1>
        <div className={styles.deal}>
          <div className={styles.time}>
            <span>
              {0} <br />
              DAYS
            </span>
            <span>
              {10} <br />
              HOUR
            </span>
            <span>
              {26} <br />
              MIN
            </span>
            <span>
              {54} <br />
              SEC
            </span>
          </div>
          <div className={styles.details}>
            <span className={styles.percentage}>Save up to 20%</span>
            <h2>Chicken Burger</h2>
            <ul className={styles.benefits}>
              <li>Fresh and Tasty</li>
              <li>Fresh Ingredients</li>
              <li>Better for your health</li>
              <li>Best in organic foods</li>
            </ul>
            <p className={styles.price}>
              <span>{3500 - 0.2 * 3500}</span>
              <span>{3500}</span>
            </p>
            <div className={styles.size}>
              <p>Size</p>
              <button>Large</button>
              <button>Medium</button>
              <button>Small</button>
            </div>
            <div>
              <p>Quantity</p>
            <Quantity/>
            </div>
            <Button color="var(--secondary-color)">Add To Cart</Button>
          </div>
          <img src={burger} alt="" />
        </div>
      </Container>
    </>
  );
};
export default AllCategories;
