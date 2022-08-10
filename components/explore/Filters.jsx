import styles from "../../styles/Filters.module.css";
import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";

const Filters = () => {

  // const {edu} = useContext(GameContext);

  

  const [filtersSelected, setFiltersSelected] = useState({
    ps5: false,
    ps4: false,
    psvr: false,
    ps2classics: false,
    game: false,
    addon: false,
    bundle: false,
    singleplayer: false,
    multiplayer: false,
    coop: false,
    crossplay: false,
    action: false,
    arcade: false,
    fighting: false,
    horror: false,
    kids: false,
    party: false,
    platform: false,
    racing: false,
    rpg: false,
    shooter: false,
    simulation: false,
    sports: false,
  });

  const prueba = () => {
    const res = Object.entries(filtersSelected);
    const data = res.filter(f => f[1] === true)
   


}
prueba()

  const handleClick = (e) => {
    setFiltersSelected({
      ...filtersSelected,
      [e.target.id]: !filtersSelected[e.target.id],
    });
  };

  return (
    <form className={styles.filters__container}>
      <h4 className={styles.title}>Filters</h4>

      <div className={styles.spacer}>
        <div className={styles.flex__row__between}>
          <span className={styles.name}>Platform</span>
          <span className={styles.expand}>━</span>
        </div>

        <div
          id="ps5"
          onClick={handleClick}
          className={styles.options__container__selected}
        >
          <span className={styles.option}>PS5</span>
          {/* <span className={styles.check}>✓</span> */}
        </div>
        <div
          id="ps4"
          onClick={handleClick}
          className={styles.options__container__selected}
        >
          <span className={styles.option}>PS4</span>
          {/* <span className={styles.check}>✓</span> */}
        </div>
        <div
          id="psvr"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>PS VR</span>
        </div>
        <div
          id="ps2classics"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>PS2 Classics</span>
        </div>
      </div>

      <div className={styles.spacer}>
        <div className={styles.flex__row__between}>
          <span className={styles.name}>Media Type</span>
          <span className={styles.expand}>━</span>
        </div>

        <div
          id="game"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Game</span>
        </div>
        <div
          id="addon"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Add-on</span>
        </div>
        <div
          id="bundle"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Bundle</span>
        </div>
      </div>

      <div className={styles.spacer}>
        <div className={styles.flex__row__between}>
          <span className={styles.name}>Features</span>
          <span className={styles.expand}>━</span>
        </div>

        <div
          id="singleplayer"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Single Player</span>
        </div>
        <div
          id="multiplayer"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Multiplayer</span>
        </div>
        <div
          id="coop"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Co-op</span>
        </div>
        <div
          id="crossplay"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Crossplay</span>
        </div>
      </div>

      <div className={styles.spacer}>
        <div className={styles.flex__row__between}>
          <span className={styles.name}>Genre</span>
          <span className={styles.expand}>━</span>
        </div>

        <div
          id="action"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Action</span>
        </div>
        <div
          id="arcade"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Arcade</span>
        </div>
        <div
          id="fighting"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Fighting</span>
        </div>
        <div
          id="horror"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Horror</span>
        </div>
        <div
          id="kids"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Kids & Family</span>
        </div>
        <div
          id="party"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Party, Music & Dance</span>
        </div>
        <div
          id="platform"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Platform</span>
        </div>
        <div
          id="racing"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Driving & Racing</span>
        </div>
        <div
          id="rpg"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>RPG</span>
        </div>
        <div
          id="shooter"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Shooter</span>
        </div>
        <div
          id="simulation"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Simulation</span>
        </div>
        <div
          id="sports"
          onClick={handleClick}
          className={styles.options__container}
        >
          <span className={styles.option}>Sports</span>
        </div>
      </div>
    </form>
  );
};

export default Filters;
