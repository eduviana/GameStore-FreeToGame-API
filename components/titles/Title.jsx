import React from "react";
import styles from "../../styles/Title.module.css";

const Title = ({
  sectionName = "Section Title Here",
  title = "VIEW ALL +",
  border = true,
}) => {
  const verifyBorder = (border = true) => {
    if (border) {
      return styles.viewAll;
    } else {
      return styles.sortBy;
    }
  };

  return (
    <div className={styles.container__texts}>
      <h3 className={styles.sectionName}>{sectionName}</h3>
      <span className={verifyBorder(border)}>{title}</span>
    </div>
  );
};

export default Title;
