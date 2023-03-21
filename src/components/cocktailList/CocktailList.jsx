import "./index.scss";
import CocktailItem from "../cocktailItem";

const CocktailList = ({ cocktailList }) => {
  return (
    <div className="CocktailList">
      {cocktailList.map((cocktail, id) => (
        <CocktailItem cocktail={cocktail} key={id} />
      ))}
    </div>
  );
};

export default CocktailList;
