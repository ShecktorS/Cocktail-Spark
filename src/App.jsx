import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { GET } from "./utils/http";
import Hero from "./components/hero";
import CocktailList from "./components/cocktailList";
import Footer from "./components/footer";
import CocktailDetail from "./components/cocktailDetail";
import HamburgerMenu from "./components/hamburgerMenu";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [cocktailDetailContext, setCocktailDetailContext] = useState({
    cardIsclicked: false,
    payload: {},
  });
  const [hamburgerMenuIsOpen, setHamburgerMenu] = useState(false);
  useEffect(() => {
    GET().then(({ drinks }) => setCocktailList(drinks));
  }, []);

  return (
    <div className={styles.App}>
      <Hero setHamburgerMenu={setHamburgerMenu} />
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
      {hamburgerMenuIsOpen && <HamburgerMenu />}
    </div>
  );
}

export default App;
