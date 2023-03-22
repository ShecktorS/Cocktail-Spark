import styles from "./index.module.scss";

const NavbarContent = () => {
  return (
    <ul className={styles.NavbarContent}>
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
      <li>Reservations</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavbarContent;
