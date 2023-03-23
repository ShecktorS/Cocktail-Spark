import styles from "./index.module.scss";

const NavbarContent = ({ setReservations }) => {
  const onHandleOpenRes = () => {
    setReservations(() => true);
  };

  return (
    <ul className={styles.NavbarContent}>
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
      <li onClick={onHandleOpenRes}>Reservations</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavbarContent;
