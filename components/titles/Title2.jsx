import React from "react";
import styles from "../../styles/game/Title2.module.css";


const Title2 = ({ sectionName = "Section Title Here" }) => {
  return (
    <div className={styles.container__title}>
      <h2 className={styles.title}>{sectionName}</h2>

    </div>
  );
};

export default Title2;
