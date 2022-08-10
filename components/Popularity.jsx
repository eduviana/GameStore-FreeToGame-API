import React from "react";
import CardGame from "./CardGame";
import styles from "../styles/Popularity.module.css";
import Title from "./titles/Title";

const Popularity = ({ gamesPopularity }) => {
  const cutgamePopularity = gamesPopularity.slice(0, 12);


  return (
    <section className="container">
       <Title sectionName="Popularity" />
      <div className="card__container--wrap2">
        {cutgamePopularity.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default Popularity;
