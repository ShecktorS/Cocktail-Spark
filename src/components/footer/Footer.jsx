import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={`${styles.Footer}`}>
      <div className={styles.bridge}>
        <h2>Bridge</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          corporis laboriosam magni rerum?
        </p>
        <div>
          <p> 🕘 Lun-Dom: 09:00 - 21:00</p>
          <p> 🚩 Via dei Malapigghiati, 35, Bagheria </p>
          <p> 📞 +39 3333333565</p>
        </div>
      </div>
      <div className={styles.pages}>
        <h3>Pagine</h3>
        <p>Home</p>
        <p>Prenotazioni</p>
        <p>Menu</p>
        <p>Contatti</p>
      </div>
      <div className={styles.openingHours}>
        <h3>Orari di Apertura</h3>
        <div>
          <p>Lunedì-Venerdì:</p>
          <p>10:00-01:00</p>
        </div>
        <div>
          <p>Sabato-Domenica:</p>
          <p>10:00-03:00</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
