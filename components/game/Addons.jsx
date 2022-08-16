import React from "react";
import Title2 from "../titles/Title2";
import styles from "../../styles/game/Addons.module.css";

const Addons = ({ game }) => {

  const { screenshots, title, platform, publisher } = game;

  return (
    <div className={styles.container__addons}>
      <Title2 sectionName="Add-ons" />
      <div className={styles.card__container}>
        <article className={styles.cardgame}>
          <style jsx>
            {`
              .background {
                background-image: url(${screenshots[0].image});
                max-width: 100%;
              }
            `}
          </style>

          <div className={`background ${styles.header}`}></div>
          <div className={styles.body}>
            <h4 className={styles.title}>Season Pass</h4>
            <h5 className={styles.publisher}>{title}</h5>
          </div>
          <div className={styles.footer}>
            <div className={styles.container__platform__category}>
              <span className={styles.platform}>{platform}</span>
              <span className={styles.platform}>Add-on</span>
            </div>
            <button className={styles.price}>$59.99</button>
          </div>
        </article>

        <article className={styles.cardgame}>
          <style jsx>
            {`
              .background {
                background-image: url(${screenshots[1].image});
                max-width: 100%;
              }
            `}
          </style>
          <div className={`background ${styles.header}`}></div>
          <div className={styles.body}>
            <h4 className={styles.title}>Season Pass</h4>
            <h5 className={styles.publisher}>{title}</h5>
          </div>
          <div className={styles.footer}>
            <div className={styles.container__platform__category}>
              <span className={styles.platform}>{platform}</span>
              <span className={styles.platform}>Add-on</span>
            </div>
            <button className={styles.price}>$59.99</button>
          </div>
        </article>

        <article className={styles.cardgame}>
          <style jsx>
            {`
              .background {
                background-image: url(${screenshots[2].image});
                background-size: cover;
                
              }
            `}
          </style>
          <div className={`background ${styles.header}`}></div>
          <div className={styles.body}>
            <h4 className={styles.title}>Season Pass</h4>
            <h5 className={styles.publisher}>{title}</h5>
          </div>
          <div className={styles.footer}>
            <div className={styles.container__platform__category}>
              <span className={styles.platform}>{platform}</span>
              <span className={styles.platform}>Add-on</span>
            </div>
            <button className={styles.price}>$59.99</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Addons;
