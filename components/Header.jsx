import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";


const Header = () => {
  return (
    <>
      <div className={styles.background}>
        <div className="container">
          <div className={styles.container__pages}>
            <Link href="/">
              <a className={styles.page__active}>DISCOVERY</a>
            </Link>
            <Link href="/explore">
              <a className={styles.page}>EXPLORE</a>
            </Link>
            <Link href="#">
              <a className={styles.page}>COLLECTIONS</a>
            </Link>
            <Link href="#">
              <a className={styles.page}>DEALS</a>
            </Link>
            <Link href="#">
              <a className={styles.page}>SUBSCRIPTIONS</a>
            </Link>
          </div>
          <div className={styles.container__hero}>
            <div className={styles.container__specialGame}>
              <div className={styles.container__image}>
                <Image
                  layout="responsive"
                  width={311}
                  height={163}
                  src="/headerLogo.svg"
                  alt="title best game of the year"
                ></Image>
              </div>
              <button className={styles.price}>$49.99</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import styles from "../styles/Header.module.css";
// import Relevance from "./Relevance";

// const Header = ({ gamesRelevance }) => {
//   return (
//     <div className={styles.background}>
//       <div className="container">
//         <div className={styles.container__pages}>
//           <div className={styles.pages}>
//             <Link href="/">
//               <a className={styles.page__active}>DISCOVERY</a>
//             </Link>
//             <Link href="/explore">
//               <a className={styles.page}>EXPLORE</a>
//             </Link>
//           </div>
//           <div className={styles.pages}>
//             <Link href="#">
//               <a className={styles.page}>COLLECTIONS</a>
//             </Link>
//             <Link href="#">
//               <a className={styles.page}>DEALS</a>
//             </Link>
//             <Link href="#">
//               <a className={styles.page}>SUBSCRIPTIONS</a>
//             </Link>
//           </div>
//         </div>
//         <div className={styles.container__hero}>
//           <div className={styles.container__specialGame}>
//             <div className={styles.container__image}>
//               <Image
//                 layout="responsive"
//                 width={311}
//                 height={163}
//                 src="/headerLogo.svg"
//                 alt="title best game of the year"
//               ></Image>
//             </div>
//             <button className={styles.price}>$49.99</button>
//           </div>
//         </div>

//         <Relevance gamesRelevance={gamesRelevance} />
//       </div>
//     </div>
//   );
// };

// export default Header;
