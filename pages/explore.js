import React from "react";
import FilterResults from "../components/explore/FilterResults";
import Filters from "../components/explore/Filters";
import Layout from "../components/Layout";

export default function Explore({ gamesPc }) {
  return (
    <>
      <Layout title="Explore">
       <div className="container results__filters--container">
       <FilterResults gamesPc={gamesPc} />
       <Filters />
       </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const urlRelevance = `https://www.freetogame.com/api/games?platform=pc`;
  const resRelevance = await fetch(urlRelevance);
  const gamesPc = await resRelevance.json();

  // const specificGame = `https://www.freetogame.com/api/game?id=452`;
  // const resSpecificGame = await fetch(specificGame);
  // const game = await resSpecificGame.json();


  return {
    props: {
      gamesPc,
    
    },
  };
}
