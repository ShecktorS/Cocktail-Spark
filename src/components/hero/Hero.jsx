import styles from "./index.module.scss";
import Navbar from "../navbar";

const Hero = ({ setHamburgerMenu }) => {
  return (
    <div className={styles.Hero}>
      <Navbar setHamburgerMenu={setHamburgerMenu} />
      <h1>I nostri Cocktail</h1>
    </div>
  );
};

export default Hero;
