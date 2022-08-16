import React from "react";
import Image from "next/image";
import styles from "../../styles/game/Editions.module.css";

import image1 from "../../public/editions/image1.png";
import image2 from "../../public/editions/image2.png";
import AddToCart from "./AddToCart";
import Title2 from "../titles/Title2";

const Editions = ({ game }) => {
  const { thumbnail, short_description, platform, publisher } = game;

  return (
    <div className={styles.container__editions}>
      <Title2 sectionName="Editions" />
      <div className={styles.container__cards}>
        <div className={styles.card}>
          <div className={styles.container__image}>
            <Image
              width={500}
              height={400}
              layout="responsive"
              src={thumbnail}
              alt="image game"
              className={styles.image}
              
            />
          </div>
          <div className={styles.container__texts}>
            <div className={styles.container__platform__edition}>
              <span className={styles.platform}>{platform}</span>
              <span className={styles.edition}>{publisher}</span>
            </div>
            <p className={styles.paragraph}>
              {short_description}
            </p>
            <div className={styles.container__link__addToCart}>
              <span>VISIT STORAGE PAGE</span>
              <div className={styles.container__addToCart}>
                <span className={styles.price}>$119.99</span>
                <AddToCart />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container__image}>
            <Image
              width={500}
              height={400}
              layout="responsive"
              src={thumbnail}
              alt="image game"
              className={styles.image}
            />
          </div>
          <div className={styles.container__texts}>
            <div className={styles.container__platform__edition}>
              <span className={styles.platform}>{platform}</span>
              <span className={styles.edition}>{publisher}</span>
            </div>
            <p className={styles.paragraph}>
              {short_description}
            </p>
            <div className={styles.container__link__addToCart}>
              <span>VISIT STORAGE PAGE</span>
              <div className={styles.container__addToCart}>
                <span className={styles.price}>$119.99</span>
                <AddToCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editions;
