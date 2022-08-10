
import React from "react";
import styles from "../../styles/game/Picture.module.css";


const Picture = ({ description, short_description, screenshots}) => {
  return (
    <>
     <style jsx>
        {`
          .background {
            background-image: url(${screenshots[1].image});
            opacity: .8;
            

          }
        `}
      </style>
      <div className="background picture">
        <h3 className={styles.title}>
          {short_description}
        </h3>
        <div className={styles.container__texts}>
          <p className={styles.text}>
           {description}
          </p>

        </div>
      </div>
    </>
  );
};

export default Picture;







