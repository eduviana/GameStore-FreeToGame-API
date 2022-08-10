import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

import psLogo from "../public/pslogo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          layout="intrinsic"
          width={50}
          height={50}
          src={psLogo}
          alt="action category"
          className={styles.border__top}
        ></Image>
      </div>

      <div className={styles.info__container}>
        <ul className={styles.info}>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Website</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sitemap</a>
          <a href="#">Legal</a>
          <a href="#">About SIE</a>
          <a href="#">PSN Terms of Service</a>
          <a href="#">PS Store Cancellation Policy</a>
          <a href="#">Healt Warning</a>
          <a href="#">About Ratings</a>
        </ul>

        <ul className={styles.social__container}>
          <a href="#">Facebook</a>
          <a href="#">Twitter Policy</a>
          <a href="#">Youtube</a>
          <a href="#">Instagram</a>
          <a href="#">Android App</a>
          <a href="#">iOS App</a>
        </ul>

        <h3 className={styles.copy}>
          &copy; 2020 Sony Interactive Entertainment LLC{" "}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
