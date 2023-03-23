import styles from "./index.module.scss";
import NavbarContent from "../navbarContent";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setHamburgerMenu, setReservations }) => {
  const onHandleClick = () => setHamburgerMenu((prev) => !prev);

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
      <div className={styles.hamburger} onClick={onHandleClick}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
