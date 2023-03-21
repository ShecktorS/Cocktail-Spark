import "./index.scss";
import CocktailItem from "../cocktailItem";

const CocktailList = ({ cocktailList, setCocktailDetailContext }) => {
  return (
    <div className="CocktailList">
      {cocktailList.map((cocktail, id) => (
        <CocktailItem
          cocktail={cocktail}
          key={id}
          setCocktailDetailContext={setCocktailDetailContext}
        />
      ))}
    </div>
  );
};

export default CocktailList;
