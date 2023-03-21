import "./App.scss";
import { useEffect, useState } from "react";
import { GET } from "./utils/http";
import Hero from "./components/hero";
import CocktailList from "./components/cocktailList";
import Footer from "./components/footer";
import CocktailDetail from "./components/cocktailDetail";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [cardIsclicked, setCardClick] = useState(false);

  useEffect(() => {
    GET().then(({ drinks }) => setCocktailList(drinks));
  }, []);
  return (
    <div className="App">
      <Hero />
      {!cardIsclicked && (
        <CocktailList cocktailList={cocktailList} setCardClick={setCardClick} />
      )}

      {cardIsclicked && <CocktailDetail setCardClick={setCardClick} />}
      <Footer />
    </div>
  );
}

export default App;
