import React from "react";
import Picture from "./Picture";
import Information from "./Information";
import Features from "./Features";


const GameInfo = ({ game }) => {
  console.log(game)

  const { screenshots, short_description, description } = game;

  return (
    <div className="grid__container">
      <Picture description={description} short_description={short_description} screenshots={screenshots}/>
      <Information game={game}/>
      <Features screenshots={screenshots} short_description={short_description}/>
    </div>
  );
};

export default GameInfo;
