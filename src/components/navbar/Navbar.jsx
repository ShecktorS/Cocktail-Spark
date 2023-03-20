import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src="../../../public/favicon.png" alt="" className="Navbar__logo" />
      <ul className="Navbar__content">
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
