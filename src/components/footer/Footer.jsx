import "./index.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__bridge">
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
      <div className="Footer__pages">
        <h3>Pagine</h3>
        <p>Home</p>
        <p>Prenotazioni</p>
        <p>Menu</p>
        <p>Contatti</p>
      </div>
      <div className="Footer__openingHours">
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
      <h3 className="Footer__instagram">Instagram</h3>
    </div>
  );
};

export default Footer;
