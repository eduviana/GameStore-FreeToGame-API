import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { randomPrice } from "../helpers/randomPrice";
import styles from "../styles/CardGame.module.css";

const CardGame = ({ game }) => {
  const router = useRouter();

  const { id, title, thumbnail, platform, publisher } = game;

  


  return (
    <div className={styles.cardgame} onClick={() => router.push(`/game/${id}`)}>
      <div>
      <Image 
        layout="responsive"
        width={200}
        height={180}
        src={thumbnail}
        alt={`game ${title}`}
      />
      </div>
      <div className={styles.body}>
        <span className={styles.title}>{title}</span>
        <span className={styles.publisher}>{publisher} hs</span>
        <div className={styles.container__platform}>
            <span className={styles.platform}>{platform}</span>
        </div>
       
      </div>
      <div className={styles.footer}>
        <button suppressHydrationWarning className={styles.price}>${randomPrice()}</button>
      </div>
    </div>
  );
};

export default CardGame;


{/* <div className={styles.cardgame} onClick={() => router.push(`/game/${id}`)}>
      <style jsx>
        {`
          .cardHeader {
            background-image: url(${background_image});
          }
        `}
      </style>

      <article className={`cardHeader ${styles.header}`}></article>
      <div className={styles.body}>
        <span className={styles.title}>{name}</span>
        <span className={styles.publisher}>Estimated duration: {playtime} hs</span>
        <div className={styles.container__platform}>
            <span className={styles.platform}>Metacritic: {metacritic}</span>
        </div>
       
      </div>
      <div className={styles.footer}>
        <button suppressHydrationWarning className={styles.price}>${randomPrice()}</button>
      </div>
    </div> */}