import "./App.scss";
import Hero from "./components/hero";
import CocktailList from "./components/cocktailList";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <CocktailList />
      <Footer />
    </div>
  );
}

export default App;
