import React from "react";
import Title from "./titles/Title";
import CardGame from "./CardGame";

const Rpg = ({ gamesMmorpg }) => {
 
  const cutGamesMmorpg = gamesMmorpg.slice(0, 6);


  return (
    <section className="container">
      <Title sectionName="MMO-RPG" />
      <div className="card__container--wrap2">
        {cutGamesMmorpg.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default Rpg;
