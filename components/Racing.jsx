import React from 'react'
import CardGame from './CardGame';
import Title from './titles/Title';
// import styles from "../styles/Racing.module.css";


const Racing = ({gamesRacing}) => {
    
  const cutGamesRacing = gamesRacing.slice(0,6);

  return (
    <section className="container">
        <Title sectionName="Racings" />
        <div className="card__container--wrap2">
        {cutGamesRacing.map((game)=> (
          <CardGame key={game.id} game={game} />

        ))}
        
      </div>


    </section>
  )
}

export default Racing

