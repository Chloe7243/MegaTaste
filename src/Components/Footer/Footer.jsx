import Logo from "../Logo/Logo";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import FooterLink from "../UI/FooterLink/FooterLink";

import styles from "./Footer.module.css";
import visa from "../../assets/visa.svg";
import amex from "../../assets/amex.svg";
import paypal from "../../assets/paypal.svg";
import logo from "../../assets/logo__white.png";
import mastercard from "../../assets/mastercard.svg";
import logoName from "../../assets/logo_name__white.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container className={styles.footer__container}>
      <footer>
        <div>
          <div className={styles.openings}>
            <Logo logo={logo} logoName={logoName} color="var(--light-color)" />
            <h4>RESTAURANT & BAR</h4>
            <div>
              <h4>Openings:</h4>
              <p>Monday - Friday: 8am - 10pm</p>
              <p>Saturday - Sunday: 10am - 8pm</p>
            </div>
            <p>
              <b>Location:</b>
              <a href="https://goo.gl/maps/MWpna93xGHMv2aPJ6">
                3rd Avenue, Gwarimpa, Abuja
              </a>
            </p>
          </div>
          <div className={styles["footer-links"]}>
            <h2>About</h2>
            <ul>
              <FooterLink to="/menu">Our Specials</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink>FAQs</FooterLink>
            </ul>
          </div>
          <div className={styles["footer-links"]}>
            <h2>Menu</h2>
            <ul>
              <FooterLink to="/menu/burgers">Burger</FooterLink>
              <FooterLink to="/menu/cocktails">Cocktails</FooterLink>
              <FooterLink to="/menu/bbq">Bar & BBQ</FooterLink>
              <FooterLink to="/menu/steaks">Steaks</FooterLink>
              <FooterLink to="/menu/chickens">Chicken</FooterLink>
              <FooterLink to="/menu/desserts">Desserts</FooterLink>
              <FooterLink onClick={() => navigate("/")} to="#reservations">
                Reserve a Table
              </FooterLink>
            </ul>
          </div>
          <div className={styles["footer-links"]}>
            <h2>Newsletter</h2> <p>Get recent news and updates</p>{" "}
            <div className={styles.newsletter}>
              <Input type="email" label="Email"></Input>
              <Button color="var(--secondary-color)">Subscribe</Button>
            </div>
          </div>
        </div>
        <div>
          <h4>&copy; 2030, MegaTaste | Restaurant and Bar</h4>
          <span>
            <img src={visa} alt="" />
            <img src={amex} alt="" />
            <img src={paypal} alt="" />
            <img src={mastercard} alt="" />
          </span>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
