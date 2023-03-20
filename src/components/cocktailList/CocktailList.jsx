import "./index.scss";
import CocktailItem from "../cocktailItem";

const CocktailList = ({ cocktailList }) => {
  return (
    <div className="CocktailList">
      {cocktailList.map((cocktail) => (
        <CocktailItem cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailList;
