import { IoLocationSharp } from "react-icons/io5";
import { LuMailOpen, LuSmartphone } from "react-icons/lu";

import Banner from "../Banner/Banner";
import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Banner pageName={"Contact us"} />
      <Container className={styles.contact__container}>
        <div>
          <h2>Get in Touch</h2>
          <div className={styles["contact-details"]}>
            <div>
              <span className={styles.icon}>
                <LuSmartphone />
              </span>
              <p>For Booking</p> <p>+234 5567 8789</p>
            </div>
            <div>
              <span className={styles.icon}>
                <LuMailOpen />
              </span>
              <p>For Private Dining</p> <p>Info@domain.com</p>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16146416.291703558!2d-2.0008616954333425!3d8.879947316492496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1692757398636!5m2!1sen!2sng"
            //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p>
            <IoLocationSharp /> 96 3rd Avenue Gwarimpa, Abuja, Nigeria
          </p>
          <p>
            <IoLocationSharp />
            50 jaypee street, Kubwa, Abuja, Nigeria
          </p>
        </div>
        <div>
          <h2>Have Question?</h2>
          <p>
            For all enquires, please contact us and one of our delightful team
            will be be happy to help.
          </p>
          <form action="" className={styles["contact-form"]}>
            <div>
              <Input label="Name" />
              <Input label={"Email"} />
            </div>
            <Input label="Phone number" />
            <Input label="Comment" />
            <Button color="var(--secondary-color)">Send Message</Button>
          </form>
        </div>
      </Container>
      ;
    </>
  );
};

export default Contact;
