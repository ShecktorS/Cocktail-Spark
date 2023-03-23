import styles from "./index.module.scss";

const HamburgerMenu = ({ setReservations, setHamburgerMenu }) => {
  const onHandleCloseRes = () => {
    setReservations(() => true);
    setHamburgerMenu(() => false);
  };

  return (
    <div className={styles.HamburgerMenu}>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li onClick={onHandleCloseRes}>Reservations</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
