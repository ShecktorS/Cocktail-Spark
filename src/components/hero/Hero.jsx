import styles from "./index.module.scss";
import Navbar from "../navbar";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <Navbar />
      <h1>I nostri Cocktail</h1>
    </div>
  );
};

export default Hero;
