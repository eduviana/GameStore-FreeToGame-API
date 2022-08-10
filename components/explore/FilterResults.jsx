import React, { useState } from "react";
import CardGame from "../CardGame";
import Title from "../titles/Title";
import Paginator from "./Paginator";

const FilterResults = ({ gamesPc }) => {
  const firstPageGamesPc = gamesPc.slice(0, 30);

  const [cards, setCards] = useState(firstPageGamesPc);
  // const [page, setPage] = useState(0);

  return (
    <section className="cards__container--explore">
      <Title sectionName="New Releases" title="Sort By ⌄" border={false} />
      <div className="card__container--wrap2">
        {cards.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </div>

     <Paginator />
    </section>
  );
};

export default FilterResults;
