import Layout from "../components/Layout";
import Header from "../components/Header";
import Popularity from "../components/Popularity";
import Banner from "../components/Banner";
import LatestRelease from "../components/LatestRelease";
import Rpg from "../components/Rpg";
import Racing from "../components/Racing";
import Genres from "../components/Genres";
import Relevance from "../components/Relevance";

export default function Home({
  gamesRelevance,
  gamesPopularity,
  gamesLatestReleases,
  gamesMmorpg,
  gamesRacing,
}) {

  return (
    <>
      <Layout title="Inicio">
        <Header />
        <Relevance gamesRelevance={gamesRelevance} />
        <Popularity gamesPopularity={gamesPopularity} />
        <Banner background={"/psnowadd.webp"} />
        <LatestRelease gamesLatestReleases={gamesLatestReleases} />
        <Rpg gamesMmorpg={gamesMmorpg} />
        <Banner background={"/psplus.png"} />
        <Racing gamesRacing={gamesRacing} />
        <Genres  />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const urlRelevance = `https://www.freetogame.com/api/games?sort-by=relevance`;
  const urlPopularity = `https://www.freetogame.com/api/games?sort-by=popularity`;
  const urlLatestReleases = `https://www.freetogame.com/api/games?sort-by=release-date`;
  const urlMmorpg = `https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc`;
  const urlRacing = `https://www.freetogame.com/api/games?category=racing`;


  const [ resRelevance, resPopularity, resLatestReleases, resMmorpg, resRacing ] = await Promise.all([
    fetch(urlRelevance),
    fetch(urlPopularity),
    fetch(urlLatestReleases),
    fetch(urlMmorpg),
    fetch(urlRacing)
  ]);

  const [ gamesRelevance, gamesPopularity, gamesLatestReleases, gamesMmorpg, gamesRacing ] = await Promise.all([
     resRelevance.json(),
     resPopularity.json(),
     resLatestReleases.json(),
     resMmorpg.json(),
     resRacing.json()
  ])

  return {
    props: {
      gamesRelevance,
      gamesPopularity,
      gamesLatestReleases,
      gamesMmorpg,
      gamesRacing,
    },
  };
}











// export async function getServerSideProps() {
//   const urlRelevance = `https://www.freetogame.com/api/games?sort-by=relevance`;
//   const resRelevance = await fetch(urlRelevance);
//   const gamesRelevance = await resRelevance.json();

//   const urlPopularity = `https://www.freetogame.com/api/games?sort-by=popularity`;
//   const resPopularity = await fetch(urlPopularity);
//   const gamesPopularity = await resPopularity.json();

//   const urlLatestReleases = `https://www.freetogame.com/api/games?sort-by=release-date`;
//   const resLatestReleases = await fetch(urlLatestReleases);
//   const gamesLatestReleases = await resLatestReleases.json();

//   const urlMmorpg = `https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc`;
//   const resMmorpg = await fetch(urlMmorpg);
//   const gamesMmorpg = await resMmorpg.json();

//   const urlRacing = `https://www.freetogame.com/api/games?category=racing`;
//   const resRacing = await fetch(urlRacing);
//   const gamesRacing = await resRacing.json();

//   return {
//     props: {
//       gamesRelevance,
//       gamesPopularity,
//       gamesLatestReleases,
//       gamesMmorpg,
//       gamesRacing,
//     },
//   };
// }