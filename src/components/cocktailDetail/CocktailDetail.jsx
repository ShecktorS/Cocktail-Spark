import "./index.scss";

const CocktailDetail = ({ setCardClick }) => {
  const onHandleClick = () => {
    setCardClick(() => false);
  };

  return (
    <div className="CocktailDetail">
      <div className="CocktailDetail__text">
        <h1 className="CocktailDetail__text--title">strDrink</h1>
        <h2 className="CocktailDetail__text--tags">strTags</h2>
        <p className="CocktailDetail__text--instructions">strInstructions</p>
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
