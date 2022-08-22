import React from "react";
import Image from "next/image";
import styles from "../../styles/game/Header.module.css";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import assasin from "../../public/assasin.jpg";
import ico from "../../public/Ico.png";
import Gallery from "../../components/game/Gallery";
import AddToCart from "./AddToCart";
import { randomPrice } from "../../helpers/randomPrice";

const Header = ({ game }) => {
  console.log(game)
  const {
    title,
    publisher,
    screenshots,
    developer,
    genre,
    minimum_system_requirements,
    platform,
    release_date,
    thumbnail,

  } = game;

  return (
    <>
      <style jsx>
        {`
          .background {
            background-image: url(${screenshots[0].image});
          }
        `}
      </style>

      <div className={`background ${styles.hero}`}>
        <div className="container">
          <div className={styles.container__infoGame__price}>
            <div className={styles.container__infogame}>
            <div className={styles.portrait}>
            <Image
                layout="intrinsic"
                width={200}
                height={200}
                src={thumbnail}
                alt="thumbnail game"
                className={styles.thumbnail}
              ></Image>
            </div>

              <div className={styles.container__description}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.container__platform__publisher}>
                  <span className={styles.platform}>{platform}</span>
                  <span className={styles.publisher}> {publisher} </span>
                </div>
                <div className={styles.container__infoLegal}>
                  <div className={styles.container__imageLegal}>
                    <Image
                      layout="intrinsic"
                      width={58}
                      height={80}
                      src={ico}
                      alt="thumbnail game"
                    ></Image>
                  </div>
                  <div className={styles.container__legalTexts}>
                    <p className={styles.texts}>{developer}</p>
                    <p className={styles.texts}>{genre}</p>
                    <p className={styles.texts}>{release_date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.container__price}>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ fontSize: 25, color: "#ffffff" }}
              />
              <span suppressHydrationWarning={true} className={styles.price}>
                ${randomPrice()}
              </span>
              <AddToCart />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gallery__container}>
        <Gallery />
      </div>
    </>
  );
};

export default Header;
