import React from "react";
import styles from "../styles/CardGenre.module.css";

export const CardGenre = ({ genre }) => {
  return (
    <article className={styles.card}>
      <style jsx>
        {`
          .backgroundImage {
            background-image: url(${genre.image_background});
            background-repeat: no-repeat;
            filter: brightness(.6);
            height: 200px;
            background-size: 100% 100%;
            opacity: 0.6;
            border-radius: 1rem;
            overflow: hidden;
          }
        `}
      </style>
      <div className="backgroundImage"></div>
      <span className={styles.name}>{genre.name}</span>
    </article>
  );
};
