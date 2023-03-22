import styles from "./index.module.scss";
import NavbarContent from "../navbarContent";

const Navbar = ({ setHamburgerMenu }) => {
  const onHandleClick = () => setHamburgerMenu((prev) => !prev);

  return (
    <div className={styles.Navbar}>
      <img
        src="../../../public/favicon.png"
        alt="logo image"
        className={styles.logo}
      />
      {/* <ul className={styles.content}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Contact</li>
      </ul> */}
      <NavbarContent className={styles.content} />
      <div className={styles.hamburger} onClick={onHandleClick}>
        🍔
      </div>
    </div>
  );
};

export default Navbar;
