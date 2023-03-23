import styles from "./index.module.scss";
import { useState } from "react";

const Reservations = ({ setReservations, setPopup, setUserData }) => {
  const onHandleCloseRes = () => {
    setReservations(() => false);
  };
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeSurname = (e) => setSurname(e.target.value);
  const onChangeDate = (e) => setDate(e.target.value);
  const onChangeTime = (e) => setTime(e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      name,
      surname,
      date,
      time,
    });
    setReservations(false);

    setPopup(true);

    setTimeout(() => {
      setPopup(false);
      console.log(userData);
    }, 3000);
  };

  return (
    <div className={styles.Reservations}>
      <div className={styles.overlay} onClick={onHandleCloseRes}></div>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <label htmlFor="text">Inserisci il tuo nome</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.name}
            required
            placeholder="Pippo"
            onChange={onChangeName}
            value={name}
          />
          <label htmlFor="surname">Inserisci il tuo cognome</label>
          <input
            type="text"
            name="surname"
            id="surname"
            className={styles.surname}
            required
            placeholder="Rossi"
            onChange={onChangeSurname}
            value={surname}
          />
          <hr />
          <input
            type="date"
            name="date"
            id="date"
            className={styles.date}
            required
            onChange={onChangeDate}
          />
          <input
            type="time"
            name="time"
            id="time"
            className={styles.time}
            required
            onChange={onChangeTime}
          />
          <input type="submit" value="Conferma" className={styles.submit} />
        </form>
      </div>

      {/* htmlFor per inserire il for del file html e legarlo nell'input a name e id
      Ricorda sempre in controlled componente ---->  nel value mettere il valore dello useState 
      mentre nell'onChange il set dello useState      
      
      */}
    </div>
  );
};

export default Reservations;
