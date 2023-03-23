import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { GET } from "./utils/http";
import Hero from "./components/hero";
import CocktailList from "./components/cocktailList";
import Footer from "./components/footer";
import CocktailDetail from "./components/cocktailDetail";
import HamburgerMenu from "./components/hamburgerMenu";
import Reservations from "./components/reservations";
import Popup from "./components/popup";

function App() {
  const [hamburgerMenuIsOpen, setHamburgerMenu] = useState(false);
  const [reservationsIsOpen, setReservations] = useState(false);
  const [userData, setUserData] = useState({});
  const [popupIsOpen, setPopup] = useState(false);
  const [cocktailList, setCocktailList] = useState([]);
  const [cocktailDetailContext, setCocktailDetailContext] = useState({
    cardIsclicked: false,
    payload: {},
  });
  useEffect(() => {
    GET().then(({ drinks }) => setCocktailList(drinks));
  }, []);

  return (
    <div className={styles.App}>
      <Hero
        setHamburgerMenu={setHamburgerMenu}
        setReservations={setReservations}
      />
      {!cocktailDetailContext.cardIsclicked && (
        <CocktailList
          cocktailList={cocktailList}
          setCocktailDetailContext={setCocktailDetailContext}
        />
      )}

      {cocktailDetailContext.cardIsclicked && (
        <CocktailDetail
          setCocktailDetailContext={setCocktailDetailContext}
          cocktailDetailContext={cocktailDetailContext}
        />
      )}
      <Footer />
      {hamburgerMenuIsOpen && (
        <HamburgerMenu
          setReservations={setReservations}
          setHamburgerMenu={setHamburgerMenu}
        />
      )}
      {reservationsIsOpen && (
        <Reservations
          setReservations={setReservations}
          setPopup={setPopup}
          setUserData={setUserData}
        />
      )}
      {popupIsOpen && <Popup userData={userData} />}
    </div>
  );
}

export default App;
