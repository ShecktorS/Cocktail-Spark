import styles from "./index.module.scss";
import NavbarContent from "../navbarContent";
import { useState } from "react";

const Navbar = ({ setHamburgerMenu, setReservations }) => {
  const onHandleClick = () => setHamburgerMenu((prev) => !prev);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.Navbar}>
      <img
        src="../../../public/favicon.png"
        alt="logo image"
        className={styles.logo}
      />
      <NavbarContent
        className={styles.content}
        setReservations={setReservations}
      />
      <div
        className={`${styles.hamburger} ${isClicked && styles.clicked}`}
        onClick={onHandleClick}
      >
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
