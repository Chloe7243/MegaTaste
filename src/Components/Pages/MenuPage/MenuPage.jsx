import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";

import Banner from "../../Banner/Banner";
import Button from "../../UI/Button/Button";
import Quantity from "../../Quantity/Quantity";
import Container from "../../UI/Container/Container";

import vid from "../../../assets/mov_bbb.mp4";
import step1 from "../../../assets/step1.png";
import step2 from "../../../assets/step2.png";
import step3 from "../../../assets/step3.webp";
import arrow from "../../../assets/arrow.avif";
import styles from "./MenuPage.module.css";
import burger from "../../../assets/fastfood-1.webp";
import Category from "../../Category/Category";
import Size from "../../Size/size";
import Price from "../../Price/Price";

const categories = [
  {
    name: "Burger",
    img: "https://home-market-4.myshopify.com/cdn/shop/products/fastfood-1.png",
  },
  {
    name: "Pizza",
    img: "https://home-market-4.myshopify.com/cdn/shop/products/pizza-3.png",
  },
  {
    name: "Desserts",
    img: "https://s1.1zoom.me/big0/964/Sweets_Cake_Chocolate_White_background_Design_563125_1280x870.jpg",
  },
  {
    name: "Cocktails and Drinks",
    img: "https://img.freepik.com/free-vector/cocktail-glass-white-background_1308-112632.jpg",
  },
  {
    name: "Chicken",
    img: "https://home-market-4.myshopify.com/cdn/shop/products/chiken-4.png",
  },
  {
    name: "Steak",
    img: "https://home-market-4.myshopify.com/cdn/shop/products/chiken-4.png",
  },
  {
    name: "Soup",
    img: "https://www.corriecooks.com/wp-content/uploads/2018/09/vegetable-noodle-soup.jpg",
  },
  {
    name: "Salad",
    img: "https://static.vecteezy.com/system/resources/previews/021/818/869/large_2x/flying-vegetable-greek-salad-isolated-on-white-background-photo.jpg",
  },
  {
    name: "Pasta",
    img: "https://img.freepik.com/premium-photo/spaghetti-with-bolognese-sauce-basil-white-background_375133-1674.jpg?w=2000",
  },
];

const AllCategories = () => {
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    if (playVideo == true) {
      setTimeout(() => {});
    }
  }, [playVideo]);
  return (
    <>
      <Banner pageName={"Menu"} />
      <Container className={styles.categories__container}>
        <h1>Choose a Category</h1>
        <div className={styles["all-categories"]}>
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
          {categories.map((category, i) => (
            <Category img={category.img} name={category.name} key={i} />
          ))}
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
                setTimeout(() => setPlayVideo(false), 300);
              }}
              src={vid}
            />
          )) || (
            <div className={styles.video}>
              <a
                href="https://www.youtube.com/watch?v=HfpDl4R-n7g"
                target="_blank"
                rel="noreferrer"
              >
                <FaPlay />
              </a>
              <img src={arrow} alt="" />
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
            <Price price={3500} />
            <Size />
            <Quantity>
              <p>Quantity</p>
            </Quantity>
            <Button color="var(--secondary-color)">Add To Cart</Button>
          </div>
          <img src={burger} alt="" />
        </div>
      </Container>
    </>
  );
};
export default AllCategories;
