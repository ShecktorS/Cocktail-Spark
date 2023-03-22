import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img src="../../../public/favicon.png" alt="" className={styles.logo} />
      <ul className={styles.content}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
