import Image from "next/image";
import React from "react";
import styles from "../styles/Genres.module.css";
import Title from "./titles/Title";

import action from "../public/genres/Action.png";
import arcade from "../public/genres/Arcade.png";
import driving from "../public/genres/Driving.png";
import fighting from "../public/genres/Fighting.png";
import horror from "../public/genres/Horror.png";
import kids from "../public/genres/Kids.png";
import party from "../public/genres/Party.png";
import platform from "../public/genres/Platform.png";
import rpg from "../public/genres/RPG.png";
import shooter from "../public/genres/Shooter.png";
import simulation from "../public/genres/Simulation.png";
import sports from "../public/genres/Sports.png";

const Genres = () => {
  return (
    <section className="container">
      <Title sectionName="Genres" />
      <div className={styles.card__container}>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={action}
            alt="action category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={arcade}
            alt="arcade category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={driving}
            alt="driving category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={fighting}
            alt="fighting category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={horror}
            alt="horror category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={kids}
            alt="kids category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={party}
            alt="party category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={platform}
            alt="platform category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={rpg}
            alt="rpg category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={shooter}
            alt="shooter category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={simulation}
            alt="simulation category"
          ></Image>
        </div>
        <div className={styles.card}>
          <Image
            layout="responsive"
            width={180}
            height={190}
            src={sports}
            alt="sports category"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Genres;
{
  `backgroundImage ${styles.container__card}`;
}
