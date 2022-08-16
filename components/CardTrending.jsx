import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { randomPrice } from "../helpers/randomPrice";
import styles from "../styles/CardRelevance.module.css";

const CardRelevance = ({ game }) => {
  const router = useRouter();

  const { id, title, thumbnail } = game;

  return (
    <article
      className={styles.container__card}
      onClick={() => router.push(`/game/${id}`)}
    >
      <Image
        className={styles.image}
        src={thumbnail}
        layout="intrinsic"
        width={260}
        height={200}
        alt="image most rating game"
      />
      <div className={styles.card}>
        <p suppressHydrationWarning className={styles.price}>${randomPrice()}</p>
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </article>
  );
};

export default CardRelevance;

