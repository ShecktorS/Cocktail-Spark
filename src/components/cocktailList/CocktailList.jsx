import "./index.scss";
import CocktailItem from "../cocktailItem";

const CocktailList = ({ cocktailList, setCardClick }) => {
  return (
    <div className="CocktailList">
      {cocktailList.map((cocktail, id) => (
        <CocktailItem
          cocktail={cocktail}
          key={id}
          setCardClick={setCardClick}
        />
      ))}
    </div>
  );
};

export default CocktailList;
