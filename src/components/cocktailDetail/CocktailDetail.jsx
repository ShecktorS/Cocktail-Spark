import "./index.scss";

const CocktailDetail = ({
  setCocktailDetailContext,
  cocktailDetailContext,
}) => {
  const onHandleClick = () => {
    setCocktailDetailContext((prev) => ({ ...prev, cardIsclicked: false }));
  };

  const { payload } = cocktailDetailContext;

  return (
    <div className="CocktailDetail">
      <div className="CocktailDetail__text">
        <h1 className="CocktailDetail__text--title">{payload.strDrink}</h1>
        <h2 className="CocktailDetail__text--tags">{payload.strTags}</h2>
        <p className="CocktailDetail__text--instructions">
          {payload.strInstructions.slice(0, 700)}
        </p>
      </div>
      <img
        src="https://www.thecocktaildb.com/images/media/drink/b4cadp1619695347.jpg"
        alt="strDrink"
        className="CocktailDetail__image"
      />
      <button className="CocktailDetail__button" onClick={onHandleClick}>
        X
      </button>
    </div>
  );
};

export default CocktailDetail;
