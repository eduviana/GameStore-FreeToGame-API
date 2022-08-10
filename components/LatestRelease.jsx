import React from "react";
import CardGame from "./CardGame";
import Title from "./titles/Title";
import styles from "../styles/LatestRelease.module.css";

const LatestRelease = ({ gamesLatestReleases }) => {
  
  const cutGamesLatestReleases = gamesLatestReleases.slice(0, 6);

  return (
    <section className="container">
      <Title sectionName="Latest Release" />
      <div className={styles.card__container}>
        <div className={`${styles.card} ${styles.card__1}`}></div>
        <div className={`${styles.card} ${styles.card__2}`}></div>
        <div className={`${styles.card} ${styles.card__3}`}></div>
      </div>

      <div className="card__container--wrap2">
        {cutGamesLatestReleases.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default LatestRelease;
