import "./index.scss";
import "animate.css";
import { useState } from "react";

const CocktailItem = ({ cocktail }) => {
  const onHandleClick = () => {
    setCardFlip((prev) => !prev);
    console.log(cardIsFlipped);
  };

  const [cardIsFlipped, setCardFlip] = useState(false);

  return (
    <div className="CocktailItem" onClick={onHandleClick}>
      <div className="CocktailItem__card">
        <img
          src={cocktail.strDrinkThumb}
          alt="drink.strDrink"
          className="CocktailItem__card__image"
        />
        <h2 className="CocktailItem__card__name">{cocktail.strDrink}</h2>
      </div>

      <p
        className={`CocktailItem__info ${
          cardIsFlipped && "animate__animated animate__bounce show"
        }`}
      >
        {cocktail.strInstructions}
      </p>
    </div>
  );
};

export default CocktailItem;
