import React, { useContext } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/game/Header";
import GameInfo from "../../components/game/GameInfo";
import Editions from "../../components/game/Editions";
import Addons from "../../components/game/Addons";
import Copyright from "../../components/game/Copyright";
import { GameContext } from "../../context/GameContext";

export default function Game({ game }) {

 
  
  const { screenshots } = game;
  

  return (
    <>
      <Layout title="Game info">
        <Header game={game} />
        <div className="container">
          <GameInfo game={game}/>
          <Editions game={game}/>
          <Addons game={game}/>
          <Copyright />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const urlGame = `https://www.freetogame.com/api/game?id=${id}`;
  const resGame = await fetch(urlGame);
  const game = await resGame.json();

  return {
    props: {
      game,
    },
  };
}
