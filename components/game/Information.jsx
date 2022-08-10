import React from "react";
import styles from "../../styles/game/Information.module.css";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Information = ({ game }) => {
  const {
    game_url,
    publisher,
    release_date,
    genre,
    minimum_system_requirements,
  } = game;
  const { graphics, memory, os, processor, storage } =
    minimum_system_requirements;

  return (
    <div className="information">
      <div className={styles.container}>
        <button className={styles.button}>
          <FontAwesomeIcon
            icon={faGift}
            style={{ fontSize: 20, color: "#ffffff" }}
            className={styles.marginRight}
          />
          Buy As A Gift
        </button>

        <div className={styles.item}>
          <h5 className={styles.title}>STEAM LINK</h5>
          <span className={styles.info}>{game_url}</span>
        </div>
        <div className={styles.item}>
          <h5 className={styles.title}>PUBLISHER</h5>
          <span className={styles.info}>{publisher}</span>
        </div>
        <div className={styles.item}>
          <h5 className={styles.title}>RELEASE DATE</h5>
          <span className={styles.info}>{release_date}</span>
        </div>
        <div className={styles.item}>
          <h5 className={styles.title}>GENRE</h5>
          <span className={styles.info}>{genre}</span>
        </div>
        <div className={styles.item}>
          <h5 className={styles.title}>GRAPHICS</h5>
          <span className={styles.info}>{graphics}</span>
        </div>
        <div className={styles.item}>
          <h5 className={styles.title}>PROCESSOR</h5>
          <span className={styles.info}>{processor}</span>
        </div>
        <div className={styles.item}>
          <h5 className={styles.title}>MEMORY</h5>
          <span className={styles.info}>{memory}</span>
        </div>
        <div className={styles.item}>
          <h5 className={styles.title}>STORAGE</h5>
          <span className={styles.info}>{storage}</span>
        </div>
        <div className={styles.item}>
          <h5 className={styles.title}>OS</h5>
          <span className={styles.info}>{os}</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
