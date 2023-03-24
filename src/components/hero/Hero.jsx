// import styles from "./index.module.scss";
import styled from "styled-components";
import Navbar from "../navbar";

const HeroWrapper = styled.div`
  height: 80vh;
  width: 100vw;
  background-image: linear-gradient(
      360deg,
      #131816 10%,
      rgba(31, 31, 31, 0.925) 60%,
      rgba(0, 0, 0, 0.575)
    ),
    url("https://images.pexels.com/photos/1189257/pexels-photo-1189257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-blend-mode: grayscale;
  object-fit: cover;
  position: relative;
`;

const HeroTitle = styled.h1`
  color: #131816;
  background-color: #e9e9e9;
  position: absolute;
  font-size: 4rem;
  left: calc(100vw - 90%);
  top: 300px;
  padding: 20px 70px 20px 20px;

  @media (max-width: 680px) {
    font-size: 3rem;
  }
`;

const Hero = ({ setHamburgerMenu, setReservations }) => {
  return (
    <HeroWrapper>
      <Navbar
        setHamburgerMenu={setHamburgerMenu}
        setReservations={setReservations}
      />
      <HeroTitle>I nostri cocktails</HeroTitle>
    </HeroWrapper>
  );
};

/*  return (
    <div className={styles.Hero}>
      <Navbar
        setHamburgerMenu={setHamburgerMenu}
        setReservations={setReservations}
      />
      <h1>I nostri Cocktail</h1>
    </div>
  ); */

export default Hero;
