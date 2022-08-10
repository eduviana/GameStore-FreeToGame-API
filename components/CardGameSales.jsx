import React from "react";
import styles from "../styles/CardGame.module.css";

const CardGameSales = ({ game }) => {
  const { title, thumbnail, platform, publisher } = game;

  return (
    <section className={styles.cardgame}>
      <style jsx>
        {`
          .cardHeader {
            border-radius: 1.5rem;
            width: 230px;
            height: 170px;
            background-size: cover;
            background-image: url(${thumbnail});
            background-position: center;
            
          }
        `}
      </style>
      <div className={styles.card_container}>
        <div className={`cardHeader ${styles.cardHeader}`}></div>
        <div className={styles.cardBody}>
          <h4>{title}</h4>
          <h5>{publisher}</h5>
        </div>
        <div className={styles.cardFooter}>
          <p>{platform}</p>
          <button><span className={styles.sale}>$59.99</span> $29.99</button>
        </div>
      </div>
    </section>
  );
};

export default CardGameSales;
