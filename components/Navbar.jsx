import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "../hooks/useWindowSize";
import {
  faSearch,
  faChevronDown,
  faCircleUser,
  faCartShopping,
  faHeart,
  faHamburger,
  faList,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import PsStoreLogo from "../public/PsStoreLogo.png";
import Link from "next/link";

const Navbar = () => {
  const { width } = useWindowSize();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div className={styles.sony__bar}>SONY</div>
      <nav className={styles.container__navbar}>
        <Image
          src={PsStoreLogo}
          className={styles.logo}
          width={200}
          height={43}
          alt="website logo"
        />
        {width <= 768 ? (
          <>
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 30, color: "#383838" }}
              className={styles.hamburguer}
              onClick={handleToggle}
            />
            <ul
              className={`${styles.container__responsive} ${
                navbarOpen ? styles.showMenu : ""
              }`}
            >
              <Link href="#">
                <a className={styles.link} onClick={() => closeMenu()}>
                  My Playstation
                </a>
              </Link>
              <Link href="#">
                <a className={styles.link} onClick={() => closeMenu()}>
                  My Playstation
                </a>
              </Link>
              <Link href="#">
                <a className={styles.link} onClick={() => closeMenu()}>
                  My Playstation
                </a>
              </Link>
              <Link href="#">
                <a className={styles.link} onClick={() => closeMenu()}>
                  My Playstation
                </a>
              </Link>
            </ul>
          </>
        ) : (
          <div className={styles.container__navigation}>
            <div className={styles.container__username}>
              <div className={styles.username}>
                <span className={styles.username}>My Playstation</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ fontSize: 11, color: "#383838" }}
                />
              </div>
            </div>

            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ fontSize: 40, color: "#383838" }}
            />

            <FontAwesomeIcon
              icon={faHeart}
              style={{ fontSize: 22, color: "#383838" }}
            />

            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ fontSize: 22, color: "#383838" }}
            />

            <div className={styles.container__search}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  fontSize: 18,
                  color: "#383838ce",
                  position: "absolute",
                  left: "15%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
              <input
                type="search"
                placeholder="Search"
                className={styles.search}
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
