import Image from "next/image";
import React from "react";
import styles from "../../styles/game/Features.module.css";

import image1 from "../../public/features/image1.png";
import image2 from "../../public/features/image2.png";
import image3 from "../../public/features/image3.png";
import Title2 from "../titles/Title2";

const Features = ({ screenshots, short_description }) => {

  return (
    <div className="features">
      <Title2 sectionName="Key Features" />
      <div className={styles.container__cards}>
        <div className={styles.card}>
         <div>
         <Image
            width={300}
            height={240}
            src={screenshots[0].image}
            layout="responsive"
            alt="image 1"
            className={styles.image}
          />
         </div>
          <h4 className={styles.card__title}>Visceral Combat</h4>
          <p className={styles.paragraph}>
            {short_description}
          </p>
        </div>
        <div className={styles.card}>
          <div>
          <Image
           width={300}
           height={240}
            src={screenshots[1].image}
            layout="responsive"
            alt="image 1"
            className={styles.image}
          />
          </div>
          <h4 className={styles.card__title}>A Dark-Age Open World</h4>
          <p className={styles.paragraph}>
          {short_description}
          </p>
        </div>
        <div className={styles.card}>
         <div>
         <Image
           width={300}
           height={240}
            src={screenshots[2].image}
            layout="responsive"
            alt="image 1"
            className={styles.image}
          />
         </div>
          <h4 className={styles.card__title}>Lead Epic Raids</h4>
          <p className={styles.paragraph}>
          {short_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
