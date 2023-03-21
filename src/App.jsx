import "./App.scss";
import { useEffect, useState } from "react";
import { GET } from "./utils/http";
import Hero from "./components/hero";
import CocktailList from "./components/cocktailList";
import Footer from "./components/footer";
import CocktailDetail from "./components/cocktailDetail";

function App() {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    GET().then(({ drinks }) => setCocktailList(drinks));
  }, []);
  return (
    <div className="App">
      <Hero />
      <CocktailList cocktailList={cocktailList} />

      {/* <CocktailDetail /> */}
      <Footer />
    </div>
  );
}

export default App;
