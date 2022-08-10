import React from "react";
import CardRelevance from "./CardTrending";
import Title from "./titles/Title";
import styles from "../styles/Relevance.module.css";

const Relevance = ({ gamesRelevance }) => {
  const cutGamesTrending = gamesRelevance.slice(0, 3);


  return (
    <>
      <Title sectionName="Relevance" />
      <div className={styles.card__container}>
        {cutGamesTrending.map((game) => (
          <CardRelevance key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default Relevance;
