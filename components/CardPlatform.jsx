import React from "react";
import styles from "../styles/CardPlatform.module.css";

const CardPlatform = ({ platform }) => {
  console.log(platform);
  return (
    <article className={styles.card}>
      <style jsx>
        {`
          .backgroundImage {
            background-image: url(${platform.image_background});
            height: 300px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            
          }
        `}
      </style>
      <div className={`backgroundImage`}></div>
      <span>{platform.name}</span>
    </article>
  );
};

export default CardPlatform;
