import styles from "./index.module.scss";

const HamburgerMenu = () => {
  return (
    <div className={styles.HamburgerMenu}>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
