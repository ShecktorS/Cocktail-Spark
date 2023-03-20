import "./index.scss";

const CocktailItem = () => {
  return (
    <div className="CocktailItem">
      <div className="CocktailItem__card">
        <img
          src={drink.strDrinkThumb}
          alt="drink.strDrink"
          className="CocktailItem__card__image"
        />
        <h2 className="CocktailItem__card__name">{drink.strDrink}</h2>
      </div>
    </div>
  );
};

export default CocktailItem;

const drink = {
  idDrink: "178352",
  strDrink: "Frosé",
  strCategory: "Cocktail",
  strInstructions:
    "Step 1\r\nPour rosé into a 13x9\" pan and freeze until almost solid (it won't completely solidify due to the alcohol), at least 6 hours.\r\n\r\nStep 2\r\nMeanwhile, bring sugar and ½ cup water to a boil in a medium saucepan; cook, stirring constantly, until sugar dissolves, about 3 minutes. Add strawberries, remove from heat, and let sit 30 minutes to infuse syrup with strawberry flavor. Strain through a fine-mesh sieve into a small bowl (do not press on solids); cover and chill until cold, about 30 minutes.\r\n\r\nStep 3\r\nScrape rosé into a blender. Add lemon juice, 3½ ounces strawberry syrup, and 1 cup crushed ice and purée until smooth. Transfer blender jar to freezer and freeze until frosé is thickened (aim for milkshake consistency), 25–35 minutes.\r\n\r\nStep 4\r\nBlend again until frosé is slushy. Divide among glasses.\r\n\r\nStep 5\r\nDo Ahead: Rosé can be frozen 1 week ahead.",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/b4cadp1619695347.jpg",
};
