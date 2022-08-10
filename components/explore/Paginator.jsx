import React from "react";
import styles from "../../styles/Paginator.module.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Paginator = () => {
  return (
    <div className={styles.paginator}>
      <span className={styles.arrow}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: 20, color: "#ffffff" }}
        />
      </span>
      <span className={styles.page__active}>1</span>
      <span className={styles.page}>2</span>
      <span className={styles.page}>3</span>
      <span className={styles.arrow}>
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ fontSize: 20, color: "#ffffff" }}
        />
      </span>
    </div>
  );
};

export default Paginator;
