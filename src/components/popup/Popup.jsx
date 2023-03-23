import styles from "./index.module.scss";

const Popup = ({ userData }) => {
  const { date, time } = userData;
  const reversedDate = date.replace(/(\d+)-(\d+)-(\d+)/, "$3-$2-$1");
  //espressione per invertire la data

  return (
    <div className={styles.Popup}>
      <h2>La tua prenotazione è stata salvata!</h2>
      <p>
        Giorno <strong>{reversedDate}</strong> alle ore <strong>{time}</strong>
      </p>
      <p></p>
    </div>
  );
};

export default Popup;
