import "./index.scss";
import "animate.css";

const CocktailItem = ({ cocktail }) => {
  return (
    <div className="CocktailItem" onClick={() => console.log("pippo")}>
      <div className="CocktailItem__card">
        <img
          src={cocktail.strDrinkThumb}
          alt="drink.strDrink"
          className="CocktailItem__card__image"
        />
        <h2 className="CocktailItem__card__name">{cocktail.strDrink}</h2>
      </div>
    </div>
  );
};

export default CocktailItem;
